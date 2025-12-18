import { useContext } from "react";
import { Link } from "react-router-dom";
import { Hotel, Sun, Moon, Globe } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";
import { CurrencyContext } from "../context/CurrencyContext";

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { currency, toggleCurrency } = useContext(CurrencyContext);

  return (
    <div className="w-full h-20 bg-white/80 dark:bg-black/20 backdrop-blur-md border-b border-gray-200 dark:border-white/10 fixed top-0 left-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* 1. Logo Section */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-gradient-to-tr from-blue-600 to-blue-400 dark:from-accent dark:to-blue-600 rounded-xl group-hover:scale-105 transition-transform shadow-lg shadow-blue-500/20 dark:shadow-accent/20">
            <Hotel className="text-white w-6 h-6" />
          </div>
          <span className="self-center text-2xl font-bold whitespace-nowrap text-blue-900 dark:text-white tracking-wide">
            ORRIO
          </span>
        </Link>

        {/* 2. Middle Links (New Links Added) */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link
            to="/"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to="/hotels"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-primary transition-colors"
          >
            Find Hotels
          </Link>
          <Link
            to="/about"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* 3. Action Buttons (Theme, Currency, Auth) */}
        <div className="flex items-center gap-4">
          {/* Currency Toggle */}
          <button
            onClick={toggleCurrency}
            className="flex items-center gap-1 text-sm font-bold text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-primary transition-colors"
          >
            <Globe className="w-4 h-4" />
            {currency}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-white/20 transition-all"
          >
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5 text-blue-900" />
            )}
          </button>

          {/* Auth Buttons */}
          <div className="hidden md:flex gap-2">
            <button className="text-blue-900 dark:text-white px-4 py-2 text-sm font-medium hover:bg-blue-50 dark:hover:bg-white/10 rounded-lg transition-colors">
              Login
            </button>
            <button className="bg-blue-600 dark:bg-white text-white dark:text-black px-4 py-2 text-sm font-bold rounded-lg hover:bg-blue-700 dark:hover:bg-gray-200 transition-colors">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
