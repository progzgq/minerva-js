import { Pass } from "./pass-manager";
const babel = require("@babel/core");
const types = require("@babel/types");

export class DecryptString implements Pass{
    /*
    1.返回值string
    2.返回值常作为MemberExpression中的property
    3.固定输入->固定输出
    */
    passAst(ast: any): void {
        babel.traverse(ast, {
            
            
        });
    }
    
}