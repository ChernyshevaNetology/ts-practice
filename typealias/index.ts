/**
 * Создать тип age который является alias для number
 * и создать функцию, которая принимает age [homework]
 */

type age = number;

function getYearOfBirth(years: age): age {
    const currentYear = new Date().getFullYear();
    return currentYear - years;
}

const PeterAge = getYearOfBirth(39);
console.log(PeterAge)

const user = {
    id: '42',
    name: 'Peter',
    isGay: false,
    salary: 300000,
}

const user2 =  {
    id: '55',
    name: 'Oleg',
    isGay: undefined,
    salary: 200000,
}

type userInfoType = {id: string | number,  name: string, isGay: boolean | undefined, salary: number };

const getUserInfo = (user: userInfoType) => {
   return Object.entries(user);
}

const increaseUserSalary = (user: userInfoType) : number => {
    return user.salary * 2;
}

const addUserSexualInfo = (user: userInfoType) : void => {
    if (user.isGay === undefined) {
        user.isGay = true;
    }
}

let a1: string = '42';
let b1: boolean = true;

let c2: string = a1 + b1;
console.log(c2);

console.log(getUserInfo(user));
console.log(increaseUserSalary(user2));
console.log(addUserSexualInfo(user2));


type str = string;

let nameAlias: str = 'Peter'

type stumber =  string | number;

let nameOrNumber: stumber = 42;
nameOrNumber = 'Peter';

type TNillOrBool = boolean | null;

let testAlias: TNillOrBool = true;
testAlias = null;

type TNillOrBoolUnd = null | boolean | undefined;

let aaa: TNillOrBoolUnd = true;
aaa = null;
aaa = undefined;























