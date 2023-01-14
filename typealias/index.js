"use strict";
/**
 * Создать тип age который является alias для number
 * и создать функцию, которая принимает age [homework]
 */
function getYearOfBirth(years) {
    const currentYear = new Date().getFullYear();
    return currentYear - years;
}
const PeterAge = getYearOfBirth(39);
console.log(PeterAge);
const user = {
    id: '42',
    name: 'Peter',
    isGay: false,
    salary: 300000,
};
const user2 = {
    id: '55',
    name: 'Oleg',
    isGay: undefined,
    salary: 200000,
};
const getUserInfo = (user) => {
    return Object.entries(user);
};
const increaseUserSalary = (user) => {
    return user.salary * 2;
};
const addUserSexualInfo = (user) => {
    if (user.isGay === undefined) {
        user.isGay = true;
    }
};
let a1 = '42';
let b1 = true;
let c2 = a1 + b1;
console.log(c2);
console.log(getUserInfo(user));
console.log(increaseUserSalary(user2));
console.log(addUserSexualInfo(user2));
let nameAlias = 'Peter';
let nameOrNumber = 42;
nameOrNumber = 'Peter';
let testAlias = true;
testAlias = null;
let aaa = true;
aaa = null;
aaa = undefined;
