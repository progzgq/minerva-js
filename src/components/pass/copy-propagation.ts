import { FlowNode } from "../cfg/flow";
import { Pass } from "./pass-manager";
const babel = require("@babel/core");
import * as types from '@babel/types';
import { Stack } from "../cfg/collections/stack";
import { DefUseNode } from "../cfg/util/defuse";
import { debug } from "console";

interface CPResult {
    oriUseNode: DefUseNode,
    replaceUseNode: DefUseNode,
    data: FlowNode,
    oriDefs: Set<DefUseNode>
}

export class CopyPropagation implements Pass {
    /*
    var s = $$func2301_e,
    t = u, n = 208, $$func2300(++n);
    l = s("0xc", "S0tV"),
    
    ===>
    l = $$func2301_e("0xc", "S0tV")
    */

    passAst(ast: any): void {
        const copyPropag = function (node: FlowNode, visted_node: Set<number>, defs: Record<number, Set<DefUseNode>>): Record<number, CPResult> {
            let ret: Record<number, CPResult> = {};
            if (!node.outgoingEdges || node.outgoingEdges.length == 0) {
                return ret;
            }
            for (let edge of node.outgoingEdges) {
                if (visted_node.has(edge.target.id)) {
                    //防止无限循环
                    return ret;
                }
                visted_node.add(edge.target.id);
                if(edge.target && edge.target.inReach){
                    edge.target.inReach.forEach(id=>{
                        edge.target.inReachDefs[id] = defs[id];
                    })
                }
                if (edge.target && edge.target.uses) {
                    // if(edge.target.id === 6108){
                    //     debugger;
                    // }
                    let useDefChain: Record<string, DefUseNode[]> = {};
                    edge.target.uses.forEach((useNode) => {
                        let defReachs: DefUseNode[] = [];
                        useDefChain[useNode.name] = [];

                        edge.target.inReach.forEach(id => {
                            let vDefs = defs[id];
                            vDefs.forEach(vdef => {
                                if (vdef.name === useNode.name) {
                                    defReachs.push(vdef);
                                    useDefChain[useNode.name].push(vdef);
                                }
                            })
                        })
                        if (defReachs.length === 1 && defReachs[0].brother) {
                            //有且只有1个定值到达
                            ret[useNode.id] = { oriUseNode: useNode, replaceUseNode: defReachs[0], data: edge.target, oriDefs: defs[useNode.id] };
                        }
                    });
                    if (edge.target.data) {
                        if (!edge.target.data.extra) {
                            edge.target.data.extra = {};
                        }
                        edge.target.data.extra.useDefChain = useDefChain;
                    }
                    edge.target.useDefChain = useDefChain;
                }
                ret = Object.assign(ret, copyPropag(edge.target, visted_node, defs));
            }
            return ret;
        }

        const setEqual = function (s1: Set<any>, s2: Set<any>): boolean {
            return s1.size === s2.size && [...s1].every((ele, index, _) => s2.has(ele));
        }

        const buildReachDef = function (node: FlowNode, visted_node: Set<number>, gens: Record<number, Set<number>>, kills: Record<number, Set<number>>): boolean {
            const combine = function (node, gens: Record<number, Set<number>>, kills: Record<number, Set<number>>): Set<number>[] {
                let inReach = new Set<number>();
                let outReach = new Set<number>();

                for (let edge of node.incomingEdges) {
                    inReach = new Set([...inReach, ...edge.source.outReach]);
                }
                outReach = new Set([...(gens[node.id] || []), ...([...inReach].filter((x: number) => !(kills[node.id] || new Set()).has(x)))]);
                return [inReach, outReach];
            }
            let hasChanged = false;
            if (visted_node.has(node.id)) {
                return hasChanged;
            } else {
                visted_node.add(node.id);
            }
            let [inReach, outReach] = combine(node, gens, kills);
            if (!setEqual(inReach, node.inReach)) {
                hasChanged = true;
                node.inReach = inReach;
            }
            if (!setEqual(outReach, node.outReach)) {
                hasChanged = true;
                node.outReach = outReach;
            }
            for (let edge of node.outgoingEdges) {
                hasChanged = hasChanged || buildReachDef(edge.target, visted_node, gens, kills);
            }
            return hasChanged;
        }

        const buildActivity = function (node: FlowNode, visted_node: Set<number>): boolean {
            const activityStep = function (node: FlowNode): Set<string>[] {
                /*
                in[n] = use[n] U (out[n] - defs[n]);
                out[n] = in[s1] U in[s2] U in[s3] ...;//s是n的后驱节点
                */
                let inActivity = new Set<string>();
                let outActivity = new Set<string>();

                let uses = [...node.uses].map((defUseNode: DefUseNode) => defUseNode.name);
                let defs = new Set([...node.defs].map((defUseNode: DefUseNode) => defUseNode.name));
                inActivity = new Set([...uses, ...([...node.outActivity].filter(x => !defs.has(x)))]);
                for (let edge of node.outgoingEdges) {
                    outActivity = new Set([...outActivity, ...edge.target.inActivity]);
                }
                return [inActivity, outActivity];
            };
            let hasChanged = false;
            if (visted_node.has(node.id)) {
                return hasChanged;
            } else {
                visted_node.add(node.id);
            }
            let [inActivity, outActivity] = activityStep(node);
            if (!setEqual(inActivity, node.inActivity)) {
                hasChanged = true;
                node.inActivity = inActivity;
            }
            if (!setEqual(outActivity, node.outActivity)) {
                hasChanged = true;
                node.outActivity = outActivity;
            }
            for (let edge of node.outgoingEdges) {
                hasChanged = hasChanged || buildActivity(edge.target, visted_node);
            }
            return hasChanged;
        }

        const buildDefs = function (node: FlowNode, visted_node: Set<number>): [Record<number, Set<DefUseNode>>, Record<string, Set<number>>] {
            let defs = {};
            let defName2Id: Record<string, Set<number>> = {};
            if (!node.outgoingEdges || node.outgoingEdges.length == 0) {
                return [defs, defName2Id];
            }
            // let gens = {};
            for (let edge of node.outgoingEdges) {
                // if(edge.target.id===5336||edge.target.id===5335){
                //     debugger;
                // }
                if (edge.target.data && edge.target.data.start === 854481) {
                    debugger;
                }
                if (visted_node.has(edge.target.id)) {
                    //防止无限循环
                    return [defs, defName2Id];
                } else {
                    visted_node.add(edge.target.id);
                }
                // if (types.isVariableDeclarator(edge.data) && types.isIdentifier(edge.data.id) && types.isIdentifier(edge.data.init)) {
                //     defs[edge.target.id] = new Set([edge.data.id.name]);
                // } else if (types.isAssignmentExpression(edge.data) && types.isIdentifier(edge.data.left) && types.isIdentifier(edge.data.right)) {
                //     defs[edge.target.id] = new Set([edge.data.left.name]);
                // }
                defs[edge.target.id] = edge.target.defs;
                edge.target.defs.forEach((v: DefUseNode) => {
                    if (!defName2Id[v.name]) {
                        defName2Id[v.name] = new Set();
                    }
                    defName2Id[v.name].add(edge.target.id);
                });

                // for (let edge of node.outgoingEdges) {
                let [ndefs, ndefName2Id] = buildDefs(edge.target, visted_node);
                defs = Object.assign(defs, ndefs);
                Object.entries(ndefName2Id).forEach(entry => {
                    if (!defName2Id[entry[0]]) {
                        defName2Id[entry[0]] = new Set();
                    }
                    defName2Id[entry[0]] = new Set<number>([...defName2Id[entry[0]], ...entry[1]]);
                })
                // }
            }
            return [defs, defName2Id];
        }

        function buildGenkills(defs: Record<number, Set<DefUseNode>>, defName2Id: Record<string, Set<number>>): [Record<number, Set<number>>, Record<number, Set<number>>] {
            // let [defs, defName2Id] = buildDefs(node, new Set());
            let gens: Record<number, Set<number>> = {};
            let kills: Record<number, Set<number>> = {};
            Object.entries(defs).forEach(entry => {
                gens[entry[0]] = new Set(entry[1].size > 0 ? [entry[0]] : []);
                let k = new Set();
                entry[1].forEach((v: DefUseNode) => {
                    k = new Set([...k, defName2Id[v.name]])
                })
                k.delete(entry[0]);
                kills[entry[0]] = k;
            })
            return [gens, kills];
        }

        babel.traverse(ast, {
            FunctionDeclaration(path) {
                if (path.node.id.name === '$$func2334') {
                    debugger
                }
                if (path.node.extra && path.node.extra.cfg) {
                    // let edges = path.node.extra.cfg.flowGraph.edges;
                    let entry: FlowNode = path.node.extra.cfg.flowGraph.entry;

                    let [defs, defName2Id] = buildDefs(entry, new Set());
                    let [gens, kills] = buildGenkills(defs, defName2Id);

                    while (buildReachDef(entry, new Set<number>(), gens, kills)) { } //到达定值分析

                    //复制传播优化,如有需要，可以多来几次
                    // for (let i = 0; i < 2; i++) {
                    let cps = copyPropag(entry, new Set(), defs);
                    // let cps = travesFlow(entry, {}, new Set());
                    if (Object.keys(cps).length > 0) {
                        path.traverse({
                            Identifier(ipath) {
                                let cp = cps[ipath.node.start];
                                if (cp && cp.replaceUseNode.brother) {
                                    // if (cp.replaceUseNode.brother.name === '$$func2338_e') {
                                    //     debugger;
                                    // }
                                    cp.data.uses = new Set([...cp.data.uses].filter(x => x.name != ipath.node.name));
                                    let newIdentifier = types.identifier(cp.replaceUseNode.brother.name);
                                    if (cp.data.defs) {
                                        cp.data.defs.forEach(x => {
                                            //var s=u;  u-->x
                                            //改变会传导
                                            if (x.brother && x.brother.name === ipath.node.name) {
                                                x.brother = newIdentifier;
                                            }
                                        });
                                    }
                                    ipath.replaceWith(newIdentifier);
                                    cp.data.uses.add(DefUseNode.create(newIdentifier, null, ipath.node.start));

                                    let binding = ipath.scope.getBinding(cp.replaceUseNode.brother.name);
                                    if (binding) {
                                        binding.referencePaths.push(ipath);
                                    }

                                    console.log(`${ipath.node.start} replace ${cp.oriUseNode.name} with ${cp.replaceUseNode.brother.name}`)
                                }
                            }
                        });
                    }
                    // else {
                    //     break;
                    // }
                    // }

                    while (buildActivity(entry, new Set<number>())) { } //活跃分析
                }

            }
        });

    }


}