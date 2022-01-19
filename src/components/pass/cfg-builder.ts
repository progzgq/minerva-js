import { Pass } from "./pass-manager";
const babel = require("@babel/core");
const types = require("@babel/types");
import * as cfgBuilder from '../cfg/cfg';

export class CfgBuilder implements Pass {
    constructor(public rewriteFunction: boolean = true, public removeMinervaHook: boolean = false) {
        /*
        rewriteFunction: FunctionExpression变更为FunctionDeclaration，同时更改所有函数名为唯一
        (目前cfg的构建会忽略FunctionExpression内部，所以首次执行最好为true)
        */
    }
    passAst(ast: any): void {
        cfgBuilder.parse(ast, { rewriteFunction: this.rewriteFunction,removeMinervaHook:this.removeMinervaHook });
    }
}