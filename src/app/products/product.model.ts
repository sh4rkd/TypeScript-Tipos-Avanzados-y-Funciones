import { Category } from "./../categories/category.model";

export type Size = "S" | "M" | "L" | "XL";
export interface Product {
    id: number | string;
    title: string;
    createdAt: Date;
    stock: number;
    size?: Size;
    category: Category;
}