import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          MyShop
        </Link>
        <div className="space-x-4">
          <Link href="/products" className="text-white hover:text-gray-200">Products</Link>
          <Link href="/cart" className="text-white hover:text-gray-200">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
