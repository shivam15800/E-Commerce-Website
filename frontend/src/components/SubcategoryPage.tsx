import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../data/product';

const SubcategoryPage = () => {
  const router = useRouter();
  const { subcategory } = router.query;
  if (!subcategory || typeof subcategory !== "string") {
    return <p className="text-center">Loading...</p>;
  }
  const filteredProducts = products.filter((product) => product.subcategory === subcategory);
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8 capitalize">{subcategory} Watches</h2>
      {filteredProducts.length === 0 ? (
        <p className="text-center">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition">
              <Image src={product.image} alt={product.name} width={200} height={200} className="w-full h-40 object-cover" />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-500">${product.price}</p>
                <Link href={`/product/${product.id}`}>
                  <a className="mt-2 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700">Buy Now</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubcategoryPage;