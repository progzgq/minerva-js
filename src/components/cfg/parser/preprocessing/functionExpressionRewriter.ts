import * as ESTree from "../../estree";
import { createIdentifier } from "../../estreeFactory";

import IdGenerator from "../../util/idGenerator";

import * as babel from '@babel/core';

export { rewriteFunctionExpressions };

interface RewrittenFunction {
  name: string;
  functionExpression: ESTree.FunctionExpression;
}

function rewriteFunctionExpressions(program: ESTree.Program | ESTree.File): void {
  let functionIdGenerator = IdGenerator.create();
  let replaceTotal = 0;
  let funTotal = 0;
  var rewriteFunctionVisitor = {
    FunctionExpression(path) {
      funTotal += 1;
      let funcId = functionIdGenerator.generateId();
      let nameSuffix = path.node.id
        ? "_" + path.node.id.name
        : "";
      let funcName = `$$func${funcId}${nameSuffix}`;
      // if (path.toString().indexOf('WRbNW7BcVSouvHW') > 1) {
      //   console.log(`funcName:${funcName}`);
      //   debugger;
      // }
      if (path.node.id && path.node.id.name) {
        let binding = path.scope.getBinding(path.node.id.name);
        if (binding && binding.referencePaths) {
          for (let refPath of binding.referencePaths) {
            if (!ESTree.isIdentifier(refPath.node)) {
              debugger;
            }
            refPath.replaceWith(ESTree.identifier(funcName));
          }
        }
      }

      path.traverse(rewriteFunctionVisitor);

      try {
        let block = path.find((cpath) => cpath.node.body && ESTree.isStatement(cpath.node.body[0]));
        let functionDeclaration: ESTree.Function = ESTree.functionDeclaration(
          ESTree.identifier(funcName),
          path.node.params,
          path.node.body
        )
        block.node.body.unshift(functionDeclaration);

        path.replaceWith(createIdentifier(funcName));


        replaceTotal += 1;
      } catch (error) {
        console.log(`pass ${funcName} error:`);
        console.log(error.stack);
      }
    }
  };
  babel.traverse(program, rewriteFunctionVisitor);
  console.log(`funTotal:${funTotal},replaceTotal:${replaceTotal}`);
}

function clone<T>(object: T): T {
  return JSON.parse(JSON.stringify(object));
}
