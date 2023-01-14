{

   interface IUser {
       name: string;
       age: number;
   }

   const arr: IUser[] = [];

   arr.push({name: 'Peter', age: 22});
   // arr.push({name: 'Oleg', city: 'Serpukhov'})

    let arrDates: Date[] = [];

    arrDates.push(new Date(2030, 11, 31));
    arrDates.push(new Date(2020, 11, 31));


    const domArr: HTMLElement[] = [];

    const nodeItem = document.querySelector('div');
    domArr.push(nodeItem!);


    let regExpression: RegExp = new RegExp(/\s/g, '');

    let arrWithRegs: RegExp[] = [];

    arrWithRegs.push(regExpression)

    const typedPromise: Promise<void> = new Promise((res, rej) => res());


    const arrWithPromises: Promise<void>[] = [];
    arrWithPromises.push(typedPromise);


    interface IWorker {
        name: string;
        salary: number;
        position: string;
        department: string;
        isOnVacation: boolean;
    }

    const worker1 = {
        name: 'Peter',
        salary: 240000,
        position: 'Senior PHP Developer',
        department: 'Korablik LLC',
        isOnVacation: true,
    }

    const workersArray: IWorker[] = [];
    workersArray.push(worker1);


















}