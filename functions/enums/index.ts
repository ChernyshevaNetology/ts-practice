enum ESeason { Winter, Spring, Summer = 'Summer', Autumn = 'Autumn' }

let a = ESeason;
let myFavouriteSeason = ESeason.Summer;

if (myFavouriteSeason === ESeason.Summer) {
    console.log(true);
}

console.log(myFavouriteSeason);

console.log(ESeason['Summer']);

// let current: string = ESeason.Summer;

// let current: ESeason = 0; // тип ESeason а присваиваем число

let missing: ESeason = 42;
console.log('missing', missing);

let current: ESeason = ESeason.Winter;
console.log(typeof current);
// ключи по порядку
enum Season { Winter = 100, Spring, Summer, Autumn };


enum EUserRoles  {
    Guest = 'Guest',
    RegisteredUser = "RegisteredUser",
    Admin = 'Admin',
}

let b: EUserRoles = EUserRoles.RegisteredUser;
if (b === EUserRoles.RegisteredUser) {
    console.log('ok')
}


enum EWeekDays {
    Ponedelnik,
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday',
    Sunday = 'Sunday',
}

const weekend: EWeekDays = EWeekDays.Sunday;
const firstWorkDay: EWeekDays = EWeekDays.Monday;

const isWeekend: EWeekDays = EWeekDays.Ponedelnik || EWeekDays.Sunday;

if (weekend === EWeekDays.Sunday) {
    console.log(EWeekDays.Sunday);
}

