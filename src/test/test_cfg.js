const babel = require("@babel/core");
// import * as babel from '@babel/core'
// const types = require("@babel/types");
// const generator = require("@babel/generator");
// import * as cfgBuilder from '../components/cfg/styx';
const cfgBuilder = require('../components/cfg/cfg.ts');
const fs = require('fs')
// import * as fs from 'fs'
// let __dirname = process.cwd();
const code = fs.readFileSync(`${__dirname}/test.js`).toString();
const ast = babel.parse(code);
var cfg = cfgBuilder.parse(babel.types.isFile(ast)?ast.program:ast);
// var cfg = cfgBuilder.parse(ast);
console.log(cfg);