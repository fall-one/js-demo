const Mexp = require("math-expression-evaluator")
const nerdamer = require("nerdamer")
const Parser = require("expr-eval").Parser
const {litecalc} = require("litecalc")
const evaluator = require("evaluator.js")
const  calculate = require("calc-expression").default;
const {evaluate: decimal_eval} = require("decimal-eval")
const {evaluate: mathjs} = require("mathjs")
const calcjs = require('calc.js');
const {calc, calc_memo: calc_memo2_42} = require("./a-calc2_42.js")

// console.log(litecalc("0.1 + 0.2"))
//
// console.log(evaluator("0.1 + 0.2"))

// console.log(calculate("0.1 + 0.2"))


// console.log(nerdamer("0.1 + 0.2").text())
var mexp = new Mexp();
//
console.log(mexp.eval("2e+2--2++5--1.998e-2"))
console.log(decimal_eval("2e+2--2++5--1.998e-2"))
console.log(mathjs("2e+2--2++5--1.998e-2"))
console.log(nerdamer("2e+2--2++5--1.998e-2").text())
console.log(calcjs("2e+2--2++5--1.998e-2"))

console.log(calc("2e+2--2%++5--1.998e-2", {_unit: true}))


// console.log(mexp.eval("0.1 + 0.2 + 0.9"))

// console.log(Parser.evaluate("0.1 + 0.2"))

