const babel = require("@babel/core");
const types = require("@babel/types");
const generator = require("@babel/generator");
import { FlowNode, node2Statement } from '../components/cfg/flow';
import { CopyPropagation } from '../components/pass/copy-propagation'
import { exportFunction } from '../components/core/function-exporter'
const fs = require('fs');
const fileName = 'ctripnew.js'
const code = fs.readFileSync(`${__dirname}/${fileName}`).toString();
// import * as cfgBuilder from '../components/cfg/cfg';
// const ast = babel.parse(code);
// // console.log(generator.default(ast).code)
// cfgBuilder.parse(ast,{rewriteFunction:false});
// new CopyPropagation().passAst(ast);

import * as core from '../components/core/core'
let funcName = '_mmfunc4'
let funcCode = exportFunction(code, funcName);
console.log('end:\n')
console.log(funcCode);