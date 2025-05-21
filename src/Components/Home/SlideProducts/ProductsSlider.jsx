import { Container } from "@mui/material"
import Headline from "../../Headline"
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

function ProductsSlider({ products }) {
    return (
        <>
            <Container>
                <Headline />
                <Swiper
                    slidesPerView={5}
                    spaceBetween={20}
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
