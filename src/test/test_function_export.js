const babel = require("@babel/core");
const types = require("@babel/types");
const generator = require("@babel/generator");
import { FlowNode, node2Statement } from '../components/cfg/flow';
import { CopyPropagation } from '../components/pass/copy-propagation'
import { exportFunction } from '../components/core/function-exporter'
const fs = require('fs');
const fileName = 'newpdd1.js'
const code = fs.readFileSync(`${__dirname}/${fileName}`).toString();
// import * as cfgBuilder from '../components/cfg/cfg';
// const ast = babel.parse(code);
// // console.log(generator.default(ast).code)
// cfgBuilder.parse(ast,{rewriteFunction:false});
// new CopyPropagation().passAst(ast);

import * as core from '../components/core/core'
core.exportFunction('react_pdd','_mmfunc2685_O')

let funName = '_mmfunc2685_O'
let funcCode = exportFunction(code, funName);
console.log(funcCode);