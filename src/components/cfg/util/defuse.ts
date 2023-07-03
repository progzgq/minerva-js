import { Identifier } from '@babel/types';
import { globalJsVal } from '../../core/constants';
import * as ESTree from '../estree'
export class DefUseNode {
    constructor(public name: string, public id: number, public brother: Identifier, public ambiguity: boolean) { }
    static create(idetifer: Identifier, brother: Identifier, id = null, ambiguity = false) {
        return new DefUseNode(idetifer.name, (id || idetifer.start), brother, ambiguity);
    }
    toString() {
        return this.name;
    }
}

function appendUses(uses: Set<DefUseNode>, defUseNode: DefUseNode) {
    if (globalJsVal.has(defUseNode.name)) {
        //js和浏览器自带属性，简单起见，直接丢弃
        return;
    }
    uses.add(defUseNode);
}

export function get_def_uses(node: ESTree.Node, ambiguity = false): [Set<DefUseNode>, Set<DefUseNode>] {
    let defs: Set<DefUseNode> = new Set();
    let uses: Set<DefUseNode> = new Set();
    if (!node) {
        return [defs, uses];
    }
    function appendDefuses(node: ESTree.Node, ambiguity = false) {
        let [ndefs, nuses] = get_def_uses(node, ambiguity);
        defs = new Set([...defs, ...ndefs]);
        uses = new Set([...uses, ...nuses]);
    }
    switch (node.type) {
        case "Identifier": {
            appendUses(uses, DefUseNode.create(node, null));
            break;
        }
        case "VariableDeclaration": {
            for (let variableDeclarator of node.declarations) {
                appendDefuses(variableDeclarator, ambiguity);
            }
            break;
        }
        case "FunctionDeclaration": {
            defs.add(DefUseNode.create(node.id, null, null, ambiguity));
            for (let param of node.params) {
                if (ESTree.isIdentifier(param)) {
                    defs.add(DefUseNode.create(param, null, null, ambiguity));
                }
            }
            break;
        }
        case "VariableDeclarator": {
            if (ESTree.isIdentifier(node.id)) {
                let brother = ESTree.isIdentifier(node.init) ? node.init : null;
                defs.add(DefUseNode.create(node.id, brother, null, ambiguity));
            }
            if (!node.init) {
                break;
            }
            if (ESTree.isIdentifier(node.init)) {
                // if(node.init.)
                // uses.add(DefUseNode.create(node.init, null));
                appendUses(uses, DefUseNode.create(node.init, null));
            } else {
                appendDefuses(node.init, ambiguity);
            }
            break;
        }
        case "AssignmentExpression": {
            if (ESTree.isIdentifier(node.left)) {
                let brother = ESTree.isIdentifier(node.right) ? node.right : null;
                defs.add(DefUseNode.create(node.left, brother, null, ambiguity));
            } else {
                appendDefuses(node.left, ambiguity);
            }
            if (ESTree.isIdentifier(node.right)) {
                // uses.add(DefUseNode.create(node.right, null));
                appendUses(uses, DefUseNode.create(node.right, null));
            } else {
                appendDefuses(node.right, ambiguity);
            }
            break;
        }
        case "LogicalExpression": {
            appendDefuses(node.left, ambiguity);
            let isAmbiguity = (node.operator === '&&') || ambiguity;
            appendDefuses(node.right, isAmbiguity);
            break;
        }
        case "ArrayExpression": {
            for (let ele of node.elements) {
                appendDefuses(ele);
            }
            break;
        }
        case "MemberExpression": {
            if (ESTree.isIdentifier(node.object)) {
                // uses.add(DefUseNode.create(node.object, null));
                appendUses(uses, DefUseNode.create(node.object, null));
                //TODO defs?
            } else {
                appendDefuses(node.object, ambiguity);
            }
            if (node.computed) {
                if (ESTree.isIdentifier(node.property)) {
                    //r[s]
                    // uses.add(DefUseNode.create(node.property, null));
                    appendUses(uses, DefUseNode.create(node.property, null));
                } else {
                    appendDefuses(node.property, ambiguity);
                }
            }

            // if (ESTree.isIdentifier(node.property)) {
            //     uses.add(DefUseNode.create(node.property, null));
            // } else if (!ESTree.isPureish(node.property)) {
            //     appendDefuses(node.property);
            // }
            break;
        }
        case 'CallExpression': {
            if (ESTree.isIdentifier(node.callee)) {
                // if (node.callee.name === '$$func2300') {
                //     debugger;
                // }
                // uses.add(DefUseNode.create(node.callee, null));
                appendUses(uses, DefUseNode.create(node.callee, null));
            } else {
                appendDefuses(node.callee, ambiguity); //n.push(xx)  : MemberExpression
            }
            for (let argument of node.arguments) {
                if (ESTree.isIdentifier(argument)) {
                    // uses.add(DefUseNode.create(argument, null));
                    appendUses(uses, DefUseNode.create(argument, null));
                } else {
                    appendDefuses(argument, ambiguity);
                }
            }
            break;
        }
        case 'NewExpression':{
            for (let argument of node.arguments) {
                if (ESTree.isIdentifier(argument)) {
                    // uses.add(DefUseNode.create(argument, null));
                    appendUses(uses, DefUseNode.create(argument, null));
                } else {
                    appendDefuses(argument, ambiguity);
                }
            }
            break;
        }
        case 'UpdateExpression': {
            //a++
            if (ESTree.isIdentifier(node.argument)) {
                defs.add(DefUseNode.create(node.argument, null, null, ambiguity));
                // uses.add(DefUseNode.create(node.argument, null));
                appendUses(uses, DefUseNode.create(node.argument, null));
            }
            break;
        }
        case 'ObjectExpression': {
            for (let prop of node.properties) {
                if (ESTree.isObjectProperty(prop) && ESTree.isIdentifier(prop.value)) {
                    // uses.add(DefUseNode.create(prop.value, null));
                    appendUses(uses, DefUseNode.create(prop.value, null));
                } else {
                    appendDefuses(prop, ambiguity);
                }
            }
            break;
        }
        case "ReturnStatement": {
            appendDefuses(node.argument, ambiguity);
            break;
        }
        case "SequenceExpression": {
            for (let exp of node.expressions) {
                appendDefuses(exp, ambiguity);
            }
            break;
        }
        case "BinaryExpression": {
            appendDefuses(node.left, ambiguity);
            appendDefuses(node.right, ambiguity);
            break;
        }
        case "ConditionalExpression": {
            appendDefuses(node.test, ambiguity);
            appendDefuses(node.alternate, true);
            appendDefuses(node.consequent, true);
            break;
        }
        case 'UnaryExpression': {
            appendDefuses(node.argument, ambiguity);
            break;
        }
    }
    return [defs, uses];
}