import { Container, Box, Typography } from "@mui/material";
import { cartContext } from '../../Context/cartContext';
import { useContext } from 'react';
import CartHeaders from "./cartHeaders";
import CartItems from "./CartItems";

export default function ShoppingCart() {
    const { cartItems } = useContext(cartContext);
    return (
        <div style={{ margin: "30px 0" }}>
            <Container>
                {
                    cartItems.length > 0 ? (
                        <>
                            <CartHeaders />
                            <CartItems />

                        </>
                    ) : (
                        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column"
                            sx={{
                                width: "35%",
                                height: '65vh',
                                margin: '0 auto',
                            }}
                        >
                            <img
                                src='/img/empty-cart.png'
                                alt='Empty cart'
                                style={{
                                    width: "100%",
                                    objectFit: 'contain'
                                }}
                            />

                            <Typography variant="body1" sx={{ color: "var(--color-heading)" }}>
                                Cart is Empty
                            </Typography>
                        </Box>
                    )
                }
            </Container >
        </div>
    )
}