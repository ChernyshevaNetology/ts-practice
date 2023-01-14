"use strict";
var userOleg = {
    name: 'Oleg',
    age: 33,
    job: 'JS'
};
userOleg.name = 'Peter';
// Initial type:
// {readonly title: string}
const todo = {
    title: "Delete inactive users",
};
console.log(todo);
let friend = 'Peter';
userOleg.name = 123;
let userAndrey = 'Andrew';
const unchangedObj = Object.freeze({
    name: 'Andrew',
    job: 'Developer',
    hobby: 'JS',
    friends: ['Oleg', 'PeterJ'],
});
console.log(unchangedObj);
