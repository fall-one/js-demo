const {calc, calc_memo} = require("./a-calc2.0.0.js")
const {calc: calc21} = require("./a-calc2.0.1.js")

function rand ()
{
    return 1 + Math.floor(Math.random() * 1000)
}

function gen_exprs ()
{
    return [
        `a * (b + c)`,
        `d * (e + f - g) + h - a`,
        `((b) + k) - d * e - (f * g)`,
        `((l + i) * c) * e / h / j`,
        `f + (d * j) + b`
    ]

}

const count = 400000


function test_fn (calc_fn, name)
{
    const start = +new Date();
    for(let i=0;i<count;i++)
    {
        gen_exprs().forEach(expr => {
            calc_fn(expr, {
                a:rand(),
                b:rand(),
                c:rand(),
                d:rand(),
                e:rand(),
                f:rand(),
                g:rand(),
                h:rand(),
                i:rand(),
                j:rand(),
                k:rand(),
                l:rand(),
            })
        })
    }
    const end = +new Date();
    console.log(`${name}计算用时:${end - start}`)
}

console.log(`-------------------${count * 5}次计算用时-------------------`)

test_fn(calc, "calc")
test_fn(calc21, "calc2.0.1")
// test_fn(calc_memo, "calc_memo")

