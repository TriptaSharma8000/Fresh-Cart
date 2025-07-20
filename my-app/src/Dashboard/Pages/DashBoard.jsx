import React from "react";
import DashBoardSidebar from '../components/DashBoardSidebar'
import DashboardHeader from "../components/DashboardHeader";
import DashBoardContent from "../components/DashBoardContent";



const DashBoard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashBoardSidebar />
      <main className="flex-1 p-4">
        <DashboardHeader />

        <div
          className="bg-green-50 rounded-xl p-6 mt-4 relative overflow-hidden"
          style={{
            backgroundImage: `url("https://freshcart-next-js.vercel.app/images/slider/slider-image-1.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "right center",
          }}
        >
          <div className="relative z-10 max-w-xl">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome back! FreshCart
            </h1>
            <p className="text-gray-700 mt-2">
              FreshCart is simple & clean design for developer and designer.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 mt-4 rounded hover:bg-green-700">
              Create Product
            </button>
          </div>
        </div>
        <DashBoardContent />
      </main>
    </div>
  );
};

export default DashBoard;
