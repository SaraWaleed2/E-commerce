import { useContext } from "react";
import { cartContext } from "../../Context/cartContext";
import { Box, Chip, Grid, Rating, Typography, Button, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useToast } from '../../Context/ToastContext';

function ProductDetailesInfo({ productDetailes }) {
    const { cartItems, addToCart, favouriteItems, addToFavourite, removeFromFavourite } = useContext(cartContext)
    const isInCart = cartItems.some((item) => item.id === productDetailes.id);
    const isInFav = favouriteItems.some((item) => item.id === productDetailes.id);
    const { showHideToast } = useToast();

    function handleFavourite() {
        if (isInFav) {
            removeFromFavourite(productDetailes.id);
            showHideToast(`${productDetailes.title} removed from favourites`,'favourite');
        } else {
            addToFavourite(productDetailes);
            showHideToast(`${productDetailes.title} added to favourites`,'favourite');
        }

    }
    
    return (
        <Grid size={{ md: 6 }}>
            <Box sx={{ display: "flex", justifyContent: "start", alignItems: productDetailes.title.length > 20 ? "start" : "center", gap: 3 }}>
                <Typography variant="h4" fontWeight="bold" style={{ color: "var(--primary-color)" }}>
                    {productDetailes.title}
                </Typography>

                <Chip label={productDetailes.stock > 0 ? "In Stock" : "Out Of Stock"} style={{ background: "var(--color-heading)", padding: "15px 7px", fontSize: "16px", color: "white" }} />
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
                <Button variant="contained" disabled={isInCart} onClick={() => {
                    showHideToast(`${productDetailes.title} added to cart`, 'cart');
                    addToCart(productDetailes)
                }}
                    startIcon={<ShoppingCartIcon />} sx={{
                        background: "var(--primary-color)", p: "10px 30px", borderRadius: "25px", transition: ".5s all ease",
                    }}>
                    {isInCart ? "Product In Cart" : "Add to Cart"}
                </Button>
                <IconButton onClick={handleFavourite} >
                    {
                        isInFav ? <FavoriteIcon sx={{ cursor: "pointer", fontSize: 35, transition: ".5s all ease", color: "var(--primary-color)" }} /> : <FavoriteBorderIcon sx={{ cursor: "pointer", fontSize: 35, transition: ".5s all ease", color: "var(--primary-color)" }} />
                    }
                </IconButton>
            </Box>
        </Grid>
    )
}

export default ProductDetailesInfo
