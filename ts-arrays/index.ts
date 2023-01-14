/*
const arr: string[] = ['Peter', 'Oleg', 'Sergey'];

console.log(arr);

let arr2: number[]  = [1, 2, 3, 4, 5];
*/

const arr: Array<string> = ['Oleg', 'Ophelia', 'Sergey', 'Peter'];

const arr2: Array<number> = [1, 2, 3, 4, 5];

type Person = {name: string, age: number };
type Monkey = { title: string, age: number };
type Animal = Person | Monkey;


function makePet(): Animal {
    return {
        name: 'Pet1',
        age: 7,
    }
}

const pet: Animal = makePet();

const collection: Person[] = [
    {
      name: 'Oleg',
      age: 30,
    },
    {
     name: 'Peter',
     age: 27,
    }
]

interface Bird {
    fly(): void,
    getName(): string
}

interface Fish {
    swim(): void,
    getName(): string
}


//
// let myObject: Bird & Fish = {
//     // fly: function (): void {
//     //     console.log('I am flying')
//     // },
//     swim: function (): void {
//         console.log('I am swimming')
//     },
//     getName: function (): string {
//         return 'Peter'
//     }
// }
