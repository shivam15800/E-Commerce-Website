import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
      <div className="bg-black/50 p-10 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to Flipo</h1>
        <p className="text-lg mb-6">Find the best deals on top products!</p>
        <Link href="/shop">
          <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">Shop Now</button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;