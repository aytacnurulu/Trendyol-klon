// src/App.jsx
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router";
import { CartProvider } from "../context/CartContext";
import { WishlistProvider } from "../context/WishlistContext";
import { ProductProvider } from "../context/ProductContext";
import MainLayout from "../shared/Layout/MainLayout/MainLayout";
export default function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <WishlistProvider>
          <CartProvider>
            <MainLayout>
              <AppRouter />
            </MainLayout>
          </CartProvider>
        </WishlistProvider>
      </ProductProvider>
    </BrowserRouter>
  );
}
