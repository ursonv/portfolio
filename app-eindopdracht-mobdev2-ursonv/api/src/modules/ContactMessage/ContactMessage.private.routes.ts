import express from "express";
import { getAllContactMessages, deleteContactMessage } from "./ContactMessage.controller";

const router = express.Router();

router.get("/messages", getAllContactMessages);
router.delete("/messages/:id", deleteContactMessage);


export default router;
