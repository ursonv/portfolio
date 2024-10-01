import mongoose from "mongoose";
import validateModel from "../../validation/validateModel";
import { ShoppingCart } from "./ShoppingCart.types";

const shoppingCartSchema = new mongoose.Schema<ShoppingCart>(
  {
    quantity: {
      type: Number, // Verander type naar Number omdat het waarschijnlijk een numerieke waarde is
      required: true,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

shoppingCartSchema.pre("save", function (next) {
  validateModel(this);
  next();
});

const ShoppingCartModel = mongoose.model<ShoppingCart>("ShoppingCart", shoppingCartSchema);

export default ShoppingCartModel;
