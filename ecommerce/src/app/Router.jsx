// src/app/Router.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import WishlistPage from "../features/wishlist/pages/WishlistPage";
import Home from "../features/Home/pages/Home";
function ProductList() {
  return <h1>Product List Page</h1>;
}
function ProductDetail() {
  return <h1>Product Detail Page</h1>;
}

function Cart() {
  return <h1>Cart Page</h1>;
}

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
