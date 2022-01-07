import { Stack } from "../collections/stack";
import IdGenerator from "../util/idGenerator";

import { runOptimizationPasses } from "./passes/index";
import * as AstPreprocessing from "./preprocessing/functionExpressionRewriter";
import { parseStatements } from "./statements/statement";

import * as ESTree from "../estree";
import {
  ControlFlowGraph,
  EnclosingStatement,
  FlowNode,
  FlowProgram,
  NodeType,
  ParsingContext,
  ParserOptions
} from "../flow";

export { parse };

function parse(program: ESTree.Program | ESTree.File, options: ParserOptions): ESTree.Program {
  let context = createParsingContext();

  AstPreprocessing.rewriteFunctionExpressions(program);
  // const generator = require("@babel/generator");
  // console.log(generator.default(program,{}).code);
  let parsedProgram = parseProgram(program, context);

  // let functionFlowGraphs = parsedProgram.functions.map(func => func.flowGraph);
  // let flowGraphs = [parsedProgram.flowGraph, ...functionFlowGraphs];
  // runOptimizationPasses(flowGraphs, options);
  // const generator = require("@babel/generator");
  // console.log(generator.default(rewrittenProgram).code);
  return null;
}

function parseProgram(
  program: ESTree.Program | ESTree.File,
  context: ParsingContext
): FlowProgram {
  let entryNode = context.createNode(NodeType.Entry);
  let successExitNode = context.createNode(NodeType.SuccessExit);
  let errorExitNode = context.createNode(NodeType.ErrorExit);

  let programFlowGraph: ControlFlowGraph = {
    entry: entryNode,
    successExit: successExitNode,
    errorExit: errorExitNode,
    nodes: [],
    edges: []
  };

  context.currentFlowGraph = programFlowGraph;
  let body = program.type == 'File' ? program.program.body : program.body;
  let completion = parseStatements(body, entryNode, context);

  if (completion.normal) {
    successExitNode.appendEpsilonEdgeTo(completion.normal);
  }

  let localcfg = {
    flowGraph: programFlowGraph,
    functions: context.functions
  };

  program.extra = { cfg: localcfg };
  return localcfg;
}

function createParsingContext(): ParsingContext {
  let nodeIdGenerator = IdGenerator.create();
  let functionIdGenerator = IdGenerator.create();
  let variableNameIdGenerator = IdGenerator.create();

  return {
    functions: [],
    currentFlowGraph: null,

    enclosingStatements: Stack.create<EnclosingStatement>(),

    createTemporaryLocalVariableName(name) {
      const id = variableNameIdGenerator.generateId();

      return `$$${name}${id}`;
    },

    createNode(type = NodeType.Normal) {
      let id = nodeIdGenerator.generateId();
      return new FlowNode(id, type);
    },

    createFunctionId() {
      return functionIdGenerator.generateId();
    },

    statements: Stack.create<ESTree.Statement>(),
    appendDef(this: ParsingContext, name: string) {
      let currentStatement = this.statements.peek();
      if(!currentStatement.extra){
        currentStatement.extra = {defs:new Set<string>(),uses:new Set<string>()};
      }
      (currentStatement.extra.defs as Set<string>).add(name);
    },
    appendUse(this: ParsingContext, name: string) {
      let currentStatement = this.statements.peek();
      (currentStatement.extra.uses as Set<string>).add(name);
    },
  };
}
