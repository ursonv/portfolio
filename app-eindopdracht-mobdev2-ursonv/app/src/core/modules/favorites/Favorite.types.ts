import { Product } from "../products/Product.types";

export type Favorite = {
    _id: string;
    quantity: number;
    ownerId: string; 
    productId: string;
    product: Product; // Voeg product toe om de productinformatie op te slaan
};

export type FavoriteBody = Omit<Favorite, "_id">;
