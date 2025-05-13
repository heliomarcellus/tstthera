import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../state/store';
import { addProduct } from '../state/productSlice';
import { Product } from '../types/product';

const ProductsPage: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.items);
  const dispatch = useDispatch();

  const [newProduct, setNewProduct] = React.useState<Product>({
    id: Date.now(),
    name: '',
    category: '',
    price: 0,
    description: '',
    imageUrl: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: name === 'price' ? parseFloat(value) : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addProduct(newProduct));
    setNewProduct({
      id: Date.now(),
      name: '',
      category: '',
      price: 0,
      description: '',
      imageUrl: '',
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Produtos</h1>
      <form onSubmit={handleSubmit} className="mb-4">
      <div className="bg-blue-500 text-white p-4 rounded">
        Cadastre um novo prouto
      </div>
      <br/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={newProduct.name}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="category"
            placeholder="Categoria"
            value={newProduct.category}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="price"
            placeholder="Preço"
            value={newProduct.price}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={newProduct.imageUrl}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <textarea
            name="description"
            placeholder="Descrição"
            value={newProduct.description}
            onChange={handleInputChange}
            className="border p-2 rounded col-span-1 md:col-span-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
          Adicionar Produto
        </button>
      </form>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <li key={product.name} className="border p-4 rounded shadow">
            <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover mb-2" />
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.category}</p>
            <p className="text-sm text-gray-800">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-600">{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;