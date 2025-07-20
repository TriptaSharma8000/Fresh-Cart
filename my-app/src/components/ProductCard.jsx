import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/products')
      .then((res) => {
        if (res.data.status) {
          setProducts(res.data.ourproducts);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* 🔹 Left-aligned Heading */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Popular Products
      </h2>

      {/* 🔹 Grid of Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Products.map((item) => (
          <Link to={`/product/${item._id}`} key={item._id}>
            <div className="bg-white border rounded-md p-2 hover:shadow transition flex flex-col justify-between relative">
              {/* 🔹 Tag & Discount */}
              {(item.tag || item.discount) && (
                <div className="flex flex-col gap-1 absolute m-1 z-10">
                  {item.tag && (
                    <span className="bg-red-500 text-white text-[10px] px-1 py-0.5 rounded">
                      {item.tag}
                    </span>
                  )}
                  {item.discount && (
                    <span className="bg-green-600 text-white text-[10px] px-1 py-0.5 rounded">
                      {item.discount}
                    </span>
                  )}
                </div>
              )}

              {/* 🔹 Image */}
              <div className="h-[140px] flex items-center justify-center overflow-hidden">
                <img
                  src={item.productimage}
                  alt={item.producttitle}
                  className="max-h-full object-contain"
                />
              </div>

              {/* 🔹 Info */}
              <div className="mt-2 text-left">
                <p className="text-[11px] text-gray-500">{item.productcategory}</p>
                <h3 className="text-sm font-medium text-gray-800 leading-tight min-h-[2.5rem]">
                  {item.producttitle}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm font-semibold text-green-700">₹{item.saleprice}</span>
                  <span className="text-xs text-gray-400 line-through">₹{item.regularprice}</span>
                </div>
              </div>

              {/* 🔹 Add Button (smaller) */}
              <button className="mt-2 self-start text-xs px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition">
                + Add
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
