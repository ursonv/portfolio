import mongoose from "mongoose";
import validateModel from "../../validation/validateModel";
import { ContactMessage } from "./ContactMessage.types";

const contactMessageSchema = new mongoose.Schema<ContactMessage>(
  {
    message: {
      type: String, 
      required: true,
    },
    name: {
        type: String, 
        required: true,
    },

  },
  {
    timestamps: true,
  }
);

contactMessageSchema.pre("save", function (next) {
  validateModel(this);
  next();
});

const ContactMessageModel = mongoose.model<ContactMessage>("ContactMessage", contactMessageSchema);

export default ContactMessageModel;
