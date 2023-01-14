"use strict";
let nameUnion = 'Oleg';
nameUnion = 42;
let testingVar;
let unionVar;
unionVar = 42;
unionVar = null;
let unionVar2;
unionVar2 = true;
unionVar2 = 42;
unionVar2 = 'Oleg';
let ab = true;
// ab = null;
// ab = undefined;
function create(obj) {
    return null;
}
// console.log(create({name: 'Oleg', age: 22}));
const str = 'abc😜abc';
for (const s of str) {
    // console.log(s);
}
const olegInfoFull = {
    name: 'Oleg',
    isEmployed: false,
    hobby: 'Playing guitar',
    isMarried: false,
    friends: ['Peter', 'Sergey'],
    isGay: undefined
};
const peterInfoFull = {
    name: 'Peter',
    isEmployed: true,
    hobby: 'drawing',
    isMarried: false,
    friends: ['Andrew', 'Aikhan'],
    isGay: false,
    job: 'php developer',
};
function getOlegInfo(obj) {
    return obj.name;
}
const PeterJObj = {
    name: 'Peter',
    age: 22,
    isGay: true,
};
const testObj1 = {
    name: 'Oleg',
    age: 24,
    isGay: true,
};
const testObj2 = {
    title: 'Cock',
    age: 22,
};
function isObj1(obj) {
    return Object.keys(obj).length === 3 && 'isGay' in obj;
}
function isObj2(obj) {
    return 'title' in obj;
}
function isObj3(obj) {
    return Object.keys(obj).length === 2 && 'cock' in obj;
}
isObj1({ name: 'Oleg', age: 22, isGay: true });
function getRightInfoUntyped(obj) {
    if (isObj1(obj)) {
        return obj.isGay.valueOf();
    }
    else if (isObj2(obj)) {
        return obj.age;
    }
    else if (isObj3(obj)) {
        return obj.cock;
    }
}
console.log(getRightInfoUntyped({ name: 'Sergey', age: 22, isGay: false }));
console.log(getRightInfoUntyped({ title: 'Sergey', age: 22 }));
console.log(getRightInfoUntyped({ name: 'Sergey', cock: 23 }));
// console.log(getRightInfoUntyped({name: 'Sergey', cock: 22, hasBalls: true}))
// console.log(getRightInfoUntyped(testObj1));
// console.log(getRightInfoUntyped(testObj2));
// console.log(getRightInfoUntyped(testObj3));
