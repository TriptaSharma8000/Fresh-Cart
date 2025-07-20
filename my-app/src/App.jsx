import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgetPassword from './pages/ForgetPassword';
import Home from './pages/Home';
import DashBoard from './Dashboard/Pages/DashBoard';
import DashBoardProduct from './Dashboard/Pages/DashBoardProduct';
import CheckOutPage from './pages/CheckOutPage';
import AddProductForm from './Dashboard/components/AddProductForm';
import EditProduct from './Dashboard/Pages/EditProduct';
import ProductDetails from './components/ProductDetails';
import WishListPage from './pages/WishListPage';
import ShopCart from './components/ShopCart';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />

        {/* Main pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="/cart" element={<ShopCart />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/dashboard/DashBoardProduct" element={<DashBoardProduct />} />
        <Route path="/AddProductForm" element={<AddProductForm />} />
        <Route path="/EditProduct/:id" element={<EditProduct />} />

      </Routes>
    </Router>
  );
};

export default App;
