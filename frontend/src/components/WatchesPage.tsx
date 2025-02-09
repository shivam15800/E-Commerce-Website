import React from 'react';
import Link from 'next/link';

const WatchesPage = () => {
  const subcategories = ["analog", "digital"];
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Watches</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {subcategories.map((subcategory) => (
          <Link key={subcategory} href={`/category/electronics/watches/${subcategory}`}>
            <a className="bg-white shadow-lg rounded-lg p-5 w-full hover:scale-105 transition cursor-pointer">
              <p className="font-semibold capitalize">{subcategory} Watches</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WatchesPage;