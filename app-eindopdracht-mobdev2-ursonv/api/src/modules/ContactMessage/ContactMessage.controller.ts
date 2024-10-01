import { NextFunction, Request, Response } from "express";
import NotFoundError from "../../middleware/error/NotFoundError";
import { AuthRequest } from "../../middleware/auth/authMiddleware";
import ContactMessageModel from "./ContactMessage.model";

const getAllContactMessages = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { user } = req as AuthRequest;

    if (user.role !== "seller") {
      return res.status(403).json({ message: "Unauthorized. Only sellers can access contact messages." });
    }

    const messages = await ContactMessageModel.find();

    res.json(messages);
  } catch (error) {
    next(error);
  }
};

const createContactMessage = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const contactMessage = new ContactMessageModel({ ...req.body });

    await contactMessage.save();

    res.status(201).json({ message: "Contact message created successfully" });
  } catch (error) {
    next(error);
  }
};

const deleteContactMessage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { user } = req as AuthRequest;

    if (user.role !== "seller") {
      return res.status(403).json({ message: "Unauthorized. Only sellers can delete contact messages." });
    }

    await ContactMessageModel.findOneAndDelete({
        _id: id,
        ownerId: user._id,
      });
      
    res.json({ message: "Contact message deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export { getAllContactMessages, createContactMessage, deleteContactMessage };
