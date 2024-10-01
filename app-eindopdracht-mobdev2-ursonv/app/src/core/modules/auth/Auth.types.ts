export type User = {
  _id: string;
  email: string;
  name: string;
  role: string;
};

export type Auth = {
  token: string;
  user: User;  // Voeg de gebruiker toe aan het Auth type
};
