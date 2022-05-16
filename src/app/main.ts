import faker from "@faker-js/faker"
import { addProduct,products, updateProduct, findProduct } from './products/product.service';

for (let i = 0; i < 50; i++) {
    addProduct({
        description: faker.commerce.productDescription(),
        image: faker.image.imageUrl(),
        color: faker.commerce.color(),
        size: faker.random.arrayElement(["S", "M", "L", "XL"]),
        price: parseInt(faker.commerce.price()),
        isNew: faker.random.boolean(),
        tags: faker.random.arrayElement(),
        title: faker.commerce.productName(),
        stock: faker.datatype.number({ min: 10, max: 100 }),
        categoryId: faker.datatype.uuid()
    })
}

console.log(products);

const product = products[0];
updateProduct(product.id, {
    title: "New Title",
    stock: 80,
    price: 100
});

findProduct({
    stock: 10,
    color: "red",
    createdAt: new Date(),
    tags: ["red", "blue"]
});