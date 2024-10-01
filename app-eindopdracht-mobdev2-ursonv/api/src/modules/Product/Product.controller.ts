import { NextFunction, Request, Response } from "express";
import NotFoundError from "../../middleware/error/NotFoundError";
import { AuthRequest } from "../../middleware/auth/authMiddleware";
import ProductModel from "./Product.model";
import CategoryModel from "../Category/Category.model";
import FavoriteModel from "../Favorite/Favorite.model";
import ShoppingCartModel from "../ShoppingCart/ShoppingCart.model";

const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await ProductModel.find()
      .sort({ createdAt: -1 })
      .lean()
      .populate("category");

    res.json(products);
  } catch (e) {
    next(e);
  }
};

const getProductsFromUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req as AuthRequest;
    const products = await ProductModel.find({ ownerId: user._id })
      .sort({ createdAt: -1 })
      .lean()
      .populate("category");


    res.json(products);
  } catch (e) {
    next(e);
  }
};

const getProductById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findOne({ _id: id })
      .lean()
      .populate("category");

    if (!product) {
      throw new NotFoundError("Product not found");
    }
    res.json(product);
  } catch (e) {
    next(e);
  }
};

const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req as AuthRequest;
    const categoryId = req.body.categoryId;

    if (user.role !== 'seller') {
      return res.status(403).json({ message: 'Unauthorized. Only sellers can create products.' });
    }

    const category = await CategoryModel.findOne({
      _id: categoryId,
      ownerId: user._id,
    });

    if (!category) {
      throw new NotFoundError("Category not found");
    }

    const product = new ProductModel({ ...req.body, ownerId: user._id });
    const result = await product.save();
    res.json(result);
  } catch (e) {
    next(e);
  }
};

const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req as AuthRequest;
    const { id } = req.params;

    if (user.role !== 'seller') {
      return res.status(403).json({ message: 'Unauthorized. Only sellers can update products.' });
    }

    if (req.body.categoryId) {
      const category = await CategoryModel.findOne({
        _id: req.body.categoryId,
        ownerId: user._id,
      });

      if (!category) {
        throw new NotFoundError("Category not found");
      }
    }

    const product = await ProductModel.findOneAndUpdate(
      { _id: id, ownerId: user._id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!product) {
      throw new NotFoundError("Product not found");
    }
    res.json(product);
  } catch (e) {
    next(e);
  }
};

const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req as AuthRequest;
    const { id } = req.params;

    if (user.role !== 'seller') {
      return res.status(403).json({ message: 'Unauthorized. Only sellers can delete products.' });
    }

    const product = await ProductModel.findOne({
      _id: id,
      ownerId: user._id,
    });

    if (!product) {
      throw new NotFoundError("Product not found");
    }

    const category = await CategoryModel.findOne({
      _id: product.categoryId,
      ownerId: user._id,
    });

    if (!category) {
      throw new NotFoundError("Category not found");
    }

    const index = category.products.indexOf(product._id);
    if (index !== -1) {
      category.products.splice(index, 1);
    }

    await category.save();

    // Delete the product's associated favorites
    await FavoriteModel.deleteMany({ productId: product._id });

    // Delete the product's associated shoppingcart
    await ShoppingCartModel.deleteMany({ productId: product._id });


    await ProductModel.findOneAndDelete({
      _id: id,
      ownerId: user._id,
    });

    res.json({});
  } catch (e) {
    next(e);
  }
};

export { getProducts, createProduct, getProductById, updateProduct, deleteProduct, getProductsFromUser };
