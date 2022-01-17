import { stringify } from "../expressions/stringifier";

import * as ESTree from "../../estree";
import {
  Completion,
  EdgeType,
  EnclosingStatementType,
  EnclosingTryStatement,
  FlowNode,
  ParsingContext
} from "../../flow";
import { parseStatement } from "./statement";
import { parseExpression } from "./expression";

export { parseReturnStatement };

function parseReturnStatement(
  returnStatement: ESTree.ReturnStatement,
  currentNode: FlowNode,
  context: ParsingContext
): Completion {
  let argument = returnStatement.argument
    ? stringify(returnStatement.argument)
    : "undefined";
  let returnLabel = `return ${argument}`;

  let returnNode = returnStatement.argument ?
    parseExpression(returnStatement.argument, currentNode, context)
    : context.createNode().appendEpsilonEdgeTo(currentNode);

  let finalizerCompletion = runFinalizersBeforeReturn(returnNode, context);

  if (!finalizerCompletion.normal) {
    return finalizerCompletion;
  }
  if (finalizerCompletion.normal.id === 1706) debugger;
  context.currentFlowGraph.successExit.appendTo(
    finalizerCompletion.normal,
    returnLabel,
    returnStatement,
    EdgeType.AbruptCompletion
  );

  return { return: true, data: returnNode };
}

function runFinalizersBeforeReturn(
  currentNode: FlowNode,
  context: ParsingContext
): Completion {
  let enclosingTryStatements = <EnclosingTryStatement[]>(
    context.enclosingStatements
      .enumerateElements()
      .filter(
        statement => statement.type === EnclosingStatementType.TryStatement
      )
  );

  for (let tryStatement of enclosingTryStatements) {
    if (tryStatement.parseFinalizer && !tryStatement.isCurrentlyInFinalizer) {
      tryStatement.isCurrentlyInFinalizer = true;
      let finalizer = tryStatement.parseFinalizer();
      tryStatement.isCurrentlyInFinalizer = false;

      finalizer.bodyEntry.appendEpsilonEdgeTo(currentNode);

      if (finalizer.bodyCompletion.normal) {
        currentNode = finalizer.bodyCompletion.normal;
      } else {
        return finalizer.bodyCompletion;
      }
    }
  }

  return { normal: currentNode };
}
