import { Document, ObjectId } from "mongoose";

export type ShoppingCart = Document & {
  _id?: string;
  quantity: number;
  ownerId: ObjectId;
  productId: ObjectId;
};
