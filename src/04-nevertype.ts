const withoutEnd = () =>{
    while(true){
        console.log('hello');
    }
}

const fail = (message: string) => {
    throw new Error(message);
}

const example = (input: unknown) => {
    if (typeof input === 'string') {
        return "es un string";
    }
    else if (Array.isArray(input)) {
        return "es un Array";
    }else{
        return fail("no se que es");
    }
}

console.log(example('hola'));
console.log(example([1,2,3]));
console.log(example(1234));
console.log(example("adios"));