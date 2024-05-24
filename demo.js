const {calc, fmt, add} = require("a-calc")
const BigNumber = require("bignumber.js")



console.log(calc("2**3**3"))

// console.log(calc("(a * (b + c))", {a: 1, b: 2, c: 3}))
// console.log(calc("a + b | ,", {a:324232421123, b: 234234242422321}))
// console.log(calc("a% + b%", {a: 2, b: 4, _unit: true}))
// console.log(calc("a + b", {a: "2$", b: "4$", _unit: true}))
// console.log(calc("a * b | /", [{_unit: true}, {a:"1$", b: "2$"}]))
// console.log(calc("a + b", {_fill_data: [{a: "2$"}, {b: "4$"}], _unit: true}))
// console.log(calc("a + b - c",[
//     {a: 1},
//     {b: 2, c: 3}
// ]))

var a = 12313213;
var b = 32131231;

// var a = BigNumber(0.00000000000000000000788891);
// var b = BigNumber(32131231);

// console.log(a.toNumber())
//
// console.log(0.00000000000000000000788891)
//
// console.log(fmt(a.toNumber()))

const start = new Date().getTime();
for(let i=0;i<1000000;i++)
{
    add(a,b)
    // new BigNumber(a).plus(b);
}
const end = new Date().getTime();

console.log(end-start);