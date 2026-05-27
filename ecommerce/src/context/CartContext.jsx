import { createContext } from "react";
import useLocalStorage from "../shared/hooks/useLocalStorage";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage("cart", []);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId),
    );
  };

  const values = {
    cartItems,
    addToCart,
    removeFromCart,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
