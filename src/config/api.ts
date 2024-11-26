import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost/InventoryTrackFlow-API/public',
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  quantity: number;
}

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get('/products');
    if (response.data.status === 'success') {
      return response.data.data;
    }
    throw new Error(response.data.message || 'Failed to fetch products');
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const createProduct = async (productData: Omit<Product, 'id'>): Promise<Product> => {
  try {
    const response = await api.post('/products', productData);
    if (response.data.status === 'success') {
      return response.data.data;
    }
    throw new Error(response.data.message || 'Failed to create product');
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

export default api;