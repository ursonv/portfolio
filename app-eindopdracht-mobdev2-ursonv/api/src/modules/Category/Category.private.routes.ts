import express from "express";
import { createCategory, deleteCategory, updateCategory } from "./Category.controller";

const router = express.Router();

router.post("/categories", createCategory);
router.patch("/categories/:id", updateCategory);
router.delete("/categories/:id", deleteCategory);

export default router;
