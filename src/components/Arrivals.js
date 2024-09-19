import React from "react";
import arrivalsData from "./arrivalsData"; // Adjust path if necessary
import productArrivals from "../Database/ArrivalsBooksData";

// Import Swiper React components
import { Pagination, Autoplay, Navigation } from 'swiper/modules'; // Import required Swiper modules
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
// Import Swiper styles


const Arrivals = () => {
  return (
    <section className="arrivals" id="arrivals">
      <h1 className="heading">
        <span>New Arrivals</span>
      </h1>

      {/* Swiper component */}
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={4}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        className="arrivals-slider"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          450: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {productArrivals.map((book, index) => (
          <SwiperSlide key={index} className="swiper-slide box">
            <div className="image">
              <img src={book.image} alt={book.title} />
            </div>
            <div className="content">
              <h3>{book.name}</h3>
              <div className="price">
                {book.price}$ <span>{book.price}</span>
              </div>
              <div className="stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <i
                    key={i}
                    className={`fas fa-star${i < Math.floor(book.stars) ? '' : '-half-alt'}`}
                  ></i>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Arrivals;
