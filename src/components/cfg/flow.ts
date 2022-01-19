import * as ESTree from "./estree";
import { Stack } from "./collections/stack";
import { DefUseNode, get_def_uses } from "./util/defuse";
import { Identifier, STATEMENT_OR_BLOCK_KEYS } from "@babel/types";

export interface FlowProgram {
  flowGraph: ControlFlowGraph;
  functions: FlowFunction[];
}

export interface FlowFunction {
  id: number;
  name: string;
  flowGraph: ControlFlowGraph;
}

export interface ControlFlowGraph {
  entry: FlowNode;
  successExit: FlowNode;
  errorExit: FlowNode;
  nodes: Record<number, FlowNode>;
  edges: FlowEdge[];
}

export interface FlowEdge {
  source: FlowNode;
  target: FlowNode;
  type: EdgeType;
  label: string;
  data: ESTree.Expression | ESTree.Statement | ESTree.VariableDeclarator;
}

export class FlowNode {
  id: number;
  type: NodeType;
  incomingEdges: FlowEdge[];
  outgoingEdges: FlowEdge[];
  defs: Set<DefUseNode> = new Set<DefUseNode>();
  uses: Set<DefUseNode> = new Set<DefUseNode>();
  inReach: Set<number> = new Set();
  outReach: Set<number> = new Set();
  inReachDefs: Record<number, Set<DefUseNode>> = {};
  inActivity: Set<string> = new Set();
  outActivity: Set<string> = new Set();
  data: ESTree.Node;
  useDefChain: Record<string, DefUseNode[]> = {};

  constructor(id: number, type: NodeType) {
    this.id = id;
    this.type = type;
    this.incomingEdges = [];
    this.outgoingEdges = [];
  }

  insertDefUses(defs: Set<DefUseNode>, uses: Set<DefUseNode>) {
    this.defs = new Set([...this.defs, ...defs]);
    this.uses = new Set([...this.uses, ...uses]);
    return this;
  }

  appendTo(
    node: FlowNode,
    label: string,
    edgeData: ESTree.Expression | ESTree.Statement | ESTree.VariableDeclarator,
    edgeType = EdgeType.Normal
  ): FlowNode {
    let edge: FlowEdge = {
      source: node,
      target: this,
      type: edgeType,
      label: label,
      data: edgeData
    };
    // if(this.id===5325){
    //   debugger;
    // }
    if (edgeType === EdgeType.Normal || edgeType === EdgeType.AbruptCompletion) {
      this.data = edgeData;
      if (!edgeData.extra) {
        edgeData.extra = {};
      }
      edgeData.extra.flowNode = this;
      this.insertDefUses(...get_def_uses(edgeData));
    }
    // this.data = edgeData;

    // this.insertDefUses(...get_def_uses(edgeData));

    node.outgoingEdges.push(edge);
    this.incomingEdges.push(edge);

    return this;
  }

  appendConditionallyTo(
    node: FlowNode,
    label: string,
    condition: ESTree.Expression
  ): FlowNode {
    return this.appendTo(node, label, condition, EdgeType.Conditional);
  }

  appendEpsilonEdgeTo(node: FlowNode): FlowNode {
    return this.appendTo(node, "", null, EdgeType.Epsilon);
  }
}

export enum NodeType {
  Normal = 0,
  Entry = 1,
  SuccessExit = 2,
  ErrorExit = 3
}

export enum EdgeType {
  Normal = 0,
  Epsilon = 1,
  Conditional = 2,
  AbruptCompletion = 3
}

export interface ParsingContext {
  functions: FlowFunction[];
  currentFlowGraph: ControlFlowGraph;

  enclosingStatements: Stack<EnclosingStatement>;

  createTemporaryLocalVariableName(name: string): string;
  createNode(type?: NodeType): FlowNode;
  createFunctionId(): number;

  statements: Stack<ESTree.Statement>;
  appendDef(name: string): void;
  appendUse(name: string): void;
}

export interface ParserOptions {
    removeTransitNodes?: boolean;
    rewriteConstantConditionalEdges?: boolean;
    rewriteFunction?: boolean,
    removeMinervaHook?:boolean
}

export interface Completion {
  normal?: FlowNode;
  break?: boolean;
  continue?: boolean;
  return?: boolean;
  throw?: boolean;
  data?: FlowNode;
}

export const enum EnclosingStatementType {
  TryStatement,
  OtherStatement
}

export interface EnclosingStatement {
  type: EnclosingStatementType;
  label: string;
  continueTarget: FlowNode;
  breakTarget: FlowNode;
}

export interface EnclosingTryStatement extends EnclosingStatement {
  isCurrentlyInTryBlock: boolean;
  isCurrentlyInFinalizer: boolean;
  handler: ESTree.CatchClause;
  handlerBodyEntry: FlowNode;
  parseFinalizer: () => Finalizer;
}

export interface Finalizer {
  bodyEntry: FlowNode;
  bodyCompletion: Completion;
}

export function node2Statement(node: FlowNode): ESTree.Statement {
  if (!node.data) {
    return;
  }
  if (ESTree.isStatement(node.data)) {
    return node.data;
  } else if (ESTree.isExpression(node.data)) {
    return ESTree.expressionStatement(node.data);
  } else if (ESTree.isVariableDeclarator(node.data)) {
    return ESTree.variableDeclaration("var", [node.data]);
  }
}