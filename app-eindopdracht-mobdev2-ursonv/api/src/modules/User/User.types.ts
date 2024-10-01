import { Document, ObjectId } from "mongoose";

export type UserMethods = {
  comparePassword: (password: string) => Promise<boolean>;
  generateToken: () => string;
};

export type User = Document &
  UserMethods & {
    _id?: string;
    email: string;
    password: string;
    name: string;
    role: string;
    favorites: ObjectId[];
  };
