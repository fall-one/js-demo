function test(a, b, c, d)
{
    return new Set([a, b]).size === new Set([c, d]).size && new Set([a, b, c, d]).size <= 2;
}

function test2(a, b, c, d)
{
    return a + b === c + d && a * b === c * d;
}

function test3(a, b, c, d)
{
    // 直接比较情况，考虑所有可能性
    return (a === c && b === d) || (a === d && b === c) || (a === b && c === d && a === c);
}

function test4 (a,b,c,d)
{
    return a&b === c&d && a|b === c|d;
}


const count = 1000000;


const start = new Date().getTime();
for (let i = 0; i < count; i++)
{
    test4(Math.random(), Math.random(), Math.random(), Math.random())
}

const end = new Date().getTime();

// console.log(end - start)


console.log(("你" & "好").toString(2))