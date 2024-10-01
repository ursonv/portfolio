import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainContainer from '../../components/MainContainer/MainContainer';
import Title from '../../components/design/Typography/Title/Title';
import { getProductsFromUser, deleteProduct } from '../../core/modules/products/Product.api';
import { Product } from '../../core/modules/products/Product.types';
import styles from './Dashboard.module.css';
import PrimaryButton from '../../components/design/Buttons/PrimaryButton/PrimaryButton';
import { ContactMessage } from '../../core/modules/contactmessages/ContactMessage.types';
import { deleteContactMessage, getAllContactMessages } from '../../core/modules/contactmessages/ContactMessage.api';

const Dashboard: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const [contactmessages, setMessages] = useState<ContactMessage[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await getProductsFromUser();
                setProducts(fetchedProducts.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleDeleteProduct = async (productId: string) => {
        try {
            await deleteProduct(productId);
            setProducts(prevProducts => prevProducts.filter(product => product._id !== productId));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const fetchedMessages = await getAllContactMessages();
                setMessages(fetchedMessages.data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchMessages();
    }, []);

    const handleDeleteMessage = async (contactmessageId: string) => {
        try {
            await deleteContactMessage(contactmessageId);
            setMessages(prevMessages => prevMessages.filter(contactmessage => contactmessage._id !== contactmessageId));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className={styles.dashboardContainer}>
            <MainContainer>
                <Title text="Your Dashboard:" />
                <div>
                    <Link className={styles.dashboardButton} to='/product/create'>
                        <PrimaryButton>Add Product</PrimaryButton>
                    </Link>
                </div>
                <div>
                    <h2>Your added Products:</h2>
                    <table className={styles.tableContainer} >
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Image</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product._id}>
                                    <td>{product.title}</td>
                                    <td><img src={product.img} alt={product.title} style={{ maxWidth: '100px' }} /></td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <Link className={styles.dashboardButton} to={`/product/edit/${product._id}`}>Edit</Link>
                                        
                                    </td>
                                    <td>
                                        <button className={styles.dashboardButton} onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h2>Contact questions:</h2>
                    <table className={styles.tableContainer} >
                        <thead>
                            <tr>
                                <th>The Question:</th>
                                <th>Send by:</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {contactmessages.map((contactmessage) => (
                                <tr key={contactmessage._id}>
                                    <td>{contactmessage.message}</td>
                                    <td>{contactmessage.name}</td>
                                    <td>
                                        <button className={styles.dashboardButton} onClick={() => handleDeleteMessage(contactmessage._id)}>Read?</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </MainContainer>
        </div>
    );
};

export default Dashboard;
