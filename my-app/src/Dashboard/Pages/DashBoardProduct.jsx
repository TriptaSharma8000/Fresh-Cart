import React, { useEffect, useState } from 'react';
import DashBoardSidebar from "../components/DashBoardSidebar";
import DashBoardNavbar from "../components/DashBoardNavbar";
import DashboardHeader from '../components/DashboardHeader';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { Popover } from "@headlessui/react";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const DashBoardProduct = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    apidata();
  }, []);

  const apidata = () => {
    axios.get("http://localhost:8080/products")
      .then((res) => {
        if (res.data.status) {
          setProducts(res.data.ourproducts);
        }
      })
      .catch((err) => {
        console.log("Error fetching products:", err);
      });
  };

  const deleteproduct = (product) => {
    Swal.fire({
      title: "Are you sure?",
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#16a34a",
      background: "#f0fdf4",
      color: "#065f46",
      iconColor: "#16a34a",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post("http://localhost:8080/deleteproduct", product)
          .then((res) => {
            if (res.data.status) {
              Swal.fire({
                title: "Deleted!",
                icon: "success",
                iconColor: "#16a34a",
                confirmButtonColor: "#16a34a",
                background: "#f0fdf4",
                color: "#065f46",
              });
              apidata(); // Refresh after delete
            }
          })
          .catch((err) => {
            console.log("Error deleting product:", err);
          });
      }
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashBoardSidebar />
      <main className="flex-1 p-4">
        <DashboardHeader />
        <DashBoardNavbar />

        <div className="overflow-x-auto mt-6 rounded-xl shadow-sm">
          <table className="min-w-full bg-white border rounded-xl text-left">
            <thead className="bg-gray-100 text-gray-600 text-sm uppercase">
              <tr>
                <th className="p-4"><input type="checkbox" /></th>
                <th className="p-4">Image</th>
                <th className="p-4">Product Name</th>
                <th className="p-4">Category</th>
                <th className="p-4">Status</th>
                <th className="p-4">Price</th>
                <th className="p-4">Created at</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {Products.map((product) => (
                <tr key={product._id} className="border-t hover:bg-gray-50 transition duration-200">
                  <td className="p-4"><input type="checkbox" /></td>
                  <td className="p-4">
                    <img src={product.productimage} alt={product.producttitle} className="w-10 h-10 object-contain" />
                  </td>
                  <td className="p-4 text-gray-800">{product.producttitle}</td>
                  <td className="p-4 text-gray-600">{product.productcategory}</td>
                  <td className="p-4">
                    {product.status === "Active" ? (
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-medium">Active</span>
                    ) : (
                      <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded font-medium">Draft</span>
                    )}
                  </td>
                  <td className="p-4 text-gray-800">${product.saleprice}</td>
                  <td className="p-4 text-gray-600">{product.date}</td>
                  <td className="p-4">
                    <Popover className="relative">
                      <Popover.Button className="text-gray-600 hover:text-black p-2 focus:outline-none">
                        <FontAwesomeIcon icon={faEllipsisV} className="w-4 h-4" />
                      </Popover.Button>

                      <Popover.Panel className="absolute right-0 z-50 mt-2 w-36 origin-top-right rounded-md bg-white shadow-md border border-gray-200">
                        <div className="py-1">
                          <Link
                            to={`/EditProduct/${product._id}`}
                            className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                          >
                            <FontAwesomeIcon icon={faPenToSquare} className="w-4 h-4 mr-2 text-blue-500" />
                            Edit
                          </Link>
                          <button
                            className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                            onClick={() => deleteproduct(product)}
                          >
                            <FontAwesomeIcon icon={faTrashAlt} className="w-4 h-4 mr-2 text-red-500" />
                            Delete
                          </button>
                        </div>
                      </Popover.Panel>
                    </Popover>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default DashBoardProduct;
