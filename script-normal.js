const m = require("./worker");
const { performance } = require("perf_hooks");

const s = performance.now();
console.log(m.omoiSyori());
console.log(m.omoiSyori());
console.log(m.omoiSyori());
const e = performance.now();
console.log(`${e - s} ms`);
