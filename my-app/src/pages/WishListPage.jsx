import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Wishlist from '../components/Wishlist'

const WishListPage = () => {
  return (
    <div>
        <Navbar/>
       <Wishlist />
        <Footer />

        {/* Add more components as needed */}
    </div>
  )
}

export default WishListPage