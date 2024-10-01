import { NextFunction, Request, Response } from "express";
import Favorite from "./Favorite.model";
import NotFoundError from "../../middleware/error/NotFoundError";
import { AuthRequest } from "../../middleware/auth/authMiddleware";
import ProductModel from "../Product/Product.model";

const getFavorites = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const favorites = await Favorite.find({ ownerId: (req as AuthRequest).user._id });

    // Map door de lijst met favorieten en haal de productinformatie op voor elk favoriet product
    const favoritesWithProductInfo = await Promise.all(favorites.map(async (favorite) => {
      // Haal de productinformatie op basis van het productId van het favoriete product
      const product = await ProductModel.findById(favorite.productId);

      // Controleer of het product niet null is voordat je het gebruikt
      if (product) {
        // Voeg de productinformatie toe aan het favoriete product object
        return { ...favorite.toObject(), product: product.toObject() };
      } else {
        // Als het product niet gevonden is, geef een foutmelding of handel het op een andere manier af
        throw new Error(`Product with ID ${favorite.productId} not found.`);
      }
    }));

    res.json(favoritesWithProductInfo);
  } catch (e) {
    next(e);
  }
};



const createFavorite = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req as AuthRequest;
    const { productId, quantity } = req.body;

    // Check if favorite already exists
    const existingFavorite = await Favorite.findOne({ ownerId: user._id, productId });

    if (existingFavorite) {
      // If exists, update quantity
      existingFavorite.quantity += quantity || 1;
      await existingFavorite.save();
      res.json(existingFavorite);
    } else {
      // If not exists, create new favorite
      const favorite = new Favorite({ productId, quantity: quantity || 1, ownerId: user._id });
      const result = await favorite.save();
      res.json(result);
    }
  } catch (e) {
    next(e);
  }
};

const deleteFavorite = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req as AuthRequest;
    const { id } = req.params;

    const favorite = await Favorite.findOne({
      _id: id,
      ownerId: user._id,
    });

    if (!favorite) {
      throw new NotFoundError("Favorite not found");
    }

    await Favorite.findOneAndDelete({
      _id: id,
      ownerId: user._id,
    });

    res.json({});
  } catch (e) {
    next(e);
  }
};

export { getFavorites, createFavorite, deleteFavorite };
