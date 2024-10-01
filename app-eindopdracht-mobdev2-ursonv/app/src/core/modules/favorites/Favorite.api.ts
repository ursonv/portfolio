import { API } from "../../network/api";
import { Favorite, FavoriteBody } from "./Favorite.types";

const getFavorites = () => {
  return API.get<Favorite[]>("/favorites");
};

const createFavorite = (favorite: FavoriteBody) => {
  return API.post<Favorite>("/favorites", favorite);
};

const deleteFavorite = (id: string) => {
  return API.delete(`/favorites/${id}`);
};


export { getFavorites, createFavorite, deleteFavorite };
