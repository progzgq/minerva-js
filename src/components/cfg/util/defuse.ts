import { Identifier } from '@babel/types';
import * as ESTree from '../estree'
export class DefUseNode {
    constructor(public name: string, public id: number, public brother: Identifier) { }
    static create(idetifer: Identifier, brother: Identifier, id = null) {
        return new DefUseNode(idetifer.name, (id || idetifer.start), brother);
    }
    toString() {
        return this.name;
    }
}

export function get_def_uses(node: ESTree.Node): [Set<DefUseNode>, Set<DefUseNode>] {
    let defs: Set<DefUseNode> = new Set();
    let uses: Set<DefUseNode> = new Set();
    if (!node) {
        return [defs, uses];
    }
    function appendDefuses(node: ESTree.Node) {
        let [ndefs, nuses] = get_def_uses(node);
        defs = new Set([...defs, ...ndefs]);
        uses = new Set([...uses, ...nuses]);
    }
    switch (node.type) {
        case "VariableDeclaration": {
            for (let variableDeclarator of node.declarations) {
                appendDefuses(variableDeclarator);
            }
            break;
        }
        case "FunctionDeclaration": {
            defs.add(DefUseNode.create(node.id, null));
            for (let param of node.params) {
                if (ESTree.isIdentifier(param)) {
                    defs.add(DefUseNode.create(param, null));
                }
            }
            break;
        }
        case "VariableDeclarator": {
            if (ESTree.isIdentifier(node.id)) {
                let brother = ESTree.isIdentifier(node.init) ? node.init : null;
                defs.add(DefUseNode.create(node.id, brother));
            }
            if (!node.init) {
                break;
            }
            if (ESTree.isIdentifier(node.init)) {
                // if(node.init.)
                uses.add(DefUseNode.create(node.init, null));
            } else if (!ESTree.isPureish(node.init)) {
                appendDefuses(node.init);
            }
            break;
        }
        case "AssignmentExpression": {
            if (ESTree.isIdentifier(node.left)) {
                let brother = ESTree.isIdentifier(node.right) ? node.right : null;
                defs.add(DefUseNode.create(node.left, brother));
            }else{
                appendDefuses(node.left);
            }
            if (ESTree.isIdentifier(node.right)) {
                uses.add(DefUseNode.create(node.right, null));
            } else if (!ESTree.isPureish(node.right)) {
                appendDefuses(node.right);
            }
            break;
        }
        case "LogicalExpression": {
            appendDefuses(node.left);
            appendDefuses(node.right);
            break;
        }
        case "MemberExpression": {
            if (ESTree.isIdentifier(node.object)) {
                uses.add(DefUseNode.create(node.object, null));
            } else {
                appendDefuses(node.object);
            }
            if (!ESTree.isIdentifier(node.property)) {
                appendDefuses(node.property);
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
                uses.add(DefUseNode.create(node.callee, null));
            }else{
                appendDefuses(node.callee); //n.push(xx)  : MemberExpression
            }
            for (let argument of node.arguments) {
                if (ESTree.isIdentifier(argument)) {
                    uses.add(DefUseNode.create(argument, null));
                } else if (!ESTree.isPureish(argument)) {
                    appendDefuses(argument);
                }
            }
            break;
        }
        case 'UpdateExpression': {
            if (ESTree.isIdentifier(node.argument)) {
                uses.add(DefUseNode.create(node.argument, null));
            }
            break;
        }
        case 'ObjectExpression': {
            for (let prop of node.properties) {
                if (ESTree.isObjectProperty(prop) && ESTree.isIdentifier(prop.value)) {
                    uses.add(DefUseNode.create(prop.value, null));
                }else{
                    appendDefuses(prop);
                }
            }
            break;
        }
        case "ReturnStatement":{
            appendDefuses(node.argument);
            break;
        }
        case "BinaryExpression":{
            appendDefuses(node.left);
            appendDefuses(node.right);
            break;
        }
        case "ConditionalExpression":{
            appendDefuses(node.test);
            appendDefuses(node.alternate);
            appendDefuses(node.consequent);
            break;
        }
    }
    return [defs, uses];
}