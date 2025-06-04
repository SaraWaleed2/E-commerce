import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Product from "../Components/SlideProducts/Product";
import { Box, Container, Grid } from "@mui/material";
import Headline from "../Components/Headline";
import SliderProductLoading from "../Components/SlideProducts/SliderProductLoading";

function SearchResults() {

    const query = new URLSearchParams(useLocation().search).get("query");
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/search?q=${query}`)
            .then(response => {
                setSearchResults(response.data.products || [])
                setLoading(false)
            })
    }, [query])

    if (!searchResults) return <p>No Products Found</p>

    console.log(searchResults)
    return (
        <Container>
            <Box sx={{ p: 0, m: 0 }}>
                {
                    loading ? <SliderProductLoading /> :
                        (<>
                            <Headline title={`Results for: ${query}`} content={`Explore ${query} products`} />
                            {
                                searchResults.length > 0 ?
                                    (<Grid container spacing={2}>
                                        {
                                            searchResults.map((product, i) => {
                                                return (
                                                    <Grid size={{sx:6, md: 2.4 }} sx={{ mb: 2 }} key={i}>
                                                        <Product product={product} />
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>)
                                    : <h2>No Products Found</h2>
                            }
                        </>
                        )}
            </Box>

        </Container>
    )
}

export default SearchResults
