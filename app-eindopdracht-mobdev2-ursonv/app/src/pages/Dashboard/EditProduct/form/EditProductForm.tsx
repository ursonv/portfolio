import React, { useState } from 'react';
import { Product, ProductBody } from '../../../../core/modules/products/Product.types'; 
import { updateProduct } from '../../../../core/modules/products/Product.api';
import { Category } from '../../../../core/modules/categories/Category.types';
import styles from './EditProductForm.module.css';

interface EditProductFormProps {
    initialProduct: Product;
    categories: Category[];
    onSubmit: (formData: ProductBody) => void; 
}

const EditProductForm: React.FC<EditProductFormProps> = ({ initialProduct, categories, onSubmit }) => {
    const [formData, setFormData] = useState<ProductBody>({
        title: initialProduct.title || '',
        img: initialProduct.img || '',
        description: initialProduct.description || '',
        price: initialProduct.price.toString() || '',
        stock: initialProduct.stock.toString() || '',
        categoryId: initialProduct.category?._id || '',
        category: initialProduct.category || undefined,
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            await updateProduct(initialProduct._id, formData);
            setFormData({
                title: '',
                img: '',
                description: '',
                price: '',
                stock: '',
                category: undefined,
                categoryId: '',
            });
            onSubmit(formData); // Roep onSubmit aan met het nieuwe formData
        } catch (error) {
            setError('An error occurred while submitting the form.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const categoryId = event.target.value;
        const selectedCategory = categories.find(category => category._id === categoryId);
        setFormData({ ...formData, categoryId, category: selectedCategory });
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <div>Error: {error}</div>}
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className={styles.inputField} required />
            </div>
            <div>
                <label htmlFor="img">Image URL</label>
                <input type="text" id="img" name="img" value={formData.img} onChange={handleChange} className={styles.inputField} required />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" value={formData.description} onChange={handleChange} className={styles.inputField} required />
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input type="number" id="price" name="price" value={formData.price} onChange={handleChange}  className={styles.inputField} required />
            </div>
            <div>
                <label htmlFor="stock">Stock</label>
                <input type="number" id="stock" name="stock" value={formData.stock} onChange={handleChange} className={styles.inputField} required />
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select id="category" name="category" value={formData.categoryId} onChange={handleCategoryChange} className={styles.categoryField} required>
                    <option value="">Select a category</option>
                    {categories.map(category => (
                        <option key={category._id} value={category._id}>{category.title}</option>
                    ))}
                </select>
            </div>
            <button type="submit" disabled={isLoading}  className={styles.addProductBtn}>Update Product</button>
        </form>
    );
};

export default EditProductForm;
