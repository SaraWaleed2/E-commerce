import { Card, CardContent, Box, Typography, Rating, Stack, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RedoIcon from '@mui/icons-material/Redo';
import CheckIcon from '@mui/icons-material/Check';
import { Link } from 'react-router-dom';
import { cartContext } from '../../Context/cartContext';
import { useContext } from 'react';
import { useToast } from '../../Context/ToastContext';

function Product({ product }) {
    const { showHideToast } = useToast();
    const { cartItems, addToCart, favouriteItems, addToFavourite, removeFromFavourite } = useContext(cartContext);
    const isInCart = cartItems.some((item) => item.id === product.id);
    const isInFav = favouriteItems.some((item) => item.id === product.id);

    function handleFavourite(e) {
        e.preventDefault();
        if (isInFav) {
            removeFromFavourite(product.id);
            showHideToast(`${product.title} removed from favourites`, 'favourite');
        } else {
            addToFavourite(product);
            showHideToast(`${product.title} added to favourites`, 'favourite');
        }

    }

    return (
        <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
            <Card className={isInCart ? 'in-cart' : ''} elevation={2} sx={{
                maxWidth: 250,
                height: 320,
                p: 1,
                position: "relative",
                transition: "all 0.3s ease",
                border: "1px solid rgb(226, 226, 226)",
                '&:hover': {
                    border: "1px solid var(--primary-color)",
                    '& .icons': {
                        right: '12px'
                    }
                },
                '&.in-cart': {
                    '& .added-cart': {
                        backgroundColor: "var(--primary-color)",
                    }
                }
            }}>
                <div className="card-media" style={{ height: "165px" }}>
                    <img src={product.images[0]} alt={product.title} style={{ height: "100%", objectFit: "contain" }} />
                </div>

                <CardContent>
                    <Typography gutterBottom variant="h6" sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        fontWeight: 500,
                        color: "var(--primary-color)"
                    }}> {product.title} </Typography>

                    <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly sx={{
                        '.MuiRating-icon': {
                            color: 'var(--secondary-color)',
                        }
                    }} />

                    <Typography variant="h6" style={{ fontWeight: "600", color: "var(--primary-color)" }}> $ {product.price} </Typography>

                    <Box className="icons" sx={{
                        position: "absolute",
                        top: "50%",
                        right: '-40px',
                        transform: "translateY(-50%)",
                        transition: "all 0.3s ease",
                    }}>
                        <Stack direction="column" spacing={3}>
                            <IconButton
                                className='added-cart'
                                disabled={isInCart}
                                onClick={(e) => {
                                    e.preventDefault();
                                    showHideToast(`${product.title} added to cart`, 'cart');
                                    addToCart(product);
                                }}
                                sx={{
                                    backgroundColor: isInCart ? "var(--primary-color)" : "var(--secondary-color)",
                                    color: 'white',
                                    padding: "7px",
                                    '&:hover': {
                                        transform: "scale(1.1)",
                                        transition: "all 0.2s ease",
                                        backgroundColor: isInCart ? "var(--primary-color)" : "var(--secondary-color)",
                                    },
                                    '&.Mui-disabled': {
                                        backgroundColor: "var(--primary-color)",
                                        color: 'white'
                                    }
                                }}
                            >
                                {isInCart ? <CheckIcon fontSize="small" /> : <AddShoppingCartIcon fontSize="small" />}
                            </IconButton>

                            <IconButton sx={{
                                backgroundColor: isInFav ? "var(--primary-color)" : "var(--secondary-color)",
                                color: 'white',
                                padding: "7px",
                                '&:hover': {
                                    transform: "scale(1.1)",
                                    transition: "all 0.2s ease",
                                    backgroundColor: isInFav ? "var(--primary-color)" : "var(--secondary-color)",
                                }
                            }} onClick={handleFavourite}>
                                <FavoriteBorderIcon fontSize="small" />
                            </IconButton>

                            <IconButton sx={{
                                backgroundColor: "var(--secondary-color)",
                                color: 'white',
                                padding: "7px",
                                '&:hover': {
                                    transform: "scale(1.1)",
                                    transition: "all 0.2s ease",
                                    backgroundColor: "var(--secondary-color)"
                                }
                            }}>
                                <RedoIcon fontSize="small" />
                            </IconButton>
                        </Stack>
                    </Box>
                </CardContent>
            </Card>
        </Link>
    )
}

export default Product;