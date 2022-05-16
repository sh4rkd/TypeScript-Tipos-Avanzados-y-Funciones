import { Product } from "./product.model";

export interface CreateProductDTO extends Omit<Product, "id" | "createdAt" | "updatedAt" | "category"> {
    categoryId: string;
}

export type example = Pick<Product, "id" | "createdAt" | "updatedAt" | "category">;