import { Container, Box, Skeleton } from "@mui/material";

function SliderProductLoading() {
    return (
        <Container maxWidth="lg" sx={{ mb: 15 }}>

            <Box sx={{ mb: 4 }}>
                <Skeleton variant="text" width="30%" height={60} />
                <Skeleton variant="text" width="60%" height={30} sx={{ mt: 1 }} />
            </Box>

            <Box sx={{ display: 'flex', gap: 3 }}>
                {[...Array(5)].map((_, index) => (
                    <Box key={index} sx={{ width: '100%' }}>
                        <Skeleton variant="rectangular" width="100%" height={200} />
                        <Skeleton variant="text" width="80%" sx={{ mt: 1 }} />
                        <Skeleton variant="text" width="60%" />
                        <Skeleton variant="text" width="40%" />
                    </Box>
                ))}
            </Box>
        </Container>
    );
}

export default SliderProductLoading;