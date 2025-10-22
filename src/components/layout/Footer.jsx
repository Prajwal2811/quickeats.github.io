import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show button only when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-300 mt-16">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto py-14 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-3">
            QuickEats
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Order your favorite meals effortlessly and experience lightning-fast
            delivery — your cravings, served hot and fresh!
          </p>
        </motion.div>

        {/* Company Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            {["About Us", "Careers", "Blog", "Contact"].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:text-red-400 transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Legal Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white mb-3">Legal</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            {["Terms & Conditions", "Privacy Policy", "Refund Policy"].map(
              (item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-red-400 transition duration-300"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </motion.div>

        {/* Social & Apps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 mb-5">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 transition-all duration-300 shadow-md"
                >
                  <Icon className="text-gray-300 hover:text-white text-lg" />
                </a>
              )
            )}
          </div>

          <h3 className="text-lg font-semibold text-white mb-2">Get the App</h3>
          <div className="flex gap-3">
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-10 hover:scale-105 transition-transform duration-300"
              />
            </a>
            <a href="#">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10 hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-red-500/10 via-transparent to-transparent blur-3xl pointer-events-none"></div>

      {/* Back to Top Button */}
      {showButton && (
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-32 right-12 bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
          title="Back to Top"
        >
          <FaArrowUp />
        </motion.button>
      )}

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">QuickEats</span>. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
