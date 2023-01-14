"use strict";
let testAny;
testAny = 123;
// testAny.toUpperCase(); // может вызывать любые методы без ошибок (а в js будут ошибки)
testAny = 'abc';
const arrAny = [1, 2, 'a', 'gay', null, undefined, false];
let arrTrepachev = [1, '2', '3', 4, 5];
const sergeyArr = [1, 2, 'Oleg'];
let secretVariable;
secretVariable = 3;
secretVariable = 'Peter';
// secretVariable.toUpperCase(); // нельзя вызывать методы у типа unknown в отличие от any
secretVariable.toUpperCase();
var EUserRoles;
(function (EUserRoles) {
    EUserRoles["Guest1"] = "Guest1";
})(EUserRoles || (EUserRoles = {}));
console.log(typeof EUserRoles);
console.log(EUserRoles);
