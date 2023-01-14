// 1 интерфейс не может типизировать примитивы
// 2 интерфейс позволяет css каскадность - позволяет создать два интерфейса с одним именем
// 3 интерфейс может наследовать другие интерфейсы через ключ. слово extends
// 4 интерфейс может наследоваться от типа (а раньше не мог)
// 5 c типом можно создать или | а с интерфейсом | создать нельзя

interface IPeter {
    name: string;
}

interface IOleg {
    age: number;
}

interface ICock extends IPeter, IOleg, TPeterCock {
    cock: string;
}

type TPeterCock = {
    balls: boolean;
}

type TPeterOrOleg = {} & {balls: boolean};
type TPeterOrOleg2 = {} | {balls: boolean};
interface IRoles extends TPeterOrOleg {}

class Serhio implements TPeterOrOleg {
    constructor(balls: boolean) {
     this.balls = balls;
    }
    public balls: boolean;
}



