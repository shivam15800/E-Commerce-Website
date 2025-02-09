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
  { id: 8, name: "Men's Jeans", price: 40, image: "/images/men_jeans.jpg", category: 'clothes', subcategory: 'men' },
  { id: 9, name: "Men's Jacket", price: 60, image: "/images/men_jacket.jpg", category: 'clothes', subcategory: 'men' },
  { id: 10, name: "Women's T-Shirt", price: 25, image: "/images/women_tshirt.jpg", category: 'clothes', subcategory: 'women' },
  { id: 11, name: "Women's Jeans", price: 45, image: "/images/women_jeans.jpg", category: 'clothes', subcategory: 'women' },
  { id: 12, name: "Women's Jacket", price: 65, image: "/images/women_jacket.jpg", category: 'clothes', subcategory: 'women' },
  { id: 13, name: "Men's Shoes", price: 70, image: "/images/men_shoes.jpg", category: 'clothes', subcategory: 'men' },
  { id: 14, name: "Men's Hat", price: 15, image: "/images/men_hat.jpg", category: 'clothes', subcategory: 'men' },
  { id: 15, name: "Women's Shoes", price: 75, image: "/images/women_shoes.jpg", category: 'clothes', subcategory: 'women' },
  { id: 16, name: "Women's Hat", price: 20, image: "/images/women_hat.jpg", category: 'clothes', subcategory: 'women' },
  { id: 17, name: "Blender", price: 50, image: "/images/blender.jpg", category: 'home', subcategory: 'kitchen' },
  { id: 18, name: "Soccer Ball", price: 30, image: "/images/soccerball.jpg", category: 'sports' },
  { id: 19, name: "Vacuum Cleaner", price: 150, image: "/images/vacuum.jpg", category: 'home' },
  { id: 20, name: "Classic Analog Watch", price: 120, image: "/images/classic_analog.jpg", category: 'electronics', subcategory: 'analog' },
  { id: 21, name: "Luxury Analog Watch", price: 250, image: "/images/luxury_analog.jpg", category: 'electronics', subcategory: 'analog' },
  { id: 22, name: "Vintage Analog Watch", price: 150, image: "/images/vintage_analog.jpg", category: 'electronics', subcategory: 'analog' },
  { id: 23, name: "Sport Analog Watch", price: 180, image: "/images/sport_analog.jpg", category: 'electronics', subcategory: 'analog' },
  { id: 24, name: "Modern Smart Watch", price: 220, image: "/images/modern_smartwatch.jpg", category: 'electronics', subcategory: 'digital' },
  { id: 25, name: "Fitness Smart Watch", price: 250, image: "/images/fitness_smartwatch.jpg", category: 'electronics', subcategory: 'digital' },
];