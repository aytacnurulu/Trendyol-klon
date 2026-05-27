import useLocalStorage from "../shared/hooks/useLocalStorage";
import { createContext } from "react";
export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useLocalStorage("wishlist", []);

  const addToWishlist = (product) => {
    setWishlistItems((prevItems) => [...prevItems, product]);
  };
  const removeFromWishlist = (productId) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId),
    );
  };

  const values = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
  };
  return (
    <WishlistContext.Provider value={values}>
      {children}
    </WishlistContext.Provider>
  );
};
