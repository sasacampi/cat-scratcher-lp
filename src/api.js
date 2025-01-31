import axios from "axios";

const API_URL = "https://679c628333d3168463268cf1.mockapi.io/api/v1/products";

export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
