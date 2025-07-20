import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/Wishlist")
      .then(res => {
        if (res.data.status) {
          setWishlistItems(res.data.items);
        }
      })
      .catch(err => console.log(err));
  }, []);

  const handleRemove = (id) => {
    axios.delete(`http://localhost:8080/Wishlist/${id}`)
      .then(res => {
        if (res.data.status) {
          setWishlistItems(prev => prev.filter(item => item._id !== id));
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="p-8">
      <div className="text-sm breadcrumbs text-green-600">
        <ul className="flex gap-2">
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li className="text-gray-600">Shop Wishlist</li>
        </ul>
      </div>

      <h1 className="text-3xl font-bold mt-4">My Wishlist</h1>
      <p className="text-gray-600 mb-6">{wishlistItems.length} product(s) in your wishlist.</p>

      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4">Product</th>
              <th className="p-4">Price</th>
              <th className="p-4">Status</th>
              <th className="p-4">Remove</th>
            </tr>
          </thead>
          <tbody>
            {wishlistItems.map((item) => (
              <tr key={item._id} className="border-t">
                <td className="p-4 flex items-center gap-4">
                  <img src={item.productimage} alt={item.producttitle} className="w-12 h-12 object-contain" />
                  <div>
                    <div className="font-semibold">{item.producttitle}</div>
                    <div className="text-sm text-gray-500">{item.productcategory}</div>
                  </div>
                </td>
                <td className="p-4 text-gray-700">₹{item.saleprice}</td>
                <td className="p-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded text-xs font-medium">In Stock</span>
                </td>
                <td className="p-4 text-center">
                  <button className="text-gray-500 hover:text-red-500" onClick={() => handleRemove(item._id)}>
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
            {wishlistItems.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">No items in wishlist</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
