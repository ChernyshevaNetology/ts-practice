let userTuple: [string, number] = ['Peter', 22];
userTuple[0] = 'Oleg';
// userTuple[3];

console.log(userTuple[0]);
console.log(userTuple[1]);

let dateTuple: [number, number];
let dateNameType: [number, string];
let extendedTyple: [number, number, number];

userTuple[1] = 35;
// userTuple[0] = true;

let time: [number, number, number] = [12, 59, 59];
time[0] = 13;
console.log(time);

let peterInfo222: readonly [string, boolean] = ['Peter', true];
// peterInfo222[0] = 'Oleg';

const aikhanInfo: [string, number] = ['Aikhan', 19];

let peterIsGay = false;
// A required element cannot follow an optional element опциональные элементы могут идти только с конца массива
let peterSomeInfo: [string, number, boolean?] = ['Peter', 22, true];
peterSomeInfo[2] = peterIsGay;
console.log(peterSomeInfo);

let dateObj: [number, number?, number?] = [1, 2, 3];


let timeTupleTask: [number, number, number] = [12, 59, 59];

let [hour, minute, second] = timeTupleTask;

let endlessTuple: [string, ...number[]] = ['Peter', 1,2,3,4,54,5,6];
endlessTuple[100] = 100;

/***************** HOMEWORK ********************/

// 1 Declaring a typle

const serhioInfo: [string, number] = ['Sergey', 22];

// Changing data in a tuple

serhioInfo[0] = 'Oleg';
serhioInfo[1] = 21;

// readonly tuple

let peterData = {
    heroName: 'Peter',
    hobby: 'drawing cocks',
    age: 24,
}

const { heroName, hobby, age } = peterData;

const peterJInfo: readonly [string, string, number] = [  heroName, hobby, age ];

// trying to change tuple item data will cause an error

// peterJInfo[1] = 'drawing tight pussies';

// non-required tuple elements

const oledgioInfo:  [string, number, string?] = ['Olegio', 29];
oledgioInfo[2] = 'swift';

// destructure a tuple

const [ olegName, olegAge, olegHobby ] = oledgioInfo;

console.log('элементы подвергнутые деструктуризации', olegName, olegAge, olegHobby);

// Filling a tuple with endless sets of data

const numsData: Array<number> = [...new Array(300).keys()].slice(1);


const opheliBaurInfo: [string, string, ...number[]] = ['Ophelia', 'SberTech', ...numsData];
console.log(opheliBaurInfo);

































