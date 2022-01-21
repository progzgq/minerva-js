import { node2Statement } from "../cfg/flow";
import * as babel from "@babel/core";
import * as types from "@babel/types";
import * as generator from "@babel/generator";
import { NodePath } from "@babel/core";
import { CfgBuilder } from "../pass/cfg-builder";
import { CopyPropagation } from "../pass/copy-propagation";

const passes = [
    new CfgBuilder(false, true),
    new CopyPropagation({ removeDeadCode: true, round: 2 }),
]

export function exportFunction(jsCode: string, funcName: string): string {
    let resultCode = "";
    const ast = babel.parse(jsCode);
    passes.forEach(pass => pass.passAst(ast));
    babel.traverse(ast, {
        FunctionDeclaration(path) {
            if (path.node.id.name === funcName) {
                console.log(`exportFunction find pfunc path:${path}`);
                resultCode = generate(path);
                path.stop();
            }
        }
    })
    return resultCode;
}

function generate(funPath) {
    let cfg = funPath.node.extra['cfg']['flowGraph'];
    let funcName = funPath.node.id.name;
    let inActivity = cfg.entry.inActivity;
    inActivity = new Set([...inActivity].filter(x => x !== funcName));
    let statements = [funPath.node];

    if (inActivity && inActivity.size > 0) {
        console.log(`${funcName} 依赖:${[...inActivity]}`);
        funPath.findParent(x => {
            if (inActivity.size == 0) return true;
            let hasInActivity = false;
            inActivity.forEach(ix => {
                if (x.scope.hasOwnBinding(ix)) {
                    hasInActivity = true;
                    let xbind = x.scope.getBinding(ix);
                    if (xbind.referencePaths.every(r => r.isDescendant(funPath))) {
                        //某个变量所有引用都是调用函数内部时，直接加入这个变量
                        if (xbind.path.node.extra && xbind.path.node.extra.flowNode && xbind.path.node.extra.flowNode.uses.size === 0) {
                            statements.unshift(node2Statement(xbind.path.node.extra.flowNode));
                            inActivity.delete(ix);
                        }
                    }
                }
            });
            return hasInActivity;
        });
        if (inActivity.size > 0) {
            let flowNode = cfg.entry;
            traverseFlow(flowNode, inActivity, funPath, statements, funcName);
        }
    }
    // if (inActivity.size > 0) {
    //     console.log(`生成解密代码:${funcName}失败，依赖没解决`);
    //     return;
    // }

    let params = funPath.node.params.map(p => types.identifier(`_minerva_func_${p.name}`));//重命名，以防冲突
    // let params = funPath.node.params.map(p => p.name);
    statements.push(types.returnStatement(
        types.callExpression(
            types.identifier(funcName),
            params
        )));
    let wrapFunction = types.functionDeclaration(types.identifier(`_wrap_${funcName}`), params, types.blockStatement(statements));
    if (inActivity.size > 0) {
        [...inActivity].forEach(x => {
            types.addComment(wrapFunction, 'inner', `依赖没解决:${x}`);
        });
    }
    let code = generator.default(wrapFunction).code;
    return code;
}

function traverseFlow(flowNode, inActivity, path, statements, orifuncName) {
    for (;
        flowNode && inActivity.size > 0;
        flowNode = (flowNode.incomingEdges && flowNode.incomingEdges.length == 1 ? flowNode.incomingEdges[0].source : null)) {
        if (!flowNode.data) {
            continue;
        }
        var callExp = getCallExpression(flowNode.data);
        if (callExp && types.isIdentifier(callExp.callee)) {
            //TODO 可能是这种形式：document[O(119)](O(122))
            //调用其他方法，需要加入该方法依赖
            let otherFunBinding = path.scope.getBinding(callExp.callee.name);
            if (!otherFunBinding) {
                console.log(`生成解密代码:${orifuncName}失败，寻找依赖函数失败:${flowNode.data.callee.name}`);
                debugger;
                return;
            }
            let otherFunPath = otherFunBinding.path;
            let otherInActivity = otherFunBinding.path.node.extra.cfg.flowGraph.entry.inActivity;
            if ([...flowNode.uses].some(x => inActivity.has(x.name)) || [...otherInActivity].some(x => inActivity.has(x))) {
                statements.unshift(types.expressionStatement(flowNode.data));//插入调用
                statements.unshift(otherFunPath.node);//插入函数定义
                flowNode.uses.forEach(u => {
                    if (u.name === otherFunPath.node.id.name) {
                        return;
                    }
                    inActivity.add(u.name);//函数调用使用的变量也加入依赖
                    otherInActivity.forEach(x => x !== orifuncName ? inActivity.add(x.name) : null);
                })
            } else if (otherInActivity && otherInActivity.size > 0) {
                // inActivity = new Set([...inActivity, ...otherInActivity]);
                // uses = new Set([...uses,otherInActivity])
                otherInActivity.forEach(x => {
                    flowNode.inReach.forEach(id => {
                        let inReachDefs = flowNode.inReachDefs[id];
                        if (inReachDefs) {
                            inReachDefs.forEach(defUse => {
                                if (defUse.brother && defUse.name === x && inActivity.has(defUse.brother.name)) {
                                    //函数内部用到了相关变量，保险起见，认为这个函数是需要的 
                                    inActivity.add(defUse.name);
                                    statements.unshift(types.expressionStatement(flowNode.data));//插入调用
                                    statements.unshift(otherFunPath.node);//插入函数定义
                                    flowNode.uses.forEach(u => {
                                        if (u.name === otherFunPath.node.id.name || u.name === orifuncName) {
                                            return;
                                        }
                                        inActivity.add(u.name);//函数调用使用的变量也加入依赖
                                    })
                                }
                            });
                        }
                    });
                })
            }
        } else {
            let finded = false;
            flowNode.defs.forEach(x => {
                if (inActivity.has(x.name)) {
                    //找到一个变量def
                    inActivity.delete(x.name);
                    statements.unshift(node2Statement(flowNode));
                    finded = true;
                }
            });
            if (finded) {
                flowNode.uses.forEach(x => inActivity.add(x.name));
            }
        }
    }
}

function getCallExpression(node: types.Node): types.CallExpression {
    switch (node.type) {
        case "CallExpression": return node;
        case "UnaryExpression": {
            return types.isCallExpression(node.argument) ? node.argument : null;
        }
        default: return null;
    }
}