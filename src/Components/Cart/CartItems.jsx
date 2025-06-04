import { useContext } from "react";
import { cartContext } from "../../Context/cartContext";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Typography, Grid, IconButton, Divider, Button } from "@mui/material";
function CartItems() {
    const { cartItems, decrementItemQuantity, incrementItemQuantity, removeProduct } = useContext(cartContext);
    const totalPice = cartItems.reduce((current, item) => current + item.price * item.quantity, 0).toFixed(2);

    return (
        <>
            {
                cartItems.map((item) => {
                    return (
                        <Box key={item.id}>
                            <Grid container sx={{ py: 2 }}>

                                <Grid size={{md: 3 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                                    <Box display="flex" justifyContent="center" alignItems="center" sx={{ gap: 2, width: '100%' }}>
                                        <Box
                                            sx={{
                                                width: "100px",
                                                height: "100px",
                                            }}
                                        >
                                            <img
                                                src={item.images[0]}
                                                alt={item.title}
                                                style={{
                                                    height: "100%",
                                                    width: "100%",
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        </Box>

                                        <Box
                                            sx={{
                                                width: "200px",
                                                wordWrap: 'break-word',
                                            }}
                                        >
                                            <Typography variant="body1"> {item.title} </Typography>
                                        </Box>
                                    </Box>
                                </Grid>

                                <Grid size={{ md: 3 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Typography variant="body1">$ {item.price}</Typography>
                                </Grid>

                                <Grid size={{xs:4, md: 3 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Box display="flex" alignItems="center">
                                        <IconButton
                                            size="small"
                                            sx={{ border: '1px solid #ddd' }}
                                            onClick={() => {
                                                decrementItemQuantity(item.id)
                                            }}
                                        >
                                            <RemoveIcon fontSize="small" />
                                        </IconButton>
                                        <Typography variant="body1" sx={{ mx: 2 }}>
                                            {item.quantity}
                                        </Typography>
                                        <IconButton
                                            size="small"
                                            sx={{ border: '1px solid #ddd' }}
                                            onClick={() => {
                                                incrementItemQuantity(item.id)
                                            }}
                                        >
                                            <AddIcon fontSize="small" />
                                        </IconButton>
                                    </Box>
                                </Grid>

                                <Grid size={{xs:4, md: 2 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Typography variant="body1">
                                        $ {item.price * item.quantity.toFixed(2)}
                                    </Typography>
                                </Grid>

                                <Grid size={{xs:4, md: 1 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <IconButton onClick={() => removeProduct(item.id)}>
                                        <DeleteIcon sx={{ color: 'var(--secondary-color)' }} />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Divider />

                        </Box>
                    )

                })

            }
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Cart Total: <span style={{ color: 'var(--secondary-color)', fontWeight: "800" }}>$ {totalPice}</span>
                </Typography>
                <Button variant='contained' style={{ background: "var(--primary-color)", padding: "10px 30px", borderRadius: "25px" }}>Order Now</Button>
            </Box>
        </>
    )
}

export default CartItems
