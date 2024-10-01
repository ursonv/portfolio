import React, { useEffect, useState } from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import ProductCardContainer from '../ProductCard/ProductCardContainer';
import Title from '../../components/design/Typography/Title/Title';
import style from './Products.module.css';
import { getProducts } from '../../core/modules/products/Product.api';
import { Product } from '../../core/modules/products/Product.types';
import { getCategories } from '../../core/modules/categories/Category.api';
import { Category } from '../../core/modules/categories/Category.types';

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState<string>('standard'); // Sorteer optie

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productResponse = await getProducts();
                setProducts(productResponse.data);
                setFilteredProducts(productResponse.data);

                const categoryResponse = await getCategories();
                setCategories(categoryResponse.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const filterAndSortProducts = () => {
            let filtered = products;

            // Filteren op zoekterm
            if (searchTerm) {
                filtered = filtered.filter(product =>
                    product.title.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }

            // Filteren op categorie
            if (selectedCategory) {
                filtered = filtered.filter(product =>
                    product.categoryId === selectedCategory
                );
            }

            // Sorteren
            switch (sortBy) {
                case 'new':
                    filtered.sort((a, b) => {
                        if (a.createdAt && b.createdAt) {
                            return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
                        }
                        return 0; // Als createdAt niet is gedefinieerd, return 0 (geen wijziging in volgorde)
                    });
                    break;
                case 'old':
                    filtered.sort((a, b) => {
                        if (a.createdAt && b.createdAt) {
                            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                        }
                        return 0; // Als createdAt niet is gedefinieerd, return 0 (geen wijziging in volgorde)
                    });
                    break;
                default:
                    // Standaard sortering, geen actie nodig
                    break;
            }

            setFilteredProducts(filtered);
        };
        filterAndSortProducts();
    }, [searchTerm, selectedCategory, sortBy, products]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryClick = (categoryId: string | null) => {
        setSelectedCategory(categoryId);
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value);
    };

    return (
        <MainContainer>
            <Title text="Our Products" />
            <div className={style.productsContainer}>

                <div className={style.leftColumn}>
                    <div className={style.filterCategory}>
                        <div className={style.filterHeader}>Category</div>
                        <div 
                            className={`${style.filterOptions} ${selectedCategory === null ? style.selected : ''}`} 
                            onClick={() => handleCategoryClick(null)}
                        >
                            All Categories
                        </div>
                        {categories.map(category => (
                            <div 
                                key={category._id} 
                                className={`${style.filterOptions} ${selectedCategory === category._id ? style.selected : ''}`} 
                                onClick={() => handleCategoryClick(category._id)}
                            >
                                {category.title}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.rightColumn}>

                    <div className={style.titleSortContainer}>

                        <input
                            type="text"
                            placeholder="Search Products"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className={style.searchInput}
                        />
                        <select 
                            className={style.sortDropdown} 
                            value={sortBy} 
                            onChange={handleSortChange}
                        >
                            <option value="new">New products</option>
                            <option value="old">Old products</option>
                        </select>
                    </div>
                    <div className={style.productContainer}>
                        <ProductCardContainer products={filteredProducts} numberOfCards={9} />
                    </div>
                </div>
            </div>
        </MainContainer>
    );
};

export default Products;
