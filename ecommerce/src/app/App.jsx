// src/App.jsx
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router";
import { CartProvider } from "../context/CartContext";
import { WishlistProvider } from "../context/WishlistContext";
export default function App() {
  return (
    <BrowserRouter>
      <WishlistProvider>
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </WishlistProvider>
    </BrowserRouter>
  );
}
