import React, { useState, useEffect } from 'react';
import { ProductBody } from '../../../../core/modules/products/Product.types';
import { createProduct } from '../../../../core/modules/products/Product.api';
import { Category } from '../../../../core/modules/categories/Category.types';
import { getCategories } from '../../../../core/modules/categories/Category.api';
import styles from './AddProductForm.module.css';

interface AddProductFormProps {
    onAddProduct: () => void; 
}

const AddProductForm: React.FC<AddProductFormProps> = ({ onAddProduct }) => {
    const [formData, setFormData] = useState<ProductBody>({
        title: '',
        img: '',
        description: '',
        price: '',
        stock: '',
        categoryId: '',
        category: undefined,
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoriesResponse = await getCategories();
                setCategories(categoriesResponse.data); 
            } catch (error) {
                setError('Failed to fetch categories');
            }
        };
        fetchCategories();
    }, []);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            await createProduct(formData);
            setFormData({
                title: '',
                img: '',
                description: '',
                price: '',
                stock: '',
                category: undefined,
                categoryId: '',
            });
            onAddProduct(); 
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
        <form onSubmit={handleSubmit} className={styles.addProductForm}>
            {error && <div className={styles.errorMessage}>Error: {error}</div>}
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required className={styles.inputField} />
            </div>
            <div>
                <label htmlFor="img">Image URL</label>
                <input type="text" id="img" name="img" value={formData.img} onChange={handleChange} required className={styles.inputField} />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" value={formData.description} onChange={handleChange} required className={styles.inputField} />
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} required className={styles.inputField} />
            </div>
            <div>
                <label htmlFor="stock">Stock</label>
                <input type="number" id="stock" name="stock" value={formData.stock} onChange={handleChange} required className={styles.inputField} />
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select id="category" name="category" value={formData.categoryId} onChange={handleCategoryChange} required className={styles.categoryField}>
                    <option value="">Select a category</option>
                    {categories.map(category => (
                        <option key={category._id} value={category._id}>{category.title}</option>
                    ))}
                </select>
            </div>
            <button type="submit" disabled={isLoading} className={styles.addProductBtn}>Add Product</button>
        </form>
    );
};

export default AddProductForm;
