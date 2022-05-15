export const createProduct = (id: string|number, isNew?: boolean, stock?: number) => {
    return {
        id,
        //nullish coalescing operator (??)
        stock: stock ?? 10,
        isNew: isNew ?? true
    }
};

console.log(createProduct('123', false, 10));

console.log(createProduct('12',false));

console.log(createProduct('1'));

console.log(createProduct(1, false, 0));

