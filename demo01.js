const {calc, calc_util} = require("a-calc")
const calc_easy = require("calc-easy")
const {evaluate: mathjs} = require("mathjs")
const {evaluate: decimal_eval} = require("decimal-eval")
const calcjs = require('calc.js');
const Mexp = require("math-expression-evaluator")
const calculate = require("calc-expression").default;

const evaluator = require("evaluator.js")

let mexp = new Mexp();

const nerdamer = require("nerdamer")


function ncalc(expr)
{
    return nerdamer(expr).text()
}

function mcalc(expr)
{
    return mexp.eval(expr)
}


const ECalc = require('expression-calculator');

function ecalc(expr)
{
    return new ECalc().compile(expr).calc()
}

const {calc: calc2_1} = require("./a-calc2-1.js")
const {calc: calc2_2} = require("./a-calc2_2.js")
// tokens 使用。。。
const {calc: calc2_3} = require("./a-calc2_3.js")
// tokens 使用 expr.replace(/([()])/g," $1 ").split(/\s+/)
const {calc: calc2_4} = require("./a-calc2_4.js")
// tokens 使用 expr.replace(/([()])/g," $1 ").split(" ")
const {calc: calc2_5} = require("./a-calc2_5.js")
// tokens split之后while循环
const {calc: calc2_6} = require("./a-calc2_6.js")
// 调整while循环
const {calc: calc2_7} = require("./a-calc2_7.js")
// 重写tokenizer
const {calc: calc2_8} = require("./a-calc2_8.js")
// eval_ast去除
const {calc: calc2_9} = require("./a-calc2_9.js")
// 添加memo两数记忆功能
const {calc: calc2_10} = require("./a-calc2_10.js")
// 不带memo
const {calc: calc2_11} = require("./a-calc2_11.js")
// 2_11 带memo
const {calc: calc2_11memo} = require("./a-calc2_11memo.js")
// 2——12 tokenizer 优化，函数提到外面
const {calc: calc2_12} = require("./a-calc2_12.js")
// 2_13 状态改为硬编码
const {calc: calc2_13} = require("./a-calc2_13.js")
// 2——14 状态提升为常量
const {calc: calc2_14} = require("./a-calc2_14.js")
// 参数传递改成特定变量
const {calc: calc2_15} = require("./a-calc2_15.js")
// token-parser 小优化，去除对tokens的操作，直接改成索引取值
const {calc: calc2_16} = require("./a-calc2_16.js")
// 2-17 将 tokenizer_split 中的 数组 shift方法去除了，提升性能
const {calc: calc2_17} = require("./a-calc2_17.js")
// 去除split模式的正则表达式部分
const {calc: calc2_18} = require("./a-calc2_18test.js")
// 2_19 space模式严格要求空格
const {calc: calc2_19} = require("./a-calc2_19.js")
// 2_20 优化数字识别性能
const {calc: calc2_20} = require("./a-calc2_20.js")
// 2——21 tokenizer_split 数组查询换成set
const {calc: calc2_21} = require("./a-calc2_21.js")
// 2-22 增加了 space-all 模式，小调整了space模式处理()的逻辑
const {calc: calc2_22} = require("./a-calc2_22.js")
// 2-24 tokenizer-space第一次编写
const {calc: calc2_24} = require("./a-calc2_24.js")
// 2-25 tokenizer-space 优化，去除push-token
const {calc: calc2_25} = require("./a-calc2_25.js")
// 2-26 tokenizer 增强对单位模式 % 的识别能力
const {calc: calc2_26} = require("./a-calc2_26.js")
// 2-27 修改常规tokenizer
const {calc: calc2_27} = require("./a-calc2_27test.js")
// 2-28回到常规的tokenizer 加强配置获取；逻辑
const {calc: calc2_28} = require("./a-calc2_28.js")
// 2-29 带memo功能
const {calc: calc2_29} = require("./a-calc2_29.js")
// 2-30 calc 带memo
const {calc: calc2_30} = require("./a-calc2_30.js")
// 2-31 缓存ast
const {calc: calc2_31} = require("./a-calc2_31.js")
// 2-32 缓存calc整体结果
const {calc: calc2_32} = require("./a-calc2_32.js")
// 2-33 还原成只缓存token,对key添加了前缀
const {calc: calc2_33} = require("./a-calc2_33.js")
// 2-34 去除缓存key的前缀
const {calc: calc2_34} = require("./a-calc2_34.js")
// 2-35 还原第一次完成
const {calc: calc2_35} = require("./a-calc2_35.js")
// 2-36 默认缓存
const {calc: calc2_36} = require("./a-calc2_36.js")
// 2-37 默认缓存并且calc默认缓存
const {calc: calc2_37} = require("./a-calc2_37.js")
// 2-38 默认缓存并calc缓存
const {calc: calc2_38} = require("./a-calc2_38.js")
// 2-39 完全没有缓存的版本，不保留ast
const {calc: calc2_39} = require("./a-calc2_39.js")
// 2-40 完全分离缓存 完善ts类型
const {calc: calc2_40, calc_memo: calc_memo2_40} = require("./a-calc2_40.js")
// 2-41 优化填充tokens判断，避免不必要的填充
const {calc: calc2_41, calc_memo: calc_memo2_41} = require("./a-calc2_41.js")
// 2-42 改造了calc和parse_args函数，大改
const {calc: calc2_42, calc_memo: calc_memo2_42} = require("./a-calc2_42.js")
// 2-43 分离_error的处理
const {calc: calc2_43, calc_memo: calc_memo2_43} = require("./a-calc2_43.js")

