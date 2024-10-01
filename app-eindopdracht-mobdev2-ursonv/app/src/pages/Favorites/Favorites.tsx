import React, { useEffect, useState } from "react";
import { getFavorites, deleteFavorite } from "../../core/modules/favorites/Favorite.api";
import { Favorite } from "../../core/modules/favorites/Favorite.types";
import styles from "./Favorites.module.css";
import Title from "../../components/design/Typography/Title/Title";
import MainContainer from "../../components/MainContainer/MainContainer";

const Favorites: React.FC = () => {
    const [favorites, setFavorites] = useState<Favorite[]>([]);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await getFavorites();
                setFavorites(response.data);
            } catch (error) {
                console.error("Error fetching favorites:", error);
            }
        };

        fetchFavorites();
    }, []);

    const handleDeleteFavorite = async (id: string) => {
        try {
            await deleteFavorite(id);
            setFavorites(prevFavorites => prevFavorites.filter(favorite => favorite._id !== id));
            console.log("Favorite deleted successfully");
        } catch (error) {
            console.error("Error deleting favorite:", error);
        }
    };

    return (
        <>
        <MainContainer>
            <div className={styles.favorites}>
                <Title text="My Favorites:" />
                <table className={styles.favoriteTable}>
                    <tbody>
                        {favorites.map((favorite) => (
                            <tr key={favorite._id}>
                                <td><img src={favorite.product.img} alt={favorite.product.title} className={styles.favoriteImage} /></td>
                                <td>{favorite.product.title}</td>
                                <td>€ {favorite.product.price}</td>
                                <td><button className={styles.deleteButton} onClick={() => handleDeleteFavorite(favorite._id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </MainContainer>
        </>
    );
};

export default Favorites;
