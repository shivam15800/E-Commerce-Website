import React from 'react';
import Image from 'next/image';
import { products } from '../src/data/product'; // Updated import path

const FeaturedProducts = () => {
  // Get featured products (for simplicity, we'll just take the first 8 products)
  const featuredProducts = products.slice(0, 8);

  return (
    <section className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {featuredProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition">
            <Image src={product.image} alt={product.name} width={200} height={200} className="w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-500">{product.price}</p>
              <button className="mt-2 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;