import { types } from "@babel/core";
import { binaryExpression } from "@babel/types";
import {
  AssignmentExpression,
  BinaryExpression,
  CallExpression,
  Expression,
  Identifier,
  Literal,
  NodeType,
  UnaryExpression,
  LVal
} from "./estree";

export function createAssignmentExpression({
  left,
  right
}: {
  left: LVal;
  right: Expression;
}): AssignmentExpression {
  return types.assignmentExpression('=',left,right);
  // return {
  //   type: NodeType.AssignmentExpression,
  //   operator: "=",
  //   left,
  //   right
  // };
}

export function createCallExpression(
  callee: Expression,
  args: Expression[] = []
): CallExpression {
  return types.callExpression(callee,args);
  // return {
  //   type: NodeType.CallExpression,
  //   callee,
  //   arguments: args
  // };
}

export function createIdentifier(name: string): Identifier {
  return types.identifier(name);
  // return {
  //   type: NodeType.Identifier,
  //   name
  // };
}

export function createIdentityComparisonExpression({
  left,
  right
}: {
  left: Expression;
  right: Expression;
}): BinaryExpression {
  return binaryExpression('===',left,right);
  // return {
  //   type: NodeType.BinaryExpression,
  //   operator: "===",
  //   left,
  //   right
  // };
}

export function createLiteral(value: boolean | number): Literal {
  if(typeof value === 'boolean') return types.booleanLiteral(value);
  else return types.numericLiteral(value);
  // return types.literal
  // return {
  //   type: NodeType.Literal,
  //   raw: String(value),
  //   value: value
  // };
}

export function createUnaryNegationExpression(
  innerExpression: Expression
): UnaryExpression {
  return types.unaryExpression('!',innerExpression,true);
  // return {
  //   type: NodeType.UnaryExpression,
  //   operator: "!",
  //   prefix: true,
  //   argument: innerExpression
  // };
}
