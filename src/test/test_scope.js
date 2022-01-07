const babel = require("@babel/core");
const types = require("@babel/types");
const generator = require("@babel/generator");
import { FlowNode, node2Statement } from '../components/cfg/flow';
import { CopyPropagation } from '../components/pass/copy-propagation'
const vm = require('vm');
const fs = require('fs')
const code = fs.readFileSync(`${__dirname}/pdd.js`).toString();
const cfgBuilder = require('../components/cfg/cfg.ts');
const ast = babel.parse(code);
cfgBuilder.parse(ast);
new CopyPropagation().passAst(ast);
console.log(generator.default(ast).code)
const funRef = {};
// var funPaths = [];
babel.traverse(ast, {
    // Identifier(path){
    //     console.log('当前路径源码:\n', path.toString());
    //     the_path = path.getStatementParent()
    //     console.log('最终路径源码:\n', the_path.toString())
    //     console.log('------------------------------------')
    // },
    // FunctionDeclaration(path) {
    //     // console.log(path.scope.dump());
    //     // let ownBinding = path.scope.getOwnBinding(path.node.id.name);
    //     // if (ownBinding && ownBinding.referencePaths) {
    //     //     for (let refPath of ownBinding.referencePaths) {
    //     //         funRef[refPath.node.start] = path;
    //     //     }
    //     // }
    //     funRef[path.node.id.name] = path;
    // },
    // FunctionExpression(path){
    //     console.log(path.toString());
    //     console.log(path.scope.dump());
    // },
    FunctionDeclaration(path) {
        if (path.node.id.name === '$$func2338_e') {
            debugger;
        }
        // console.log(path)
        // console.log(path.scope);
        // console.log(path.scope.dump());
    },
    // ReturnStatement(path){
    //     var n = path.node.argument.name
    //     console.log("\n这里是", path.toString())
    //     // console.log('被绑定量：', path.scope.getBinding(n))
    //     // console.log('被绑定量：', path.scope.getOwnBinding(n))
    //     // console.log('被绑定量：', path.scope.getBindingIdentifier(n))
    //     console.log('作用域有 被绑定变量 g:', path.scope.hasBinding('n'))
    // },
    CallExpression(path) {
        let funcName = path.node.callee.name;
        if (funcName && funcName.includes('func2300')) {
            debugger;
        }
    },
    AssignmentExpression(path) {
        let funcName = path.node.right.name;
        if (funcName && funcName.includes('func2297')) {
            debugger;
        }
    },
    MemberExpression(path) {
        let property = path.node.property;
        if (property.type === 'CallExpression') {
            let args = [];
            for (let arg of property.arguments) {
                if (!types.isLiteral(arg) || !arg.value) {
                    return;//暂时只处理参数为常量的情况
                }
                args.push(arg.value);
            }
            let funcName = property.callee.type === 'Identifier' ? property.callee.name : null;
            if (!funcName) {
                console.log(`find funcName fail, callee.type:${property.callee.type}`);
                return;
            }
            if (funcName === 'O') {
                //$$func2131_e
                //$$func2338_e
                debugger
            }
            let funBinding = path.scope.getBinding(funcName);
            if (!funBinding) {
                console.log(`find func node fail, funcName:${funcName}`);
            }
            console.log(`find funcName: ${funcName}`);
            let funPath = funBinding.path;
            if (!funPath.node.extra.cfg) {
                console.log(`error funcName: ${funcName}, no cfg`);
                return;
            }
            let cfg = funPath.node.extra.cfg.flowGraph;
            let inActivity = cfg.entry.inActivity;
            inActivity = new Set([...inActivity].filter(x => x !== funcName));
            //往前回溯直到inActivity为空
            let statements = [funPath.node];
            if (funBinding.referencePaths) {
                console.log(`开始生成解密代码:${funcName}`);
                if (inActivity && inActivity.size > 0) {
                    //函数有依赖，往前回溯，直到找到依赖def
                    console.log(`${funcName} 依赖:${[...inActivity]}`);
                    let currentPath = path.find(x => x.node && x.node.extra && x.node.extra.flowNode);;
                    for (let deep = 0; currentPath && deep < 3; deep++) {
                        // let flowNode = parentPath.node.extra.flowNode;
                        let flowNode = currentPath.node.extra.flowNode
                        traverseFlow(flowNode, inActivity, currentPath, statements, funcName);
                        if (inActivity.size == 0) break;
                        //当前block没处理完，扩大搜寻范围
                        flowNode = null;
                        let currentFunPath = currentPath.findParent(x => x.node.type === 'FunctionDeclaration');
                        let currentFuncName = currentFunPath.node.id.name;
                        let parentFunPath = currentFunPath.findParent(x => x.node.type === 'FunctionDeclaration' && x.scope.hasBinding(currentFuncName));

                        for (let crPath of parentFunPath.scope.getBinding(currentFuncName).referencePaths) {
                            if (crPath.parent.type == 'CallExpression') {
                                //找到第一个调用处
                                //TODO 后面调用时是否已改变依赖?
                                currentPath = crPath.find(x => x.node && x.node.extra && x.node.extra.flowNode);
                                break;
                            }
                        }
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
                console.log(`生成解密代码成功,${funcName}`);
                for (let old_path of funBinding.referencePaths) {
                    if (old_path.parent.type == 'CallExpression') {
                        // let value = execute(generator.default(types.program(statements)).code);
                        let exeParams = [];
                        for (let a of old_path.parent.arguments) {
                            if (!types.isLiteral(a)) {
                                console.log(`替换 ${old_path.parentPath.toString()}失败,参数不是Literal,跳过...`);
                                continue;
                            }
                            exeParams.push(a.value);
                        }
                        try { 
                            let value = func(...exeParams); 
                            if (value) {
                                old_path.parentPath.replaceWith(types.stringLiteral(value));
                            }
                        }catch(err){
                            debugger;
                            console.trace(`执行${funcName}失败，参数:${[...exeParams]}`);
                        }
                    }
                }
            }

        }
    }
});

function traverseFlow(flowNode, inActivity, path, statements, orifuncName) {
    for (;
        flowNode && inActivity.size > 0;
        flowNode = (flowNode.incomingEdges && flowNode.incomingEdges.length == 1 ? flowNode.incomingEdges[0].source : null)) {
        if (!flowNode.data) {
            continue;
        }
        let need = false;
        if (types.isCallExpression(flowNode.data) && types.isIdentifier(flowNode.data.callee)) {
            //TODO 可能是这种形式：document[O(119)](O(122))
            //调用其他方法，需要加入该方法依赖
            let otherFunBinding = path.scope.getBinding(flowNode.data.callee.name);
            if (!otherFunBinding) {
                console.log(`生成解密代码:${orifuncName}失败，寻找依赖函数失败:${flowNode.data.callee.name}`);
                debugger;
            }
            let otherFunPath = otherFunBinding.path;
            let otherInActivity = otherFunBinding.path.node.extra.cfg.flowGraph.entry.inActivity;
            if (otherInActivity && otherInActivity.size > 0) {
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
                                        if (u.name === otherFunPath.node.id.name) {
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
            flowNode.defs.forEach(x => {
                if (inActivity.has(x.name)) {
                    //找到一个变量def
                    inActivity.delete(x.name);
                    statements.unshift(node2Statement(flowNode));
                }
            });
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

function execute(code) {
    const context = {}
    vm.createContext(context);
    vm.runInContext(code, context);
    console.log(`result:${JSON.stringify(context)}`);
    return context._result;
}