let m = new Map([])
m.set("a", 1)
m.set("b", 2)
m.set("c", 3)
m.set("d", 4)

const kvs = Array.from(m.entries()).sort((a,b) => a[1] - b[1])

console.log(kvs)