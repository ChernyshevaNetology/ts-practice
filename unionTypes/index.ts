let nameUnion: string | number = 'Oleg';

nameUnion = 42;

// nameUnion = false;

type TUnion1 = {
    name: string;
    age: number;
}

type TUnion2 = {
    title: string;
    age: number;
}

let testingVar: TUnion1 | TUnion2;

let unionVar: number | null;

unionVar = 42;
unionVar = null;


let unionVar2: number | string | boolean;

unionVar2 = true;
unionVar2 = 42;
unionVar2 = 'Oleg';

let ab: boolean = true;
// ab = null;
// ab = undefined;


function create(obj: Object) {
 return null;
}

// console.log(create({name: 'Oleg', age: 22}));



const str = 'abc😜abc';

for (const s of str) {
    // console.log(s);
}


/*

    1. Разобраться со strict, на что влияет?
    2. Тип object, пример функции, которая принимает object, что туда можно передавать?
    3. union типы - какие свойства будут доступны, если у нас есть 2 объекта с некоторыми разными свойствами,
    например age есть везде, а name - не везде, т.е. какие свойства будут доступны?

*/

type TPeterInfoFull = {
    name: string;
    isEmployed: boolean;
    hobby: string;
    isMarried: boolean;
    friends: Array<string>;
    isGay: boolean | undefined;
}

type TFriendsType = TPeterInfoFull;

const olegInfoFull = {
    name: 'Oleg',
    isEmployed: false,
    hobby: 'Playing guitar',
    isMarried: false,
    friends: ['Peter', 'Sergey'],
    isGay: undefined
};

const peterInfoFull = {
    name: 'Peter',
    isEmployed: true,
    hobby: 'drawing',
    isMarried: false,
    friends: ['Andrew', 'Aikhan'],
    isGay: false,
    job: 'php developer',
}


function getOlegInfo(obj: TPeterInfoFull) {
   return obj.name;
}

type TObj1 = {
    name: string;
    age: number;
    isGay: boolean;
}

type TObj2 = {
    title: string;
    age: number;
}

type TObj3 = {
    name: string;
    cock: number;
}

const PeterJObj: TObj1 | TObj2 = {
    name: 'Peter',
    age: 22,
    isGay: true,
}

const testObj1: TObj1 = {
    name: 'Oleg',
    age: 24,
    isGay: true,
}


const testObj2: TObj2 = {
    title: 'Cock',
    age: 22,
}

function isObj1(obj: TObj1 | TObj2 | TObj3 ): obj is TObj1 {
   return Object.keys(obj).length === 3 && 'isGay' in obj;
}

function isObj2(obj: TObj1 | TObj2 | TObj3 ): obj is TObj2 {
    return 'title' in obj
}

function isObj3(obj: TObj1 | TObj2 | TObj3 ): obj is TObj3 {
    return Object.keys(obj).length === 2 && 'cock' in obj;
}

isObj1({name: 'Oleg', age: 22, isGay: true})

function getRightInfoUntyped(obj: TObj1 | TObj2 | TObj3) {
    if (isObj1(obj)) {
        return obj.isGay.valueOf();
    } else if (isObj2(obj)) {
        return obj.age;
    } else if (isObj3(obj)) {
        return obj.cock;
    }
}


console.log(getRightInfoUntyped({name: 'Sergey', age: 22, isGay: false}))
console.log(getRightInfoUntyped({title: 'Sergey', age: 22}))
console.log(getRightInfoUntyped({name: 'Sergey', cock: 23}))
// console.log(getRightInfoUntyped({name: 'Sergey', cock: 22, hasBalls: true}))


 // console.log(getRightInfoUntyped(testObj1));
 // console.log(getRightInfoUntyped(testObj2));
 // console.log(getRightInfoUntyped(testObj3));



