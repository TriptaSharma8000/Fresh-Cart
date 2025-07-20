import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CheckoutComp from "../components/CheckoutComp";

const CheckOutPage = () => {
  return (
    <>
      <Navbar />
      <main className="bg-gray-100 min-h-screen py-10 px-4">
        <CheckoutComp />
      </main>
      <Footer />
    </>
  );
};

export default CheckOutPage;
