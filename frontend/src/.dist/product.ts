interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: 'electronics' | 'grocery' | 'clothes';
  subcategory?: 'men' | 'women';
}// Define a type for the product
interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: 'electronics' | 'grocery' | 'clothes' | 'other';
  subcategory?: 'men' | 'women'; // Optional subcategory property
}

// Create an array of products with the defined type
export const products: Product[] = [
  { id: 1, name: "Smart Watch", price: "$199", image: "/images/watch.jpg", category: 'electronics' },
  { id: 2, name: "Headphones", price: "$99", image: "/images/headphones.jpg", category: 'electronics' },
  { id: 3, name: "Apple", price: "$1", image: "/images/apple.jpg", category: 'grocery' },
  { id: 4, name: "Men's T-Shirt", price: "$20", image: "/images/tshirt.jpg", category: 'clothes', subcategory: 'men' },
  { id: 5, name: "Women's T-Shirt", price: "$25", image: "/images/women_tshirt.jpg", category: 'clothes', subcategory: 'women' },
  { id: 6, name: "Bike", price: "$550", image: "/images/bike.jpg", category: 'other' },
  // Add more products as needed
];