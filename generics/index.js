"use strict";
// Generics in function
const getLastItem = (arr) => {
    return arr.pop();
};
const getLastItemGen = (arr) => {
    return arr.pop();
};
const last = getLastItemGen([1, 2, 3]);
const last2 = getLastItemGen(['a', 'b', 'c']);
console.log(last);
const arrayCreator = (n) => {
    return [n];
};
arrayCreator([1]);
const getInitials = (obj) => {
    return Object.assign(Object.assign({}, obj), { initials: obj.firstName + ' ' + obj.lastName });
};
const objPeter = getInitials({ firstName: 'Peter', lastName: 'Zhukov', age: 22 });
console.log(objPeter);
