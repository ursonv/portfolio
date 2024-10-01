import { Category } from "../categories/Category.types";

export type Product = {
    _id: string;
    title: string;
    img: string;
    description: string;
    price: string;
    stock: string;
    categoryId: string;
    createdAt?: string; // toegevoegd als Date | undefined in TypeScript
    category?: Category;
};

export type ProductBody = Omit<Product, "_id">;
