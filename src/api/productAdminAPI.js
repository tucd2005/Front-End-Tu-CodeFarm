import api from ".";

export const getAllProductsAPI = () => api.get(`/products`);
export const getDetailProductAPI = (id) => api.get(`/products/${id}`);
export const createProductAPI = (data) => api.post(`/products`, data);
export const updateProductAPI = (data, id) =>
  api.put(`/products/edit/${id}`, data);
export const deleteProductAPI = (id) => api.delete(`/products/${id}`);
