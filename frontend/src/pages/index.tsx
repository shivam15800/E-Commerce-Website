import React from 'react';
import Link from 'next/link';
import "../styles/output.css"; // Ensure this line is added  
import ProductList from "@/components/ProductList";  

const HomePage = () => {
  return (
    <div className="container mx-auto py-10">
      <section className="hero bg-blue-500 text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-xl mb-8">Find the best products at unbeatable prices</p>
        <Link href="/shop">
          <a className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-gray-200 transition">Shop Now</a>
        </Link>
      </section>
      <section className="featured-products py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {/* Add your featured products here */}
        </div>
      </section>
      <section className="categories py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          <Link href="/category/clothes/men">
            <a className="bg-white shadow-lg rounded-lg p-5 w-full hover:scale-105 transition cursor-pointer">
              <p className="font-semibold capitalize">Men&#39;s Clothes</p>
            </a>
          </Link>
          <Link href="/category/clothes/women">
            <a className="bg-white shadow-lg rounded-lg p-5 w-full hover:scale-105 transition cursor-pointer">
              <p className="font-semibold capitalize">Women&#39;s Clothes</p>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;