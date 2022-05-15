export const createProduct = (
    id: string|number, 
    isNew: boolean = true, // default value 
    stock: number = 10) => {
    return {
        id,
        stock,
        isNew
    }
};

console.log(createProduct('123', false, 10));

console.log(createProduct('12',false));

console.log(createProduct('1'));

console.log(createProduct(1, false, 0));