import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../data/product';

const ProductList = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">All Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {products.map((product) => (
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
    </div>
  );
};

export default ProductList;