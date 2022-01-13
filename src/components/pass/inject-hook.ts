import { Pass } from "./pass-manager";

import * as babel from "@babel/core";
import * as types from "@babel/types";
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
    const funcObj = types.memberExpression(types.identifier('arguments'), types.identifier('callee'));
    let hookFunctionArguments = [types.stringLiteral(funcName), funcObj, types.identifier('arguments')];
    if (node.params?.length > 0) {
        hookFunctionArguments.concat(node.params);
    }
    const hookFunctionBefore = types.variableDeclaration("var", [
        types.variableDeclarator(types.identifier('minerva_scope_id'),
            types.callExpression(types.identifier(hookFunctionBeforeName), hookFunctionArguments))
    ]);//;
    node.body.body.unshift(hookFunctionBefore);
    let lastStateMent = node.body.body.pop();
    let properties = [];
    if (lastStateMent.type === 'ReturnStatement') {
        let ret_val_name = "_minerva_ret";
        let minerva_exp = types.variableDeclaration("var", [types.variableDeclarator(
            types.identifier(ret_val_name),
            lastStateMent.argument
        )])
        node.body.body.push(minerva_exp);
        lastStateMent = types.returnStatement(types.identifier(ret_val_name));
        properties.push(types.objectProperty(types.identifier(ret_val_name), types.identifier(ret_val_name)));
    } else {
        node.body.body.push(lastStateMent);
        lastStateMent = null;
    }
    // for (let exp of node.body.body) {
    //     let leftName = null;
    //     if (exp.type === 'VariableDeclaration') {
    //         for (let vd of exp.declarations) {
    //             leftName = vd.id.name;
    //             if (leftName) {
    //                 properties.push(types.objectProperty(types.identifier(leftName), types.identifier(leftName)));
    //             }
    //         }
    //     }
    //     else if (exp.expression && exp.expression.type === 'AssignmentExpression') {
    //         leftName = exp.expression.left.name;
    //         if (leftName) {
    //             properties.push(types.objectProperty(types.identifier(leftName), types.identifier(leftName)));
    //         }
    //     }
    // }
    Object.keys(path.scope.bindings).forEach(key => {
        properties.push(types.objectProperty(types.identifier(key), types.identifier(key)));
    })
    let vals = types.objectExpression(properties);
    let hookFunctionAfterArguments = [types.stringLiteral(funcName), funcObj, vals, types.identifier('minerva_scope_id')];
    const hookFunctionAfter = types.callExpression(types.identifier(hookFunctionAfterName), hookFunctionAfterArguments);
    node.body.body.push(types.expressionStatement(hookFunctionAfter));
    if (lastStateMent) {
        node.body.body.push(lastStateMent);
    }
}

module.exports.injectHook = injectHook;
