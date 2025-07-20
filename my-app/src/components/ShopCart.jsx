import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const ShopCart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart on mount
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(cart);
  }, []);

  const updateCartStorage = (items) => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    setCartItems(items);
  };

  const handleQuantity = (id, delta) => {
    const updated = cartItems.map((item) =>
      item._id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    );
    updateCartStorage(updated);
  };

  const handleRemove = (id) => {
    const filtered = cartItems.filter((item) => item._id !== id);
    updateCartStorage(filtered);
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.saleprice * item.quantity,
    0
  );

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-1">🛒 Your Cart</h2>
      <p className="text-sm text-gray-500 mb-4">Location: 382480</p>

      {cartItems.length === 0 ? (
        <div className="text-gray-600 text-center mt-12">
          <p className="text-lg">Your cart is currently empty.</p>
          <p className="text-sm mt-1">Start adding products to see them here.</p>
        </div>
      ) : (
        <>
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm font-medium">
            🎉 You’ve got FREE delivery. Start <span className="font-bold">checkout now!</span>
          </div>

          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item._id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-4">
                  <img
                    src={item.productimage}
                    alt={item.producttitle}
                    className="w-14 h-14 object-contain"
                  />
                  <div>
                    <h4 className="font-semibold">{item.producttitle}</h4>
                    <p className="text-sm text-gray-500">{item.productweight || "250g"}</p>
                    <button
                      className="flex items-center text-red-600 text-sm mt-1 hover:underline"
                      onClick={() => handleRemove(item._id)}
                    >
                      <FaTrashAlt className="mr-1 text-sm" /> Remove
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex border rounded overflow-hidden">
                    <button
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                      onClick={() => handleQuantity(item._id, -1)}
                    >
                      -
                    </button>
                    <span className="px-3 py-1">{item.quantity}</span>
                    <button
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                      onClick={() => handleQuantity(item._id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="font-bold text-gray-800">
                    ₹{(item.saleprice * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Summary */}
          <div className="mt-6 border-t pt-4 flex justify-between items-center text-lg font-semibold text-gray-800">
            <span>Total</span>
            <span>₹{totalAmount.toFixed(2)}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => window.location.href = "/home"}
              className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
            >
              Continue Shopping
            </button>
            <button
              onClick={() => window.location.href = "/CheckOutPage"}
              className="bg-gray-900 text-white px-5 py-2 rounded hover:bg-gray-800"
            >
              Proceed To Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShopCart;
