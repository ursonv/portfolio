import mongoose from "mongoose";
import validateModel from "../../validation/validateModel";
import { Favorite } from "./Favorite.types";

const favoriteSchema = new mongoose.Schema<Favorite>(
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

favoriteSchema.pre("save", function (next) {
  validateModel(this);
  next();
});

const FavoriteModel = mongoose.model<Favorite>("Favorite", favoriteSchema);

export default FavoriteModel;
