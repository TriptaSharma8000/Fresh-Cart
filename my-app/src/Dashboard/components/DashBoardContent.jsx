import React from 'react'

const DashBoardContent = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
      <div className="bg-white shadow rounded p-4 flex justify-between items-center">
        <div>
          <p className="text-gray-500 font-medium">Earnings</p>
          <h2 className="text-2xl font-bold text-gray-800">$93,438.78</h2>
          <p className="text-sm text-gray-500">Monthly revenue</p>
        </div>
        <span className="bg-red-100 text-red-600 p-2 rounded-full text-lg">$</span>
      </div>
      <div className="bg-white shadow rounded p-4 flex justify-between items-center">
        <div>
          <p className="text-gray-500 font-medium">Orders</p>
          <h2 className="text-2xl font-bold text-gray-800">42,339</h2>
          <p className="text-sm text-gray-500">35+ New Sales</p>
        </div>
        <span className="bg-yellow-100 text-yellow-600 p-2 rounded-full text-lg">🛒</span>
      </div>
      <div className="bg-white shadow rounded p-4 flex justify-between items-center">
        <div>
          <p className="text-gray-500 font-medium">Customer</p>
          <h2 className="text-2xl font-bold text-gray-800">39,354</h2>
          <p className="text-sm text-gray-500">30+ new in 2 days</p>
        </div>
        <span className="bg-blue-100 text-blue-600 p-2 rounded-full text-lg">👥</span>
      </div>
    </div>
  );
};

export default DashBoardContent