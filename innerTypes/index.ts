let date: Date = new Date
// не начинать числа с нуля иначе 8-ричная система исчисления
date = new Date(2022, 0o1, 0o2);

// let date2: Date = new Date(2030, 11, 31)

let reg: RegExp;

let reg2: RegExp = /. + ?/;

let reg3: RegExp = new RegExp('. + ?');

let domEl: HTMLElement | null;

domEl = document.querySelector('.div');

let t = document.querySelector('.div');


let elem2: HTMLDivElement | null = document.querySelector('div');
console.log(elem2);

let nodeList: NodeList = document.querySelectorAll('div');

let tomorrow: Date = new Date(2022, 1, 3);
let testReg: RegExp = /.+?/

let asyncAction: Promise<void> = new Promise((res) => {})
let asyncAction2: Promise<{}> = new Promise((res) => {})

let domElemParam: HTMLElement | null = document.querySelector('p');
let domElemUlAnchor: HTMLUListElement | null = document.querySelector('ul');

let mapEl: Map<string, string> = new Map();
let setEl: Set<any> = new Set();

let nodeCollection: NodeList = document.querySelectorAll('a');

let htmlCollEls: HTMLCollection = document.children;
let htmlCollEls2: HTMLCollection = document.forms;










