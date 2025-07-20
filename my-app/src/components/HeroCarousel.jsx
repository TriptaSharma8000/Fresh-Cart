import React from 'react';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroCarousel = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="h-[400px] md:h-[500px] lg:h-[600px]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-full w-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide1})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-40 flex items-center justify-start">
              <div className="text-black p-6 md:p-12 max-w-xl ml-4 md:ml-20">
                <p className="mb-3 text-sm md:text-base text-black-300 bg-green-600 rounded-1xl p-1">Opening sale discount 50%</p>
                <h2 className="text-2xl md:text-4xl font-bold mb-3">SuperMarket for Fresh Grocery</h2>
                <p className="mb-5 text-sm md:text-base text-gray-600">
                  Introduced a new model for online grocery shopping and convenient home delivery.
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-full w-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide2})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-40 flex items-center justify-start">
              <div className="text-black p-6 md:p-12 max-w-xl ml-4 md:ml-20">
                <p className="mb-3 text-sm md:text-base text-white-300 bg-amber-300 rounded-1xl text-align-center p-1">Free Shipping order over $100</p>
                <h2 className="text-2xl md:text-4xl font-bold mb-3">Free Shipping on Your First Order</h2>
                <p className="mb-5 text-sm md:text-base text-gray-600">
                  Available to First-Time Customers Only. Valid After Promotions and Discounts.
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg transition duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
// This component creates a hero carousel with two slides, each containing an image, text, and a button.
// The Swiper component is used for the carousel functionality, with navigation and pagination enabled.