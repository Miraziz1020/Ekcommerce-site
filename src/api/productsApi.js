import { api } from "./api";

export async function getProducts(limit) {
  try {
    const response = await api.get(`/products?limit=${limit}&page=1`);
    return response.data;
  } catch (error) {
    console.error("GET /products xatosi:", error);
    throw error;
  }
}


export async function getProduct(id) {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("GET /products xatosi:", error);
    throw error;
  }
}
