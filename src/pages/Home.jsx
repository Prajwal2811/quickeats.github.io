// src/pages/Home.jsx
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import RestaurantCard from "../components/restaurant/RestaurantCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { restaurants, categories, dishes } from "../services/api";
import VoiceAssistant from "../components/voice/VoiceAssistant";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay },
  }),
};

const Home = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [suggestions, setSuggestions] = useState([]);
  const [foodFilter, setFoodFilter] = useState("All");
  const dishesRef = useRef(null);

  // Handle search input changes
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.length > 0) {
      const matches = restaurants
        .filter(
          (r) =>
            r.name.toLowerCase().includes(value.toLowerCase()) ||
            r.cuisine.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 5);
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  };

  // Filter restaurants based on search & category
  const filteredRestaurants = restaurants.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.cuisine.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" ||
      r.cuisine.toLowerCase().split(", ").includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  // Filter dishes based on selected category & food filter
  const filteredDishes = dishes.filter((dish) => {
    const restaurant = restaurants.find((r) => r.id === dish.restaurantId);
    if (!restaurant) return false;

    const matchesCategory =
      selectedCategory === "All" ||
      dish.category.toLowerCase() === selectedCategory.toLowerCase() ||
      restaurant.cuisine.toLowerCase().split(", ").includes(selectedCategory.toLowerCase());

    switch (foodFilter) {
      case "Offers":
        return dish.price <= 250 && matchesCategory;
      case "Rating":
        return restaurant.rating >= 4.5 && matchesCategory;
      default:
        return matchesCategory;
    }
  });

  // Sections data
  const popularRestaurants = restaurants.slice(0, 20);
  const trendingRestaurants = restaurants.slice(20, 40);
  const topRatedRestaurants = [...restaurants].sort((a, b) => b.rating - a.rating).slice(0, 20);

  // Handle category click
  const handleCategoryClick = (catName) => {
    setSelectedCategory(catName);
    setSearch("");
    dishesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-gradient-to-b from-[#fffaf8] via-white to-[#fef2f2] text-gray-900 font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="relative h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

        {/* Decorative floating elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-pink-500/15 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-[200px] h-[200px] rounded-full bg-rose-400/10 blur-2xl animate-slowPulse"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 max-w-3xl mx-auto px-6 text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-snug drop-shadow-xl"
          >
            Indulge in <span className="text-rose-400">Luxury Flavors</span>
            <span className="block text-2xl md:text-3xl font-light text-pink-200 mt-2 tracking-wider glow">
              Gourmet experiences curated for you
            </span>
          </motion.h1>

          {/* Search Input */}
          <div className="mt-10 relative">
            <input
              type="text"
              placeholder="Search for restaurants, cuisines, or dishes..."
              className="w-full px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 font-medium shadow-lg backdrop-blur-md bg-white/40 border border-white/30 focus:ring-2 focus:ring-rose-400 focus:outline-none transition-all duration-300"
              value={search}
              onChange={handleSearchChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  dishesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            />
            {suggestions.length > 0 && (
              <ul className="absolute left-0 right-0 bg-white/90 backdrop-blur-lg shadow-2xl rounded-xl mt-2 z-50 max-h-60 overflow-y-auto text-gray-800">
                {suggestions.map((r) => (
                  <li
                    key={r.id}
                    onClick={() => {
                      setSearch(r.name);
                      setSelectedCategory("All");
                      setSuggestions([]);
                      dishesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="px-4 py-2 hover:bg-rose-100 cursor-pointer rounded-lg"
                  >
                    {r.name} <span className="text-gray-500">({r.cuisine})</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          
        </motion.div>
      </section>

      {/* CATEGORY SECTION */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className="flex gap-5 max-w-7xl mx-auto my-12 px-6 overflow-x-auto hide-scrollbar"
      >
        {categories.map((cat, i) => (
          <motion.button
            whileHover={{ scale: 1.08 }}
            key={i}
            onClick={() => handleCategoryClick(cat.name)}
            className={`flex-shrink-0 flex flex-col items-center gap-2 px-5 py-4 rounded-2xl transition-all duration-300 border ${
              selectedCategory === cat.name
                ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white border-transparent shadow-lg"
                : "bg-white border-gray-200 hover:border-rose-400 hover:bg-rose-50 text-gray-700"
            }`}
          >
            <img src={cat.image} alt={cat.name} className="w-14 h-14 object-contain rounded-full shadow-md" />
            <span className="text-sm font-semibold">{cat.name}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* RESTAURANT SECTIONS */}
      <RestaurantSection title="🔥 Popular Restaurants" restaurants={popularRestaurants} />
      <RestaurantSection title="🌟 Trending Now" restaurants={trendingRestaurants} />
      <RestaurantSection title="🏆 Top Rated" restaurants={topRatedRestaurants} />

      {/* BEST FOOD SECTION */}
      <motion.div
        ref={dishesRef}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className="max-w-7xl mx-auto my-20 px-6"
      >
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900 tracking-tight">
          🍽️ Signature Dishes Just for You
        </h2>
        <div className="flex gap-3 mb-8 flex-wrap">
          {["All", "Offers", "Rating"].map((f, i) => (
            <button
              key={i}
              onClick={() => setFoodFilter(f)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                foodFilter === f
                  ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-rose-50 hover:text-rose-500"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {filteredDishes.length ? (
          <Slider
            dots={false}
            infinite={false}
            speed={500}
            slidesToShow={4}
            slidesToScroll={1}
            responsive={[
              { breakpoint: 1280, settings: { slidesToShow: 3 } },
              { breakpoint: 1024, settings: { slidesToShow: 2 } },
              { breakpoint: 768, settings: { slidesToShow: 1 } },
            ]}
          >
            {filteredDishes.map((dish) => {
              const restaurant = restaurants.find((r) => r.id === dish.restaurantId);
              return (
                <motion.div key={dish.id} whileHover={{ scale: 1.05 }} className="p-2">
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
                    <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg text-gray-800">{dish.name}</h3>
                      <p className="text-gray-500 text-sm">{restaurant?.name}</p>
                      <p className="text-rose-500 font-bold mt-2">₹{dish.price}</p>

                      {/* TAGS */}
                      {dish.tags && dish.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {dish.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-2 py-1 rounded-full bg-rose-100 text-rose-600 font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </Slider>
        ) : (
          <p className="text-gray-500 text-lg">No dishes found for selected filter.</p>
        )}
      </motion.div>

      {/* ALL RESTAURANTS */}
      <AllRestaurantsSection filteredRestaurants={filteredRestaurants} />

      {/* VOICE ASSISTANT */}
      <VoiceAssistant setCategory={setSelectedCategory} dishesRef={dishesRef} />

      <Footer />
    </div>
  );
};

// --- Reusable Components ---
const LoadMoreButton = ({ onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    onClick={onClick}
    className="px-6 py-3 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
  >
    Load More ↓
  </motion.button>
);

const RestaurantSection = ({ title, restaurants }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="max-w-7xl mx-auto my-16 px-6">
      <h2 className="text-4xl font-extrabold mb-6">{title}</h2>
      <Slider {...settings}>
        {restaurants.map((r) => (
          <motion.div key={r.id} whileHover={{ scale: 1.03 }} className="p-3">
            <RestaurantCard restaurant={r} />
          </motion.div>
        ))}
      </Slider>
    </motion.div>
  );
};

const AllRestaurantsSection = ({ filteredRestaurants }) => {
  const [visibleCount, setVisibleCount] = useState(8);
  const handleLoadMore = () => setVisibleCount((p) => p + 8);
  const visibleRestaurants = filteredRestaurants.slice(0, visibleCount);

  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" className="max-w-7xl mx-auto px-6 pb-20">
      <h2 className="text-4xl font-extrabold mb-8">🍴 All Restaurants</h2>
      {visibleRestaurants.length ? (
        <>
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleRestaurants.map((r) => (
              <motion.div key={r.id} whileHover={{ scale: 1.02 }}>
                <RestaurantCard restaurant={r} />
              </motion.div>
            ))}
          </motion.div>

          {visibleCount < filteredRestaurants.length && (
            <div className="text-center mt-10">
              <LoadMoreButton onClick={handleLoadMore} />
            </div>
          )}
        </>
      ) : (
        <p className="text-gray-500 text-lg">No restaurants found matching your search.</p>
      )}
    </motion.div>
  );
};

export default Home;
