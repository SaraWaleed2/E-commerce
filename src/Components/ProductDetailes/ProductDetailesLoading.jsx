import { Container, Box, Grid } from "@mui/material";
import Skeleton from '@mui/material/Skeleton';

function ProductDetailesLoading() {

    return (
        <Container maxWidth="lg">
            <Grid container spacing={5} alignItems="center" sx={{ mb: 10 }}>
                <Grid size={{ md: 6 }} style={{ textAlign: "center", marginTop: "10px" }}>
                    <Box sx={{ height: "350px", mt: 5 }}>
                        <Skeleton variant="rectangular" width="100%" height="90%" animation="wave" />
                    </Box>

                    <Box sx={{ display: "flex", gap: 2, justifyContent: "center", alignItems: "center" }}>
                        <Skeleton variant="rectangular" width={210} height={118} animation="wave" />
                        <Skeleton variant="rectangular" width={210} height={118} animation="wave" />
                        <Skeleton variant="rectangular" width={210} height={118} animation="wave" />
                    </Box>
                </Grid>

                <Grid size={{ md: 6 }}>
                    <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", gap: 3 }}>
                        <Skeleton variant="text" width="80%" height={50} />
                        <Skeleton variant="circular" width={40} height={40} />
                    </Box>

                    <Skeleton variant="text" width="80%" height={50} />
                    <Skeleton variant="text" width="80%" height={50} />
                    <Skeleton variant="text" width="80%" height={50} />
                    <Skeleton variant="text" width="80%" height={50} />
                    <Skeleton variant="text" width="80%" height={50} />

                    <Box sx={{
                        mt: 3, display: "flex", alignItems: "center", gap: 3,
                        "& :hover": {
                            transform: "scale(0.95)"
                        }
                    }}>
                        <Skeleton variant="text" width="50%" height={60} />
                        <Skeleton variant="circular" width={40} height={40} />

                    </Box>
                </Grid>

            </Grid>
        </Container>
    );
}

export default ProductDetailesLoading;
