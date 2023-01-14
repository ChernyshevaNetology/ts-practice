

const filter = <T, K>(arr: T[], fn: K) => arr.filter(fn);

console.log(filter([{v: 1}, {v: 2}, {v: 3}], item => item.v > 2));

console.log(filter([1,2,3], item => item > 2));