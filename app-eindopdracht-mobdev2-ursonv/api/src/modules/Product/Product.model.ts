import mongoose from "mongoose";
import { Product } from "./Product.types";
import validateModel from "../../validation/validateModel";

const productSchema = new mongoose.Schema<Product>(
  {
    title: {
      type: String,
      required: true,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    stock: {
      type: String,
      required: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category', 
      required: true,
    },
    favorites: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

productSchema.virtual("category", {
  ref: "Category",
  localField: "categoryId",
  foreignField: "_id",
  justOne: true,
});

productSchema.pre("save", function (next) {
  validateModel(this);
  next();
});

const ProductModel = mongoose.model<Product>("Product", productSchema);

export default ProductModel;
