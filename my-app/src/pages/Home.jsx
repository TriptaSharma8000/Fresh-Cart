import React from 'react'
import Navbar from '../components/Navbar'
import HeroCarousel from '../components/HeroCarousel'
import FeaturedCategories from '../components/FeaturedCategories'
import Banner from '../components/Banner'
import ProductCard from '../components/ProductCard'
import BestSells from '../components/BestSells'
import FeaturesSection from '../components/FeaturesSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div >
          
        <Navbar/>
        <HeroCarousel />
        <FeaturedCategories />
        <Banner />
        <ProductCard />
        <BestSells />
        <FeaturesSection />
        <Footer />

        {/* Add more components as needed */}
    </div>
  )
}

export default Home