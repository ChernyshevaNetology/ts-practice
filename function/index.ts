function getFullName(name: string, lastName: string): string {
    return name + ' ' + lastName;
}

// console.log(getFullName('Andrew'));
// console.log(getFullName('Andrew', 'Peter', 'Oleg'));
console.log(getFullName('Andrew' ,'Bondarev'));



// Функция принимает 1 параметр: n: number, а возвращает T, надо просто возвратить n и сконвертировать n в T.

// function converter<T>(n: number): T {
//     return n as unknown<T>;
// }

// function converter2<T>(n: number): T {
//     return <un>n;
// }

// Сделать интерфейс с дженериком. Где есть поле title, которое может быть string,
// number Без и т.д.. Сделать на джерерике.

// interface ITitle<T extends  number, K extends string> {
//     title: T | K;
//     age?: number;
//     expired?: boolean;
// }
//
interface ITitle<T extends (number | string)> {
    title: T
}

const ObjTitle: ITitle<number> = {
    title: 42,
}

const objTitle2: ITitle<string> = {
    title: 'Peter',
}



function func(first: string, last?: string) {
    if (last) {
        return first + ' ' + last;
    } else {
        return first;
    }
}

console.log(func('Peter'))
console.log(func('Peter', 'Zhukov'))


function displayDate(year?: string, month?: number, day?: number): Date{
    let yearNumber: number = year as unknown as number

  if (yearNumber !== undefined && month !== undefined && day !== undefined) {
      return new Date(yearNumber, month, day);
  } else if (year !== undefined && month !== undefined) {
      return new Date(yearNumber, month);
  } else if (year) {
      return new Date(yearNumber);
  } else {
      return new Date();
  }
}

// необязательные параметры могут стоять только в конце функции и не могут следовать за опциональными параметрами
export function test(a?: number, b?: number) {
    return [a, b];
}

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


export function showName(name: string, lastName: string = 'Zhukov') {
    return name + ' ' + lastName;
}

console.log(showName('Peter'));
console.log(showName('Oleg', 'Markin'));

/**
* Сделайте функцию, которая будет возводить число в заданную степень.
*  Пусть первым параметром функция принимает число, а вторым - степень.
* Пусть второй параметр будет необязательным, и по умолчанию функция возводит число во вторую степень.
**/


function powIt(a: number, b: number = 2): number {
    return Math.pow(a, b);
}

console.log(powIt(100));


function restParams(...rest: number[]) {
    console.log(rest);
}

// console.log(restParams(1, 2, 3, 4, 'a', 'b'));

/*
function getSum(...rest: number[]): number {
    return rest.reduce((a,b) => a + b, 0);
}
*/

const getSum = (...rest: number[]): number => rest.reduce((a,b) => a + b, 0);

console.log(getSum(1, 2, 3, 4));


let func1: (x: number, y: number) => number;

func1 = function(a: number, b: number): number {
    return a + b;
};

func1 = function(one: number, two: number): number {
    return one + two;
};


type getSumFunc = (a: number, b: number) => number;

const addTwoNumber: getSumFunc = (a, b) => a + b;
const multiplyTwoNumbers: getSumFunc = (a, b) => a * b;


let funcPractice: (a: string) => void = function(text) {
    alert(text);
};


function result<T>(f: T) {

}

function add(a: number, b: number): number {
    return a+b
}

function pow2(a: number): number {
    return a * 2
}

result<(a: number, b: number) => number>(add);
result<(a: number) => number>(pow2);



const makeSquared = (n: number): number => n ** 2;

function make(n: number, func: (a: number) => number): number {
    return func(n);
}

console.log(make(10, makeSquared));
console.log(make(10, (n: number): number => Math.pow(n, 3)));


function regFunc(n: number): number {
    return n**2;
}

const arrowFunc = (n: number): number => n ** 2;

let func33 = function(num1: number, num2: number): number {
    return num1 + num2;
}

const arrowTask = (n: number, n2: number): number => n + n2;

let func44 = function(str: string): string[] {
    return str.split('');
}

const strSplitter = (str: string): string[] => str.split('');

console.log(strSplitter('Peter'));


let arr = [1, 2, 3];
let res = arr.map(num => num ** 2);

const tsArr: number[] = [1, 2, 3];

const tsRes: number[] = arr.map((n: number): number => n**2);
































