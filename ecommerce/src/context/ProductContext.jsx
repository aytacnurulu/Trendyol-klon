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

  const sortedProducts = useMemo(() => {
    if (!products) return [];
    const sorted = [...products];
    switch (sortOption) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "newest":
        sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case "oldest":
        sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;
      default:
        return products;
    }
    return sorted;
  }, [products, sortOption]);

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
    sortedProducts,
  };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};
