import { Express, Router } from "express";
import productPrivateRoutes from "../modules/Product/Product.private.routes";
import productPublicRoutes from "../modules/Product/Product.public.routes";
import { errorHandler } from "../middleware/error/errorHandlerMiddleware";
import userPublicRoutes from "../modules/User/User.public.routes";
import userPrivateRoutes from "../modules/User/User.private.routes";
import categoryPublicRoutes from "../modules/Category/Category.public.routes";
import categoryPrivateRoutes from "../modules/Category/Category.private.routes";
import favoriteRoutes from "../modules/Favorite/Favorite.routes";
import shoppingCartRoutes from "../modules/ShoppingCart/ShoppingCart.routes";
import contactMessagePublicRoutes from "../modules/ContactMessage/ContactMessage.public.routes";
import contactMessagePrivateRoutes from "../modules/ContactMessage/ContactMessage.private.routes";


import { authJwt } from "../middleware/auth/authMiddleware";




const registerRoutes = (app: Express) => {

  app.use("/", userPublicRoutes);
  app.use("/", productPublicRoutes);
  app.use("/", categoryPublicRoutes);
  app.use("/", contactMessagePublicRoutes);

  const authRoutes = Router();
  authRoutes.use("/", userPrivateRoutes);
  authRoutes.use("/", productPrivateRoutes);
  authRoutes.use("/", categoryPrivateRoutes);
  authRoutes.use("/", favoriteRoutes);
  authRoutes.use("/", shoppingCartRoutes);
  authRoutes.use("/", contactMessagePrivateRoutes);


  app.use(authJwt, authRoutes);

  // Komt altijd na alle routes !
  app.use(errorHandler);
};

export { registerRoutes };
