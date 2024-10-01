import { Document, ObjectId } from "mongoose";

export type Category = Document & {
  _id?: string;
  title: string;
  ownerId: ObjectId;
  products: ObjectId[];
};
