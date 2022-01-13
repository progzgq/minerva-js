import { Pass } from "./pass-manager";
const babel = require("@babel/core");
const types = require("@babel/types");
const cfgBuilder = require('../cfg/cfg.ts');

export class CfgBuilder implements Pass {
    passAst(ast: any): void {
        cfgBuilder.parse(ast);
    }
}