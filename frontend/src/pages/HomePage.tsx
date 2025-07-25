import React from 'react';
import { products } from '../data/product';

const HomePage = () => {
  // Get featured products (for simplicity, we'll just take the first 4 products)
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="hero bg-blue-500 text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our E-Commerce Store</h1>
        <p className="text-xl mb-8">Find the best products at unbeatable prices</p>
        <button className="bg-white text-blue-500 py-2 px-4 rounded">Shop Now</button>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-500">{product.price}</p>
                <button className="mt-2 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;