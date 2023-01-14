"use strict";
;
;
function checkIsGay(person) {
    if (checkIsMale(person)) {
        return person.isGay;
    }
    else {
        return person.isLesbian;
    }
}
function getSize(person) {
    if (checkIsMale(person)) {
        return person.cockSize;
    }
    else {
        return person.braSize;
    }
}
function checkIsMale(person) {
    return person.cockSize !== undefined || ('cockSize' in person);
}
const Oleg = {
    age: 31,
    cockSize: '18cm',
    isGay: false,
};
const Aikhan = {
    age: 22,
    cockSize: '12 inches',
    isGay: false,
};
const OpheliBaur = {
    age: 22,
    braSize: '3',
    isLesbian: false,
};
const isOlegStraight = checkIsGay(Oleg);
console.log(isOlegStraight);
const OpheliBraSize = getSize(OpheliBaur);
console.log(OpheliBraSize);
