"use strict";
// function extend<T, U>(first: T, second: U): T & U {
//     let result = <T & U>{};
//     for (let id in first) {
//         (<any>result)[id] = (<any>first)[id];
//     }
//     for (let id in second) {
//         if (!result.hasOwnProperty(id)) {
//             (<any>result)[id] = (<any>second)[id];
//         }
//     }
//     return result;
// }
//
// class Person {
//     constructor(public name: string) {
//     }
// }
//
// interface Loggable {
//     log(): void;
//     printName(): void;
// }
//
// class ConsoleLogger implements Loggable {
//     log() {
//         // ...
//     }
//     printName(){}
// }
//
// var jim = extend(new Person("Jim"), new ConsoleLogger());
// jim.
// var n = jim.name;
// jim.log();
