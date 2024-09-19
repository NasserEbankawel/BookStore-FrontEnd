import React from "react";
import productHome from "../Database/homeProductsData";
import { Pagination, Autoplay, Navigation } from 'swiper/modules'; // Import required Swiper modules
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components

const Home = () => {
    return (
        <>
            <section className="home" id="home">
                <div className="row">
                    <div className="content">
                        <h3>upto 75% off</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Obcaecati quam dolorum, quaerat, dolores et iure sunt porro odit id a blanditiis repellat placeat quia voluptatum ducimus cum nobis magnam minus.</p>
                        <a href="Product.html" className="btn">shop now</a>
                    </div>

                    <div className="swiper books-slider">
                    <Swiper
                            modules={[Autoplay, Navigation, Pagination]} // Include the Autoplay module
                            spaceBetween={5}
                            slidesPerView={3}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                                delay: 3000, // 3 seconds delay between slides
                                disableOnInteraction: false, // Continue autoplay after user interactions
                            }}
                            navigation={false}
                            
                            // pagination={{ clickable: true }}
                            breakpoints={{
                                0: {
                                  slidesPerView: 1,
                                },
                               
                                768: {
                                  slidesPerView: 2,
                                },
                                1024: {
                                  slidesPerView: 3,
                                },
                              }}
                        >
                            {productHome.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <a href="#">
                                        <img src={image.image} alt={image.name} />
                                    </a>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <img src="/images/bookimages/BookShelf.jpg" className="stand" alt="stand" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
