// api.js

// --- IMAGE URLs ---
export const placeholderImage = "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80";

// --- CATEGORIES ---
export const categories = [
    { name: "North Indian", image: placeholderImage },
    { name: "Mughlai", image: placeholderImage },
    { name: "Japanese", image: placeholderImage },
    { name: "Sushi", image: placeholderImage },
    { name: "Italian", image: placeholderImage },
    { name: "Pizza", image: placeholderImage },
    { name: "Pasta", image: placeholderImage },
    { name: "Fast Food", image: placeholderImage },
    { name: "Vegan", image: placeholderImage },
    { name: "Chinese", image: placeholderImage },
    { name: "Desserts", image: placeholderImage },
    { name: "BBQ", image: placeholderImage },
    { name: "Indian Street Food", image: placeholderImage },
    { name: "Biryani", image: placeholderImage },
];

// --- RESTAURANTS (40 entries) ---
export const restaurants = [
    { id: 1, name: "Naivedhyam Veg Thali", location: "Civil Lines, Nagpur", cuisine: "North Indian, Pure Veg", rating: 4.2, deliveryTime: "30-40 min", image: placeholderImage },
    { id: 2, name: "Yamazaki Pan Asian", location: "Sitabuldi, Nagpur", cuisine: "Japanese, Sushi, Oriental", rating: 4.8, deliveryTime: "25-35 min", image: placeholderImage },
    { id: 3, name: "Saoji Tandoor House", location: "Reshim Bagh, Nagpur", cuisine: "North Indian, Saoji, BBQ", rating: 4.5, deliveryTime: "35-45 min", image: placeholderImage },
    { id: 4, name: "Biryani & Kebab Co.", location: "Amravati Road, Nagpur", cuisine: "Biryani, Mughlai, Kebabs", rating: 4.7, deliveryTime: "20-30 min", image: placeholderImage },
    { id: 5, name: "Little Italy Nagpur", location: "Mankapur, Nagpur", cuisine: "Italian, Pizza, Pasta", rating: 4.6, deliveryTime: "30-40 min", image: placeholderImage },
    { id: 6, name: "Goli Vada Pav No.1", location: "Sitabuldi, Nagpur", cuisine: "Fast Food, Indian Snacks", rating: 4.4, deliveryTime: "20-30 min", image: placeholderImage },
    { id: 7, name: "The Salad Stop", location: "Civil Lines, Nagpur", cuisine: "Vegan, Healthy, Salads", rating: 4.5, deliveryTime: "25-35 min", image: placeholderImage },
    { id: 8, name: "Nanking Chinese", location: "Mankapur, Nagpur", cuisine: "Chinese, Noodles, Soups", rating: 4.3, deliveryTime: "30-40 min", image: placeholderImage },
    { id: 9, name: "Ramji-Shyamji Poha", location: "Sitabuldi, Nagpur", cuisine: "Breakfast, Indian Street Food", rating: 4.7, deliveryTime: "15-25 min", image: placeholderImage },
    { id: 10, name: "The Chocolate Room", location: "Civil Lines, Nagpur", cuisine: "Beverages, Desserts, Coffee", rating: 4.6, deliveryTime: "15-25 min", image: placeholderImage },
    { id: 11, name: "BBQ Nation Nagpur", location: "Sitabuldi, Nagpur", cuisine: "BBQ, North Indian", rating: 4.7, deliveryTime: "30-40 min", image: placeholderImage },
    { id: 12, name: "Sushi Express", location: "Mankapur, Nagpur", cuisine: "Japanese, Sushi", rating: 4.5, deliveryTime: "25-35 min", image: placeholderImage },
    { id: 13, name: "Pizza Hub", location: "Civil Lines, Nagpur", cuisine: "Italian, Pizza", rating: 4.4, deliveryTime: "30-40 min", image: placeholderImage },
    { id: 14, name: "Noodle House", location: "Reshim Bagh, Nagpur", cuisine: "Chinese, Noodles", rating: 4.3, deliveryTime: "20-30 min", image: placeholderImage },
    { id: 15, name: "Street Food Mania", location: "Sitabuldi, Nagpur", cuisine: "Indian Street Food, Fast Food", rating: 4.6, deliveryTime: "15-25 min", image: placeholderImage },
    { id: 16, name: "Vegan Delight", location: "Mankapur, Nagpur", cuisine: "Vegan, Healthy", rating: 4.5, deliveryTime: "20-30 min", image: placeholderImage },
    { id: 17, name: "Tandoori Tales", location: "Civil Lines, Nagpur", cuisine: "North Indian, BBQ", rating: 4.7, deliveryTime: "30-40 min", image: placeholderImage },
    { id: 18, name: "Biryani House", location: "Amravati Road, Nagpur", cuisine: "Biryani, Mughlai", rating: 4.8, deliveryTime: "25-35 min", image: placeholderImage },
    { id: 19, name: "Pasta Point", location: "Sitabuldi, Nagpur", cuisine: "Italian, Pasta", rating: 4.4, deliveryTime: "30-40 min", image: placeholderImage },
    { id: 20, name: "Choco Heaven", location: "Civil Lines, Nagpur", cuisine: "Desserts, Beverages", rating: 4.6, deliveryTime: "15-25 min", image: placeholderImage },
    { id: 21, name: "Saoji Spice", location: "Reshim Bagh, Nagpur", cuisine: "Mughlai, North Indian", rating: 4.5, deliveryTime: "35-45 min", image: placeholderImage },
    { id: 22, name: "Dragon Wok", location: "Mankapur, Nagpur", cuisine: "Chinese, Noodles", rating: 4.4, deliveryTime: "25-35 min", image: placeholderImage },
    { id: 23, name: "Pizza King", location: "Sitabuldi, Nagpur", cuisine: "Italian, Pizza", rating: 4.6, deliveryTime: "30-40 min", image: placeholderImage },
    { id: 24, name: "Sushi World", location: "Civil Lines, Nagpur", cuisine: "Japanese, Sushi", rating: 4.7, deliveryTime: "25-35 min", image: placeholderImage },
    { id: 25, name: "Fast Food Central", location: "Reshim Bagh, Nagpur", cuisine: "Fast Food, Snacks", rating: 4.3, deliveryTime: "15-25 min", image: placeholderImage },
    { id: 26, name: "Grill House", location: "Mankapur, Nagpur", cuisine: "BBQ, North Indian", rating: 4.5, deliveryTime: "30-40 min", image: placeholderImage },
    { id: 27, name: "Biryani Adda", location: "Sitabuldi, Nagpur", cuisine: "Biryani, Mughlai", rating: 4.8, deliveryTime: "20-30 min", image: placeholderImage },
    { id: 28, name: "Vegan Bowl", location: "Civil Lines, Nagpur", cuisine: "Vegan, Healthy", rating: 4.6, deliveryTime: "25-35 min", image: placeholderImage },
    { id: 29, name: "Pasta Fresco", location: "Mankapur, Nagpur", cuisine: "Italian, Pasta", rating: 4.5, deliveryTime: "30-40 min", image: placeholderImage },
    { id: 30, name: "Choco Delight", location: "Reshim Bagh, Nagpur", cuisine: "Desserts, Beverages", rating: 4.7, deliveryTime: "15-25 min", image: placeholderImage },
    { id: 31, name: "Saoji Royal", location: "Sitabuldi, Nagpur", cuisine: "Mughlai, North Indian", rating: 4.5, deliveryTime: "35-45 min", image: placeholderImage },
    { id: 32, name: "Dragon Express", location: "Mankapur, Nagpur", cuisine: "Chinese, Noodles", rating: 4.4, deliveryTime: "25-35 min", image: placeholderImage },
    { id: 33, name: "Pizza Fiesta", location: "Civil Lines, Nagpur", cuisine: "Italian, Pizza", rating: 4.6, deliveryTime: "30-40 min", image: placeholderImage },
    { id: 34, name: "Sushi Bar", location: "Reshim Bagh, Nagpur", cuisine: "Japanese, Sushi", rating: 4.7, deliveryTime: "25-35 min", image: placeholderImage },
    { id: 35, name: "Fast Bite", location: "Sitabuldi, Nagpur", cuisine: "Fast Food, Snacks", rating: 4.3, deliveryTime: "15-25 min", image: placeholderImage },
    { id: 36, name: "Grill & Spice", location: "Mankapur, Nagpur", cuisine: "BBQ, North Indian", rating: 4.5, deliveryTime: "30-40 min", image: placeholderImage },
    { id: 37, name: "Biryani Magic", location: "Civil Lines, Nagpur", cuisine: "Biryani, Mughlai", rating: 4.8, deliveryTime: "20-30 min", image: placeholderImage },
    { id: 38, name: "Vegan Feast", location: "Reshim Bagh, Nagpur", cuisine: "Vegan, Healthy", rating: 4.6, deliveryTime: "25-35 min", image: placeholderImage },
    { id: 39, name: "Pasta Mania", location: "Mankapur, Nagpur", cuisine: "Italian, Pasta", rating: 4.5, deliveryTime: "30-40 min", image: placeholderImage },
    { id: 40, name: "Chocolate Bliss", location: "Sitabuldi, Nagpur", cuisine: "Desserts, Beverages", rating: 4.7, deliveryTime: "15-25 min", image: placeholderImage },
];

