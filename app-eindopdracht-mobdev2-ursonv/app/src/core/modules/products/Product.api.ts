import { API } from "../../network/api";
import { Product, ProductBody } from "./Product.types";

const getProducts = () => {
  return API.get<Product[]>("/products");
};

const getProductsFromUser = () => {
  return API.get<Product[]>("/user/products");
};

const getProductById = (id: string) => {
  return API.get<Product>(`/products/${id}`);
};

const createProduct = (product: ProductBody) => {
  return API.post<Product>("/products", product);
};

const updateProduct = (id: string, product: ProductBody) => {
  return API.patch<Product>(`/products/${id}`, product);
};

const deleteProduct = (id: string) => {
  return API.delete(`/products/${id}`);
};


export { getProducts, getProductById, createProduct, updateProduct, deleteProduct, getProductsFromUser };
