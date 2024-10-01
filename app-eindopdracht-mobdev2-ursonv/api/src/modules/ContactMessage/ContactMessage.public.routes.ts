import express from "express";
import { createContactMessage } from "./ContactMessage.controller";

const router = express.Router();

router.post("/messages", createContactMessage);

export default router;
