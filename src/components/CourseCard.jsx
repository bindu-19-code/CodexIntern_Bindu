import React from "react";

const courses = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description: "Become a MERN stack developer with hands-on projects.",
    duration: "6 months",
    price: "₹50,000",
    rating: 4.8,
    level: "Beginner",
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    description: "Master core DSA concepts and crack coding interviews.",
    duration: "4 months",
    price: "₹25,000",
    rating: 4.5,
    level: "Intermediate",
  },
  {
    id: 3,
    title: "Machine Learning",
    description: "Start your AI journey with practical ML projects.",
    duration: "5 months",
    price: "₹40,000",
    rating: 4.7,
    level: "Advanced",
  },
];

const CourseCard = () => (
  <section className="py-16 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">
        Popular Courses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map(({ id, title, description, duration, price, rating, level }) => (
          <div
            key={id}
            className="border rounded-lg shadow-md p-6 bg-white dark:bg-gray-800 hover:shadow-xl hover:scale-105 transform transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-orange-600">{title}</h3>

            {/* Rating */}
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 mr-2">
                {"★".repeat(Math.floor(rating))}{" "}
                {"☆".repeat(5 - Math.floor(rating))}
              </span>
              <span className="text-gray-600 dark:text-gray-300 text-sm">({rating})</span>
            </div>

            {/* Level tag */}
            <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs mb-4">
              {level}
            </span>

            <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>

            <div className="flex justify-between text-gray-600 dark:text-gray-400 font-medium mb-4">
              <span>Duration: {duration}</span>
              <span>Price: {price}</span>
            </div>

            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded hover:from-orange-600 hover:to-orange-500 w-full transition-colors">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CourseCard;
