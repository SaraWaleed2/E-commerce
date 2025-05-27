import { Container, Box, Typography, Grid } from "@mui/material";
import { cartContext } from '../Context/cartContext';
import { useContext } from 'react';
import Product from "../Components/SlideProducts/Product";
import Headline from "../Components/Headline";

function FavouriteItems() {
    const { favouriteItems } = useContext(cartContext);
    return (
        <Container>
            <Box sx={{ p: 0, m: 0 }}>
                <Headline title={`Favourite Products`} />
                {
                    favouriteItems.length > 0 ?
                        (<Grid container spacing={2}>
                            {
                                favouriteItems.map((product, i) => {
                                    return (
                                        <Grid size={{ md: 2.4 }} sx={{ mb: 2 }} key={i}>
                                            <Product product={product} />
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>)
                        : <h2>No Favourite Products Found</h2>
                }
            </Box>

        </Container>
    )
}

export default FavouriteItems
