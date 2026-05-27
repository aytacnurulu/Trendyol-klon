import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

export default function useProduct() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
}
