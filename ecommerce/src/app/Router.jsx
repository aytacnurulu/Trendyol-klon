// src/app/Router.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { getProducts } from "./../shared/services/product.api";
import useFetchData from "../shared/hooks/useFetchData";
function Home() {
  const { data: products, loading, error } = useFetchData(() => getProducts());

  return (
    <div>
      <h1>Home Page</h1>
      <p>
        {loading && "Loading products..."}
        {error && "Error loading products."}
        {products && `Loaded ${products.length} products.`}
      </p>
      <button>Fetch Products</button>
    </div>
  );
}
function ProductList() {
  return <h1>Product List Page</h1>;
}
function ProductDetail() {
  return <h1>Product Detail Page</h1>;
}
function Favorites() {
  return <h1>Favorites Page</h1>;
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
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
