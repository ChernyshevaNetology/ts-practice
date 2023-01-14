"use strict";
var ESeason;
(function (ESeason) {
    ESeason[ESeason["Winter"] = 0] = "Winter";
    ESeason[ESeason["Spring"] = 1] = "Spring";
    ESeason["Summer"] = "Summer";
    ESeason["Autumn"] = "Autumn";
})(ESeason || (ESeason = {}));
let a = ESeason;
let myFavouriteSeason = ESeason.Summer;
if (myFavouriteSeason === ESeason.Summer) {
    console.log(true);
}
console.log(myFavouriteSeason);
console.log(ESeason['Summer']);
// let current: string = ESeason.Summer;
// let current: ESeason = 0; // тип ESeason а присваиваем число
let missing = 42;
console.log('missing', missing);
let current = ESeason.Winter;
console.log(typeof current);
// ключи по порядку
var Season;
(function (Season) {
    Season[Season["Winter"] = 100] = "Winter";
    Season[Season["Spring"] = 101] = "Spring";
    Season[Season["Summer"] = 102] = "Summer";
    Season[Season["Autumn"] = 103] = "Autumn";
})(Season || (Season = {}));
;
var EUserRoles;
(function (EUserRoles) {
    EUserRoles["Guest"] = "Guest";
    EUserRoles["RegisteredUser"] = "RegisteredUser";
    EUserRoles["Admin"] = "Admin";
})(EUserRoles || (EUserRoles = {}));
let b = EUserRoles.RegisteredUser;
if (b === EUserRoles.RegisteredUser) {
    console.log('ok');
}
var EWeekDays;
(function (EWeekDays) {
    EWeekDays[EWeekDays["Ponedelnik"] = 0] = "Ponedelnik";
    EWeekDays["Monday"] = "Monday";
    EWeekDays["Tuesday"] = "Tuesday";
    EWeekDays["Wednesday"] = "Wednesday";
    EWeekDays["Thursday"] = "Thursday";
    EWeekDays["Friday"] = "Friday";
    EWeekDays["Saturday"] = "Saturday";
    EWeekDays["Sunday"] = "Sunday";
})(EWeekDays || (EWeekDays = {}));
const weekend = EWeekDays.Sunday;
const firstWorkDay = EWeekDays.Monday;
const isWeekend = EWeekDays.Ponedelnik || EWeekDays.Sunday;
if (weekend === EWeekDays.Sunday) {
    console.log(EWeekDays.Sunday);
}
