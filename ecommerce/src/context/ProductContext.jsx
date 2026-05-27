import { createContext } from "react";
import useFetchdata from "../shared/hooks/useFetchdata";
import { getProducts } from "../shared/services/product.api";
import { useState, useMemo } from "react";
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const { data: products, loading, error } = useFetchdata(getProducts);

  const filteredProductsBySearch = useMemo(() => {
    return products?.filter((product) =>
      product.name?.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }, [products, searchValue]);

  const filteredProductsByCategory = useMemo(() => {
    return (category) => {
      if (category === "all") {
        return products;
      }
      return products?.filter((product) => product.category === category);
    };
  }, [products]);

  switch (sortOption) {
    case "AtoZ":
      products.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "ZtoA":
      products.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "priceLowToHigh":
      products.sort((a, b) => a.price - b.price);
      break;
    case "priceHighToLow":
      products.sort((a, b) => b.price - a.price);
      break;
    default:
      break;
  }

  const values = {
    products,
    loading,
    error,
    searchValue,
    setSearchValue,
    filteredProductsBySearch,
    filteredProductsByCategory,
    sortOption,
    setSortOption,
  };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};
