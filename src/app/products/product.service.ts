import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (product: Product): void => {
    products.push(product);
};