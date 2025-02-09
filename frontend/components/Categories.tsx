import React from 'react';
import Link from 'next/link';

const Categories = () => {
  const categories = [
    { name: "electronics", subcategories: ["watches", "phones"] },
    { name: "clothes", subcategories: [] },
    { name: "grocery", subcategories: [] },
    { name: "home", subcategories: [] },
    { name: "sports", subcategories: [] },
    { name: "other", subcategories: [] },
  ];

  return (
    <section className="py-10 text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Shop by Category</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map(category => (
          <Link key={category.name} href={`/category/${category.name}`}>
            <div className="bg-white shadow-lg rounded-lg p-5 w-40 hover:scale-105 transition cursor-pointer">
              <p className="font-semibold capitalize">{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;