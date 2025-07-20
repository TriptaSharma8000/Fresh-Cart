import React from "react";
import bannerDeal from "../assets/bannerDeal.jpg";
import productimg11 from "../assets/productimg11.jpg";
import productimg12 from "../assets/productimg12.jpg";
import productimg13 from "../assets/productimg13.jpg";

const products = [
  {
    id: 1,
    title: "Roast Ground Coffee",
    category: "Tea, Coffee & Drinks",
    price: 13.5,
    oldPrice: 18,
    rating: 4.3,
    image: productimg11,
  },
  {
    id: 2,
    title: "Crushed Tomatoes",
    category: "Fruits & Vegetables",
    price: 13.5,
    oldPrice: 18,
    rating: 4.3,
    image: productimg12,
  },
  {
    id: 3,
    title: "Golden Pineapple",
    category: "Fruits & Vegetables",
    price: 14.4,
    oldPrice: 18,
    rating: 4.3,
    image: productimg13,
  },
];

const BestSells = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Daily Best Sells</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Deal Banner */}
        <div
          className="rounded-lg p-6 text-white flex flex-col justify-between bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerDeal})` }}
        >
          <div>
            <h3 className="text-2xl font-bold mb-2">
              100% Organic Coffee Beans.
            </h3>
            <p className="mb-4">Get the best deal before close.</p>
          </div>
          <a
            href="#"
            className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 w-max text-sm font-medium"
          >
            Shop Now →
          </a>
        </div>

        {/* Product Cards */}
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg border p-4 shadow-sm flex flex-col"
          >
            <p className="text-sm text-gray-500">{product.category}</p>
            <h4 className="text-base font-semibold mb-2">{product.title}</h4>
            <img
              src={product.image}
              alt={product.title}
              className="h-32 object-contain mx-auto mb-4"
            />

            <div className="flex items-center gap-2 text-sm mb-1">
              <span className="text-lg font-bold text-black">${product.price}</span>
              <span className="text-gray-400 line-through">${product.oldPrice}</span>
            </div>

            <div className="flex items-center text-yellow-500 text-sm mb-3">
              {"⭐".repeat(Math.floor(product.rating))}
              <span className="ml-1 text-gray-600">{product.rating}</span>
            </div>

            <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700 mb-4 text-sm font-medium">
              + Add to cart
            </button>

            <div className="grid grid-cols-4 gap-2 text-center text-xs text-gray-600">
              <div>
                <p className="font-bold text-black">1210</p>
                <p>Days</p>
              </div>
              <div>
                <p className="font-bold text-black">1</p>
                <p>Hours</p>
              </div>
              <div>
                <p className="font-bold text-black">57</p>
                <p>Mins</p>
              </div>
              <div>
                <p className="font-bold text-black">22</p>
                <p>Sec</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSells;
