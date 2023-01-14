"use strict";
{
    const arr = [];
    arr.push({ name: 'Peter', age: 22 });
    // arr.push({name: 'Oleg', city: 'Serpukhov'})
    let arrDates = [];
    arrDates.push(new Date(2030, 11, 31));
    arrDates.push(new Date(2020, 11, 31));
    const domArr = [];
    const nodeItem = document.querySelector('div');
    domArr.push(nodeItem);
    let regExpression = new RegExp(/\s/g, '');
    let arrWithRegs = [];
    arrWithRegs.push(regExpression);
    const typedPromise = new Promise((res, rej) => res());
    const arrWithPromises = [];
    arrWithPromises.push(typedPromise);
    const worker1 = {
        name: 'Peter',
        salary: 240000,
        position: 'Senior PHP Developer',
        department: 'Korablik LLC',
        isOnVacation: true,
    };
    const workersArray = [];
    workersArray.push(worker1);
}
