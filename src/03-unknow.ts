let unknowVar: unknown;
unknowVar = 'unknow';
unknowVar = 1;
unknowVar = true;
unknowVar = {};
unknowVar = [];

unknowVar === "string" ? console.log(unknowVar.toLowerCase()) : console.log('not string');

const parse = (str: string): unknown => {
    return JSON.parse(str);
}

let isNew: boolean;
typeof unknowVar === "boolean" ? isNew = unknowVar : isNew = false;