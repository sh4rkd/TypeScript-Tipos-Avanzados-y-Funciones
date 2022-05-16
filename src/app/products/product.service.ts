import faker from '@faker-js/faker';
import { Product } from './product.model';
import { CreateProductDTO } from './product.dto';

export const products: Product[] = [];

export const addProduct = (product: CreateProductDTO): Product => {
    const newProduct = {
        ...product,
        id: faker.datatype.uuid(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        category: {
            id: product.categoryId,
            name: faker.commerce.department(),
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent()
        }
    }
    products.push(newProduct);
    return newProduct;
};

export const updateProduct = (id: string | number, product: Product): void => {
    const index = products.findIndex(p => p.id === id);
    products[index] = product;
}