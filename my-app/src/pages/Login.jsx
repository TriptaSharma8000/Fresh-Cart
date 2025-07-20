import React, { useState } from 'react';
import freshcartlogo from '../assets/freshcartlogo.svg';
import signing from '../assets/signing.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Login = () => {
  const [Logindata, setLogindata] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const go = useNavigate();

  const inputValue = (e) => {
    setLogindata({ ...Logindata, [e.target.name]: e.target.value });
  };

  const Loginbtn = () => {
    axios.post("http://localhost:8080/Login", Logindata)
      .then((res) => {
        if (res.data.status) {
          Swal.fire({
            icon: "success",
            title: "Login Successfully",
            iconColor: "#16a34a",
            confirmButtonColor: "#16a34a",
            background: "#f0fdf4",
            color: "#065f46",
          }).then(() => {
            const user = res.data.logedin;
            localStorage.setItem("logedin", JSON.stringify(user));
            go("/home");
          });
        } else {
          Swal.fire({
            title: "User not Found",
            icon: "error",
            confirmButtonColor: "#dc2626", // red-600
            background: "#fef2f2", // light red
            color: "#7f1d1d", // dark red
          });
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        Swal.fire({
          title: "Login Failed",
          text: "Server Error. Try again later.",
          icon: "error",
          confirmButtonColor: "#dc2626",
          background: "#fef2f2",
          color: "#7f1d1d",
        });
      });
  };

  return (
    <div className="h-screen overflow-hidden bg-gray-100 flex flex-col">
      {/* Navbar */}
      <div className="flex justify-between items-center px-6 py-3 bg-white shadow">
        <img src={freshcartlogo} alt="LOGO" className="w-32" />
        <div className="text-sm text-gray-700">
          Don’t have an account?{" "}
          <Link to="/signup" className="font-semibold text-green-600 hover:underline">
            Sign up
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl px-4 gap-4">
          {/* Left Side Image (Smaller) */}
          <div className="hidden md:block w-1/2 max-w-md">
            <img src={signing} alt="SIGN-IN-PIC" className="w-full" />
          </div>

          {/* Right Form (Wider) */}
          <div className="w-full md:w-2/3 max-w-md bg-white p-8 shadow rounded-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Sign in to FreshCart</h1>
            <p className="text-sm text-gray-600 mb-6">
              Welcome back! Enter your email and password to continue.
            </p>

            {/* Input Fields */}
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                name="Email"
                onChange={inputValue}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <div className="relative">
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
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center text-sm text-gray-600 mt-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-600" />
                Remember me
              </label>
              <Link to="/forgetpassword" className="text-green-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              onClick={Loginbtn}
              className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition"
            >
              Sign In
            </button>

            {/* Sign Up Link */}
            <p className="text-sm text-center text-gray-600 mt-4">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-green-600 font-semibold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
