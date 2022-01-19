import { FlowNode } from "../cfg/flow";
import { Pass } from "./pass-manager";
const babel = require("@babel/core");
import * as types from '@babel/types';
import { Stack } from "../cfg/collections/stack";
import { DefUseNode } from "../cfg/util/defuse";
import { debug } from "console";
import { NodePath } from "@babel/core";
import IdGenerator from "../cfg/util/idGenerator";

interface CPResult {
    oriUseNode: DefUseNode,
    replaceUseNode: DefUseNode,
    data: FlowNode,
    oriDefs: Set<DefUseNode>
}

interface IdSeq {
    seqs: Record<number, number>,
    sorted: Record<number, FlowNode>,
    put(number): void,
    get(number): number,
    getNode(number): FlowNode,
    size(): number,
}

interface WSet {
    data: Set<number>,
    entry: FlowNode[],
    copy(): WSet,
}

function createIdSeq(): IdSeq {
    let seqGenerate = IdGenerator.create();
    return {
        seqs: {},
        sorted: {},
        put(node: FlowNode) {
            let seq = seqGenerate.generateId();
            this.seqs[node.id] = seq;
            this.sorted[seq] = node;
        },
        get(id) { return this.seqs[id] },
        getNode(seq) { return this.sorted[seq] },
        size() { return Object.keys(this.seqs).length }
    }
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
        var buildDefCost = 0;
        var buildReachDefCost = 0;
        var copyPropagCost = 0;
        var traverseReplaceCost = 0;
        var buildActivityCost = 0;
        const copyPropag = function (node: FlowNode, visted_node: Set<number>, defs: Record<number, Set<DefUseNode>>, defName2Id: Record<number, Set<number>>, idSeq: IdSeq): Record<number, CPResult> {
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

                if (edge.target && edge.target.uses) {
                    // if(edge.target.id === 6108){
                    //     debugger;
                    // }
                    let useDefChain: Record<string, DefUseNode[]> = {};
                    edge.target.uses.forEach((useNode) => {
                        if (!useNode.id) {
                            //TODO node替换时会丢失start
                            return;
                        }
                        let defReachs: DefUseNode[] = [];
                        let reachIds: number[] = [];
                        useDefChain[useNode.name] = [];

                        edge.target.inReach.forEach(id => {
                            let vDefs = defs[id];
                            vDefs.forEach(vdef => {
                                //414617
                                if (vdef.name === useNode.name) {
                                    defReachs.push(vdef);
                                    useDefChain[useNode.name].push(vdef);
                                    reachIds.push(id);
                                }
                            })
                        })
                        if (defReachs.length === 1 && defReachs[0].brother && !defReachs[0].ambiguity) {
                            //有且只有1个定值到达,且不是模糊定值
                            let brotherName = defReachs[0].brother.name;
                            let min = idSeq.get(reachIds[0]);
                            let max = idSeq.get(edge.target.id);
                            let hasBrotherDef = [...(defName2Id[brotherName] || [])].some(id => {
                                let seq = idSeq.get(id);
                                return seq > min && seq < max;
                            })
                            if (!hasBrotherDef) {
                                ret[useNode.id] = {
                                    oriUseNode: useNode, replaceUseNode: defReachs[0], data: edge.target, oriDefs: defs[useNode.id]
                                };
                            }
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
                ret = Object.assign(ret, copyPropag(edge.target, visted_node, defs, defName2Id, idSeq));
            }
            return ret;
        }

        const setEqual = function (s1: Set<any>, s2: Set<any>): boolean {
            return s1.size === s2.size && [...s1].every((ele, index, _) => s2.has(ele));
        }

        const buildReachDef = function (entry: FlowNode, gens: Record<number, Set<number>>, kills: Record<number, Set<number>>, defs: Record<number, Set<DefUseNode>>, wSet: WSet, idSeq: IdSeq): void {
            console.log(`in buildReachDef  wSet.size:${wSet.data.size}`)
            /*
            in[n] = out[s1] U out[s2] U out[s3] ...  //s是n的前驱节点
            out[n] = gen[n] U (in[n] - kill[n])
            深度递归容易堆栈溢出，使用迭代
            */
            const combine = function (node, gens: Record<number, Set<number>>, kills: Record<number, Set<number>>): Set<number>[] {
                let inReach = new Set<number>();
                let outReach = new Set<number>();

                for (let edge of node.incomingEdges) {
                    inReach = new Set([...inReach, ...edge.source.outReach]);
                }
                let cKills = kills[node.id] || new Set();
                outReach = new Set([...(gens[node.id] || []), ...([...inReach].filter((x: number) => !cKills.has(x)))]);
                return [inReach, outReach];
            }
            let total = idSeq.size();
            while (wSet.data.size > 0) {
                console.log(`in buildReachDef wSet.data.size:${wSet.data.size}`);
                for (let seq = idSeq.get(entry.id); seq <= total; seq++) {
                    let node = idSeq.getNode(seq);
                    if (!node) debugger;
                    let hasChanged = false;
                    if (wSet.data.has(node.id)) {
                        wSet.data.delete(node.id);
                        let [inReach, outReach] = combine(node, gens, kills);
                        node.inReach = inReach;
                        if (!setEqual(outReach, node.outReach)) {
                            hasChanged = true;
                            node.outReach = outReach;
                        }
                        for (let edge of node.outgoingEdges) {
                            if (hasChanged) {
                                wSet.data.add(edge.target.id);
                            }
                        }
                        if (hasChanged && node.inReach) {
                            node.inReach.forEach(id => {
                                node.inReachDefs[id] = defs[id];
                            })
                        }
                    }
                }
            }
        }

        const buildActivity = function (entry: FlowNode, wSet: WSet, idSeq: IdSeq): void {
            console.log('in buildActivity')
            const activityStep = function (node: FlowNode): Set<string>[] {
                /*
                in[n] = use[n] U (out[n] - defs[n]);
                out[n] = in[s1] U in[s2] U in[s3] ...;//s是n的后驱节点
                */
                let inActivity = new Set<string>();
                let outActivity = node.outActivity;//new Set<string>();

                let uses = [...node.uses].map((defUseNode: DefUseNode) => defUseNode.name);
                let defs = new Set([...node.defs].map((defUseNode: DefUseNode) => defUseNode.name));

                for (let edge of node.outgoingEdges) {
                    outActivity = new Set([...outActivity, ...edge.target.inActivity]);
                }
                inActivity = new Set([...uses, ...([...outActivity].filter(x => !defs.has(x)))]);

                return [inActivity, outActivity];
            };
            let total = idSeq.size();
            while (wSet.data.size > 0) {
                // console.log(`in buildActivity wSet.data.size:${wSet.data.size}`);
                if (wSet.data.size === 1) {
                    if (!([...wSet.data][0] in idSeq.seqs)) {
                        console.log([...wSet.data][0]);
                        debugger;
                    }
                }
                for (let seq = total; seq >= idSeq.get(entry.id); seq--) {
                    let node = idSeq.getNode(seq);
                    if (!node) debugger;

                    let hasChanged = false;
                    if (wSet.data.has(node.id)) {
                        wSet.data.delete(node.id);
                        let [inActivity, outActivity] = activityStep(node);
                        if (!setEqual(inActivity, node.inActivity)) {
                            hasChanged = true;
                            node.inActivity = inActivity;
                        }
                        if (!setEqual(outActivity, node.outActivity)) {
                            hasChanged = true;
                            node.outActivity = outActivity;
                        }
                        // }
                        if (node.id !== entry.id) {
                            for (let edge of node.incomingEdges) {
                                if (hasChanged) {
                                    if (edge.source.id === 493) {
                                        var a = 2;
                                    }
                                    wSet.data.add(edge.source.id);
                                }
                            }
                        }
                    }
                }
            }
        }

        const preProcess = function (node: FlowNode, visted_node: Set<number>, defName2Id: Record<string, Set<number>>, idSeq: IdSeq, wSet: WSet, nodes: Record<number, FlowNode>): [Record<number, Set<DefUseNode>>, Record<number, Set<number>>, Record<number, Set<number>>] {
            let defs = {};
            let gens: Record<number, Set<number>> = {};
            let kills: Record<number, Set<number>> = {};
            // let defName2Id: Record<string, Set<number>> = {};

            if (visted_node.has(node.id)) {
                //防止无限循环
                return [defs, gens, kills];
            } else {
                visted_node.add(node.id);
            }
            wSet.data.add(node.id);
            idSeq.put(node);
            defs[node.id] = node.defs;
            nodes[node.id] = node;
            node.defs.forEach((v: DefUseNode) => {
                if (!defName2Id[v.name]) {
                    defName2Id[v.name] = new Set();
                }
                defName2Id[v.name].add(node.id);
            });
            //== gens & kills ==
            gens[node.id] = new Set(node.defs.size > 0 ? [node.id] : []);
            let k = new Set<number>();
            node.defs.forEach((v: DefUseNode) => {
                //u=f 被 u=x杀死
                k = new Set([...k, ...defName2Id[v.name]]);
            })
            k.delete(node.id);
            kills[node.id] = k;
            //============
            for (let edge of node.outgoingEdges) {
                let [ndefs, ngens, nkills] = preProcess(edge.target, visted_node, defName2Id, idSeq, wSet, nodes);
                defs = Object.assign(defs, ndefs);
                // Object.entries(ndefName2Id).forEach(entry => {
                //     if (!defName2Id[entry[0]]) {
                //         defName2Id[entry[0]] = new Set();
                //     }
                //     defName2Id[entry[0]] = new Set<number>([...defName2Id[entry[0]], ...entry[1]]);
                // })

                gens = Object.assign(gens, ngens);
                kills = Object.assign(kills, nkills);
            }
            return [defs, gens, kills];
        }

        function buildGenkills(defs: Record<number, Set<DefUseNode>>, defName2Id: Record<string, Set<number>>): [Record<number, Set<number>>, Record<number, Set<number>>] {
            // let [defs, defName2Id] = buildDefs(node, new Set());
            let gens: Record<number, Set<number>> = {};
            let kills: Record<number, Set<number>> = {};
            let brother2Id: Record<string, Set<number>> = {};
            Object.entries(defs).forEach(entry => {
                let id = parseInt(entry[0]);
                entry[1].forEach((v: DefUseNode) => {
                    if (v.brother && v.brother.name) {
                        if (!brother2Id[v.brother.name]) brother2Id[v.brother.name] = new Set();
                        brother2Id[v.brother.name].add(id);
                    }
                })
            });
            Object.entries(defs).forEach(entry => {
                let id = parseInt(entry[0]);
                gens[id] = new Set(entry[1].size > 0 ? [id] : []);
                let k = new Set<number>();
                entry[1].forEach((v: DefUseNode) => {
                    //u=f 被 u=x或f=x杀死
                    k = new Set([...k, ...defName2Id[v.name], ...(brother2Id[v.name] || [])]);
                })
                k.delete(id);
                kills[id] = k;
            })
            return [gens, kills];
        }


        const processFunction = function (path: NodePath, defs: Record<number, Set<DefUseNode>>, defName2Id: Record<string, Set<number>>, idSeq: IdSeq) {
            if (path.node.extra && path.node.extra.cfg && !path.node.extra.minerva_cp) {
                let entry: FlowNode = path.node.extra.cfg['flowGraph']['entry'];
                // if ('id' in path.node && 'name' in path.node.id && path.node.id.name === '_mmfunc17') {
                //     debugger;
                // }
                let start = new Date().getTime();
                let wSet = {
                    data: new Set<number>(),
                    entry: [],
                    copy: function (): WSet { return { data: new Set([...this.data]), entry: [...this.entry], copy: this.copy } }
                };
                let nodes: Record<number, FlowNode> = {};
                let [ndefs, gens, kills] = preProcess(entry, new Set(), defName2Id, idSeq, wSet, nodes);
                path.node.extra.cfg['flowGraph']['nodes'] = nodes;
                defs = Object.assign(defs, ndefs);
                buildDefCost += (new Date().getTime() - start);

                //u: 12209   内部i:12147
                start = new Date().getTime();
                if ('id' in path.node && 'name' in path.node.id) {
                    console.log(`${path.node.id.name} begin buildReachDef ${path.node.id.name}`);
                }
                let cpWSet = wSet.copy();
                buildReachDef(entry, gens, kills, defs, cpWSet, idSeq);
                if ('id' in path.node && 'name' in path.node.id) {
                    console.log(`${path.node.id.name} buildReachDef end ${cpWSet.data.size}`);
                }
                buildReachDefCost += (new Date().getTime() - start);
                //复制传播优化,如有需要，可以多来几次
                // for (let i = 0; i < 1; i++) {
                start = new Date().getTime();
                let cps = copyPropag(entry, new Set(), defs, defName2Id, idSeq);
                copyPropagCost += (new Date().getTime() - start);
                if (Object.keys(cps).length > 0) {
                    // if (i == 1) debugger;
                    start = new Date().getTime();
                    path.traverse({
                        Identifier(ipath: NodePath) {
                            let cp = ipath.node.start ? cps[ipath.node.start] : null;
                            if (cp && cp.replaceUseNode.brother && types.isIdentifier(ipath.node)) {
                                delete cps[ipath.node.start];
                                //@ts-ignore
                                cp.data.uses = new Set([...cp.data.uses].filter(x => x.name != ipath.node.name));
                                let newIdentifier = types.identifier(cp.replaceUseNode.brother.name);
                                if (cp.data.defs) {
                                    cp.data.defs.forEach(x => {
                                        //var s=u;  u-->x
                                        //改变会传导
                                        //@ts-ignore
                                        if (x.brother && x.brother.name === ipath.node.name) {
                                            x.brother = newIdentifier;
                                        }
                                    });
                                }
                                console.log(`${ipath.parentPath.toString()} replace ${cp.oriUseNode.name} with ${cp.replaceUseNode.brother.name}`)
                                ipath.replaceWith(newIdentifier);
                                cp.data.uses.add(DefUseNode.create(newIdentifier, null, ipath.node.start));

                                let binding = ipath.scope.getBinding(cp.replaceUseNode.brother.name);
                                if (binding) {
                                    binding.referencePaths.push(ipath);
                                }
                                if (Object.keys(cps).length == 0) ipath.stop();
                                // ipath.stop(); 后面还有几轮所以不能停止
                            }
                        }
                    });
                    traverseReplaceCost += (new Date().getTime() - start);
                    if (Object.keys(cps).length > 0) { debugger; }
                }
                // else {
                //     break;
                // }
                // }

                start = new Date().getTime();
                let acWSet = wSet.copy();
                buildActivity(entry, acWSet, idSeq);
                buildActivityCost += (new Date().getTime() - start);
                path.node.extra.minerva_cp = 1;

                let exitNode = path.node.extra.cfg['flowGraph']['successExit'];
                if (exitNode && exitNode.outReach.size > 0) {
                    //函数末尾的outReach是内部函数起始的inReach
                    Object.keys(path.scope.bindings).forEach(key => {
                        let binding = path.scope.bindings[key];
                        if (types.isFunctionDeclaration(binding.path.node)) {
                            if (binding.path.node.extra && binding.path.node.extra.cfg) {
                                let childEntry: FlowNode = binding.path.node.extra.cfg['flowGraph']['entry'];
                                childEntry.appendEpsilonEdgeTo(exitNode);
                                // childEntry.inReach = new Set([...childEntry.inReach,...exitNode.outReach]);
                                processFunction(binding.path, defs, defName2Id, idSeq);
                            }
                        }
                    });
                }
            }
        }

        let start = new Date().getTime();
        babel.traverse(ast, {
            FunctionDeclaration(path) {
                processFunction(path, {}, {}, createIdSeq());
            }
        });
        let total = new Date().getTime() - start;
        console.log(`cp finish.. totalCost:${total}, buildDefCost:${buildDefCost},buildReachDefCost:${buildReachDefCost},copyPropagCost:${copyPropagCost},traverseReplaceCost:${traverseReplaceCost}, buildActivityCost:${buildActivityCost}`)
    }

}