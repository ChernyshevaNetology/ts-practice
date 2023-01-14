

// Generics in function

const getLastItem = (arr: Array<number>): number | undefined => {
    return arr.pop();
}

const getLastItemGen = <T>(arr: Array<T>): T | undefined => {
    return arr.pop();
}

const last = getLastItemGen<number>([1, 2, 3]);

const last2 = getLastItemGen<string>(['a', 'b', 'c']);

console.log(last);


const arrayCreator = <T>(n: T): T[] => {
    return [n];
}

arrayCreator([1]);

const getInitials = <T extends {firstName: string, lastName: string}>(obj: T) => {
    return {
        ...obj,
        initials: obj.firstName + ' ' + obj.lastName
    }
}

const objPeter = getInitials({firstName: 'Peter', lastName: 'Zhukov', age: 22});
console.log(objPeter);














