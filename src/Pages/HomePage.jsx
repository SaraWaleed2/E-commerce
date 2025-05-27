import Slider from "../Components/HeroSlider/Slider.jsx";
import ProductsSlider from "../Components/SlideProducts/ProductsSlider.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import SliderProductLoading from "../Components/SlideProducts/SliderProductLoading.jsx";


function HomePage() {
    const [products, setProducts] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const productsCategories = [
        { categoryName: 'laptops', categoryDesc: "High-performance laptops for work, gaming, and creativity, tailored to your need" },
        { categoryName: 'smartphones', categoryDesc: "Discover the latest smartphones with cutting-edge features, powerful performance, and stunning designs" },
        { categoryName: 'mobile-accessories', categoryDesc: "Enhance your mobile experience with premium cases, chargers, earphones, and more" },
        { categoryName: 'tablets', categoryDesc: "Versatile tablets for entertainment, productivity, and seamless connectivity on the go" },
        { categoryName: 'sunglasses', categoryDesc: "Stylish and protective sunglasses to elevate your look while shielding your eyes" },
    ];

    useEffect(() => {
        Promise.all(
            productsCategories.map((category) =>
                axios.get(`https://dummyjson.com/products/category/${category.categoryName}`)
                    .then((res) => ({ [category.categoryName]: res.data.products }))
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
                    productsCategories.map((category) => (
                        <SliderProductLoading key={category.categoryName} />
                    ))) :
                    (
                        productsCategories.map((category) => (
                            <div style={{ marginBottom: "60px" }} key={category.categoryName}>
                                <ProductsSlider products={products[category.categoryName]} title={category.categoryName.replace('-', " ")} content={category.categoryDesc} />
                            </div>
                        ))
                    )
            }


        </>
    );
}

export default HomePage;