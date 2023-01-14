"use strict";
// function func(a: number, b: number): number {
//     return a + b;
// }
//
// function sum(x: number, y: number): number {
//     return x + y;
// }
//
// console.log(sum(42, 8));
// function sum(arr: Array<number>): number {
//     let res: number = 0;
//
//     for (let num of arr) {
//         res += num;
//     }
//
//     return res;
// }
//
// console.log(sum([1, 2, 3]));
const olegInfo = {
    name: 'Oleg',
    age: 33,
    isGay: false,
};
const peterInfo = {
    name: 'Peter',
    age: 33,
    isGay: false,
    isEmployed: true,
};
// function changeIsGay(param: typeof olegInfo): void {
//      param.isGay = !param.isGay;
// }
function changeIsGay(param) {
    param.isGay = !param.isGay;
}
console.log(changeIsGay(olegInfo));
// console.log(olegInfo);
function func1() {
}
function func2() {
    return undefined;
}
console.log(func1());
console.log(func2());
// написать функцию, которая возвращает void и написать в ней все возможные ретурны
let test222 = (func) => void {};
console.log(test222((name222) => { return 3; }));
let peterObj = {
    name: "Peter",
    age: 42
};
function printName(obj) {
    console.log(peterObj.name);
}
/*
* - функция типизирована? Ведь объекты в typescript автоматически типизируются.
- написать типизированную функцию changeName(peterObj) - добавляет "!" к имени пользователя.
* */