// --- DISHES (Expanded and updated to 100 entries for better coverage) ---
export const dishes = [
    // R1: Naivedhyam Veg Thali
    { id: 1, type: "veg", restaurantId: 1, name: "Special Maharashtrian Thali", category: "North Indian", price: 280, image: "https://images.unsplash.com/photo-1610486675005-c08170c2669e?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 2, type: "veg", restaurantId: 1, name: "Paneer Tikka Masala", category: "North Indian", price: 250, image: "https://images.unsplash.com/photo-1596765792244-1f2284c8c7c2?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 3, type: "veg", restaurantId: 1, name: "Butter Naan (R1)", category: "Bread", price: 80, image: "https://images.unsplash.com/photo-1628178051252-c07a09886915?auto=format&fit=crop&w=400&h=300&q=80" },

    // R2: Yamazaki Pan Asian
    { id: 4, type: "non-veg", restaurantId: 2, name: "Premium Sushi Platter", category: "Sushi", price: 1200, image: "https://images.unsplash.com/photo-1553090623-289523e10408?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 5, type: "non-veg", restaurantId: 2, name: "Chicken Yakitori Skewers", category: "Starters", price: 400, image: "https://images.unsplash.com/photo-1547846549-0c6553835266?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 6, type: "veg", restaurantId: 2, name: "Veg Hakka Noodles (R2)", category: "Chinese", price: 300, image: "https://images.unsplash.com/photo-1585238343753-431526487e47?auto=format&fit=crop&w=400&h=300&q=80" },
    
    // R3: Saoji Tandoor House
    { id: 7, type: "non-veg", restaurantId: 3, name: "Mutton Saoji Masala", category: "Mughlai", price: 450, image: "https://images.unsplash.com/photo-1606775791349-f007e5967c3f?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 8, type: "non-veg", restaurantId: 3, name: "Tandoori Chicken Full", category: "BBQ", price: 650, image: "https://images.unsplash.com/photo-1587399222588-4687b32087c2?auto=format&fit=crop&w=400&h=300&q=80" },

    // R4: Biryani & Kebab Co.
    { id: 9, type: "non-veg", restaurantId: 4, name: "Gosht Biryani (Kilo)", category: "Biryani", price: 1100, image: "https://images.unsplash.com/photo-1589302633005-0901e74b3334?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 10, type: "non-veg", restaurantId: 4, name: "Chicken Seekh Kebab", category: "BBQ", price: 300, image: "https://images.unsplash.com/photo-1555939221-a3f89823e514?auto=format&fit=crop&w=400&h=300&q=80" },

    // R5: Little Italy Nagpur
    { id: 11, type: "veg", restaurantId: 5, name: "Margherita Pizza", category: "Pizza", price: 450, image: "https://images.unsplash.com/photo-1565299624942-4386810c7c04?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 12, type: "veg", restaurantId: 5, name: "Spaghetti Alfredo", category: "Pasta", price: 400, image: "https://images.unsplash.com/photo-1612800588631-0816b125b68f?auto=format&fit=crop&w=400&h=300&q=80" },

    // R6: Goli Vada Pav No.1
    { id: 13, type: "veg", restaurantId: 6, name: "Masala Vada Pav", category: "Fast Food", price: 50, image: "https://images.unsplash.com/photo-1608226071476-0f8c322c366e?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 14, type: "veg", restaurantId: 6, name: "Cheese Vada Pav", category: "Fast Food", price: 70, image: "https://images.unsplash.com/photo-1586524227038-f86a9e88d67c?auto=format&fit=crop&w=400&h=300&q=80" },

    // R7: The Salad Stop
    { id: 15, type: "veg", restaurantId: 7, name: "Quinoa & Avocado Salad", category: "Vegan", price: 350, image: "https://images.unsplash.com/photo-1512621776951-a57143f7e7fd?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 16, type: "veg", restaurantId: 7, name: "Vegan Buddha Bowl", category: "Vegan", price: 400, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&h=300&q=80" },

    // R8: Nanking Chinese
    { id: 17, type: "non-veg", restaurantId: 8, name: "Hakka Noodles (R8)", category: "Chinese", price: 250, image: "https://images.unsplash.com/photo-1585238343753-431526487e47?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 18, type: "non-veg", restaurantId: 8, name: "Manchurian Dry", category: "Chinese", price: 300, image: "https://images.unsplash.com/photo-1601269395217-1c3906cc8579?auto=format&fit=crop&w=400&h=300&q=80" },

    // R9: Ramji-Shyamji Poha
    { id: 19, type: "veg", restaurantId: 9, name: "Poha Special", category: "Indian Street Food", price: 60, image: "https://images.unsplash.com/photo-1600213077363-2284c407886a?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 20, type: "veg", restaurantId: 9, name: "Sabudana Khichdi", category: "Indian Street Food", price: 80, image: "https://images.unsplash.com/photo-1608225576798-2a1d9b3e1d1b?auto=format&fit=crop&w=400&h=300&q=80" },

    // R10: The Chocolate Room
    { id: 21, type: "veg", restaurantId: 10, name: "Chocolate Brownie", category: "Desserts", price: 180, image: "https://images.unsplash.com/photo-1560942940-d62f6b39d1b6?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 22, type: "veg", restaurantId: 10, name: "Cold Coffee", category: "Beverages", price: 150, image: "https://images.unsplash.com/photo-1520633842340-975003f5693c?auto=format&fit=crop&w=400&h=300&q=80" },

    // R11-R40 - Expanded list to cover all restaurants and categories
    { id: 23, type: "non-veg", restaurantId: 11, name: "BBQ Chicken Wings", category: "BBQ", price: 420, image: "https://images.unsplash.com/photo-1559867087-0b13359c445a?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 24, type: "veg", restaurantId: 11, name: "Dal Makhani (R11)", category: "North Indian", price: 320, image: "https://images.unsplash.com/photo-1628178051252-c07a09886915?auto=format&fit=crop&w=400&h=300&q=80" },

    { id: 25, type: "non-veg", restaurantId: 12, name: "Spicy Tuna Roll", category: "Sushi", price: 550, image: "https://images.unsplash.com/photo-1563612140888-292416f03d57?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 26, type: "non-veg", restaurantId: 13, name: "Pepperoni Feast Pizza", category: "Pizza", price: 550, image: "https://images.unsplash.com/photo-1601269395217-1c3906cc8579?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 27, type: "non-veg", restaurantId: 14, name: "Chilli Chicken Noodles", category: "Chinese", price: 350, image: "https://images.unsplash.com/photo-1549463945-8c0353c7c64c?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 28, type: "veg", restaurantId: 15, name: "Pani Puri (Gol Gappe)", category: "Indian Street Food", price: 90, image: "https://images.unsplash.com/photo-1609101072979-50f968c983c2?auto=format&fit=crop&w=400&h=300&q=80" },

    { id: 29, type: "veg", restaurantId: 16, name: "Lentil Soup", category: "Vegan", price: 200, image: "https://images.unsplash.com/photo-1547496502-ab4ed114dae4?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 30, type: "non-veg", restaurantId: 17, name: "Chicken Rara", category: "North Indian", price: 480, image: "https://images.unsplash.com/photo-1610486675005-c08170c2669e?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 31, type: "non-veg", restaurantId: 18, name: "Chicken Dum Biryani", category: "Biryani", price: 420, image: "https://images.unsplash.com/photo-1589302633005-0901e74b3334?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 32, type: "veg", restaurantId: 19, name: "Penne Arrabiata", category: "Pasta", price: 390, image: "https://images.unsplash.com/photo-1612800588631-0816b125b68f?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 33, type: "veg", restaurantId: 20, name: "Waffles with Ice Cream", category: "Desserts", price: 280, image: "https://images.unsplash.com/photo-1560942940-d62f6b39d1b6?auto=format&fit=crop&w=400&h=300&q=80" },

    // Repeating and Re-assigning to cover all 40 restaurants and ensure variety
    { id: 34, type: "non-veg", restaurantId: 21, name: "Chicken Tikka (R21)", category: "BBQ", price: 380, image: "https://images.unsplash.com/photo-1555939221-a3f89823e514?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 35, type: "veg", restaurantId: 22, name: "Veg Fried Rice (R22)", category: "Chinese", price: 280, image: "https://images.unsplash.com/photo-1563379929280-45c13e430489?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 36, type: "veg", restaurantId: 23, name: "Supreme Veggie Pizza", category: "Pizza", price: 490, image: "https://images.unsplash.com/photo-1565299624942-4386810c7c04?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 37, type: "non-veg", restaurantId: 24, name: "Salmon Nigiri Set", category: "Sushi", price: 850, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4357?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 38, type: "non-veg", restaurantId: 25, name: "Chicken Burger & Fries", category: "Fast Food", price: 250, image: "https://images.unsplash.com/photo-1550547660-d945037be6c7?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 39, type: "non-veg", restaurantId: 26, name: "Afghani Chicken Tikka", category: "BBQ", price: 450, image: "https://images.unsplash.com/photo-1583131751108-a832c32c253c?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 40, type: "non-veg", restaurantId: 27, name: "Mushroom Biryani", category: "Biryani", price: 350, image: "https://images.unsplash.com/photo-1589302633005-0901e74b3334?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 41, type: "veg", restaurantId: 28, name: "Vegan Sandwich (R28)", category: "Vegan", price: 290, image: "https://images.unsplash.com/photo-1550547660-d945037be6c7?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 42, type: "veg", restaurantId: 29, name: "Lasagna", category: "Pasta", price: 480, image: "https://images.unsplash.com/photo-1586716298544-79a078028f80?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 43, type: "veg", restaurantId: 30, name: "Red Velvet Pastry", category: "Desserts", price: 210, image: "https://images.unsplash.com/photo-1560942940-d62f6b39d1b6?auto=format&fit=crop&w=400&h=300&q=80" },

    { id: 44, type: "non-veg", restaurantId: 31, name: "Chicken Reshmi Kebab", category: "Mughlai", price: 400, image: "https://images.unsplash.com/photo-1583131751108-a832c32c253c?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 45, type: "non-veg", restaurantId: 32, name: "Singapore Style Noodles", category: "Chinese", price: 300, image: "https://images.unsplash.com/photo-1585238343753-431526487e47?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 46, type: "non-veg", restaurantId: 33, name: "Double Cheese Pizza", category: "Pizza", price: 480, image: "https://images.unsplash.com/photo-1565299624942-4386810c7c04?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 47, type: "non-veg", restaurantId: 34, name: "Avocado Maki", category: "Sushi", price: 400, image: "https://images.unsplash.com/photo-1563612140888-292416f03d57?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 48, type: "veg", restaurantId: 35, name: "French Fries", category: "Fast Food", price: 100, image: "https://images.unsplash.com/photo-1575459349880-9273c89c898b?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 49, type: "non-veg", restaurantId: 36, name: "Paneer Tandoori Tikka", category: "BBQ", price: 350, image: "https://images.unsplash.com/photo-1596765792244-1f2284c8c7c2?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 50, type: "non-veg", restaurantId: 37, name: "Egg Biryani", category: "Biryani", price: 300, image: "https://images.unsplash.com/photo-1589302633005-0901e74b3334?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 51, type: "veg", restaurantId: 38, name: "Vegan Feast Bowl (R38)", category: "Vegan", price: 380, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 52, type: "veg", restaurantId: 39, name: "Ravioli with Pesto", category: "Pasta", price: 420, image: "https://images.unsplash.com/photo-1612800588631-0816b125b68f?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 53, type: "veg", restaurantId: 40, name: "Hot Chocolate Fudge", category: "Desserts", price: 250, image: "https://images.unsplash.com/photo-1560942940-d62f6b39d1b6?auto=format&fit=crop&w=400&h=300&q=80" },

    // --- Further Expansion to 100 entries ---
    // This section ensures multiple dish types are available at most restaurants for filtering demonstration
    { id: 54, type: "veg", restaurantId: 1, name: "Rajma Chawal", category: "North Indian", price: 180, image: "https://images.unsplash.com/photo-1606411516035-717e3e9d8c9a?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 55, type: "non-veg", restaurantId: 2, name: "Tempura Prawns", category: "Japanese", price: 650, image: "https://images.unsplash.com/photo-1596404289896-1216d1f059a4?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 56, type: "non-veg", restaurantId: 3, name: "Mutton Rogan Josh", category: "Mughlai", price: 500, image: "https://images.unsplash.com/photo-1586716298544-79a078028f80?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 57, type: "veg", restaurantId: 4, name: "Paneer Biryani", category: "Biryani", price: 380, image: "https://images.unsplash.com/photo-1589302633005-0901e74b3334?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 58, type: "non-veg", restaurantId: 5, name: "Fettuccine Carbonara", category: "Pasta", price: 420, image: "https://images.unsplash.com/photo-1601077708577-e2a2221b6a78?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 59, type: "veg", restaurantId: 6, name: "Samosa", category: "Fast Food", price: 40, image: "https://images.unsplash.com/photo-1586524227038-f86a9e88d67c?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 60, type: "veg", restaurantId: 7, name: "Green Smoothie", category: "Vegan", price: 250, image: "https://images.unsplash.com/photo-1587399222588-4687b32087c2?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 61, type: "veg", restaurantId: 8, name: "Veg Spring Rolls", category: "Chinese", price: 200, image: "https://images.unsplash.com/photo-1550547660-d945037be6c7?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 62, type: "veg", restaurantId: 9, name: "Jalebi", category: "Indian Street Food", price: 70, image: "https://images.unsplash.com/photo-1560942940-d62f6b39d1b6?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 63, type: "veg", restaurantId: 10, name: "Vanilla Milkshake", category: "Desserts", price: 160, image: "https://images.unsplash.com/photo-1549463945-8c0353c7c64c?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 64, type: "veg", restaurantId: 11, name: "Achari Paneer Tikka", category: "BBQ", price: 350, image: "https://images.unsplash.com/photo-1596765792244-1f2284c8c7c2?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 65, type: "non-veg", restaurantId: 12, name: "Eel Nigiri", category: "Sushi", price: 700, image: "https://images.unsplash.com/photo-1553090623-289523e10408?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 66, type: "veg", restaurantId: 13, name: "Hawaiian Pizza", category: "Pizza", price: 400, image: "https://images.unsplash.com/photo-1601269395217-1c3906cc8579?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 67, type: "non-veg", restaurantId: 14, name: "Kung Pao Chicken", category: "Chinese", price: 420, image: "https://images.unsplash.com/photo-1549463945-8c0353c7c64c?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 68, type: "veg", restaurantId: 15, name: "Dabeli", category: "Fast Food", price: 60, image: "https://images.unsplash.com/photo-1608226071476-0f8c322c366e?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 69, type: "veg", restaurantId: 16, name: "Vegan Chocolate Cake", category: "Vegan", price: 300, image: "https://images.unsplash.com/photo-1560942940-d62f6b39d1b6?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 70, type: "veg", restaurantId: 17, name: "Kadhai Paneer", category: "North Indian", price: 290, image: "https://images.unsplash.com/photo-1596765792244-1f2284c8c7c2?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 71, type: "veg", restaurantId: 18, name: "Veg Kebab Platter", category: "BBQ", price: 450, image: "https://images.unsplash.com/photo-1583131751108-a832c32c253c?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 72, type: "veg", restaurantId: 19, name: "Gnocchi with Tomato Sauce", category: "Pasta", price: 350, image: "https://images.unsplash.com/photo-1612800588631-0816b125b68f?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 73, type: "veg", restaurantId: 20, name: "Cheesecake", category: "Desserts", price: 240, image: "https://images.unsplash.com/photo-1560942940-d62f6b39d1b6?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 74, type: "veg", restaurantId: 21, name: "Malai Kofta", category: "North Indian", price: 350, image: "https://images.unsplash.com/photo-1610486675005-c08170c2669e?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 75, type: "veg", restaurantId: 22, name: "Schezwan Fried Rice", category: "Chinese", price: 320, image: "https://images.unsplash.com/photo-1563379929280-45c13e430489?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 76, type: "veg", restaurantId: 23, name: "Farmhouse Pizza", category: "Pizza", price: 500, image: "https://images.unsplash.com/photo-1565299624942-4386810c7c04?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 77, type: "non-veg", restaurantId: 24, name: "Spicy Salmon Poke Bowl", category: "Japanese", price: 750, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4357?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 78, type: "veg", restaurantId: 25, name: "Chhole Bhature", category: "Indian Street Food", price: 150, image: "https://images.unsplash.com/photo-1608225576798-2a1d9b3e1d1b?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 79, type: "non-veg", restaurantId: 26, name: "Chicken Malai Tikka", category: "BBQ", price: 400, image: "https://images.unsplash.com/photo-1583131751108-a832c32c253c?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 80, type: "non-veg", restaurantId: 27, name: "Awadhi Biryani", category: "Biryani", price: 450, image: "https://images.unsplash.com/photo-1589302633005-0901e74b3334?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 81, type: "veg", restaurantId: 28, name: "Acai Bowl", category: "Vegan", price: 320, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 82, type: "veg", restaurantId: 29, name: "Creamy Mushroom Pasta", category: "Pasta", price: 410, image: "https://images.unsplash.com/photo-1601077708577-e2a2221b6a78?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 83, type: "veg", restaurantId: 30, name: "Lava Cake", category: "Desserts", price: 250, image: "https://images.unsplash.com/photo-1560942940-d62f6b39d1b6?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 84, type: "non-veg", restaurantId: 31, name: "Mutton Nihari", category: "Mughlai", price: 550, image: "https://images.unsplash.com/photo-1606775791349-f007e5967c3f?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 85, type: "non-veg", restaurantId: 32, name: "Dim Sum Platter", category: "Chinese", price: 480, image: "https://images.unsplash.com/photo-1585238343753-431526487e47?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 86, type: "veg", restaurantId: 33, name: "Veggie Grill Pizza", category: "Pizza", price: 450, image: "https://images.unsplash.com/photo-1565299624942-4386810c7c04?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 87, type: "veg", restaurantId: 34, name: "California Roll", category: "Sushi", price: 450, image: "https://images.unsplash.com/photo-1563612140888-292416f03d57?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 88, type: "veg", restaurantId: 35, name: "Tikki Burger", category: "Fast Food", price: 120, image: "https://images.unsplash.com/photo-1550547660-d945037be6c7?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 89, type: "non-veg", restaurantId: 36, name: "Tandoori Prawns", category: "BBQ", price: 600, image: "https://images.unsplash.com/photo-1583131751108-a832c32c253c?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 90, type: "non-veg", restaurantId: 37, name: "Hydrabadi Biryani", category: "Biryani", price: 400, image: "https://images.unsplash.com/photo-1589302633005-0901e74b3334?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 91, type: "veg", restaurantId: 38, name: "Avocado Toast", category: "Vegan", price: 300, image: "https://images.unsplash.com/photo-1512621776951-a57143f7e7fd?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 92, type: "veg", restaurantId: 39, name: "Aglio e Olio", category: "Pasta", price: 380, image: "https://images.unsplash.com/photo-1612800588631-0816b125b68f?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 93, type: "veg", restaurantId: 40, name: "Macaron Tower", category: "Desserts", price: 300, image: "https://images.unsplash.com/photo-1560942940-d62f6b39d1b6?auto=format&fit=crop&w=400&h=300&q=80" },
    // Fillers to ensure wide category representation
    { id: 94, type: "veg", restaurantId: 1, name: "Palak Paneer", category: "North Indian", price: 320, image: "https://images.unsplash.com/photo-1596765792244-1f2284c8c7c2?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 95, type: "veg", restaurantId: 5, name: "Bruschetta", category: "Starters", price: 200, image: "https://images.unsplash.com/photo-1565299624942-4386810c7c04?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 96, type: "veg", restaurantId: 10, name: "Iced Tea", category: "Beverages", price: 100, image: "https://images.unsplash.com/photo-1520633842340-975003f5693c?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 97, type: "veg", restaurantId: 15, name: "Pav Bhaji", category: "Indian Street Food", price: 140, image: "https://images.unsplash.com/photo-1608226071476-0f8c322c366e?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 98, type: "veg", restaurantId: 20, name: "Hot Coffee", category: "Beverages", price: 120, image: "https://images.unsplash.com/photo-1520633842340-975003f5693c?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 99, type: "veg", restaurantId: 25, name: "Onion Rings", category: "Fast Food", price: 150, image: "https://images.unsplash.com/photo-1575459349880-9273c89c898b?auto=format&fit=crop&w=400&h=300&q=80" },
    { id: 100, type: "veg", restaurantId: 30, name: "Fruit Salad", category: "Desserts", price: 220, image: "https://images.unsplash.com/photo-1512621776951-a57143f7e7fd?auto=format&fit=crop&w=400&h=300&q=80" },
];