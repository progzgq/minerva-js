const babel = require("@babel/core");
const types = require("@babel/types");
const code = `
u = ['cacac','acacdc'];
function getfun(n) {
    let a = '1';
    let b = u;
    let c = function(){}
    // return u[n];
    a = a+b;
    return b;
  }
`;
  
const ast = babel.parse(code);
babel.traverse(ast, {
    // Identifier(path){
    //     console.log('当前路径源码:\n', path.toString());
    //     the_path = path.getStatementParent()
    //     console.log('最终路径源码:\n', the_path.toString())
    //     console.log('------------------------------------')
    // },
    FunctionDeclaration(path) {
        console.log(path)
        console.log(path.scope);
        console.log(path.scope.dump());
    },
    ReturnStatement(path){
        var n = path.node.argument.name
        console.log("\n这里是", path.toString())
        // console.log('被绑定量：', path.scope.getBinding(n))
        // console.log('被绑定量：', path.scope.getOwnBinding(n))
        // console.log('被绑定量：', path.scope.getBindingIdentifier(n))
        console.log('作用域有 被绑定变量 g:', path.scope.hasBinding('n'))
    }
});