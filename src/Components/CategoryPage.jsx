import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Product from "./SlideProducts/Product"
import { Box, Container, Grid } from "@mui/material"
import Headline from "./Headline"
import SliderProductLoading from "./SlideProducts/SliderProductLoading"

function CategoryPage() {
    const { categoryName } = useParams()
    const [categoryProducts, setCategoryProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${categoryName}`)
            .then((res) => {
                setCategoryProducts(res.data.products)
                setLoading(false)
            })
    }, [categoryName])

    console.log(categoryProducts)

    return (

        <Container>

            <Box sx={{ p: 0, m: 0 }}>
                {
                    loading ? <SliderProductLoading /> :
                        (<>
                            <Headline title={`${categoryName.replace("-"," ")} : ${categoryProducts.length} `} content={`Explore products in ${categoryName} category`} />
                            <Grid container spacing={2}>
                                {
                                    categoryProducts.map((product, i) => {
                                        return (
                                            <Grid size={{ md: 2.4 }} sx={{ mb: 2 }} key={i}>
                                                <Product product={product} />
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </>
                        )}
            </Box>

        </Container>
    )
}

export default CategoryPage
