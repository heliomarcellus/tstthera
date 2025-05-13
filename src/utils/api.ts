import axios from 'axios';
import { Product } from '../types/product';

const API_URL = '/api/products';

export const fetchProducts = async (): Promise<Product[]> => {
    const response = await axios.get<Product[]>(API_URL);
    return response.data;
};