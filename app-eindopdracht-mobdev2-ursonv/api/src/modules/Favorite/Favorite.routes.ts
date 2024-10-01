import express from "express";
import { createFavorite, deleteFavorite, getFavorites } from "./Favorite.controller";

const router = express.Router();

router.get("/favorites", getFavorites); 
router.post("/favorites", createFavorite); 
router.delete("/favorites/:id", deleteFavorite); 

export default router;
