import { Product } from "../products/Product.types";

export type Category = {
    _id: string;
    title: string;
    products: Product[];
};

export type CategoryBody = Omit<Category, "_id">;