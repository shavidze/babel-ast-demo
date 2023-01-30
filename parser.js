const { parse } = require("@babel/parser");
const code = "2 + (4 * 5)";

const ast = parse(code);
console.log(ast);
