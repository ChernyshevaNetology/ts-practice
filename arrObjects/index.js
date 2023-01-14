"use strict";
{
    let prod;
    prod = {
        name: 'notebook',
        colors: ['red', 'black', 'gray']
    };
    let a;
    const prod2 = {
        name: 'Quest',
        colors: ['purple', 'aqua', 'tomato'],
    };
    const myCountry = {
        country: 'Russia',
        cities: ['Noginsk', 'Serpukhov', 'Uglich'],
    };
    const methodObj = {
        method: (a, b) => 10,
    };
    const stringArrayObj = {
        42: 'Peter',
    };
    const stringArrayArr = ['a', 'b'];
    let obj = {
        name: "Peter"
    };
    let arr = [1, 2, 3];
    // Использовать | нельзя. Использовать generic
    function getKey(arrOrObj, key) {
        return arrOrObj[key];
    }
    console.log(getKey(obj, "name"));
    console.log(getKey(arr, 0));
    function takeTwo(a, b) {
        return [a, b];
    }
    console.log(takeTwo('Peter', 'Sergey Mochalov'));
    console.log(takeTwo(100, 100));
    console.log(takeTwo(null, null));
    console.log(takeTwo(false, true));
    function populateArray(len, elem) {
        return new Array(len).fill(elem);
    }
    console.log(populateArray(100, 'cock'));
    console.log(populateArray(100, 42));
    console.log(populateArray(100, true));
    console.log(populateArray(100, { name: 'Peter' }));
}
