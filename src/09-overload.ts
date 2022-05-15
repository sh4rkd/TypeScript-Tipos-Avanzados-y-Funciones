// Fred > [F,r,e,d]
// [F,r,e,d] > Fred

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

export function parseStr(input: unknown): unknown {
    return Array.isArray(input) ? input.join('') : typeof input === 'string' ? input.split("") : typeof input === 'number' ? true : false;
}

console.log(parseStr('Fred'));
console.log(parseStr(['F', 'r', 'e', 'd']));
console.log(parseStr(123));