/*
const a12 = ['a', 'b', 'c']

for (let i = 0; i < a12.length; i++) {
    console.log(i);
}

const arr10: Array<number> = [1, 2, 3, 4, 5];

for (const elem of arr10) {
    console.log(elem);
}

const loopObj = {
    name: 'Peter',
    job: 'php'
}

for (const item in loopObj) {
    console.log(item);
}

 */


// let res: number = 0;
//
// for (let i:number = 0; i < 100; i++) {
//     res += i;
// }
//
// console.log(res);

let obj: {[key: string]: number} = {a: 1, b: 2, c: 3, 0: 3};
let res: number = 0;

for (let key in obj) {
    let elem = obj[key];
    res += elem;
}

console.log(res);




// homework

const olegName: string = 'Oleg';
const age: number = 33;
const isOlegGay: boolean = false;

console.log(olegName, age, isOlegGay);

export const currencyOptions = {
    USD: '$',
    EUR: '€',
    CAD: 'CAD',
}

type Key = keyof typeof currencyOptions;

const code = 'USD'
const code33 = 'RUB';

function getCurrency(code: Key): string {
    return currencyOptions[code];
}

console.log(getCurrency('USD'));
console.log(getCurrency('CAD'));