// 2.0.0正式版
const {calc: calc2, calc_memo: calc_memo2} = require("./a-calc2.0.0.js")


// 测速函数
const times = 200000;

const params_out = [
    [`1 + 1 + ${Math.random()}`],
    [`1 + 2 - 3 / 6 * 8 * ${Math.random()}`],
    [`1 / ( 1 - ${Math.random()} ) + 8 - ${Math.random()} * 2 / ( 7 * 8 )`],
    [`1 + ( 2 * ( 3 + ( 9 * ${Math.random()} ) ) )`],
    [`1.145364565464546 + 2.88992123 + 6 * ${Math.random()} - ( 8 - 6.00002342 ) / ( 20 + 3.234253453 ) * ( 88 - 98 ) * 999.3453536339 / 8888.234299543342324 * 6 + ( 777 - 88 ) * ( 96 - 3 )`]
]

function test_speed(calc_fn, print_name, inner_param)
{
    try
    {
        const params = params_out.map(item => [...item])
        if (inner_param !== undefined)
        {
            params.forEach(item => item.push(inner_param))
        }
        const start = new Date().getTime();
        for (let i = 0; i < times; i++)
        {
            calc_fn(...params[0])
            calc_fn(...params[1])
            calc_fn(...params[2])
            calc_fn(...params[3])
            calc_fn(...params[4])
        }
        const end = new Date().getTime();
        console.log(`${print_name}用时: ${calc2_40(end - start, {_fmt: ','})}`)
    }catch (e)
    {
        console.log(`${print_name}计算狗带了！`)
    }

}

