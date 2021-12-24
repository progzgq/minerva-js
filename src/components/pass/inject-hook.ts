import { Pass } from "./pass-manager";

const babel = require("@babel/core");
const types = require("@babel/types");
const generator = require("@babel/generator");

const hookFunctionBeforeName = "minerva_hook.beforeFunction";
const hookFunctionAfterName = "minerva_hook.afterFunction";

export class Inject implements Pass {
    passAst(ast: any): void {
        injectHook(ast);
    }
}

function injectHook(ast) {
    babel.traverse(ast, {
        FunctionExpression(path) {
            injectFunction(path);
        },
        // 函数的形参
        FunctionDeclaration(path) {
            injectFunction(path);
        }
    })
}

function injectFunction(path) {
    const node = path.node;
    if (!types.isBlockStatement(node.body)) {
        return;
    }
    const funcName = node.id ? node.id.name : "null";
    let hookFunctionArguments = [types.stringLiteral(funcName), types.thisExpression(), types.identifier('arguments')];
    if (node.params?.length > 0) {
        hookFunctionArguments.concat(node.params);
    }
    const hookFunctionBefore = types.callExpression(types.identifier(hookFunctionBeforeName), hookFunctionArguments);
    node.body.body.unshift(types.expressionStatement(hookFunctionBefore));
    let lastStateMent = node.body.body.pop();

    if (lastStateMent.type === 'ReturnStatement') {
        let ret_val_name = "_minerva_ret";
        let minerva_exp = types.assignmentExpression("=",
            types.identifier(ret_val_name),
            lastStateMent.argument
        )
        node.body.body.push(types.expressionStatement(minerva_exp));
        lastStateMent = types.returnStatement(types.identifier(ret_val_name));
    } else {
        node.body.body.push(lastStateMent);
        lastStateMent = null;
    }
    let properties = [];
    for (let exp of node.body.body) {
        let leftName = null;
        if (exp.type === 'VariableDeclaration') {
            for (let vd of exp.declarations) {
                leftName = vd.id.name;
                if (leftName) {
                    properties.push(types.objectProperty(types.identifier(leftName), types.identifier(leftName)));
                }
            }
        }
        else if (exp.expression && exp.expression.type === 'AssignmentExpression') {
            leftName = exp.expression.left.name;
            if (leftName) {
                properties.push(types.objectProperty(types.identifier(leftName), types.identifier(leftName)));
            }
        }
    }
    let vals = types.objectExpression(properties);
    let hookFunctionAfterArguments = [types.stringLiteral(funcName), types.thisExpression(), vals];
    const hookFunctionAfter = types.callExpression(types.identifier(hookFunctionAfterName), hookFunctionAfterArguments);
    node.body.body.push(types.expressionStatement(hookFunctionAfter));
    if (lastStateMent) {
        node.body.body.push(lastStateMent);
    }
}

module.exports.injectHook = injectHook;
