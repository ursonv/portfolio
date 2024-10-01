import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import heroImage from "../../assets/heroimage.png";
import PrimaryButton from "../../components/design/Buttons/PrimaryButton/PrimaryButton";
import MainContainer from "../../components/MainContainer/MainContainer";
import Title from "../../components/design/Typography/Title/Title";
import ProductCardContainer from "../ProductCard/ProductCardContainer";
import { Link } from "react-router-dom";
import { getProducts } from '../../core/modules/products/Product.api';
import { Product } from '../../core/modules/products/Product.types';

const Home: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getProducts();
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div
                className={style.container}
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className={style.overlay}>
                    <h1 className={style.title}>Perfection</h1>
                    <h2 className={style.subtitle}>In Every Meal</h2>
                    <p className={style.description}>
                        We curate a personalized package for your furry friend. Explore
                        our tailored meals today!
                    </p>
                    <Link to="/products">
                        <PrimaryButton>Buy Now</PrimaryButton>
                    </Link>
                    
                </div>
            </div>

            <MainContainer>
                <Title text="Latest Fresh Meals" />
                <ProductCardContainer products={products} numberOfCards={4} />
            </MainContainer>
        </>
    );
};

export default Home;
