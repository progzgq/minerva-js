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
    seqs: Map<number, number>,
    sorted: Map<number, FlowNode>,
    put(number): void,
    has(FlowNode): boolean,
    getSeq(number): number,
    getNode(number): FlowNode,
    size(): number,
}

interface WSet {
    data: Set<number>,
    entry: FlowNode[],
    copy(): WSet,
}

interface Options {
    removeDeadCode: boolean,
    round: number,//优化轮数
}
var DEFAULT_OPTIONS: Options = { removeDeadCode: false, round: 1 }

function createIdSeq(): IdSeq {
    let seqGenerate = IdGenerator.create();
    return {
        seqs: new Map(),
        sorted: new Map(),
        put(node: FlowNode) {
            let seq = seqGenerate.generateId();
            this.seqs.set(node.id, seq);
            this.sorted.set(seq, node);
        },
        has(node: FlowNode) {
            return this.seqs.has(node.id);
        },
        getSeq(id) { return this.seqs.get(id) },
        getNode(seq) { return this.sorted.get(seq) },
        size() { return this.seqs.size }
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
    constructor(public options?: Options) {
        if (!options) {
            this.options = DEFAULT_OPTIONS;
        }
    }

    passAst(ast: any): void {
        var buildDefCost = 0;
        var buildReachDefCost = 0;
        var copyPropagCost = 0;
        var traverseReplaceCost = 0;
        var buildActivityCost = 0;
        const copyPropag = function (node: FlowNode, visted_node: Set<number>, defs: Record<number, Set<DefUseNode>>, defName2Id: Record<number, Set<number>>, idSeq: IdSeq, deadNode: Record<number, FlowNode>): Record<number, CPResult> {
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
                            if(brotherName==='arguments') return;
                            let min = idSeq.getSeq(reachIds[0]);
                            let max = idSeq.getSeq(edge.target.id);
                            let hasBrotherDef = [...(defName2Id[brotherName] || [])].some(id => {
                                let seq = idSeq.getSeq(id);
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
                        if (edge.target.defs.size === 1) {
                            let d = [...edge.target.defs][0];
                            if (d.brother && !edge.target.outActivity.has(d.name)) {
                                //var a=b;
                                deadNode[edge.target.data.start] = edge.target;
                            }
                        }
                    }
                    edge.target.useDefChain = useDefChain;
                }
                ret = Object.assign(ret, copyPropag(edge.target, visted_node, defs, defName2Id, idSeq, deadNode));
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
                if (wSet.data.size === 1) {
                    var a = 1;
                }
                for (let seq = idSeq.getSeq(entry.id); seq <= total; seq++) {
                    let node = idSeq.getNode(seq);
                    if (!node) debugger;
                    let hasChanged = false;
                    if (wSet.data.has(node.id)) {
                        wSet.data.delete(node.id);
                        if (!node.dead) {
                            let [inReach, outReach] = combine(node, gens, kills);
                            node.inReach = inReach;
                            if (!setEqual(outReach, node.outReach)) {
                                hasChanged = true;
                                node.outReach = outReach;
                            }
                        } else {
                            //访问到了死亡节点，说明前驱改变了
                            let inReach = new Set<number>();
                            for (let edge of node.incomingEdges) {
                                inReach = new Set([...inReach, ...edge.source.outReach]);
                            }
                            node.inReach = node.outReach = inReach;
                            hasChanged = true;
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
                let outActivity = new Set<string>();

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
                    if (!idSeq.seqs.has([...wSet.data][0])) {
                        console.log([...wSet.data][0]);
                        debugger;
                    }
                }
                for (let seq = total; seq >= idSeq.getSeq(entry.id); seq--) {
                    let node = idSeq.getNode(seq);
                    if (!node) debugger;

                    let hasChanged = false;
                    if (wSet.data.has(node.id)) {
                        wSet.data.delete(node.id);
                        let [inActivity, outActivity] = activityStep(node);
                        if (!node.dead) {
                            if (!setEqual(inActivity, node.inActivity)) {
                                hasChanged = true;
                                node.inActivity = inActivity;
                            }
                            if (!setEqual(outActivity, node.outActivity)) {
                                hasChanged = true;
                                node.outActivity = outActivity;
                            }
                        } else {
                            let outActivity = new Set<string>();
                            for (let edge of node.outgoingEdges) {
                                outActivity = new Set([...outActivity, ...edge.target.inActivity]);
                            }
                            node.inActivity = node.outActivity = outActivity;
                            hasChanged = true;
                        }

                        // }
                        if (node.id !== entry.id) {
                            for (let edge of node.incomingEdges) {
                                if (hasChanged) {
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
            nodes[node.id] = node;
            if (!node.dead) {
                if (!idSeq.has(node)) { idSeq.put(node); }
                defs[node.id] = node.defs;
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
            }

            for (let edge of node.outgoingEdges) {
                let [ndefs, ngens, nkills] = preProcess(edge.target, visted_node, defName2Id, idSeq, wSet, nodes);
                defs = Object.assign(defs, ndefs);

                gens = Object.assign(gens, ngens);
                kills = Object.assign(kills, nkills);
            }
            return [defs, gens, kills];
        }

        const processFunction = function (path: NodePath, pdefs: Record<number, Set<DefUseNode>>, defName2Id: Record<string, Set<number>>, idSeq: IdSeq, options: Options) {
            if (path.node.extra && path.node.extra.cfg && !path.node.extra.minerva_cp) {
                for (let i = 0; i < options.round; i++) {
                    let entry: FlowNode = path.node.extra.cfg['flowGraph']['entry'];
                    // if ('id' in path.node && 'name' in path.node.id && path.node.id.name === '_mmfunc288') {
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
                    let defs = Object.assign(pdefs, ndefs);
                    buildDefCost += (new Date().getTime() - start);

                    start = new Date().getTime();
                    if ('id' in path.node && 'name' in path.node.id) {
                        console.log(`${path.node.id.name} begin buildReachDef ${path.node.id.name} round:${i}`);
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
                    let deadNodes: Record<number, FlowNode> = {};
                    let cps = copyPropag(entry, new Set(), defs, defName2Id, idSeq, deadNodes);
                    copyPropagCost += (new Date().getTime() - start);
                    let flowChanged = false;
                    if (Object.keys(cps).length > 0) {
                        // if (i == 1) debugger;
                        start = new Date().getTime();
                        path.traverse({
                            Identifier(ipath: NodePath) {
                                let cp = ipath.node.start ? cps[ipath.node.start] : null;
                                if (cp && cp.replaceUseNode.brother && types.isIdentifier(ipath.node)) {
                                    flowChanged = true;
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
                    if (options.removeDeadCode && Object.keys(deadNodes).length > 0) {
                        path.traverse({
                            VariableDeclarator(vpath) {
                                let dn = vpath.node.start ? deadNodes[vpath.node.start] : null;
                                if (dn) {
                                    flowChanged = true;
                                    dn.dead = true;
                                    defName2Id[[...dn.defs][0].name].delete(dn.id);
                                    delete deadNodes[vpath.node.start];
                                    let parent = vpath.findParent(x => types.isVariableDeclaration(x));
                                    if (types.isVariableDeclaration(parent.node) && parent.node.declarations.length === 1) {
                                        parent.remove();
                                    } else {
                                        vpath.remove();
                                    }
                                    if (Object.keys(deadNodes).length == 0) vpath.stop();
                                }
                            }
                        });
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
                                    if (binding.path.node.extra.minerva_cp !== 1) {
                                        childEntry.appendEpsilonEdgeTo(exitNode);
                                    }
                                    // childEntry.inReach = new Set([...childEntry.inReach,...exitNode.outReach]);
                                    processFunction(binding.path, defs, defName2Id, idSeq, options);
                                }
                            }
                        });
                    }
                    if (!flowChanged) {
                        break;
                    }
                }
            }
        }

        let start = new Date().getTime();
        let options = this.options;
        babel.traverse(ast, {
            FunctionDeclaration(path) {
                processFunction(path, {}, {}, createIdSeq(), options);
            }
        });
        let total = new Date().getTime() - start;
        console.log(`cp finish.. totalCost:${total}, buildDefCost:${buildDefCost},buildReachDefCost:${buildReachDefCost},copyPropagCost:${copyPropagCost},traverseReplaceCost:${traverseReplaceCost}, buildActivityCost:${buildActivityCost}`)
    }

}