{

    interface IUser {
        name: string;
        age: number;
    }

    let user: IUser = {
        name: 'Peter',
        age: 22,
    }


    interface IEmployee {
        name: string,
        age: number,
        salaryday: number
    }

    const employee1: IEmployee ={
        name:'Oleg',
        age: 22,
        salaryday: 3,
}

    const employee2: IEmployee ={
        name:'Peter',
        age: 24,
        salaryday: 6,
    }

    const employee3: IEmployee ={
        name:'Aikhan',
        age: 19,
        salaryday: 1,
    }

    interface ITime {
        hour: number,
        minute: number,
        second: number
    }

    const time: ITime = {
        hour: 60,
        minute: 60,
        second: 60,
    }

    const time2: ITime = {
        hour: 60,
        minute: 60,
        second: 60,
    }

    const time3: ITime = {
        hour: 60,
        minute: 60,
        second: 60,
    }


    interface IEmployeeInfo<T, Y> {
        name: string;
        city: string;
        salary: number;
        isGay: boolean;
        interests: (T|Y)[];
    }

    const employeeInfo: IEmployeeInfo<string, number> = {
        name: 'Peter',
        city: 'Serpukhov',
        salary: 240000,
        isGay: false,
        interests: [42, 'Quests', 'Travelling', 'drawing', 'TS', 'Programming', 300000],
    }



    function getDomElem<T extends Element = HTMLBodyElement>(elem: T): T {
        return ("" as any) as T;
    }











}