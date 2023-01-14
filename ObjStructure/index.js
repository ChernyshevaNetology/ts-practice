"use strict";
{
    let user;
    user = { name: 'Peter', age: 22, isGay: false };
    let user2 = { name: 'Oleg', age: 20 };
    // user.name = 123;
    // user.name = 'Aikhan'
    let tuple = ['Oleg', 22];
    let user3 = { name: 'Oleg', isGay: undefined };
    user3.age = 33;
    console.log(user3);
    const employee = {
        name: 'Peter',
        position: 'Senior Php developer',
        department: 'Korablik'
    };
    const employee2 = {
        name: 'Oleg',
        position: 'Marketing specalist',
    };
    const employeeTuple = ['Peter', 'php dev', 'Korablik LLC'];
    employeeTuple[2] = 'Yandex';
}
