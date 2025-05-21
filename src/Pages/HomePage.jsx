import Slider from "../Components/Home/Slider/Slider.jsx";
import ProductsSlider from "../Components/Home/SlideProducts/ProductsSlider.jsx";
import { HeadlineContext } from "../Context/HeadlineContext.js";
import { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
    const [products, setProducts] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const productsCategories = [
        { category: 'laptops', categoryDesc: "High-performance laptops for work, gaming, and creativity, tailored to your need" },
        { category: 'smartphones', categoryDesc: "Discover the latest smartphones with cutting-edge features, powerful performance, and stunning designs" },
        { category: 'mobile-accessories', categoryDesc: "Enhance your mobile experience with premium cases, chargers, earphones, and more" },
        { category: 'tablets', categoryDesc: "Versatile tablets for entertainment, productivity, and seamless connectivity on the go" },
        { category: 'sunglasses', categoryDesc: "Stylish and protective sunglasses to elevate your look while shielding your eyes" },
    ];


    useEffect(() => {
        Promise.all(
            productsCategories.map((category) =>
                axios.get(`https://dummyjson.com/products/category/${category.category}`)
                    .then((res) => ({ [category.category]: res.data.products }))
            )
        ).then((responses) => {
            const Allproducts = Object.assign({}, ...responses);
            setProducts(Allproducts);
            setIsLoading(false);
        })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <>
            <Slider />

            {
                isLoading ? (
                    <h2>Loading</h2>
                ) :
                    (
                        productsCategories.map((category) => (
                            <HeadlineContext.Provider
                                key={category.category}
                                value={{
                                    title: category.category.replace('-', " "),
                                    content: category.categoryDesc
                                }}
                            >
                                <ProductsSlider products={products[category.category]} />
                            </HeadlineContext.Provider>
                        ))
                    )
            }


        </>
    );
}

export default HomePage;