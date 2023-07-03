import { node2Statement } from "../cfg/flow";
import { Pass } from "./pass-manager";
const babel = require("@babel/core");
import * as types from "@babel/types";
const generator = require("@babel/generator");
const vm = require('vm');

export class DecryptString implements Pass {
    /*
    */
    passAst(ast: any): void {
        babel.traverse(ast, {
            MemberExpression(path) {
                let property = path.node.property;
                if (property.type === 'CallExpression') {
                    let args = [];
                    for (let arg of property.arguments) {
                        if (!types.isLiteral(arg)) {
                            return;//暂时只处理参数为常量的情况
                        }
                        args.push(getLiteralValue(arg));
                    }
                    let funcName = property.callee.type === 'Identifier' ? property.callee.name : null;
                    if (!funcName) {
                        console.log(`find funcName fail, callee.type:${property.callee.type}`);
                        return;
                    }
                    if (funcName === '_mmfunc2452_e') {
                        //_mmfunc2452_e
                        //_mmfunc1871_ne
                        //待解决： O
                        //fordeal:  $$func80
                        debugger
                    }
                    let funBinding = path.scope.getBinding(funcName);
                    if (!funBinding) {
                        console.log(`find func node fail, funcName:${funcName}`);
                    }
                    console.log(`find funcName: ${funcName}`);
                    let funPath = funBinding.path;
                    // if(!funPath.node.extra){
                    //     debugger
                    // }
                    if (!funPath.node.extra || !funPath.node.extra.cfg) {
                        console.log(`error funcName: ${funcName}, no cfg`);
                        return;
                    }
                    // if (funcName === '_mmfunc63') {
                    //     //$$func2131_e
                    //     //_mmfunc2300_e
                    //     //q
                    //     //$$func2338_e
                    //     //待解决： O
                    //     //fordeal:  $$func80
                    //     debugger
                    // }
                    let cfg = funPath.node.extra.cfg.flowGraph;
                    let inActivity = cfg.entry.inActivity;
                    inActivity = new Set([...inActivity].filter(x => x !== funcName));
                    let statements = [funPath.node];
                    if (funBinding.referencePaths) {
                        console.log(`开始生成解密代码:${funcName}`);
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
                                //函数还有依赖，往前回溯，直到找到依赖def
                                let parentFunPath = path.findParent(x => {
                                    return x.node.type === 'FunctionDeclaration' && (x.scope.hasOwnBinding(funcName)) && ([...inActivity].some(ix => x.scope.hasOwnBinding(ix)))
                                });
                                if (!parentFunPath) {
                                    console.log(`生成解密代码:${funcName}失败,寻找合适父节点失败`);
                                    return;
                                }
                                let currentPath = null;
                                for (let crPath of parentFunPath.scope.getBinding(funcName).referencePaths) {
                                    if (crPath.parent.type == 'CallExpression' && crPath.isDescendant(parentFunPath) 
                                        && crPath.scope.hasOwnBinding(funcName) 
                                        && ([...inActivity].some(ix => crPath.scope.hasOwnBinding(ix)))) {
                                        //找到第一个调用处
                                        //TODO 后面调用时是否已改变依赖?
                                        currentPath = crPath.find(x => x.node && x.node.extra && x.node.extra.flowNode);
                                        break;
                                    }
                                }
                                // let currentPath = path.find(x => x.node && x.node.extra && x.node.extra.flowNode);
                                if (!currentPath) {
                                    console.log(`生成解密代码:${funcName}失败,寻找调用节点失败`);
                                    return;
                                }
                                let flowNode = currentPath.node.extra.flowNode
                                traverseFlow(flowNode, inActivity, currentPath, statements, funcName);
                                // if (inActivity.size == 0) break;
                                //// 当前block没处理完，扩大搜寻范围
                                // flowNode = null;
                                // let currentFunPath = currentPath.findParent(x => x.node.type === 'FunctionDeclaration');
                                // let currentFuncName = currentFunPath.node.id.name;
                                // let parentFunPath = currentFunPath.findParent(x => {
                                //     return x.node.type === 'FunctionDeclaration' && (x.scope.hasOwnBinding(funcName)) && ([...inActivity].some(ix => x.scope.hasOwnBinding(ix)))
                                // }
                                // );//寻找有依赖变量的父节点
                                // if (!parentFunPath) {
                                //     console.log(`生成解密代码:${funcName}失败,寻找合适父节点失败`);
                                //     return;
                                // }
                                // for (let crPath of parentFunPath.scope.getBinding(funcName).referencePaths) {
                                //     if (crPath.parent.type == 'CallExpression') {
                                //         //找到第一个调用处
                                //         //TODO 后面调用时是否已改变依赖?
                                //         currentPath = crPath.find(x => x.node && x.node.extra && x.node.extra.flowNode);
                                //         break;
                                //     }
                                // }
                                // }
                            }
                        }
                        if (inActivity.size > 0) {
                            console.log(`生成解密代码:${funcName}失败,${path.toString()}，依赖没解决`);
                            return;
                        }

                        let params = funPath.node.params.map(p => types.identifier(`_minerva_func_${p.name}`));//重命名，以防冲突
                        // let params = funPath.node.params.map(p => p.name);
                        statements.push(types.returnStatement(
                            types.callExpression(
                                types.identifier(funcName),
                                params
                            )));
                        // let funDeclaration = types.functionDeclaration(types.identifier(`_minerva_${funcName}`), params, types.blockStatement(statements));
                        let func = getCompiledFunction(statements, params.map(p => p.name));
                        console.log(`生成解密代码成功,${funcName}\n${func.toString()}`);
                        for (let old_path of funBinding.referencePaths) {
                            if (old_path.parent.type == 'CallExpression') {
                                let exeParams = [];
                                for (let a of old_path.parent.arguments) {
                                    if (!types.isLiteral(a)) {
                                        console.log(`替换 ${old_path.parentPath.toString()}失败,参数不是Literal,跳过...`);
                                        continue;
                                    }
                                    exeParams.push(getLiteralValue(a));
                                }
                                try {
                                    let value = func(...exeParams);
                                    if (value) {
                                        console.log(`执行替换 ${funcName}(${[...exeParams]}) ==> ${value}`);
                                        old_path.parentPath.replaceWith(types.stringLiteral(value));
                                        //TODO 删除referencePaths 重构uses
                                    }
                                } catch (err) {
                                    debugger;
                                    console.trace(`执行${funcName}失败，参数:${[...exeParams]}`);
                                }
                            }
                        }
                    }

                }
            }
        });
    }

}

function traverseFlow(flowNode, inActivity, path, statements, orifuncName) {
    for (;
        flowNode && inActivity.size > 0;
        flowNode = (flowNode.incomingEdges && flowNode.incomingEdges.length == 1 ? flowNode.incomingEdges[0].source : null)) {
        if (!flowNode.data) {
            continue;
        }
        let need = false;
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
                    otherInActivity.forEach(x => x !== orifuncName ? inActivity.add(x) : null);
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
                                    need = true;
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
        // if (flowNode.incomingEdges && flowNode.incomingEdges.length == 1) {
        //     //暂时只处理单前驱情况
        //     flowNode = flowNode.incomingEdges[0].source;
        // } else {
        //     console.log(`生成解密代码:${funcName}失败，前驱情况不满足`);
        //     return;
        // }
    }
}

function getCompiledFunction(statements, params) {
    let code = generator.default(types.blockStatement(statements)).code;
    return vm.compileFunction(code, params);
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

function getLiteralValue(node: types.Literal) {
    let value = null;
    if (types.isRegExpLiteral(node)) {
        value = node.pattern;
    } else if (types.isTemplateLiteral(node)) {
        value = null;
    } else {
        value = types.isNullLiteral(node) ? null : node.value;
    }
    return value;
}