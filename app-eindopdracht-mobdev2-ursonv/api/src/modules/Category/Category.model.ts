import mongoose from "mongoose";
import validateModel from "../../validation/validateModel";
import { Category } from "./Category.types";

const categorySchema = new mongoose.Schema<Category>(
  {
    title: {
      type: String,
      required: true,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  },
  {
    timestamps: true,
  }
);

categorySchema.pre("save", function (next) {
  validateModel(this);
  next();
});

const CategoryModel = mongoose.model<Category>("Category", categorySchema);

export default CategoryModel;
