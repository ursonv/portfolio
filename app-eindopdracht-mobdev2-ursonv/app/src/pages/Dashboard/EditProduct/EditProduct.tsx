import React, { useState, useEffect } from "react";
import { useNavigate , useParams } from "react-router-dom";
import EditProductForm from "./form/EditProductForm";
import { getProductById, updateProduct } from "../../../core/modules/products/Product.api";
import { getCategories } from "../../../core/modules/categories/Category.api";
import { Product, ProductBody } from "../../../core/modules/products/Product.types";
import { Category } from "../../../core/modules/categories/Category.types";
import Title from "../../../components/design/Typography/Title/Title";
import MainContainer from "../../../components/MainContainer/MainContainer";

const EditProduct: React.FC = () => {
    const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) { 
          const productResponse = await getProductById(id);
          setProduct(productResponse.data);
        }

        const categoriesResponse = await getCategories();
        setCategories(categoriesResponse.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleUpdateProduct = async (formData: ProductBody) => {
    try {
      await updateProduct(id!, formData);

        navigate("/dashboard");
        
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MainContainer>
        <Title text="Edit Product" />
        {product && (
          <EditProductForm
            initialProduct={product}
            categories={categories}
            onSubmit={handleUpdateProduct}
          />
        )}
      </MainContainer>
    </>
  );
};

export default EditProduct;
