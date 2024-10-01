import { API } from "../../network/api";
import { ContactMessage, ContactMessageBody } from "./ContactMessage.types";

const getAllContactMessages = () => {
  return API.get<ContactMessage[]>("/messages");
};

const createContactMessage = (contactMessage: ContactMessageBody) => {
  return API.post<ContactMessage>("/messages", contactMessage);
};

const deleteContactMessage = (id: string) => {
  return API.delete(`/messages/${id}`);
};


export { getAllContactMessages, createContactMessage, deleteContactMessage };
