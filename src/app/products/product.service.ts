import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (product: Product): void => {
    products.push(product);
};

export const updateProduct = (id: string | number, product: Product): void => {
    const index = products.findIndex(p => p.id === id);
    products[index] = product;
}