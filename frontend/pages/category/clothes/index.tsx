import React from 'react';
import Link from 'next/link';

const ClothesCategoryPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Clothes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        <Link href="/category/clothes/men" legacyBehavior>
          <a className="bg-white shadow-lg rounded-lg p-5 w-full hover:scale-105 transition cursor-pointer">
            <p className="font-semibold capitalize">Men&apos;s Clothes</p>
          </a>
        </Link>
        <Link href="/category/clothes/women" legacyBehavior>
          <a className="bg-white shadow-lg rounded-lg p-5 w-full hover:scale-105 transition cursor-pointer">
            <p className="font-semibold capitalize">Women&apos;s Clothes</p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ClothesCategoryPage;