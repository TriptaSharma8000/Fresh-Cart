import React from 'react'

const DashboardHeader = () => {
  return (
    
    <div className="flex justify-between items-center p-4">
      <input
        type="text"
        placeholder="Search"
        className="border px-4 py-2 rounded w-full max-w-md outline-none"
      />
      <div className="flex items-center gap-4">
        <div className="relative">
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">2</span>
          🔔
        </div>
        <img
          src="https://i.pravatar.cc/30?img=5"
          alt="user"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default DashboardHeader