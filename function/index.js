"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showName = exports.test = void 0;
function getFullName(name, lastName) {
    return name + ' ' + lastName;
}
// console.log(getFullName('Andrew'));
// console.log(getFullName('Andrew', 'Peter', 'Oleg'));
console.log(getFullName('Andrew', 'Bondarev'));
const ObjTitle = {
    title: 42,
};
const objTitle2 = {
    title: 'Peter',
};
function func(first, last) {
    if (last) {
        return first + ' ' + last;
    }
    else {
        return first;
    }
}
console.log(func('Peter'));
console.log(func('Peter', 'Zhukov'));
function displayDate(year, month, day) {
    let yearNumber = year;
    if (yearNumber !== undefined && month !== undefined && day !== undefined) {
        return new Date(yearNumber, month, day);
    }
    else if (year !== undefined && month !== undefined) {
        return new Date(yearNumber, month);
    }
    else if (year) {
        return new Date(yearNumber);
    }
    else {
        return new Date();
    }
}
// необязательные параметры могут стоять только в конце функции и не могут следовать за опциональными параметрами
function test(a, b) {
    return [a, b];
}
exports.test = test;
// let arrTuple: [string?, string] = ['Peter', 'Oleg'];
// console.log(test(1))
// const calcDate = (y, m, d) => new Date(y || new Date().getFullYear(), m || new Date().getMonth(), d || new Date().getDay())
// console.log(displayDate('2022', 2, 1)); // expected
// console.log(displayDate('2022', 3, 3)); // expected
// console.log(displayDate('2020', 2, )); // expected
// console.log(displayDate('2022')); // expected
// console.log(displayDate()); // expected
// console.log(displayDate('2021', 0, 0)); // expected
console.log(displayDate('0000')); // expected
function showName(name, lastName = 'Zhukov') {
    return name + ' ' + lastName;
}
exports.showName = showName;
console.log(showName('Peter'));
console.log(showName('Oleg', 'Markin'));
/**
* Сделайте функцию, которая будет возводить число в заданную степень.
*  Пусть первым параметром функция принимает число, а вторым - степень.
* Пусть второй параметр будет необязательным, и по умолчанию функция возводит число во вторую степень.
**/
function powIt(a, b = 2) {
    return Math.pow(a, b);
}
console.log(powIt(100));
function restParams(...rest) {
    console.log(rest);
}
// console.log(restParams(1, 2, 3, 4, 'a', 'b'));
/*
function getSum(...rest: number[]): number {
    return rest.reduce((a,b) => a + b, 0);
}
*/
const getSum = (...rest) => rest.reduce((a, b) => a + b, 0);
console.log(getSum(1, 2, 3, 4));
let func1;
func1 = function (a, b) {
    return a + b;
};
func1 = function (one, two) {
    return one + two;
};
const addTwoNumber = (a, b) => a + b;
const multiplyTwoNumbers = (a, b) => a * b;
let funcPractice = function (text) {
    alert(text);
};
function result(f) {
}
function add(a, b) {
    return a + b;
}
function pow2(a) {
    return a * 2;
}
result(add);
result(pow2);
const makeSquared = (n) => n ** 2;
function make(n, func) {
    return func(n);
}
console.log(make(10, makeSquared));
console.log(make(10, (n) => Math.pow(n, 3)));
function regFunc(n) {
    return n ** 2;
}
const arrowFunc = (n) => n ** 2;
let func33 = function (num1, num2) {
    return num1 + num2;
};
const arrowTask = (n, n2) => n + n2;
let func44 = function (str) {
    return str.split('');
};
const strSplitter = (str) => str.split('');
console.log(strSplitter('Peter'));
let arr = [1, 2, 3];
let res = arr.map(num => num ** 2);
const tsArr = [1, 2, 3];
const tsRes = arr.map((n) => n ** 2);
