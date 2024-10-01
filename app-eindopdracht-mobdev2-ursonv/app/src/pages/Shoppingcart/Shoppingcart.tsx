import React, { useEffect, useState } from "react";
import { getShoppingcart, deleteShoppingcart } from "../../core/modules/shoppingcart/ShoppingCart.api";
import { ShoppingCart } from "../../core/modules/shoppingcart/ShoppingCart.types";
import styles from "./Shoppingcart.module.css";
import Title from "../../components/design/Typography/Title/Title";
import MainContainer from "../../components/MainContainer/MainContainer";
import PrimaryButton from "../../components/design/Buttons/PrimaryButton/PrimaryButton";

const Shoppingcart: React.FC = () => {
    const [shoppingcarts, setShoppingcarts] = useState<ShoppingCart[]>([]);

    useEffect(() => {
        const fetchShoppingCart = async () => {
            try {
                const response = await getShoppingcart();
                setShoppingcarts(response.data);
            } catch (error) {
                console.error("Error fetching shoppingcart:", error);
            }
        };

        fetchShoppingCart();
    }, []);

    const handleDeleteShoppingCart = async (id: string) => {
        try {
            await deleteShoppingcart(id);
            setShoppingcarts(prevShoppingcarts => prevShoppingcarts.filter(shoppingcart => shoppingcart._id !== id));
            console.log("Shoppingcart deleted successfully");
        } catch (error) {
            console.error("Error deleting Shoppingcart:", error);
        }
    };

    return (
        <>
        <MainContainer>
        <div className={styles.shoppingcarts}>
            <Title text="Your Cart:" />
            <table className={styles.shoppingcartTable}>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {shoppingcarts.map((shoppingcart) => (
                        <tr key={shoppingcart._id}>
                            <td><img src={shoppingcart.product.img} alt={shoppingcart.product.title} className={styles.shoppingcartImage} /></td>
                            <td>{shoppingcart.product.title}</td>
                            <td>€ {shoppingcart.product.price}</td>
                            <td><button className={styles.deleteButton} onClick={() => handleDeleteShoppingCart(shoppingcart._id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles.totalAmount}>
                <strong>Total Amount: € 0.00</strong>
            </div>
            <PrimaryButton>Place order</PrimaryButton>
        </div>
        </MainContainer>
        </>
    );
};

export default Shoppingcart;
