import { useRouter } from 'next/router';
import { products } from '../../../src/data/product';

const SubcategoryPage = () => {
  const router = useRouter();
  const { category, subcategory } = router.query;

  const filteredProducts = products.filter(product => product.category.toLowerCase() === category && product.subcategory?.toLowerCase() === subcategory);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8 capitalize">{subcategory}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-500">{product.price}</p>
              <button className="mt-2 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubcategoryPage;