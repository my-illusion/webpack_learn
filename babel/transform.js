const parser = require("@babel/parser");
const {default: traverse} = require("@babel/traverse");
const {default: generate} = require("@babel/generator")
const fs = require("fs")

const codeText = fs.readFileSync("./index.js", "utf-8")

const ast = parser.parse(codeText, {
    sourceType: 'module'
})

const updateParamNameVisitor = {
    Identifier(path) {
      if (path.node.name === this.paramName) {
        path.node.name = "x";
      }
    }
};

traverse(ast, {
    FunctionDeclaration(path) {
        const param = path.node.params[0];
        const paramName = param.name;
        param.name = "x";
    
        path.traverse(updateParamNameVisitor, { paramName });
    }
})

const { code } = generate(ast, {}, codeText)

console.log(code)