console.log(`--------------${calc2(times * 5,{_fmt: ","})}次计算结果--------------`)
test_speed(calc, "a-calc1.x")
// test_speed(calc2_1, "calc2_1常规模式")
// test_speed(calc2_2, "calc2_2常规模式")
// test_speed(calc2_3, "calc2_3常规模式")
// test_speed(calc2_4, "calc2_4常规模式")
// test_speed(calc2_5, "calc2_5常规模式")
// test_speed(calc2_6, "calc2_6常规模式")
// test_speed(calc2_7, "calc2_7常规模式")
// test_speed(calc2_8, "calc2_8常规模式")
// test_speed(calc2_9, "calc2_9常规模式")
// test_speed(calc2_10, "calc2_10常规模式memo")
// test_speed(calc2_11, "calc2_11常规模式")
// test_speed(calc2_11memo, "calc2_11常规模式memo")
// test_speed(calc2_12, "calc2_12常规模式")
// test_speed(calc2_13, "calc2_13常规模式")
// test_speed(calc2_14, "calc2_14常规模式")
// test_speed(calc2_15, "calc2_15常规模式")
// test_speed(calc2_16, "calc2_16常规模式")
// test_speed(calc2_17, "calc2_17常规模式")
// test_speed(calc2_18, "calc2_18常规模式")
// test_speed(calc2_19, "calc2_19常规模式")
// test_speed(calc2_20, "calc2_20常规模式")
// test_speed(calc2_21, "calc2_21常规模式")
// test_speed(calc2_22, "calc2_22常规模式")
// test_speed(calc2_24, "calc2_24常规模式")
// test_speed(calc2_25, "calc2_25常规模式")
// test_speed(calc2_26, "calc2_26常规模式")
// test_speed(calc2_27, "calc2_27常规模式")
// test_speed(calc2_28, "calc2_28常规模式")
// test_speed(calc2_29, "calc2_29常规模式")
// test_speed(calc2_29, "calc2_29常规模式memo", {_memo: true})
// test_speed(calc2_30, "a-calc2.30常规模式")
// test_speed(calc2_30, "a-calc2.30常规模式memo", {_memo: true})
// test_speed(calc2_31, "a-calc2.31常规模式")
// test_speed(calc2_31, "a-calc2.31常规模式memo", {_memo: true})
// test_speed(calc2_32, "a-calc2.32常规模式")
// test_speed(calc2_32, "a-calc2.32常规模式memo", {_memo: true})
// test_speed(calc2_33, "a-calc2.33常规模式")
// test_speed(calc2_33, "a-calc2.33常规模式memo", {_memo: true})
// test_speed(calc2_34, "a-calc2.34常规模式")
// test_speed(calc2_34, "a-calc2.34常规模式memo", {_memo: true})
// test_speed(calc2_35, "a-calc2.35常规模式")
// test_speed(calc2_35, "a-calc2.35常规模式memo", {_memo: true})
// test_speed(calc2_36, "a-calc2.36常规模式")
// test_speed(calc2_37, "a-calc2.37常规模式")
// test_speed(calc2_38, "a-calc2.38常规模式")
// test_speed(calc2_39, "a-calc2.39常规模式")
// test_speed(calc2_40, "a-calc2.40常规模式")
// test_speed(calc_memo2_40, "a-calc2.40 memo常规模式")
// test_speed(calc2_41, "a-calc2.41常规模式")
// test_speed(calc_memo2_41, "a-calc2.41 memo常规模式")
// test_speed(calc2_42, "a-calc2.42常规模式")
// test_speed(calc_memo2_42, "a-calc2.42 memo常规模式")
// test_speed(calc2_43, "a-calc2.43常规模式")
// test_speed(calc_memo2_43, "a-calc2.43 memo常规模式")
test_speed(calc2, "a-calc2.0.0常规模式")
test_speed(calc_memo2, "a-calc2.0.0 memo常规模式")
// test_speed(calc2_1, "calc2_1 space模式", {_mode: "space"})
// test_speed(calc2_2, "calc2_2 space模式", {_mode: "space"})
// test_speed(calc2_3, "calc2_3 space模式", {_mode: "space"})
// test_speed(calc2_4, "calc2_4 space模式", {_mode: "space"})
// test_speed(calc2_5, "calc2_5 space模式", {_mode: "space"})
// test_speed(calc2_6, "calc2_6 space模式", {_mode: "space"})
// test_speed(calc2_7, "calc2_7 space模式", {_mode: "space"})
// test_speed(calc2_8, "calc2_8 space模式", {_mode: "space"})
// test_speed(calc2_9, "calc2_9 space模式", {_mode: "space"})
// test_speed(calc2_10, "calc2_10 space模式memo", {_mode: "space"})
// test_speed(calc2_11, "calc2_11 space模式", {_mode: "space"})
// test_speed(calc2_11memo, "calc2_11 space模式memo", {_mode: "space"})
// test_speed(calc2_12, "calc2_12 space模式", {_mode: "space"})
// test_speed(calc2_13, "calc2_13 space模式", {_mode: "space"})
// test_speed(calc2_14, "calc2_14 space模式", {_mode: "space"})
// test_speed(calc2_15, "calc2_15 space模式", {_mode: "space"})
// test_speed(calc2_16, "calc2_16 space模式", {_mode: "space"})
// test_speed(calc2_17, "calc2_17 space模式", {_mode: "space"})
// test_speed(calc2_18, "calc2_18 space模式", {_mode: "space"})
// test_speed(calc2_19, "calc2_19 space模式", {_mode: "space"})
// test_speed(calc2_20, "calc2_20 space模式", {_mode: "space"})
// test_speed(calc2_21, "calc2_21 space模式", {_mode: "space"})
// test_speed(calc2_22, "calc2_22 space模式", {_mode: "space"})
// test_speed(calc2_24, "calc2_24 space模式", {_mode: "space"})
// test_speed(calc2_25, "calc2_25 space模式", {_mode: "space"})
// test_speed(calc2_26, "calc2_26 space模式", {_mode: "space"})
// test_speed(calc2_27, "calc2_27 space模式", {_mode: "space"})
// test_speed(calc2_28, "calc2_28 space模式", {_mode: "space"})
// test_speed(calc2_29, "calc2_29 space模式", {_mode: "space"})
// test_speed(calc2_29, "calc2_29 space模式memo", {_mode: "space", _memo: true})
// test_speed(calc2_30, "a-calc2.x space模式", {_mode: "space"})
// test_speed(calc2_30, "a-calc2.x space模式memo", {_mode: "space", _memo: true})
// test_speed(calc2_31, "a-calc2.31 space模式", {_mode: "space"})
// test_speed(calc2_31, "a-calc2.31 space模式memo", {_mode: "space", _memo: true})
// test_speed(calc2_32, "a-calc2.32 space模式", {_mode: "space"})
// test_speed(calc2_32, "a-calc2.32 space模式memo", {_mode: "space", _memo: true})
// test_speed(calc2_33, "a-calc2.33 space模式", {_mode: "space"})
// test_speed(calc2_33, "a-calc2.33 space模式memo", {_mode: "space", _memo: true})
// test_speed(calc2_34, "a-calc2.34 space模式", {_mode: "space"})
// test_speed(calc2_34, "a-calc2.34 space模式memo", {_mode: "space", _memo: true})
// test_speed(calc2_35, "a-calc2.35 space模式", {_mode: "space"})
// test_speed(calc2_35, "a-calc2.35 space模式memo", {_mode: "space", _memo: true})
// test_speed(calc2_36, "a-calc2.36 space模式", {_mode: "space"})
// test_speed(calc2_37, "a-calc2.37 space模式", {_mode: "space"})
// test_speed(calc2_38, "a-calc2.38 space模式", {_mode: "space"})
// test_speed(calc2_39, "a-calc2.39 space模式", {_mode: "space"})
// test_speed(calc2_40, "a-calc2.40 space模式", {_mode: "space"})
// test_speed(calc_memo2_40, "a-calc2.40 space memo模式", {_mode: "space"})
// test_speed(calc2_41, "a-calc2.41 space模式", {_mode: "space"})
// test_speed(calc_memo2_41, "a-calc2.41 space memo模式", {_mode: "space"})
// test_speed(calc2_42, "a-calc2.42 space模式", {_mode: "space"})
// test_speed(calc_memo2_42, "a-calc2.42 space memo模式", {_mode: "space"})
// test_speed(calc2_43, "a-calc2.43 space模式", {_mode: "space"})
// test_speed(calc_memo2_43, "a-calc2.43 space memo模式", {_mode: "space"})
test_speed(calc2, "a-calc2.0.0 space模式", {_mode: "space"})
test_speed(calc_memo2, "a-calc2.0.0 space memo模式", {_mode: "space"})
test_speed(mcalc, "math-expression-evaluator")
test_speed(mathjs, "mathjs")
test_speed(decimal_eval, "decimal_eval")
test_speed(ncalc, "nerdamer")
test_speed(evaluator, "evaluator.js")
test_speed(calculate, "calc-expression")
test_speed(ecalc, "expression-calculator")
test_speed(calcjs, "calc.js")
test_speed(calc_easy, "calc-easy")


// const start = new Date().getTime();
// for(let i=0;i<500000;i++)
// {
//     calc2_38(`a * (b-c) / d + e - f * g}`, {a: 1, b: 2, c: 1, d: 0.8, e: 9, f: 10, g: 88, _memo: false})
// }
// const end = new Date().getTime();
// console.log(end-start)