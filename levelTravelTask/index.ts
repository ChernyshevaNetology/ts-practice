function setProp<T, K extends keyof T>(obj: T, propName: K, value: T[K]) {
    return {
        ...obj,
        [propName]: value,
    }
}

// example
interface IStudent {
    name: string;
    age: number;
}

const student: IStudent = {
    name: 'Peter',
    age: 22,
}

console.log(setProp<IStudent>(student, 'name', 'Oleg')); // no error
console.log(setProp<IStudent>(student, 'surname', 'new Name')); // no error
console.log(setProp<IStudent>(student, 'age', 33)); // no error