import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../core/modules/products/Product.api';
import { Product } from '../../../core/modules/products/Product.types';
import styles from './ProductDetail.module.css';
import MainContainer from '../../../components/MainContainer/MainContainer';
import { createFavorite } from '../../../core/modules/favorites/Favorite.api';
import { createShoppingcart } from '../../../core/modules/shoppingcart/ShoppingCart.api';
import { getCurrentUser } from '../../../core/modules/auth/Auth.api';

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                try {
                    const response = await getProductById(id);
                    setProduct(response.data);
                } catch (error) {
                    console.error("Error fetching product details:", error);
                }
            }
        };

        fetchData();
    }, [id]);

    const handleAddToCard = async () => {
        if (product) {
            try {
                const response = await getCurrentUser(); 
                const currentUser = response.data;
                if (currentUser) { // Controleer of er een huidige gebruiker is
                    await createShoppingcart({ productId: product._id, quantity: 1, ownerId: currentUser._id, product: product }); // Voeg ownerId toe aan het favoriete object
                    alert('Product added to cardt!');
                } else {
                    console.error("Error: No current user found."); 
                }
            } catch (error) {
                console.error("Error adding product to card:", error);
            }
        }
    };

    const handleAddToFavorites = async () => {
        if (product) {
            try {
                const response = await getCurrentUser(); 
                const currentUser = response.data;
                if (currentUser) { // Controleer of er een huidige gebruiker is
                    await createFavorite({ productId: product._id, quantity: 1, ownerId: currentUser._id, product: product }); // Voeg ownerId toe aan het favoriete object
                    alert('Product added to favorites!');
                } else {
                    console.error("Error: No current user found."); 
                }
            } catch (error) {
                console.error("Error adding product to favorites:", error);
            }
        }
    };
    

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <MainContainer>
            <div className={styles.productDetail}>
                <div className={styles.imageContainer}>
                    <img src={product.img} alt={product.title} className={styles.mainImage} />
                </div>
                <div className={styles.productInfo}>

                    <div className={styles.stock}>50 IN STOCK</div>
                    <h2>{product.title}</h2>
                    <p className={styles.price}>€ {product.price}</p>
                    <h3 className={styles.descriptionTitle}>Description</h3>
                    <p className={styles.description}>{product.description}</p>
                    <div className={styles.quantityText}>Quantity</div>
                    <div className={styles.priceContainer}>
                        <input type="number" defaultValue={1} min={1} className={styles.quantityInput} />
                        <button className={styles.addToCartBtn} onClick={handleAddToCard}>Add to cart</button>
                    </div>
                    <button className={styles.favoriteButton} onClick={handleAddToFavorites}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18.35" viewBox="0 0 20 18.35">
                            <path id="verlanglijst" d="M12,21.35l-1.45-1.32C5.4,15.36,2,12.28,2,8.5A5.447,5.447,0,0,1,7.5,3,5.988,5.988,0,0,1,12,5.09,5.988,5.988,0,0,1,16.5,3,5.447,5.447,0,0,1,22,8.5c0,3.78-3.4,6.86-8.55,11.54Z" transform="translate(-2 -3)"/>
                        </svg>
                    </button>
                </div>
            </div>
        </MainContainer>
    );
};

export default ProductDetail;
