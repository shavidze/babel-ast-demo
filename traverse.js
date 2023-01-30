const traverse = require("@babel/traverse").default;
const { parse } = require("@babel/parser");

const code = "2 + (((4 * 5) / 4) + ((5*8) - (7*3)) * 9)";
const ast = parse(code);

// will visit ast
traverse(ast, {
  NumericLiteral: {
    enter(path) {
      console.log(`entered ${path.node.value}`);
    },
    exit(path) {
      console.log(`exit ${path.node.value}`);
    },
  },
});
