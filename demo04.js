const get = require("lodash/get")
const {get: get_r} = require("radash")
const {get: get_u} = require("underscore")


function get2(obj, path_str, default_value = undefined)
{

    if(obj === null || obj === undefined) return;
    const path_arr = path_str.replace(/['"]/g, "").split(/[.\[\]]/);
    let ret = obj;

    for(item of path_arr)
    {
        if(item === "") continue;
        ret = ret[item]
    }

    return ret;

}


const obj = {
    a: {
        b: [{c: 10}, 2, 3, 4, 5]
    }
}


const start = new Date().getTime();
const count = 100000;

// console.log(get_u(obj, "a"))
// console.log(get(obj, ["a", "b", 0, "c"]))

for (let i = 0; i < count; i++)
{
    get(obj, ["a", "b", 0, "c"])
}

const end = new Date().getTime();

console.log(end - start)