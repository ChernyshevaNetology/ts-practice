"use strict";
let date = new Date;
// не начинать числа с нуля иначе 8-ричная система исчисления
date = new Date(2022, 0o1, 0o2);
// let date2: Date = new Date(2030, 11, 31)
let reg;
let reg2 = /. + ?/;
let reg3 = new RegExp('. + ?');
let domEl;
domEl = document.querySelector('.div');
let t = document.querySelector('.div');
let elem2 = document.querySelector('div');
console.log(elem2);
let nodeList = document.querySelectorAll('div');
let tomorrow = new Date(2022, 1, 3);
let testReg = /.+?/;
let asyncAction = new Promise((res) => { });
let asyncAction2 = new Promise((res) => { });
let domElemParam = document.querySelector('p');
let domElemUlAnchor = document.querySelector('ul');
let mapEl = new Map();
let setEl = new Set();
let nodeCollection = document.querySelectorAll('a');
let htmlCollEls = document.children;
let htmlCollEls2 = document.forms;
