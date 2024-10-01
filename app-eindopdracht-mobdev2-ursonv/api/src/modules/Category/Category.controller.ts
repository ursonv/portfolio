import { NextFunction, Request, Response } from "express";
import Category from "./Category.model";
import NotFoundError from "../../middleware/error/NotFoundError";
import { AuthRequest } from "../../middleware/auth/authMiddleware";
import ProductModel from "../Product/Product.model";

const getCategories = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categories = await Category.find()
      .populate({ path: 'products', model: 'Product' }) // Explicitly define model to populate
      .lean();

    res.json(categories);
  } catch (e) {
    next(e);
  }
};

const getCategoryById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const category = await Category.findOne({ _id: id })
      .populate({ path: 'products', model: 'Product' })
      .lean();

    if (!category) {
      throw new NotFoundError("Category not found");
    }
    res.json(category);
  } catch (e) {
    next(e);
  }
};

const createCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req as AuthRequest;

    if (user.role !== 'seller') {
      return res.status(403).json({ message: 'Unauthorized. Only sellers can create categories.' });
    }

    const category = new Category({ ...req.body, ownerId: user._id });
    const result = await category.save();
    res.json(result);
  } catch (e) {
    next(e);
  }
};

const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req as AuthRequest;
    const { id } = req.params;

    if (user.role !== 'seller') {
      return res.status(403).json({ message: 'Unauthorized. Only sellers can update categories.' });
    }

    const category = await Category.findOneAndUpdate(
      { _id: id, ownerId: user._id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!category) {
      throw new NotFoundError("Category not found");
    }
    res.json(category);
  } catch (e) {
    next(e);
  }
};

const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req as AuthRequest;
    const { id } = req.params;

    if (user.role !== 'seller') {
      return res.status(403).json({ message: 'Unauthorized. Only sellers can delete categories.' });
    }

    const category = await Category.findOne({ _id: id, ownerId: user._id });

    if (!category) {
      throw new NotFoundError("Category not found");
    }

    await ProductModel.deleteMany({ categoryId: id });

    await Category.findOneAndDelete({ _id: id, ownerId: user._id });

    res.json({});
  } catch (e) {
    next(e);
  }
};

export { getCategories, createCategory, getCategoryById, updateCategory, deleteCategory };
