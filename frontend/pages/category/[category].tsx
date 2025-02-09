import { useRouter } from 'next/router';
import Link from 'next/link';
import { products } from '../../src/data/product';

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  const subcategories = {
    electronics: ["watches", "phones"],
    watches: ["analog", "digital"],
  };

  const currentSubcategories = subcategories[category] || [];

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8 capitalize">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {currentSubcategories.map(subcategory => (
          <Link key={subcategory} href={`/category/${category}/${subcategory}`}>
            <div className="bg-white shadow-lg rounded-lg p-5 w-40 hover:scale-105 transition cursor-pointer">
              <p className="font-semibold capitalize">{subcategory}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;