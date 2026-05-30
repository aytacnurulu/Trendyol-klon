// src/App.jsx
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router";
import { CartProvider } from "../context/CartContext";
import { WishlistProvider } from "../context/WishlistContext";
import { ProductProvider } from "../context/ProductContext";
export default function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <WishlistProvider>
          <CartProvider>
            <AppRouter />
          </CartProvider>
        </WishlistProvider>
      </ProductProvider>
    </BrowserRouter>
  );
}
