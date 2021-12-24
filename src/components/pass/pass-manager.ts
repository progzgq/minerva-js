

import babel = require("@babel/core");
import types = require("@babel/types");
import generator = require("@babel/generator");
import { Inject } from "./inject-hook";
import { DecryptString } from "./decrypt-string";

export interface Pass {
    passAst(ast): void
}

const passes = [
    // new DecryptString(),
    new Inject(),
]

export function processJs(jsCode: string) {
    const ast = babel.parse(jsCode);
    for (let pass of passes) {
        pass.passAst(ast);
    }
    return generator.default(ast).code;
}
