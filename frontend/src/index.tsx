import Image from "next/image";  
import Link from "next/link";  
import "../styles/output.css"; // Ensure Tailwind CSS is imported  

const HomePage = () => {  
  return (  
    <div className="bg-[#f0dc82] min-h-screen">  
      {/* Hero Section */}  
      <section  
        className="relative w-full h-[80vh] flex items-center justify-center text-center text-white bg-cover bg-center"  
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}  
      >  
        <div className="bg-black/50 p-10 rounded-lg">  
          <h1 className="text-4xl font-bold mb-4">Welcome to Flipo</h1>  
          <p className="text-lg mb-6">Find the best deals on top products!</p>  
          <Link href="/shop">  
            <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">  
              Shop Now  
            </button>  
          </Link>  
        </div>  
      </section>  

      {/* Categories Section */}  
      <section className="py-10 text-center">  
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Shop by Category</h2>  
        <div className="flex flex-wrap justify-center gap-6">  
          {["Electronics", "Clothes", "Watches", "Grocery"].map((category) => (  
            <Link key={category} href={`/category/${category.toLowerCase()}`}>  
              <div className="bg-white shadow-lg rounded-lg p-5 w-40 hover:scale-105 transition cursor-pointer">  
                <p className="font-semibold">{category}</p>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>  

      {/* Featured Products */}  
      <section className="py-10 bg-gray-100">  
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">Featured Products</h2>  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">  
          {[1, 2, 3, 4].map((product) => (  
            <div key={product} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition">  
              <Image src="/product-placeholder.jpg" alt="Product" width={200} height={200} className="w-full object-cover" />  
              <div className="p-4">  
                <h3 className="font-semibold text-lg">Product Name</h3>  
                <p className="text-gray-500">$XX.XX</p>  
                <button className="mt-2 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700">Buy Now</button>  
              </div>  
            </div>  
          ))}  
        </div>  
      </section>  

      {/* Customer Reviews */}  
      <section className="py-10 text-center">  
        <h2 className="text-3xl font-bold mb-6 text-blue-700">What Our Customers Say</h2>  
        <div className="max-w-3xl mx-auto bg-white shadow-lg p-6 rounded-lg">  
          <p className="text-gray-700 italic">&quot;Flipo has the best products! Fast delivery and amazing quality!&quot;</p>  
          <p className="mt-2 font-semibold">- Happy Customer</p>  
        </div>  
      </section>  

      {/* Newsletter Signup */}  
      <section className="py-10 bg-gray-100 text-center">  
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Stay Updated</h2>  
        <p className="text-gray-600 mb-4">Sign up for exclusive deals and updates.</p>  
        <div className="flex justify-center">  
          <input type="email" placeholder="Enter your email" className="p-2 rounded-l-lg border border-gray-300" />  
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700">Subscribe</button>  
        </div>  
      </section>  
    </div>  
  );  
};  

export default HomePage;