import React, { useState } from "react";
import signup from "../assets/signup.svg";
import freshcartlogo from "../assets/freshcartlogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [signupdata, setsignupdata] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const inputValue = (e) => {
    setsignupdata({ ...signupdata, [e.target.name]: e.target.value });
  };

  const signupbtn = () => {
    axios
      .post("http://localhost:8080/signup", signupdata)
      .then((res) => {
        if (res.data.status) {
          Swal.fire({
            title: "Signup successful",
            icon: "success",
            iconColor: "#16a34a",
            confirmButtonColor: "#16a34a",
            background: "#f0fdf4",
            color: "#065f46",
          });
          navigate("/");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Signup failed");
      });
  };

  return (
    <div className="h-screen overflow-hidden bg-gray-100 flex flex-col">
      {/* Navbar */}
      <div className="flex justify-between items-center px-6 py-3 bg-white shadow">
        <img src={freshcartlogo} alt="LOGO" className="w-32" />
        <div className="text-sm text-gray-700">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="font-semibold text-green-600 cursor-pointer hover:underline"
          >
            Sign in
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl px-4 gap-4">
          {/* Left Image (smaller now) */}
          <div className="hidden md:block w-1/2 max-w-md">
            <img src={signup} alt="SIGN-UP" className="w-full" />
          </div>

          {/* Right Form (wider) */}
          <div className="w-full md:w-2/3 max-w-md bg-white p-8 shadow rounded-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">
              Get Started Shopping
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              Welcome to FreshCart! Enter your details to create an account.
            </p>

            {/* Name Fields */}
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                name="Firstname"
                onChange={inputValue}
                className="w-1/2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="Lastname"
                onChange={inputValue}
                className="w-1/2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                name="Email"
                onChange={inputValue}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Password Field */}
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="Password"
                onChange={inputValue}
                className="w-full border border-gray-300 rounded px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                className="absolute right-3 top-3.5 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              onClick={signupbtn}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition"
            >
              Register
            </button>

            {/* Terms and Privacy */}
            <p className="text-xs text-center text-gray-500 mt-4">
              By continuing, you agree to our{" "}
              <a href="#" className="text-green-600 hover:underline">
                Terms of Service
              </a>{" "}
              &{" "}
              <a href="#" className="text-green-600 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
