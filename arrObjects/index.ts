{

    let prod: {
        name: string,
        colors: string[]
    }

    prod = {
        name: 'notebook',
        colors: ['red', 'black', 'gray']
    }

    let a: string;


    interface IProduct {
      name: string;
      colors: string[];
    }


   const prod2: IProduct = {
        name: 'Quest',
        colors: ['purple', 'aqua', 'tomato'],
   }

   interface ICountry {
        country: string;
        cities: string[];
   }

   const myCountry: ICountry = {
        country: 'Russia',
        cities: ['Noginsk', 'Serpukhov', 'Uglich'],
   }

  interface IMethod {
        method: (a: string, b: string) => number;
  }

  const methodObj: IMethod = {
      method: (a, b) => 10,
  }


    interface IStringArray {
        [index: number]: string;
    }

    const stringArrayObj: IStringArray = {
        42: 'Peter',
    }

    const stringArrayArr: IStringArray = ['a', 'b'];



    let obj = {
        name: "Peter"
    }

    let arr = [1, 2, 3];

    // Использовать | нельзя. Использовать generic


    function getKey<T, Y extends keyof T>(arrOrObj: T, key: Y) {
        return arrOrObj[key]
    }

    interface IArray {
        [index: number]: number;
    }

    interface IObj {

    }

    console.log(getKey<typeof  obj, keyof typeof obj>(obj, "name"));
    console.log(getKey<typeof arr, number>(arr, 0));

    function takeTwo<T>(a: T, b: T) {
        return [a ,b]
    }

    console.log(takeTwo<string>('Peter', 'Sergey Mochalov'));
    console.log(takeTwo<number>(100, 100));
    console.log(takeTwo<null>(null, null));
    console.log(takeTwo<boolean>(false, true));

    function populateArray<T>(len: number, elem: T): T[] {
        return new Array(len).fill(elem);
    }

    console.log(populateArray<string>(100, 'cock'));
    console.log(populateArray<number>(100, 42));
    console.log(populateArray<boolean>(100, true));
    console.log(populateArray<{name: string}>(100, {name: 'Peter'}))


    // Функция принимает len - длинну массива и элемент массива и создает массив и заполняет его этим элементом.


    // Написать функцию, которая принимает 2 параметра, которые должны быть одного типа.


    interface ILen {
        len: string;
        width: number;
    }



}