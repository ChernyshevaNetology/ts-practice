"use strict";
let messages = makeMessages();
let typeGuard = (error) => error !== undefined;
let filteredMessages = messages.filter(typeGuard);
let test = undefined;
if (typeGuard(test)) {
}
const setOfErrors = new Set(filteredMessages);
function makeMessages() {
    let vals = [undefined];
    return vals;
}
console.log(messages);
