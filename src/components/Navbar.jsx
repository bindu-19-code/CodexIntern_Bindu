import React, { useState, useEffect } from "react";
import SidebarAuth from "./SidebarAuth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [authOpen, setAuthOpen] = useState(false);
  const [authType, setAuthType] = useState("login");

  // Open sidebar with specific type
  const openAuth = (type) => {
    setAuthType(type);
    setAuthOpen(true);
  };

  // Apply theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="#hero"
                className="text-3xl font-extrabold text-orange-600 dark:text-orange-400"
              >
                Coding Ninjas
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 font-medium text-gray-700 dark:text-gray-200">
              <a href="#courses" className="hover:text-orange-500">
                Courses
              </a>
              <a href="#events" className="hover:text-orange-500">
                Events
              </a>
              <a href="#leaderboard" className="hover:text-orange-500">
                Leaderboard
              </a>
              <a href="#pricing" className="hover:text-orange-500">
                Pricing
              </a>
            </div>

            {/* Buttons + Theme Toggle */}
            <div className="hidden md:flex space-x-4 items-center">
              <button
                onClick={() => openAuth("login")}
                className="bg-orange-600 text-white px-4 py-1 rounded hover:bg-orange-500 font-semibold"
              >
                Login
              </button>
              <button
                onClick={() => openAuth("signup")}
                className="bg-orange-600 text-white px-4 py-1 rounded hover:bg-orange-500 font-semibold"
              >
                Sign Up
              </button>

              {/* Theme Toggle Button */}
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
              >
                {theme === "light" ? "🌙" : "☀️"}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-orange-600 focus:outline-none"
              >
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 shadow-inner" id="mobile-menu">
            <div className="px-6 pt-2 pb-4 space-y-1 font-medium text-gray-700 dark:text-gray-200">
              <a
                href="#courses"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded hover:bg-orange-100 dark:hover:bg-gray-700"
              >
                Courses
              </a>
              <a
                href="#events"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded hover:bg-orange-100 dark:hover:bg-gray-700"
              >
                Events
              </a>
              <a
                href="#leaderboard"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded hover:bg-orange-100 dark:hover:bg-gray-700"
              >
                Leaderboard
              </a>
              <a
                href="#pricing"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded hover:bg-orange-100 dark:hover:bg-gray-700"
              >
                Pricing
              </a>

              <hr className="border-gray-200 dark:border-gray-600 my-2" />

              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  openAuth("login");
                }}
                className="block w-full px-3 py-2 rounded bg-orange-600 text-white font-semibold"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  openAuth("signup");
                }}
                className="block w-full px-3 py-2 rounded bg-orange-600 text-white font-semibold"
              >
                Sign Up
              </button>

              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="mt-4 w-full p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
              >
                {theme === "light" ? "🌙 Switch to Dark" : "☀️ Switch to Light"}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Sidebar for Login/Signup */}
      <SidebarAuth isOpen={authOpen} onClose={() => setAuthOpen(false)} type={authType} />
    </>
  );
};

export default Navbar;
