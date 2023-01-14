let testAny: any;
testAny = 123;
// testAny.toUpperCase(); // может вызывать любые методы без ошибок (а в js будут ошибки)
testAny = 'abc';

const arrAny: any[] = [1, 2, 'a', 'gay', null, undefined, false];
let arrTrepachev: any[] = [1, '2', '3', 4, 5];

const sergeyArr: (string | number)[] = [1, 2, 'Oleg'];

let secretVariable: unknown;

secretVariable = 3;
secretVariable = 'Peter';

// secretVariable.toUpperCase(); // нельзя вызывать методы у типа unknown в отличие от any
(<string>secretVariable).toUpperCase()


enum EUserRoles {
   Guest1 = 'Guest1'
}

console.log(typeof EUserRoles);
console.log(EUserRoles);































