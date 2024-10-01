import React from "react";
import { useNavigate } from "react-router-dom"; 
import AddProductForm from "./form/AddProductForm"; 
import Title from "../../../components/design/Typography/Title/Title";
import MainContainer from "../../../components/MainContainer/MainContainer";

const AddProduct: React.FC = () => {
    const navigate = useNavigate(); 

    const handleAddProduct = () => {
        navigate("/dashboard");
    };

    return (
        <>
            <MainContainer>
                <Title text="Add Product" />
                <AddProductForm onAddProduct={handleAddProduct} /> {/* Geef handleAddProduct als prop mee */}
            </MainContainer>
        </>
    );
};

export default AddProduct;
