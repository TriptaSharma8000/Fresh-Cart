import React, { useState } from "react";
import { Link } from "react-router-dom";
import freshcartlogo from "../assets/freshcartlogo.svg";
import english from "../assets/english.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationDot,
  faHeart,
  faShoppingBag,
  faFile,
  faLayerGroup,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const loginuser = JSON.parse(localStorage.getItem("logedin"));
  const firstname = loginuser?.firstname || "";
  const firstLetter = firstname.charAt(0).toUpperCase();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", sub: ["Home Default", "Home Modern", "Home Creative"] },
    { label: "Shop", sub: ["Shop Default", "Shop Modern", "Shop Creative"] },
    { label: "Store", sub: ["About", "Contact", "FAQ"] },
    { label: "Mega menu", sub: ["About", "Contact", "FAQ"] },
    {
      label: "Pages",
      sub: ["Blog", "Blog Single", "Blog Category", "About Us", "404 error", "Contact"],
    },
    {
      label: "Account",
      sub: ["Signin", "Signup", "Forget Password", "My Account"],
    },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-100 transition-colors duration-300">
      {/* Top Bar */}
      <div className="bg-gray-100 dark:bg-gray-800 py-2 px-6 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p>Super Value Deals - Save more with coupons</p>
          <div className="flex items-center gap-2">
            <img src={english} alt="UK" className="w-5 h-5" />
            <select className="bg-transparent outline-none cursor-pointer">
              <option>English</option>
              <option>Deutsch</option>
            </select>
          </div>
        </div>
      </div>

      {/* Middle Bar */}
      <div className="py-4 px-6 border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          {/* Logo */}
          <img src={freshcartlogo} alt="FreshCart" className="w-32" />

          {/* Hamburger for Mobile */}
          <div className="md:hidden ml-auto">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <FontAwesomeIcon icon={mobileMenuOpen ? faXmark : faBars} className="text-2xl" />
            </button>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <input
              type="text"
              placeholder="Search for products"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-white dark:bg-gray-800 border border-l-0 border-gray-300 dark:border-gray-600 px-4 py-2 rounded-r-md hover:bg-green-50 transition">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>

          {/* Location */}
          <button className="hidden md:flex items-center border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-md hover:shadow-sm transition">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
            Location
          </button>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-5 text-xl">
            {/* ❤️ Wishlist */}
            <Link to="/wishlist" className="relative hover:text-red-500 transition">
              <FontAwesomeIcon icon={faHeart} />
              <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                4
              </span>
            </Link>

            {/* 👤 User Circle */}
            <div className="cursor-pointer hover:text-blue-500 transition">
              <div className="w-10 h-10 bg-green-800 text-white font-bold rounded-full flex items-center justify-center">
                {firstLetter}
              </div>
            </div>

            {/* 🛒 Cart */}
            <Link to="/cart" className="relative hover:text-green-600 transition">
              <FontAwesomeIcon icon={faShoppingBag} />
              <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                5
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Menu */}
      <nav className={`bg-white dark:bg-gray-900 transition-all duration-300 md:block ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap gap-4 text-sm font-medium items-center">
          {/* All Departments */}
          <div className="relative group">
            <button className="bg-green-500 text-white px-3 py-1.5 rounded-md flex items-center gap-2 text-sm">
              <span className="text-lg">▦</span>
              All Departments
            </button>
            <ul className="absolute z-10 hidden group-hover:block bg-white dark:bg-gray-800 border rounded-md mt-1 w-48 shadow-md">
              {["Dairy, Bread & Eggs", "Snacks and Munchies", "Fruits and Vegetables"].map((item, idx) => (
                <li key={idx} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Menu Items */}
          {menuItems.map((item, i) => (
            <div className="relative group" key={i}>
              <span className="cursor-pointer hover:text-green-600">{item.label}</span>
              <ul className="absolute z-10 hidden group-hover:block bg-white dark:bg-gray-800 border rounded-md mt-1 w-44 shadow-md">
                {item.sub.map((subItem, j) => (
                  <li key={j} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                    {subItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Dashboard */}
          <Link to="/dashboard" className="hover:text-green-600">Dashboard</Link>

          {/* Docs */}
          <div className="relative group">
            <span className="cursor-pointer hover:text-green-600">Docs</span>
            <ul className="absolute z-10 hidden group-hover:block bg-white dark:bg-gray-800 border rounded-md mt-2 w-60 shadow-lg text-sm">
              <li className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faFile} className="text-green-500 mt-1" />
                  <div>
                    <p className="font-semibold">Documentation</p>
                    <p className="text-xs text-gray-500">Browse all the documentation</p>
                  </div>
                </div>
              </li>
              <li className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                <div className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faLayerGroup} className="text-green-500 mt-1" />
                  <div>
                    <p className="font-semibold">Changelog v1.0.0</p>
                    <p className="text-xs text-gray-500">See what's new in the release</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
