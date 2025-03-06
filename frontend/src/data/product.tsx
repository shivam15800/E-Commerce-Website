import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Define a type for the product
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  subcategory?: string;
}

// Export the products array
export const products: Product[] = [
  { id: 1, name: "Smart Watch", price: 199, image: "/images/smartwatch.jpg", category: 'electronics', subcategory: 'digital' },
  { id: 2, name: "Analog Watch", price: 99, image: "/images/Analog.jpg", category: 'electronics', subcategory: 'analog' },
  { id: 3, name: "Apple", price: 1, image: "/images/apple.jpg", category: 'grocery' },
  { id: 4, name: "Banana", price: 0.5, image: "/images/banana.jpg", category: 'grocery' },
  { id: 5, name: "Milk", price: 2, image: "/images/milk.jpg", category: 'grocery' },
  { id: 6, name: "Bread", price: 1.5, image: "/images/bread.jpg", category: 'grocery' },
  { id: 7, name: "Men's T-Shirt", price: 20, image: "/images/tshirt.jpg", category: 'clothes', subcategory: 'men' },
  { id: 8, name: "Women's T-Shirt", price: 25, image: "/images/women_tshirt.jpg", category: 'clothes', subcategory: 'women' },
  { id: 9, name: "Bike", price: 550, image: "/images/Hero.jpg", category: 'other' },
  { id: 10, name: "Galaxy S20", price: 899, image: "/images/galaxys20.jpg", category: 'electronics', subcategory: 'phones' },
  { id: 11, name: "iPhone 12", price: 1099, image: "/images/iPhone12.jpg", category: 'electronics', subcategory: 'phones' },
  { id: 12, name: "OnePlus 8", price: 699, image: "/images/oneplus8.jpg", category: 'electronics', subcategory: 'phones' },
  { id: 13, name: "Blender", price: 50, image: "/images/blender.jpg", category: 'home', subcategory: 'kitchen' },
  { id: 14, name: "Soccer Ball", price: 30, image: "/images/soccerball.jpg", category: 'sports' },
  { id: 15, name: "Vacuum Cleaner", price: 150, image: "/images/vacuum.jpg", category: 'home' },
  { id: 16, name: "Classic Analog Watch", price: 120, image: "/images/classic_analog.jpg", category: 'electronics', subcategory: 'analog' },
  { id: 17, name: "Luxury Analog Watch", price: 250, image: "/images/luxury_analog.jpg", category: 'electronics', subcategory: 'analog' },
  { id: 18, name: "Vintage Analog Watch", price: 150, image: "/images/vintage_analog.jpg", category: 'electronics', subcategory: 'analog' },
  { id: 19, name: "Sport Analog Watch", price: 180, image: "/images/sport_analog.jpg", category: 'electronics', subcategory: 'analog' },
  { id: 20, name: "Modern Smart Watch", price: 220, image: "/images/modern_smartwatch.jpg", category: 'electronics', subcategory: 'digital' },
  { id: 21, name: "Fitness Smart Watch", price: 250, image: "/images/fitness_smartwatch.jpg", category: 'electronics', subcategory: 'digital' },
];

// Home Page Component
const HomePage = () => {
  const featuredProducts = products.slice(0, 4);
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
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white border rounded-lg shadow-md overflow-hidden">
              <Image src={product.image} alt={product.name} width={200} height={200} className="w-full h-40 object-cover" />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-500">${product.price}</p>
                <Link href={`/product/${product.id}`}>
                  <a className="mt-2 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 transition">Buy Now</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Watches Page Component
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

// Subcategory Page Component
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

export default HomePage;
export { WatchesPage, SubcategoryPage };
