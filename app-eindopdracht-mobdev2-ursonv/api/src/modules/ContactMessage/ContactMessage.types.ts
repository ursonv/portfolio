import { Document, ObjectId } from "mongoose";

export type ContactMessage = Document & {
  _id?: string;
  message: string;
  name: string;
};
