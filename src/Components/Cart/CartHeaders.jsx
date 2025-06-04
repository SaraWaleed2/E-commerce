import { Box, Typography, Grid } from "@mui/material";

function CartHeaders() {
    return (
        <Grid container sx={{ backgroundColor: "rgba(235, 235, 235, 0.45)", p: 2, border: "1px solid rgba(239, 129, 32, 0.2)" }}>
            <Grid size={{xs:5, md: 3 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Box>
                    <Typography variant="h6" component="h6" sx={{ color: 'var(--primary-color)' }}>
                        Product
                    </Typography>
                </Box>
            </Grid>
            <Grid size={{xs:5, md: 3 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="h6" component="h6" sx={{ color: 'var(--primary-color)' }}>
                    Price
                </Typography>
            </Grid>
            <Grid size={{xs:5, md: 3 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="h6" component="h6" sx={{ color: 'var(--primary-color)' }}>
                    Quantity
                </Typography>
            </Grid>
            <Grid size={{xs:5, md: 2 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="h6" component="h6" sx={{ color: 'var(--primary-color)' }}>
                    Total
                </Typography>
            </Grid>
        </Grid>
    )
}

export default CartHeaders
