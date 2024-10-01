import { NextFunction, Request, Response } from "express";
import ShoppingCart from "./ShoppingCart.model";
import NotFoundError from "../../middleware/error/NotFoundError";
import { AuthRequest } from "../../middleware/auth/authMiddleware";
import ProductModel from "../Product/Product.model";

const getShoppingcart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const shoppingCarts = await ShoppingCart.find({ ownerId: (req as AuthRequest).user._id });

    const shoppingCartsWithProductInfo = await Promise.all(shoppingCarts.map(async (shoppingcart) => {

      const product = await ProductModel.findById(shoppingcart.productId);


      if (product) {

        return { ...shoppingcart.toObject(), product: product.toObject() };
      } else {

        throw new Error(`Product with ID ${shoppingcart.productId} not found.`);
      }
    }));

    res.json(shoppingCartsWithProductInfo);
  } catch (e) {
    next(e);
  }
};



const createShoppingcart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req as AuthRequest;
    const { productId, quantity } = req.body;


    const existingShoppingCart = await ShoppingCart.findOne({ ownerId: user._id, productId });

    if (existingShoppingCart) {

      existingShoppingCart.quantity += quantity || 1;
      await existingShoppingCart.save();
      res.json(existingShoppingCart);
    } else {

      const favorite = new ShoppingCart({ productId, quantity: quantity || 1, ownerId: user._id });
      const result = await favorite.save();
      res.json(result);
    }
  } catch (e) {
    next(e);
  }
};

const deleteShoppingcart = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req as AuthRequest;
    const { id } = req.params;

    const shoppingcart = await ShoppingCart.findOne({
      _id: id,
      ownerId: user._id,
    });

    if (!shoppingcart) {
      throw new NotFoundError("ShoppingCart not found");
    }

    await ShoppingCart.findOneAndDelete({
      _id: id,
      ownerId: user._id,
    });

    res.json({});
  } catch (e) {
    next(e);
  }
};

export { getShoppingcart, createShoppingcart, deleteShoppingcart };
