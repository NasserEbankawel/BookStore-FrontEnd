import React from 'react';
import books from './booksData'; // Import the book data
import { Pagination, Autoplay, Navigation } from 'swiper/modules'; // Import required Swiper modules
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components

// Import Swiper styles

const FeaturedSection = () => {
  return (
    <>
      <section className="featured" id="featured">
        <h1 className="heading"> <span>Featured Books</span> </h1>

        {/* Swiper Container */}
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={30}
          // slidesPerView={5}
          navigation={true}
          centeredSlides={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className="featured-slider"
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
          {books.map((book, index) => (
            <SwiperSlide key={index} className="swiper-slide box">
              <div className="icons">
                <a href="#" className="fas fa-search"></a>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-eye"></a>
              </div>

              <div className="image">
                <img src={book.image} alt="" />
              </div>

              <div className="content">
                <h3>{book.name}</h3>
                <div className="price">
                  {book.price} <span>{/* {book.originalPrice} */}</span>
                </div>
                <a href="#" className="btn">Add to Cart</a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default FeaturedSection;