var userOleg: { name: string | number, age: number, readonly job: string } = {
    name: 'Oleg',
    age: 33,
    job: 'JS'
}

userOleg.name = 'Peter';
// userOleg.job = 'Swift'

interface Todo {
    title: string;
}

type TParticalTodo = Partial<Todo>
// Initial type:
// {title?: string}

type TReadonlyTodo = Readonly<Todo>;
// Initial type:
// {readonly title: string}

const todo: TReadonlyTodo = {
    title: "Delete inactive users",
};

console.log(todo);


type strOrNum = 'Peter' | 42;

let friend: strOrNum = 'Peter';



userOleg.name = 123;

type AndrewName = 'Andrey' | 'Andrew';



type PeterCockAlias = 'Monster' | 'Fury' | 'Maddog';


type OlegHobbies = 'JS' | 'React' | 'TypeScript' | 'Trepachev'

let userAndrey: AndrewName = 'Andrew';

const unchangedObj = Object.freeze({
    name: 'Andrew',
    job: 'Developer',
    hobby: 'JS',
    friends: ['Oleg', 'PeterJ'],
})




console.log(unchangedObj);



