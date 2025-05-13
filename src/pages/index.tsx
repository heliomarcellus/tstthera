import React from 'react';
import Header from '../components/Header';
import ProductsPage from './products';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Product Management</h1>
        <ProductsPage />
      </main>
    </div>
  );
};

export default Home;