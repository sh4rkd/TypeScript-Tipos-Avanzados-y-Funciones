import { Product } from "./product.model";

//omitir
export interface CreateProductDTO extends Omit<Product, "id" | "createdAt" | "updatedAt" | "category"> {
    categoryId: string;
}

//agarrar
export type contrariodeOmit = Pick<Product, "id" | "createdAt" | "updatedAt" | "category">;

//parial todo opcional
export interface UpdateProductDTO extends Partial<CreateProductDTO>{
}

//required todo obligatorio
export type contrariodePartial = Required<Product>;