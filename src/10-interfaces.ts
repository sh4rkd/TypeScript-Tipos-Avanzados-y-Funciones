type Size = "S" | "M" | "L" | "XL";
// type Product = {
//     id: number | string;
//     title: string;
//     createdAt: Date;
//     stock: number;
//     size?: Size;
// }
interface Product {
    id: number | string;
    title: string;
    createdAt: Date;
    stock: number;
    size?: Size;
}

const products: Product[] = [];

products.push({
    id: "1",
    title: "Product 1",
    createdAt: new Date(),
    stock: 10,
    size: "S"
});

const addProduct = (product: Product): void => {
    products.push(product);
};