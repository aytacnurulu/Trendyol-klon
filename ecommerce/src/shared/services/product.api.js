import axios from "axios";

const productInstance = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 5000,
});

export const getProducts = async () => {
  try {
    const response = await productInstance.get("/products");
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await productInstance.get(`/products/${id}`);
    return response.data.products;
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    throw error;
  }
};
