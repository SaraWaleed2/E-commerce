import { Card, CardContent, Box, Typography, Rating, Stack } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RedoIcon from '@mui/icons-material/Redo';
import { Link } from 'react-router-dom';

function Product({ product }) {
    return (
        <Link to={`/products/${product.id}`}>
        <Card elevation={2} sx={{
            maxWidth: 250,
            mb: 10,
            p: 1,
            position: "relative",
            transition: "all 0.3s ease",
            border: "1px solid rgb(226, 226, 226)",
            '&:hover': {
                border: "1px solid var(--primary-color)",
                '& .icons': {
                    right: '12px'
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
                        <AddShoppingCartIcon sx={{
                            backgroundColor: "var(--secondary-color)",
                            color: 'white',
                            cursor: "pointer",
                            padding: "7px",
                            fontSize: "35px",
                            borderRadius: "100%",
                            '&:hover': {
                                transform: "scale(1.1)",
                                transition: "all 0.2s ease"
                            }
                        }} />
                        <FavoriteBorderIcon sx={{
                            backgroundColor: "var(--secondary-color)",
                            color: 'white',
                            cursor: "pointer",
                            padding: "7px",
                            fontSize: "35px",
                            borderRadius: "100%",
                            '&:hover': {
                                transform: "scale(1.1)",
                                transition: "all 0.2s ease"
                            }
                        }} />
                        <RedoIcon sx={{
                            backgroundColor: "var(--secondary-color)",
                            color: 'white',
                            cursor: "pointer",
                            padding: "7px",
                            fontSize: "35px",
                            borderRadius: "100%",
                            '&:hover': {
                                transform: "scale(1.1)",
                                transition: "all 0.2s ease"
                            }
                        }} />
                    </Stack>
                </Box>
            </CardContent>
        </Card>
        </Link>
    )
}

export default Product