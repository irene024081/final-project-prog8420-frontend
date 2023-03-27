import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Movies } from '../../Data/MovieData';
// import FlexMovieItems from '../FlexMovieItems';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <>
      <div className="relative w-full">
        <Swiper
          direction="horizontal"
          slidesPerView={1}
          loop={true}
          speed={2000}
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          className="w-full xl:h-96 bg-dry lg:h-64 h-48"
        >
          {Movies.slice(0, 6).map((movie, index) => (
            <SwiperSlide
              key={index}
              className="relative rounded overflow-hidden"
            >
              <Link to={`/movie/${movie.name}`}>
                <img
                  src={`${movie.title_image}`}
                  alt={movie.name}
                  className="w-full h-full object-cover"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Banner;
