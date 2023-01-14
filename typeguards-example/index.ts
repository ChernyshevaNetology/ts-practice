interface Man {
    age: number;
    cockSize: string;
    isGay: boolean;
};

interface Woman {
    age: number;
    braSize: string | undefined;
    isLesbian: boolean;
};

function checkIsGay(person: Man | Woman): boolean {
    if (checkIsMale(person)) {
        return person.isGay
    } else {
        return person.isLesbian;
    }
}

function getSize(person: Man | Woman): string | undefined {
    if (checkIsMale(person)) {
        return person.cockSize;
    } else {
        return person.braSize;
    }
}

function checkIsMale(person: Man | Woman): person is Man {
    return (person as Man).cockSize !== undefined || ('cockSize' in person);
}


const Oleg: Man = {
    age: 31,
    cockSize: '18cm',
    isGay: false,
}

const Aikhan: Man = {
    age: 22,
    cockSize: '12 inches',
    isGay: false,
}

const OpheliBaur: Woman = {
    age: 22,
    braSize: '3',
    isLesbian: false,
}

const isOlegStraight = checkIsGay(Oleg);
console.log(isOlegStraight);
const OpheliBraSize = getSize(OpheliBaur);
console.log(OpheliBraSize);

