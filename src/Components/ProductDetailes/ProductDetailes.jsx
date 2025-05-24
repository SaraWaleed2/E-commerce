import axios from "axios";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import ProductsSlider from "../SlideProducts/ProductsSlider";
import { HeadlineContext } from "../../Context/HeadlineContext";
import ProductDetailesLoading from "./ProductDetailesLoading";
import SliderProductLoading from "../SlideProducts/SliderProductLoading";
import ProductDetailesInfo from "./ProductDetailesInfo";
import ProductDetailesImages from "./ProductDetailesImages";

function ProductDetailes() {

    const { id } = useParams()
    const [productDetailes, setProductDetailes] = useState([])
    const [relatedProducts, setRelatedProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(response => {
                setProductDetailes(response.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [id])


    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${productDetailes.category}`)
            .then((response) => {
                setRelatedProducts(response.data.products)
                setLoading(false)
            })
    }, [productDetailes?.category])


    if (!productDetailes) {
        return (
            <h2> Product Detailes Not Available :( </h2>
        )
    }

    return (
        <Container maxWidth="lg">
            {
                isLoading ? <ProductDetailesLoading /> : (
                    <Grid container spacing={1} alignItems="center" sx={{ mb: 10 }}>
                        <ProductDetailesImages productDetailes={productDetailes} />
                        <ProductDetailesInfo productDetailes={productDetailes} />
                    </Grid>
                )
            }

            {loading ?
                (<SliderProductLoading />) : (

                    <HeadlineContext.Provider key={productDetailes.id} value={{ title: productDetailes.category.replace('-', " "), content: `Explore similar products in ${productDetailes.category} category` }}>
                        <ProductsSlider products={relatedProducts} />
                    </HeadlineContext.Provider>

                )
            }

        </Container>
    );
}

export default ProductDetailes;
