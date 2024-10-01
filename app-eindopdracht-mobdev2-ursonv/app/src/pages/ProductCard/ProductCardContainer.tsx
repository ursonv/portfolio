import React from 'react';
import ProductCard from './ProductCard';
import styles from './ProductCardContainer.module.css';
import productimage from '../../assets/productimage.png';
//import { getProducts } from '../../core/modules/products/Product.api';
import { Product } from '../../core/modules/products/Product.types';

interface ProductCardContainerProps {
    products: Product[]; // Accepteert producten als props
    numberOfCards: number; // Aantal weer te geven kaarten
}

const ProductCardContainer: React.FC<ProductCardContainerProps> = ({ products, numberOfCards }) => {
    return (
        <div className={styles.container}>
            {products.slice(0, numberOfCards).map((product) => (
                <ProductCard 
                    key={product._id}
                    image={productimage} 
                    title={product.title} 
                    price={product.price} 
                    productId={product._id} // Voeg productId toe
                />
            ))}
        </div>
    );
};

export default ProductCardContainer;
