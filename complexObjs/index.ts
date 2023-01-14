{


   interface IParent {
       name: string;
       age: number;
       parents: IInnerParents | null;
   }

   interface IInnerParents { mother: IParent, father: IParent }

    const Peter: IParent = {
        name: 'Peter',
        age: 22,
        parents: {
            mother: {
                name: 'jane',
                age: 30,
                parents: {mother: {name: 'Lola', age: 22, parents: null}, father: {name: 'Sergey Mochalov', age: 33, parents: null}}
            },
            father: {
                name: 'eric',
                age: 30,
                parents: null
            }
        }
    }


    interface IEvent {
        name: string;
        time: {
            start: string;
            finish: string;
        }
    }

    let event: IEvent = {
        name: 'my new event',
        time: {
            start: '2025-11-01',
            finish: '2025-12-31'
        }
    };


    /**
     *    20k - my money
     *    20k - Peter's money for Oleg
     *
     *    if (andrew wins) {
     *        I keep 20k my money 20k Oleg's money
     *    } else if (oleg wins) {
     *        I transfer 20k to Oleg
     *        I transfer 20k deposit to Peter
     *    }
     */

   interface IPosition {name: string; salary: number;}
    interface IAddr {country: string, city: string;}

   interface IEmployee {
       name: string;
       position: IPosition;
       addr: IAddr;
   }


    let employee: IEmployee = {
        name: 'andrew',
        position: {
            name: 'programmer',
            salary: 1000,
        },
        addr: {
            country: 'Belarus',
            city: 'minsk',
        }
    }


  // function genPractice<T>(a: T) {
  //
  // }
  //
  //   console.log(genPractice<string>('Peter'));
  //   console.log(genPractice<number>(42));

    interface IPeriod {
       date1: Date;
       date2: Date;
    }

    let period: IPeriod = {
        date1: new Date(2030, 11, 31),
        date2: new Date(2020, 11, 31)
    };



   interface ICity {
       name: string;
   }

   interface IUser {
       name: string;
       age: number;
       city: ICity;
   }

    let city: ICity = {name: 'london'};
    let user: IUser = {name: 'john', age: 30, city: city};



}