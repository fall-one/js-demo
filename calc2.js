const BigNumber = require("bignumber.js")

    function parser(tokens)
    {
        const operator = [];
        const numbers = [];

        let cur;
        while (cur = tokens.shift())
        {

            // 处理括号，优先级最高
            if (cur === "(")
            {
                operator.push(cur)
                continue;
            }
            if (cur === ")")
            {
                let op;
                while (op = operator.pop())
                {
                    if (op === "(")
                    {
                        break;
                    } else
                    {
                        const value2 = numbers.pop();
                        const value1 = numbers.pop();
                        numbers.push({type: "expr", value1, value2, operator: op})
                    }
                }
                continue;
            }
            if (/^[\d.]+$/.test(cur))
            {
                numbers.push({type: "number", value: cur})
                continue;
            }
            if (cur in operator_map)
            {
                // 这里的都是符号
                let last_op = operator.at(-1);
                if (last_op === "(")
                {
                    operator.push(cur);
                    continue;
                }
                const level = operator_map[cur]
                if (!operator.length)
                {
                    operator.push(cur);
                    continue;
                }
                if (level < operator_map[last_op])
                {


                    let op;
                    while (op = operator.pop())
                    {
                        if (op === "(")
                        {
                            break;
                        } else
                        {
                            const value2 = numbers.pop();
                            const value1 = numbers.pop();
                            numbers.push({type: "expr", value1, value2, operator: op})
                        }
                    }


                } else if (level === operator_map[last_op])
                {
                    if (cur === "**")
                    {
                        operator.push(cur);
                        continue
                    } else
                    {
                        let op;
                        while (op = operator.pop())
                        {
                            if (op === "(")
                            {
                                break;
                            } else if (operator_map[op] < level)
                            {
                                operator.push(op);
                                break;
                            } else
                            {
                                const value2 = numbers.pop();
                                const value1 = numbers.pop();
                                numbers.push({type: "expr", value1, value2, operator: op})
                            }
                        }
                    }
                }

                operator.push(cur);


            }
        }

        // console.log(numbers)
        // console.log(operator)
        let op;
        while (op = operator.pop())
        {
            const value2 = numbers.pop();
            const value1 = numbers.pop();
            numbers.push({type: "expr", value1, value2, operator: op})
        }

        return numbers[0];
    }


function eval_ast(ast)
{
    if (ast.type === "number")
    {
        return +ast.value
    }
    if (ast.type === "expr")
    {
        if (ast.operator === "+")
        {
            return new BigNumber(eval_ast(ast.value1)).plus(eval_ast(ast.value2));
        } else if (ast.operator === "-")
        {
            return new BigNumber(eval_ast(ast.value1)).minus(eval_ast(ast.value2));
        } else if (ast.operator === "*")
        {
            return new BigNumber(eval_ast(ast.value1)).times(eval_ast(ast.value2));
        } else if(ast.operator === "/"){
            return new BigNumber(eval_ast(ast.value1)).div(eval_ast(ast.value2));
        } else if (ast.operator === "**")
        {
            return new BigNumber(eval_ast(ast.value1)).pow(eval_ast(ast.value2));
        }
    }
}

const operator_map = {
    "+": 0,
    "-": 0,
    "*": 1,
    "/": 1,
    "%": 1,
    "**": 2
}

function calc2(expr)
{
    return eval_ast(parser(expr.split(" "))).toFixed();
}

module.exports = calc2