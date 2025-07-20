import React from "react";

const CheckoutComp = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-8">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Checkout</h1>
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <span className="text-green-600 cursor-pointer">Sign in.</span>
        </p>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          {/* Left Section - Delivery Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Address */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <span>📍</span> Add delivery address
              </h2>

              <div className="flex gap-4 flex-wrap">
                {/* Address Card 1 */}
                <div className="bg-white border rounded-lg p-4 w-full sm:w-[48%]">
                  <p className="font-semibold text-green-600 mb-1">● Home</p>
                  <p className="text-gray-700 text-sm">Jitu Chauhan</p>
                  <p className="text-gray-600 text-sm">
                    4450 North Avenue Oakland, Nebraska, US
                  </p>
                  <p className="text-gray-600 text-sm mb-2">402-776-1106</p>
                  <p className="text-red-500 text-xs">Default address</p>
                  <div className="flex gap-3 text-sm text-blue-600 mt-2">
                    <button>Edit</button>
                    <button>Delete</button>
                  </div>
                </div>

                {/* Address Card 2 */}
                <div className="bg-white border rounded-lg p-4 w-full sm:w-[48%]">
                  <p className="font-semibold text-gray-700 mb-1">○ Office</p>
                  <p className="text-gray-700 text-sm">Nitu Chauhan</p>
                  <p className="text-gray-600 text-sm">
                    3853 Coal Road, PA, US
                  </p>
                  <p className="text-gray-600 text-sm mb-2">402-776-1106</p>
                  <button className="text-green-600 text-xs">
                    Set as Default
                  </button>
                  <div className="flex gap-3 text-sm text-blue-600 mt-2">
                    <button>Edit</button>
                    <button>Delete</button>
                  </div>
                </div>
              </div>

              {/* Add New Address Button */}
              <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700">
                + Add a new address
              </button>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-4 rounded-lg shadow border">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Payment Method
              </h3>
              <label
                htmlFor="payment"
                className="block mb-1 text-sm text-gray-600"
              >
                Choose your mode of payment{" "}
                <span className="text-red-500">*</span>
              </label>
              <select
                id="payment"
                name="payment"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 p-2 text-sm"
              >
                <option value="">-- Select Payment Option --</option>
                <option value="cod">Cash on Delivery</option>
                <option value="card">Credit / Debit Card</option>
                <option value="upi">UPI / QR</option>
                <option value="wallet">Wallet</option>
              </select>
            </div>

            {/* Place Order Button */}
            <div className="text-right">
              <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-green-700">
                🛒 Place Order
              </button>
            </div>
          </div>

          {/* Right Section - Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Order Details
            </h3>

            <div className="space-y-4">
              {/* Item 1 */}
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium text-gray-700">
                    Haldiram's Sev Bhujia
                  </p>
                  <p className="text-sm text-gray-500">1 x $21.60</p>
                </div>
                <p className="font-semibold text-gray-800">$21.60</p>
              </div>

              {/* Item 2 */}
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium text-gray-700">
                    NutriChoice Digestive
                  </p>
                  <p className="text-sm text-gray-500">1 x $24.00</p>
                </div>
                <p className="font-semibold text-gray-800">$24.00</p>
              </div>

              {/* Item 3 */}
              <div className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium text-gray-700">Cadbury 5 Star</p>
                  <p className="text-sm text-gray-500">1 x $33.25</p>
                </div>
                <p className="font-semibold text-gray-800">$33.25</p>
              </div>

              {/* Total Summary */}
              <div className="pt-4 border-t space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Item Subtotal</span>
                  <span>$93.55</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Fee</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (18%)</span>
                  <span>$16.84</span>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                  <span>Grand Total</span>
                  <span>$110.39</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComp;
