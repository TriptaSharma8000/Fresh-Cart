import React, { useEffect, useState } from "react";
import DashBoardSidebar from "../components/DashBoardSidebar";
import DashboardHeader from "../components/DashboardHeader";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const EditProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/product/${id}`)
      .then(res => {
        if (res.data.status) {
          setProduct(res.data.product);
        }
      })
      .catch(err => {
        console.error("Failed to fetch product", err);
      });
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    axios.post(`http://localhost:8080/updateproduct/${id}`, product)
      .then(res => {
        if (res.data.status) {
          Swal.fire({
            title: "Product Updated",
            icon: "success",
            confirmButtonColor: "#16a34a"
          });
          navigate("/DashBoard");
        }
      })
      .catch(err => {
        console.error("Update failed", err);
      });
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashBoardSidebar />
      <main className="flex-1 p-4">
        <DashboardHeader />

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Edit Product</h1>
            <p className="text-sm text-gray-500">
              Dashboard / <span className="text-green-600 font-semibold">Products</span> / Edit Product
            </p>
          </div>
          <Link to="/DashBoard">
            <button className="bg-gray-200 text-gray-700 px-5 py-2 rounded hover:bg-gray-300">← Back to Products</button>
          </Link>
        </div>

        {/* FORM */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm space-y-4">
            <h2 className="text-lg font-semibold">Product Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" name="producttitle" value={product.producttitle || ""} onChange={handleChange} className="border px-4 py-2 rounded" placeholder="Product Title" />
              <select name="productcategory" value={product.productcategory || ""} onChange={handleChange} className="border px-4 py-2 rounded">
                <option>Select Category</option>
                <option value="Fruits & Vegetables">Fruits & Vegetables</option>
                <option value="Dairy, Bread & Eggs">Dairy, Bread & Eggs</option>
                <option value="Snack & Munchies">Snack & Munchies</option>
                <option value="Bakery & Biscuits">Bakery & Biscuits</option>
                <option value="Cold Drinks & Juices">Cold Drinks & Juices</option>
                <option value="Instant Food">Instant Food</option>
                <option value="Chicken, Meat & Fish">Chicken, Meat & Fish</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <select name="productweight" value={product.productweight || ""} onChange={handleChange} className="border px-4 py-2 rounded">
                <option>Select Weight</option>
                <option value="250g">250g</option>
                <option value="500g">500g</option>
                <option value="1kg">1kg</option>
              </select>
              <select name="productquantity" value={product.productquantity || ""} onChange={handleChange} className="border px-4 py-2 rounded">
                <option>Select Quantity</option>
                <option value="1">1</option>
              </select>
            </div>

            <input type="text" name="productimage" value={product.productimage || ""} onChange={handleChange} className="border px-4 py-2 rounded w-full" placeholder="Image URL" />
            <textarea name="productdescriptions" value={product.productdescriptions || ""} onChange={handleChange} className="border px-4 py-2 rounded w-full h-28 resize-none" placeholder="Product Description"></textarea>

            <button onClick={handleUpdate} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium">Update Product</button>
          </div>

          {/* Right Side */}
          <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
            <h2 className="text-lg font-semibold">Product Price</h2>
            <input type="number" name="regularprice" value={product.regularprice || ""} onChange={handleChange} className="border px-4 py-2 rounded w-full" placeholder="Regular Price" />
            <input type="number" name="saleprice" value={product.saleprice || ""} onChange={handleChange} className="border px-4 py-2 rounded w-full" placeholder="Sale Price" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default EditProduct;
