export interface Product {
  id: string;
  name: string;
  description: string;
  tagline: string;
  category: string;
  badge: string | null;
  price: number;
  original_price: number | null;
  image_url: string;
  image_url_2: string | null;
  rating: number;
  review_count: number;
}

export interface QuantityOption {
  id: string;
  label: string;
  price: number;
  product_id: string;
  sort_order: number;
}

export const products: Product[] = [
  // Ghee
  { id: "g1", name: "A2 Gir Cow Ghee", description: "Traditional bilona method ghee", tagline: "Made from A2 Gir Cow Milk", category: "Ghee", badge: "Best Seller", price: 3370, original_price: 9999, image_url: "https://cdn.shopify.com/s/files/1/2598/1404/files/Purchase_A2_Cow_Cultured_Ghee_360x.jpg?v=1762848567", image_url_2: null, rating: 4.8, review_count: 2450 },
  { id: "g2", name: "A2 Bilona Buffalo Ghee", description: "Rich buffalo ghee", tagline: "Pure & Aromatic Buffalo Ghee", category: "Ghee", badge: "Trending", price: 1170, original_price: 1299, image_url: "https://cdn.shopify.com/s/files/1/2598/1404/files/Buy_A2_Cultured_Buffalo_Ghee_360x.webp?v=1754562738", image_url_2: null, rating: 4.7, review_count: 1800 },
  { id: "g3", name: "Turmeric Ghee", description: "Vedic preparation", tagline: "Ancient Recipe, Pure Taste", category: "Ghee", badge: null, price: 2335, original_price: 2999, image_url: "https://cdn.shopify.com/s/files/1/2598/1404/files/Turmeric_Ghee_360x.jpg?v=1754994662", image_url_2: null, rating: 4.9, review_count: 3200 },
  { id: "g4", name: "Tulsi Ghee", description: "Five nectar ghee", tagline: "Enriched with Herbs", category: "Ghee", badge: "New Launch", price: 999, original_price: 1299, image_url: "https://cdn.shopify.com/s/files/1/2598/1404/files/Tulsi_Ghee_Ingredients_Shot_360x.jpg?v=1754562677", image_url_2: null, rating: 4.6, review_count: 890 },

  // Atta
  { id: "a1", name: "Khapli Wheat Atta", description: "Ancient grain flour", tagline: "Low Glycemic Index Flour", category: "Atta", badge: "Must Try", price: 299, original_price: 399, image_url: "Buy_Khapli_Multigrain_Atta_1200x.webp", image_url_2: null, rating: 4.7, review_count: 1560 },
  { id: "a2", name: "Sattu Atta", description: "Finger millet flour", tagline: "Rich in Calcium & Iron", category: "Atta", badge: null, price: 249, original_price: 349, image_url: "Buy_now_Sattu_Atta_Stoneground_1kg_Now_200x.avif", image_url_2: null, rating: 4.5, review_count: 980 },
  { id: "a3", name: "Jowar Atta", description: "Sorghum flour", tagline: "Gluten Free & Nutritious", category: "Atta", badge: "Trending", price: 279, original_price: 379, image_url: "Buy_Moringa_Powder_Chemical-Free_200x.avif", image_url_2: null, rating: 4.6, review_count: 1120 },
  { id: "a4", name: "Multigrain Atta", description: "Blend of grains", tagline: "7 Grains Power Blend", category: "Atta", badge: "Best Seller", price: 349, original_price: 449, image_url: "Jaggery_Powder-01_200x.avif", image_url_2: null, rating: 4.8, review_count: 2100 },

  // Oils
  { id: "o1", name: "Cold Pressed Mustard Oil", description: "Pure mustard oil", tagline: "Kachi Ghani, Zero Chemicals", category: "Oils", badge: "Hot Deals", price: 399, original_price: 549, image_url: "Coconut_Oil-01_200x.avif", image_url_2: null, rating: 4.7, review_count: 1890 },
  { id: "o2", name: "Cold Pressed Coconut Oil", description: "Virgin coconut oil", tagline: "Farm Fresh Virgin Oil", category: "Oils", badge: null, price: 449, original_price: 599, image_url: "New_Groundnut_Oil-01_200x.avif", image_url_2: null, rating: 4.8, review_count: 2340 },
  { id: "o3", name: "Wood Pressed Groundnut Oil", description: "Traditional groundnut oil", tagline: "Stone Ground, Pure Taste", category: "Oils", badge: "Must Try", price: 499, original_price: 649, image_url: "New_Mustard_Oil-01_200x.avif", image_url_2: null, rating: 4.6, review_count: 1450 },
  { id: "o4", name: "Sesame Oil (Til Oil)", description: "Cold pressed sesame oil", tagline: "Heart-Healthy Cooking Oil", category: "Oils", badge: null, price: 379, original_price: 499, image_url: "Coconut_Oil-01_200x.avif", image_url_2: null, rating: 4.5, review_count: 760 },

  // Jaggery
  { id: "j1", name: "Organic Sugarcane Jaggery", description: "Pure jaggery", tagline: "Chemical Free Sweetener", category: "Jaggery", badge: "Best Seller", price: 199, original_price: 299, image_url: "public/Buy_Date_Palm_Jaggery_online_1200x.webp", image_url_2: null, rating: 4.6, review_count: 1670 },
  { id: "j2", name: "Jaggery Powder", description: "Fine jaggery powder", tagline: "Easy to Use, Pure Taste", category: "Jaggery", badge: null, price: 179, original_price: 249, image_url: "public/Buy_Sugarcane_Jaggery_200x.jpg", image_url_2: null, rating: 4.5, review_count: 1230 },
  { id: "j3", name: "Palm Jaggery", description: "Date palm jaggery", tagline: "Rich in Minerals", category: "Jaggery", badge: "Trending", price: 249, original_price: 349, image_url: "public/Peanut_Butter_Creamy_with_Jaggery_Stoneground_200x.avif", image_url_2: null, rating: 4.7, review_count: 890 },
  { id: "j4", name: "Dry Fruit Jaggery Bites", description: "Jaggery with dry fruits", tagline: "Healthy Snack Alternative", category: "Jaggery", badge: "New Launch", price: 329, original_price: 449, image_url: "public/shop_Sattu_laddoo_200x.avif", image_url_2: null, rating: 4.8, review_count: 560 },

  // Immunity
  { id: "i1", name: "Chyawanprash", description: "Herbal immunity booster", tagline: "40+ Ayurvedic Herbs", category: "Immunity", badge: "Winter Special", price: 449, original_price: 599, image_url: "public/Amlaprash-01_200x.avif", image_url_2: null, rating: 4.7, review_count: 2100 },
  { id: "i2", name: "Turmeric Latte Mix", description: "Golden milk powder", tagline: "Daily Immunity Ritual", category: "Immunity", badge: "Trending", price: 349, original_price: 449, image_url: "public/Bite sized nutri bars.avif", image_url_2: null, rating: 4.6, review_count: 1340 },
  { id: "i3", name: "Moringa Powder", description: "Superfood powder", tagline: "Nutrient Dense Superfood", category: "Immunity", badge: null, price: 299, original_price: 399, image_url: "public/Shop_online_Gulkand_Now_200x.webp", image_url_2: null, rating: 4.5, review_count: 780 },
  { id: "i4", name: "Ashwagandha Honey", description: "Infused honey", tagline: "Stress Relief + Immunity", category: "Immunity", badge: "Must Try", price: 399, original_price: 549, image_url: "public/Shop_Pure_Forest_Honey_Today_200x.webp", image_url_2: null, rating: 4.8, review_count: 1560 },

  // Spices
  { id: "s1", name: "Lakadong Turmeric", description: "High curcumin turmeric", tagline: "7-9% Curcumin Content", category: "Spices", badge: "Best Seller", price: 349, original_price: 449, image_url: "public/Buy_Pink_Himalayan_Rock_Salt_200x.avif", image_url_2: null, rating: 4.9, review_count: 3400 },
  { id: "s2", name: "Kerala Black Pepper", description: "Whole black pepper", tagline: "Bold & Aromatic", category: "Spices", badge: null, price: 279, original_price: 379, image_url: "public/Buy_Salem_Haldi_200x.avif", image_url_2: null, rating: 4.6, review_count: 1120 },
  { id: "s3", name: "Cinnamon Sticks (Dalchini)", description: "True cinnamon", tagline: "Ceylon Cinnamon, Premium", category: "Spices", badge: "Trending", price: 299, original_price: 399, image_url: "public/Buy_Single_Origin_Kashmiri_Mongra_Saffron_200x.avif", image_url_2: null, rating: 4.7, review_count: 950 },
  { id: "s4", name: "Kashmiri Red Chilli", description: "Mild heat, deep color", tagline: "Rich Color, Mild Heat", category: "Spices", badge: "Hot Deals", price: 249, original_price: 349, image_url: "public/Raw_Mango_Pickle_200x.jpg", image_url_2: null, rating: 4.5, review_count: 870 },
];

// Generate quantity options for every product
export const quantityOptions: QuantityOption[] = products.flatMap((p) => [
  { id: `${p.id}-q1`, label: "500 gm", price: p.price, product_id: p.id, sort_order: 1 },
  { id: `${p.id}-q2`, label: "1 kg", price: Math.round(p.price * 1.8), product_id: p.id, sort_order: 2 },
  { id: `${p.id}-q3`, label: "2 kg", price: Math.round(p.price * 3.4), product_id: p.id, sort_order: 3 },
]);

export function getProducts(category?: string): Product[] {
  if (!category || category === "All") return products;
  return products.filter((p) => p.category === category);
}

export function getProductsByCategories(categories: string[], limit = 4): Product[] {
  return products.filter((p) => categories.includes(p.category)).slice(0, limit);
}

export function getQuantityOptions(productId: string): QuantityOption[] {
  return quantityOptions.filter((q) => q.product_id === productId);
}
