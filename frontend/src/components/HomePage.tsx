import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../data/product';
import ProductList from './ProductList';
import '../styles/styles.css'; // Import the CSS file

const HomePage = () => {
  const featuredProducts = products.slice(0, 4);
  return (
    <div className="container mx-auto py-10">
      <section className="hero">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-xl mb-8">Find the best products at unbeatable prices</p>
        <Link href="/shop" legacyBehavior>
          <a className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-gray-200 transition">Shop Now</a>
        </Link>
      </section>
      <section className="featured-products">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <Image src={product.image} alt={product.name} width={200} height={200} className="w-full h-40 object-cover" />
              <div className="card-content">
                <h3 className="card-title">{product.name}</h3>
                <p className="card-price">${product.price}</p>
                <Link href={`/product/${product.id}`} legacyBehavior>
                  <a className="buy-button">Buy Now</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ProductList />
    </div>
  );
};

export default HomePage;