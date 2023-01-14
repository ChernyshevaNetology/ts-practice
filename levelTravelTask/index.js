"use strict";
function setProp(obj, propName, value) {
    return Object.assign(Object.assign({}, obj), { [propName]: value });
}
const student = {
    name: 'Peter',
    age: 22,
};
console.log(setProp(student, 'Peter', 'Oleg')); // no error
console.log(setProp(student, 'surname', 'new Name')); // no error
console.log(setProp(student, 'age', 'new Name')); // no error
