const babel = require("@babel/core");
const types = require("@babel/types");
const generator = require("@babel/generator");
import { FlowNode, node2Statement } from '../components/cfg/flow';
import { CopyPropagation } from '../components/pass/copy-propagation'
import { DecryptString } from '../components/pass/decrypt-string'
const vm = require('vm');
const fs = require('fs');
const fileName = 'pdd1.js'
const code = fs.readFileSync(`${__dirname}/${fileName}`).toString();
const cfgBuilder = require('../components/cfg/cfg.ts');
const ast = babel.parse(code);
// console.log(generator.default(ast).code)
cfgBuilder.parse(ast);
new CopyPropagation().passAst(ast);
console.log(generator.default(ast).code)

new DecryptString().passAst(ast);

// babel.traverse(ast,{
//     BinaryExpression(path){
//         if(path.node.left && types.isLiteral(path.node.left) && 
//             path.node.right && types.isLiteral(path.node.right)
//         ){
//             debugger;
//         }
//     }
// })
fs.writeFileSync(`${__dirname}/new${fileName}`, generator.default(ast).code);
fs.writeFileSync(`${__dirname}/new${fileName}.json`, JSON.stringify(ast));