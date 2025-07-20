import React from "react";
import DashBoardSidebar from "./DashBoardSidebar";
import DashboardHeader from "./DashboardHeader";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";



const AddProductForm = () => {

    let [addproduct, setaddproduct] = useState([])

    let go = useNavigate()

    let inputValue=(e)=>{
        setaddproduct({...addproduct, [e.target.name]: e.target.value})
    }
   
    let addproductbtn=()=>{
        axios.post("http://localhost:8080/AddProductForm", {addproduct}).then((res)=>{
        if (res.data.status){
            Swal.fire({
                title:"Add Product Success",
                icon:"success"
            });

            go("/dashboard")
        }
        }).catch((err)=>{
            console.log(err)
        })
    }
     

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashBoardSidebar />
      <main className="flex-1 p-4">
        <DashboardHeader />

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Add New Product
            </h1>
            <p className="text-sm text-gray-500">
              Dashboard /{" "}
              <span className="text-green-600 font-semibold">Products</span> /
              Add Product
            </p>
          </div>
          <Link to="/DashBoard">
            <button className="bg-gray-200 text-gray-700 px-5 py-2 rounded hover:bg-gray-300">
              ← Back to Products
            </button>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT SECTION */}
          <div className="flex-1 bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Product Information</h2>

            {/* Title & Product Category */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Product Name"
                  onChange={inputValue}
                  name="producttitle"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Category
                </label>
                <select className="border border-gray-300 rounded-lg px-4 py-2 w-full" onChange={inputValue} name="productcategory">
                  <option> Select Product Category</option>  
                  <option value={"Fruits & Vegetables"}>Fruits & Vegetables</option>
                  <option value={"Dairy, Bread & Eggs"}>Dairy, Bread & Eggs</option>
                  <option value={"Snack & Munchies"}>Snack & Munchies</option>
                  <option value={"Bakery & Biscuits"}>Bakery & Biscuits</option>
                  <option value={"Cold Drinks & Juices"}>Cold Drinks & Juices</option>
                  <option value={"Instant Food"}>Instant Food</option>
                  <option value={"Chicken, Meat & Fish"}>Chicken, Meat & Fish</option>
                 </select>
              </div>
            </div>

            {/* Weight & Units */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Weight
                </label>
                <select className="border border-gray-300 rounded-lg px-4 py-2 w-full" name="productweight" onChange={inputValue}>
                  <option> Select Weight</option>
                  <option value={"250g"}>250g</option>
                  <option value={"500g"}>500g</option>
                 <option value={"1kg"}>1kg</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity
                    </label>
                <select className="border border-gray-300 rounded-lg px-4 py-2 w-full" name="productquantity" onChange={inputValue}>
                  <option>Select Units</option>
                  <option value={"1"}>1</option>
                </select>
              </div>
            </div>

            {/* Product Images */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Product Images</h2>
              <div className="border-gray-300 rounded-lg p-6 text-center text-gray-400">
              <input
                  type="text"
                  placeholder="Product Image Url"
                  onChange={inputValue}
                  name="productimage"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                />
              </div>
            </div>

            {/* Product Descriptions */}
            <div>
              <h2 className="text-lg font-semibold mb-2">
                Product Descriptions
              </h2>
              {/* Toolbar */}
              {/* <div className="flex items-center gap-2 border px-3 py-2 rounded-t-md bg-white text-gray-700 text-sm">
                <select className="border-none outline-none">
                  <option>Normal</option>
                </select>
                <button className="font-bold">B</button>
                <button className="italic">I</button>
                <button className="underline">U</button>
                <button className="line-through">S</button>
                <button>•</button>
                <button>1.</button>
                <button className="italic">𝘅</button>
              </div> */}
              {/* Textarea */}
              <textarea
                className="w-full h-28 border-t border border-gray-300 rounded-b-md p-2 resize-none focus:outline-none"
                placeholder=""
                name="productdescriptions"
                onChange={inputValue}
              ></textarea>
            </div>

            {/* ✅ Create Product Button */}
            <div className="mt-6">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium" name="createproduct" onClick={addproductbtn}>
                Create Product
              </button>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="w-full lg:w-1/3 space-y-6">
            {/* In Stock & Status */}
            {/* <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-sm">In Stock</span>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-green-500 rounded-full peer peer-checked:bg-green-600 transition-all"></div>
                </label>
              </div>

              <div className="mb-3">
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Product Code
                </label>
                <input
                  type="text"
                  placeholder="Enter Product Title"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-3">
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Product SKU
                </label>
                <input
                  type="text"
                  placeholder="Enter Product Title"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="flex gap-6 mt-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="status" defaultChecked />
                  <span>Active</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="status" />
                  <span>Disabled</span>
                </label>
              </div>
            </div> */}

            {/* Product Price */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Product Price</h2>
              <div className="mb-3">
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Regular Price
                </label>
                <input
                  type="number"
                  placeholder="$0.00"
                  onChange={inputValue}
                  name="regularprice"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Sale Price
                </label>
                <input
                  type="number"
                  placeholder="$0.00"
                  onChange={inputValue}
                  name="saleprice"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddProductForm;
