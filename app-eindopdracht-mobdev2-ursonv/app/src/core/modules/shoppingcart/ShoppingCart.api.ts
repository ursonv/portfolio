import { API } from "../../network/api";
import { ShoppingCart, ShoppingCartBody } from "./ShoppingCart.types";

const getShoppingcart = () => {
  return API.get<ShoppingCart[]>("/shoppingcart");
};

const createShoppingcart = (shoppingcart: ShoppingCartBody) => {
  return API.post<ShoppingCart>("/shoppingcart", shoppingcart);
};

const deleteShoppingcart = (id: string) => {
  return API.delete(`/shoppingcart/${id}`);
};


export { getShoppingcart, createShoppingcart, deleteShoppingcart };
