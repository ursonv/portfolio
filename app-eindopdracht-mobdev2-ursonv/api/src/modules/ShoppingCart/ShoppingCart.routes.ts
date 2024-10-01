import express from "express";
import { getShoppingcart, createShoppingcart, deleteShoppingcart } from "./ShoppingCart.controller";

const router = express.Router();

router.get("/shoppingcart", getShoppingcart); 
router.post("/shoppingcart", createShoppingcart); 
router.delete("/shoppingcart/:id", deleteShoppingcart); 

export default router;
