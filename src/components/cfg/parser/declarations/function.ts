import { stringify } from "../expressions/stringifier";

import { parseBlockStatement } from "../statements/block";

import { Stack } from "../../collections/stack";

import * as ESTree from "../../estree";

import {
  createAssignmentExpression,
  createIdentifier,
  createLiteral
} from "../../estreeFactory";

import {
  Completion,
  EdgeType,
  EnclosingStatement,
  FlowFunction,
  FlowNode,
  NodeType,
  ParsingContext
} from "../../flow";
import { DefUseNode } from "../../util/defuse";

export { parseFunctionDeclaration };

function parseFunctionDeclaration(
  functionDeclaration: ESTree.FunctionDeclaration,
  currentNode: FlowNode,
  context: ParsingContext
): Completion {
  let entryNode = context.createNode(NodeType.Entry);
  let successExitNode = context.createNode(NodeType.SuccessExit);
  let errorExitNode = context.createNode(NodeType.ErrorExit);

  let func: FlowFunction = {
    id: context.createFunctionId(),
    name: functionDeclaration.id.name,
    flowGraph: {
      entry: entryNode,
      successExit: successExitNode,
      errorExit: errorExitNode,
      nodes: [],
      edges: []
    }
  };

  let functionContext: ParsingContext = {
    functions: context.functions,
    currentFlowGraph: func.flowGraph,

    enclosingStatements: Stack.create<EnclosingStatement>(),

    createTemporaryLocalVariableName: context.createTemporaryLocalVariableName,
    createNode: context.createNode,
    createFunctionId: context.createFunctionId,
    statements: Stack.create<ESTree.Statement>(),
    appendDef: context.appendDef,
    appendUse: context.appendUse,
    ambiguity: context.ambiguity,
  };

  let endOfParamAssignments = explicitlyAssignParameterValues(
    functionDeclaration,
    entryNode,
    context
  );
  for (let statement of functionDeclaration.body.body) {
    if (ESTree.isFunctionDeclaration(statement)) {
      entryNode.defs.add(DefUseNode.create(statement.id, null));
    }
  }

  let completion = parseBlockStatement(
    functionDeclaration.body,
    endOfParamAssignments,
    functionContext
  );

  if (completion.normal) {
    // If we reached this point, the function didn't end with an explicit return statement.
    // Thus, an implicit "undefined" is returned.
    // let undefinedReturnValue: ESTree.Identifier =  {
    //   type: ESTree.NodeType.Identifier,
    //   name: "undefined"
    // };

    // let returnStatement: ESTree.ReturnStatement = {
    //   type: ESTree.NodeType.ReturnStatement,
    //   argument: undefinedReturnValue
    // };
    let returnStatement: ESTree.ReturnStatement = ESTree.returnStatement(null);

    func.flowGraph.successExit.appendTo(
      completion.normal,
      "return undefined",
      returnStatement,
      EdgeType.AbruptCompletion
    );
  }
  if (!functionDeclaration.extra) {
    functionDeclaration.extra = {};
  }
  functionDeclaration.extra.cfg = func;
  context.functions.push(func);

  return { normal: currentNode };
}

function explicitlyAssignParameterValues(
  functionDeclaration: ESTree.Function,
  currentNode: FlowNode,
  context: ParsingContext
): FlowNode {
  let specialParamsArray = createIdentifier("$$params");

  functionDeclaration.params.forEach((param, index) => {
    if (ESTree.isIdentifier(param)) {
      currentNode.defs.add(DefUseNode.create(param, null));
    }
    // let indexedParamAccess: ESTree.MemberExpression = {
    //   type: ESTree.NodeType.MemberExpression,
    //   computed: true,
    //   object: specialParamsArray,
    //   property: createLiteral(index)
    // };

    // let paramAssignment = createAssignmentExpression({
    //   left: param,
    //   right: indexedParamAccess
    // });

    // currentNode = context
    //   .createNode()
    //   .appendTo(currentNode, stringify(paramAssignment), paramAssignment);

    // currentNode = context
    //   .createNode()
    //   .appendTo(currentNode, stringify(param), ESTree.variableDeclaration(param));
  });

  return currentNode;
}
