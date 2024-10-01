import express from "express";
import { createProduct, deleteProduct, updateProduct, getProductsFromUser } from "./Product.controller";

const router = express.Router();

router.get("/user/products", getProductsFromUser);
router.post("/products", createProduct);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);


export default router;
