import * as ESTree from "../../estree";
import { createIdentifier } from "../../estreeFactory";

import IdGenerator from "../../util/idGenerator";

import * as babel from '@babel/core';
import { ParserOptions } from "../../cfg";

export function removeMinervaHook(program: ESTree.Program | ESTree.File): void {
  babel.traverse(program, {
    FunctionDeclaration(path) {
      path.node.body.body = path.node.body.body.filter(statement => {
        return !((statement.type === 'VariableDeclaration' && statement.declarations.length == 1 && ESTree.isIdentifier(statement.declarations[0].id) && statement.declarations[0].id.name === 'minerva_scope_id')
          || (statement.type === 'ExpressionStatement' && ESTree.isCallExpression(statement.expression) && statement.expression.callee.type === 'MemberExpression' && ESTree.isIdentifier(statement.expression.callee.object) && statement.expression.callee.object.name === 'minerva_hook'))
      })
    }
  })
}

export function rewriteFunctionExpressions(program: ESTree.Program | ESTree.File): void {
  let functionIdGenerator = IdGenerator.create();
  var rewriteFunctionVisitor = {
    FunctionExpression(path) {
      let funcId = functionIdGenerator.generateId();
      let nameSuffix = path.node.id
        ? "_" + path.node.id.name
        : "";
      let funcName = `_mmfunc${funcId}${nameSuffix}`;
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


      } catch (error) {
        console.log(`pass ${funcName} error:`);
        console.log(error.stack);
      }
    }
  };
  babel.traverse(program, {
    FunctionDeclaration(path) {
      if (!path.node.id || !path.node.id.name.includes('_mmfunc')) {
        let funcId = functionIdGenerator.generateId();
        let nameSuffix = path.node.id
          ? "_" + path.node.id.name
          : "";
        let funcName = `_mmfunc${funcId}${nameSuffix}`;
        let parentPath = path.findParent(x => x.scope.hasOwnBinding(path.node.id.name));
        parentPath.scope.rename(path.node.id.name, funcName);
      }
    }
  })
  babel.traverse(program, rewriteFunctionVisitor);
}

function clone<T>(object: T): T {
  return JSON.parse(JSON.stringify(object));
}
