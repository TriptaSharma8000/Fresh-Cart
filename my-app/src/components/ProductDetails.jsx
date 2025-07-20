import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { FaShoppingBag, FaSyncAlt, FaHeart } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  // Fetch product from backend
  useEffect(() => {
    axios
      .get(`http://localhost:8080/products/${id}`)
      .then((res) => {
        if (res.data.status) {
          setProduct(res.data.product);
        }
      })
      .catch((err) => {
        console.error("Product fetch error:", err);
      });
  }, [id]);

  // Add to Cart using localStorage
  const handleAddToCart = (product) => {
    try {
      const cart = JSON.parse(localStorage.getItem("cartItems")) || [];

      const existingItemIndex = cart.findIndex((item) => item._id === product._id);

      if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("cartItems", JSON.stringify(cart));

      Swal.fire({
        icon: "success",
        title: "Added to Cart!",
        text: `${product.producttitle} was added to your cart.`,
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (err) {
      console.error("Add to cart failed:", err);
      Swal.fire({
        icon: "error",
        title: "Failed!",
        text: "Something went wrong while adding to cart.",
      });
    }
  };

  // Add to Wishlist
  const handleAddToWishlist = (product) => {
    axios
      .post("http://localhost:8080/wishlist", {
        producttitle: product.producttitle,
        productimage: product.productimage,
        productcategory: product.productcategory,
        saleprice: product.saleprice,
      })
      .then((res) => {
        if (res.data.status) {
          Swal.fire({
            icon: "success",
            title: "Added to Wishlist!",
            text: `${product.producttitle} is saved.`,
            timer: 1500,
            showConfirmButton: false,
          }).then(() => navigate("/wishlist"));
        } else {
          Swal.fire("Oops!", res.data.message || "Already exists!", "info");
        }
      })
      .catch((err) => {
        console.log("❌ Wishlist add error:", err);
        Swal.fire("Failed", "Unable to add to wishlist", "error");
      });
  };

  if (!product) return <div className="text-center py-20">Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="bg-gray-100 rounded-xl p-6 flex justify-center">
            <img
              src={product.productimage}
              alt={product.producttitle}
              className="w-full max-w-sm object-contain rounded-xl"
            />
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="text-sm text-gray-500">
              <span className="text-green-600 font-medium">Home</span> /{" "}
              <span className="text-green-600 font-medium">Shop</span> /{" "}
              {product.producttitle}
            </div>

            <p className="text-green-600 font-semibold">
              {product.productcategory}
            </p>
            <h1 className="text-3xl font-bold text-gray-900">
              {product.producttitle}
            </h1>

            <div className="text-green-600 text-sm">
              ⭐⭐⭐⭐☆ <span className="text-gray-600">(4 reviews)</span>
            </div>

            <div className="text-2xl font-bold text-gray-900">
              ₹{product.saleprice}{" "}
              <span className="line-through text-gray-400 ml-2 font-normal text-lg">
                ₹{product.regularprice}
              </span>{" "}
              <span className="text-red-500 text-base font-medium ml-2">
                {Math.round(
                  ((product.regularprice - product.saleprice) /
                    product.regularprice) *
                    100
                )}
                % Off
              </span>
            </div>

            <div className="flex gap-2 flex-wrap">
              {["250g", "500g", "1kg"].map((size) => (
                <button
                  key={size}
                  className="border px-4 py-2 rounded-md hover:bg-gray-100 text-sm"
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-green-600 text-white px-6 py-3 rounded flex items-center gap-2 hover:bg-green-700"
              >
                <FaShoppingBag /> Add to cart
              </button>

              {/* ✅ Direct Buy - Navigate to Checkout */}
              <button
                onClick={() => navigate("/checkout")}
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
              >
                Buy Now
              </button>

              <button className="bg-gray-100 text-gray-700 px-4 py-3 rounded hover:bg-gray-200">
                <FaSyncAlt />
              </button>
              <button
                title="Add to Wishlist"
                className="bg-gray-100 text-gray-700 px-4 py-3 rounded hover:bg-pink-100 hover:text-red-600"
                onClick={() => handleAddToWishlist(product)}
              >
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
