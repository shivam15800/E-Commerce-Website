import Image from 'next/image';

const products = [
  { id: 1, name: "Smart Watch", price: "$199", image: "/watch.jpg" },
  { id: 2, name: "Headphones", price: "$99", image: "/headphones.jpg" },
  { id: 3, name: "Hero", price: "$499", image: "/hero.jpg" },
  { id: 4, name: "Galaxy S20", price: "$899", image: "/galaxys20.jpg" },
  { id: 5, name: "iPhone 12", price: "$1,099", image: "/iphone12.jpg" },
  { id: 6, name: "Galaxy S20", price: "$899", image: "/galaxys20.jpg" },
  { id: 7, name: "OnePlus 8", price: "$799", image: "/oneplus8.jpg" },
  // Add as many products as needed...
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <Image src={product.image} alt={product.name} width={500} height={200} className="w-full h-40 object-cover"/>
            <div className="p-4">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-500">{product.price}</p>
              <button className="mt-2 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
