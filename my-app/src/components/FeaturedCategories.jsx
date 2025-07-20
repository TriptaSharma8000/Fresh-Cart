import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Images
import categoryAttaRiceDal from "../assets/categoryAttaRiceDal.jpg";
import categoryFruitsVegetables from "../assets/categoryFruitsVegetables.jpg";
import categoryBakeryBiscuits from "../assets/categoryBakeryBiscuits.jpg";
import categoryChickenMeatFish from "../assets/categoryChickenMeatFish.jpg";
import categoryCleaningEssentials from "../assets/categoryCleaningEssentials.jpg";
import categoryColdDrinksJuices from "../assets/categoryColdDrinksJuices.jpg";
import categoryDairyBreadEggs from "../assets/categoryDairyBreadEggs.jpg";
import categoryInstantFood from "../assets/categoryInstantFood.jpg";
import categoryPetCare from "../assets/categoryPetCare.jpg";
import categorySnackMunchies from "../assets/categorySnackMunchies.jpg";
import categoryTeaCoffeeDrinks from "../assets/categoryTeaCoffeeDrinks.jpg";

const categories = [
  { id: 1, name: "Atta, Rice & Dal", image: categoryAttaRiceDal },
  { id: 2, name: "Fruits & Vegetables", image: categoryFruitsVegetables },
  { id: 3, name: "Bakery & Biscuits", image: categoryBakeryBiscuits },
  { id: 4, name: "Chicken, Meat & Fish", image: categoryChickenMeatFish },
  { id: 5, name: "Cleaning Essentials", image: categoryCleaningEssentials },
  { id: 6, name: "Cold Drinks & Juices", image: categoryColdDrinksJuices },
  { id: 7, name: "Dairy, Bread & Eggs", image: categoryDairyBreadEggs },
  { id: 8, name: "Instant Food", image: categoryInstantFood },
  { id: 9, name: "Pet Care", image: categoryPetCare },
  { id: 10, name: "Snack & Munchies", image: categorySnackMunchies },
  { id: 11, name: "Tea, Coffee & Drinks", image: categoryTeaCoffeeDrinks },
];

const FeaturedCategories = () => {
  return (
    <div className="w-full py-10 ">
      <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Featured Categories
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={24}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="pb-16" // This adds space below cards and above dots
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <div className="bg-white rounded-2xl shadow hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
                <div className="h-40 flex items-center justify-center p-4">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="bg-gray-50 px-4 py-3 text-center">
                  <h3 className="text-base font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                    {category.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default FeaturedCategories;
