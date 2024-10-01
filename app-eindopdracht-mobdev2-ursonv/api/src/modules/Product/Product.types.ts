import { Document, ObjectId } from "mongoose";
import { Category } from "../Category/Category.types";

export type Product = Document & {
  _id?: string;
  title: string;
  ownerId: ObjectId;
  img: string;
  description: string;
  price: string;
  stock: string;
  categoryId: ObjectId;
  category?: Category;
  favorites: number;
};
