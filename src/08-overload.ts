// Fred > [F,r,e,d]
// [F,r,e,d] > Fred

const parseStr = (input: string | string[]):string | string[] => typeof input === 'string' ? input.split('') : input.join('');

console.log(parseStr('Fred'));
console.log(parseStr(['F', 'r', 'e', 'd']));

