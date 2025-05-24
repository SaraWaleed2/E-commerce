import { Grid, Box } from "@mui/material";

function ProductDetailesImages({ productDetailes }) {
    return (
        <Grid size={{ md: 6 }} style={{ textAlign: "center", marginTop: "10px" }}>
            <Box sx={{ height: "350px" }}>
                <img id="main-img" src={productDetailes.images[0]} alt={productDetailes.title} style={{ width: "70%", height: "90%", borderRadius: 2, objectFit: "contain" }} />
            </Box>

            <Box sx={{ display: "flex", gap: 2, justifyContent: "center", alignItems: "center" }}>
                {productDetailes.images.map((src, i) => (
                    <Box key={i} sx={{
                        width: 120,
                        height: 120,
                    }}>
                        <img src={src} alt={productDetailes.title} style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            cursor: "pointer",
                        }}
                            onClick={() => {
                                document.getElementById('main-img').src = src
                            }} />

                    </Box>
                ))}
            </Box>
        </Grid>
    )
}

export default ProductDetailesImages
