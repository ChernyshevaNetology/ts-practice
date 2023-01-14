let messages = makeMessages();
let typeGuard = (error: string | undefined): error is string => error !== undefined;
let filteredMessages = messages.filter(typeGuard);

let test: string | undefined = undefined;

if (typeGuard(test)) {

}

const setOfErrors = new Set<string>(filteredMessages);

function makeMessages() {
    let vals: (string | undefined)[] = [undefined];
    return vals;
}

console.log(messages);