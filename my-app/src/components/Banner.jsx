import React from 'react'
import groceryBanner from '../assets/groceryBanner.png'
import groceryBanner2 from '../assets/groceryBanner2.jpg'

const Banner = () => {
  return (
    <div className="w-full bg-white py-8">
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1 */}
        <div
          className="relative bg-gray-100 rounded-xl overflow-hidden p-6 flex items-center justify-between bg-cover bg-center"
          style={{ backgroundImage: `url(${groceryBanner})` }}
        >
          <div className="z-10 bg-white bg-opacity-80 p-4 rounded-md shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-1">Fruits & Vegetables</h2>
            <p className="text-sm text-gray-600 mb-4">
              Get Upto <span className="font-semibold">30% Off</span>
            </p>
            <button className="bg-gray-900 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition">
              Shop Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="relative bg-gray-100 rounded-xl overflow-hidden p-6 flex items-center justify-between bg-cover bg-center"
          style={{ backgroundImage: `url(${groceryBanner2})` }}
        >
          <div className="z-10 bg-white bg-opacity-80 p-4 rounded-md shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-1">Freshly Baked Buns</h2>
            <p className="text-sm text-gray-600 mb-4">
              Get Upto <span className="font-semibold">25% Off</span>
            </p>
            <button className="bg-gray-900 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition">
              Shop Now
            </button>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Banner
// This code defines a Banner component that displays two promotional cards for a grocery store.
// Each card includes a title, a discount message, a button to shop now, and an