// src/components/SidebarAuth.jsx
import React from "react";

const SidebarAuth = ({ isOpen, type, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-700 dark:text-gray-200 text-xl font-bold"
      >
        &times;
      </button>

      <div className="p-8 flex flex-col h-full justify-center">
        <h2 className="text-2xl font-bold mb-4 text-orange-600">
          {type === "login" ? "Login" : "Sign Up"}
        </h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          {type === "login"
            ? "Access your account to continue learning!"
            : "Create your free account today!"}
        </p>

        {/* Form */}
        <form className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
          />
          {type === "signup" && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
            />
          )}
          <button className="bg-orange-600 text-white py-3 rounded-md hover:bg-orange-500 transition">
            {type === "login" ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SidebarAuth;
