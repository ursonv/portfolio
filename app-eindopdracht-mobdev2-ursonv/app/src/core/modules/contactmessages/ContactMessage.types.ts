export type ContactMessage = {
    _id: string;
    name: string;
    message: string
};

export type ContactMessageBody = Omit<ContactMessage, "_id">;