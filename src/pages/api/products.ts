import type { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '../../types/product';

const products: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    category: 'Category 1',
    price: 29.99,
    description: 'Description for Product 1',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Product 2',
    category: 'Category 2',
    price: 39.99,
    description: 'Description for Product 2',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Product 3',
    category: 'Category 3',
    price: 49.99,
    description: 'Description for Product 3',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(products);
}