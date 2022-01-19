

import babel = require("@babel/core");
import types = require("@babel/types");
import generator = require("@babel/generator");
import { Inject } from "./inject-hook";
import { DecryptString } from "./decrypt-string";
import { CfgBuilder } from "./cfg-builder";
import { CopyPropagation } from "./copy-propagation";

export interface Pass {
    passAst(ast): void
}

export interface PassResult {
    ast: babel.ParseResult,
    toCode(): string
}

const passes = [
    new CfgBuilder(),
    new CopyPropagation(),
    new DecryptString(),
    new Inject(),
]

export function processJs(jsCode: string): PassResult {
    const ast = babel.parse(jsCode);
    for (let pass of passes) {
        pass.passAst(ast);
    }
    return {
        ast,
        toCode: function () { return generator.default(this.ast).code }
    };
}
