import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    image: string;
    title: string;
    price: string;
    productId: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, productId }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.info}>
                <div className={styles.infoContent}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.price}>€ {price}</p>
                </div>
                <Link to={`/product/${productId}`} className={styles.button}>➔</Link>
            </div>
        </div>
    );
};

export default ProductCard;
