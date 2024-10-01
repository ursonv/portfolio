import { API } from "../../network/api";
import { Category, CategoryBody } from "./Category.types";

const getCategories = () => {
  return API.get<Category[]>("/categories");
};

const getCategoryById = (id: string) => {
  return API.get<Category>(`/categories/${id}`);
};

const createCategory = (category: CategoryBody) => {
  return API.post<Category>("/categories", category);
};

const updateCategory = (id: string, category: CategoryBody) => {
  return API.patch<Category>(`/categories/${id}`, category);
};

const deleteCategory = (id: string) => {
  return API.delete(`/categories/${id}`);
};


export { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory };
