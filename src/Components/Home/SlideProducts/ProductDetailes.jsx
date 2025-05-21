import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Box, Typography, Button, Rating, Grid, Chip } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ProductsSlider from "./ProductsSlider";
import { HeadlineContext } from "../../../Context/HeadlineContext";

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

    if (isLoading) {
        return (
            <h2>Loading.............</h2>
        )
    }

    if (!productDetailes) {
        return (
            <h2> Product Detailes Not Available :( </h2>
        )
    }
    console.log(relatedProducts)

    return (
        <Container maxWidth="lg">
            <Grid container spacing={1} alignItems="center" sx={{ mb: 10 }}>

                <Grid size={{ md: 6 }} style={{ textAlign: "center" }}>
                    <Box>
                        <img src={productDetailes.images[0]} alt={productDetailes.title} style={{ width: "70%", borderRadius: 2, objectFit: "contain" }} />
                    </Box>

                    <Box sx={{ display: "flex", gap: 2, justifyContent: "center", alignItems: "center" }}>
                        {productDetailes.images.map((src, i) => (
                            <Box key={i} sx={{
                                width: 120,
                                height: 120,
                            }}>
                                <img src={src} alt={productDetailes.title} sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: 1,
                                    cursor: "pointer",

                                }} />

                            </Box>
                        ))}
                    </Box>
                </Grid>

                <Grid size={{ md: 6 }}>
                    <Box sx={{ display: "flex", justifyContent: "start", alignItems: productDetailes.title.length > 20 ? "start" : "center", gap: 3 }}>
                        <Typography variant="h4" fontWeight="bold" style={{ color: "var(--primary-color)" }}>
                            {productDetailes.title}
                        </Typography>

                        <Chip label="In Stock" style={{ background: "var(--color-heading)", padding: "15px 7px", fontSize: "16px", color: "white" }} />
                    </Box>

                    <Rating value={productDetailes.rating} readOnly size="medium" sx={{
                        mt: 1, my: 2, '.MuiRating-icon': {
                            color: 'var(--secondary-color)',
                        }
                    }} />
                    <Typography variant="h5" style={{ fontWeight: "900", color: "var(--primary-color)" }}>
                        <span style={{ color: "var(--secondary-color)" }}> $</span> {productDetailes.price}
                    </Typography>


                    <Typography variant="h6" sx={{ mt: 1, fontWeight: "900", color: "var(--primary-color)" }}>
                        <span style={{ color: "var(--color-heading)" }} >Brand: </span> {productDetailes.brand}
                    </Typography>

                    <Typography variant="body2" sx={{ mt: 2, color: "var(--color-heading)", fontSize: "17px" }} >{productDetailes.description}</Typography>

                    <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }} style={{ color: "var(--secondary-color)" }}>
                        Hurry Up! Only {productDetailes.stock} products left in stock.
                    </Typography>

                    <Box sx={{
                        mt: 3, display: "flex", alignItems: "center", gap: 3,
                        "& :hover": {
                            transform: "scale(0.95)"
                        }
                    }}>
                        <Button variant="contained" startIcon={<ShoppingCartIcon />} sx={{
                            background: "var(--primary-color)", p: "10px 30px", borderRadius: "25px", transition: ".5s all ease",
                        }}>
                            Add to Cart
                        </Button>
                        <FavoriteBorderIcon sx={{ cursor: "pointer", fontSize: 35, transition: ".5s all ease" }} />
                    </Box>
                </Grid>

            </Grid>
            {loading ?
                (<h2>Loading.............</h2>) : (

                    <HeadlineContext.Provider key={productDetailes.id} value={{ title: productDetailes.category.replace('-', " "), content: `Explore similar products in ${productDetailes.category} category` }}>
                        <ProductsSlider products={relatedProducts} />
                    </HeadlineContext.Provider>

                )
            }

        </Container>
    );
}

export default ProductDetailes;
