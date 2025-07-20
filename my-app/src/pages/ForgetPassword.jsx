import React from 'react';
import forgetpasswordpic from '../assets/forgetpasswordpic.svg';
import freshcartlogo from '../assets/freshcartlogo.svg';



const ForgetPassword = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <img src={freshcartlogo} alt="LOGO" className="w-36" />
        <div className="text-sm text-gray-700">
          Already have an account?{' '}
          <span className="font-semibold text-green-600 hover:underline cursor-pointer">Sign in</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-12">
        {/* Left Image */}
        <div className="hidden md:block w-1/2 max-w-md">
          <img src={forgetpasswordpic} alt="Forget Password" className="w-full" />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 max-w-md bg-white p-8 shadow-lg rounded-md">
          <form>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Forgot your password?</h1>
            <p className="text-sm text-gray-600 mb-6">
              Please enter the email address associated with your account. We’ll send you a reset link.
            </p>

            {/* Email Input */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Buttons */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-200"
            >
              Reset Password
            </button>

            <button
              type="button"
              className="w-full bg-gray-100 text-black py-2 rounded hover:bg-gray-300 transition duration-200 mt-4"
            >
              Back
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
