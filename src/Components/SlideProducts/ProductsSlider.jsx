import { Container } from "@mui/material"
import Headline from "../Headline"
import Product from "./Product"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './ProductsSlider.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

function ProductsSlider({ products, title, content }) {
    return (
        <>
            <Container>
                <Headline title={title} content={content} />
                <Swiper
                    breakpoints={{
                        // when window width is >= 0px (xs)
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        // when window width is >= 600px (sm)
                        600: {
                            slidesPerView: 3,
                            spaceBetween: 15
                        },
                        // when window width is >= 900px (md)
                        900: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        },
                        // when window width is >= 1200px (lg)
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 20
                        }
                    }}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"

                >
                    {products?.map((product) => (
                        <SwiperSlide key={product.id}>
                            <Product product={product} />
                        </SwiperSlide>
                    ))}

                </Swiper>

            </Container>
        </>
    )
}

export default ProductsSlider
