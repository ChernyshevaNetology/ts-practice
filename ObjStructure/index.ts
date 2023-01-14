{

  let user: { name: string, age: number, isGay: boolean }

  user = { name: 'Peter', age: 22, isGay: false }

  let user2: {name: string, age: number} = { name: 'Oleg', age: 20 }

  // user.name = 123;
  // user.name = 'Aikhan'
  let tuple: [string, number, boolean?] = ['Oleg', 22]

  let user3: { name: string, age?: number, isGay: boolean | undefined  } = { name: 'Oleg', isGay: undefined };

  user3.age = 33;

  console.log(user3);


  /**
   * Homework
   * объект employee, у него есть имя, должность и необязательное свойство "отдел".
   * Типизировать его на свое усмотрение. Попытаться сделать employee кортежем.
   */


  interface IEmployeeProps {
    name: string;
    position: string;
    department?: string;
  }

  const employee: IEmployeeProps = {
    name: 'Peter',
    position: 'Senior Php developer',
    department: 'Korablik'
  }

  const employee2: IEmployeeProps = {
    name: 'Oleg',
    position: 'Marketing specalist',
  }

  const employeeTuple: [string, string, string?] = ['Peter', 'php dev', 'Korablik LLC'];
  employeeTuple[2] = 'Yandex';





























}