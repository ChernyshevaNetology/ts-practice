type Type = 'Red' | 'Blue';

const matchString = <T>(obj: T) => (): Type => {}

const str = matchString({
    Red: 'star',
    Blue: 'sky',
} as const);

const o1 = str('Red');
const o2 = str('Blue');

type Output1 = typeof o1;
type Output2 = typeof o2;
