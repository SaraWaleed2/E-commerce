import { createContext } from 'react';

export const CategoriesContext = createContext();

export default function CategoriesProvider ({ children }) {
    const productsCategories = [
        { category: 'laptops', categoryDesc: "High-performance laptops for work, gaming, and creativity, tailored to your need" },
        { category: 'smartphones', categoryDesc: "Discover the latest smartphones with cutting-edge features, powerful performance, and stunning designs" },
        { category: 'mobile-accessories', categoryDesc: "Enhance your mobile experience with premium cases, chargers, earphones, and more" },
        { category: 'tablets', categoryDesc: "Versatile tablets for entertainment, productivity, and seamless connectivity on the go" },
        { category: 'sunglasses', categoryDesc: "Stylish and protective sunglasses to elevate your look while shielding your eyes" },
    ];

    return (
        <CategoriesContext.Provider value={productsCategories}>
            {children}
        </CategoriesContext.Provider>
    );
};