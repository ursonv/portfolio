import { Document, ObjectId } from "mongoose";

export type Favorite = Document & {
  _id?: string;
  quantity: number;
  ownerId: ObjectId;
  productId: ObjectId;
};
