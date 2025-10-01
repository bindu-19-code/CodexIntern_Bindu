import React, { useRef } from "react";
import fsdImage from "../assets/fsd.jpg";
import dsaImage from "../assets/dsa.png";
import mlImage from "../assets/ml.jpg";
import androidImage from "../assets/android.png";
import blockchainImage from "../assets/blockchain.png";

const courses = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description: "Become a MERN stack developer by building real-world projects.",
    image: fsdImage,
    duration: "6 months",
    price: "₹50,000",
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    description: "Master the fundamentals to crack top-tier tech interviews.",
    image: dsaImage,
    duration: "4 months",
    price: "₹25,000",
  },
  {
    id: 3,
    title: "Machine Learning",
    description: "Learn AI fundamentals and implement practical ML projects.",
    image: mlImage,
    duration: "5 months",
    price: "₹40,000",
  },
  {
    id: 4,
    title: "Android Development",
    description: "Build Android apps from scratch using Kotlin and Java.",
    image: androidImage,
    duration: "4 months",
    price: "₹30,000",
  },
  {
    id: 5,
    title: "Blockchain Development",
    description: "Learn blockchain fundamentals and build smart contracts.",
    image: blockchainImage,
    duration: "3 months",
    price: "₹35,000",
  },
];

const Courses = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto py-16 px-6 relative">
      <h2 className="text-3xl font-bold text-center mb-8">Popular Courses</h2>

      {/* Scroll Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-3 shadow hover:bg-gray-100 dark:hover:bg-gray-600 z-10"
      >
        ◀
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-3 shadow hover:bg-gray-100 dark:hover:bg-gray-600 z-10"
      >
        ▶
      </button>

      {/* Courses Container */}
      <div
      ref={scrollRef}
      className="flex gap-6 overflow-hidden px-12"
      style={{ paddingBottom: "48px", paddingTop: "48px" }}
      >
        {courses.map(({ id, title, description, image, duration, price }) => (
          <div
            key={id}
            className="flex-shrink-0 w-81 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-orange-600">{title}</h3>
              <p className="text-gray-700 dark:text-gray-200 mb-4">{description}</p>
              <div className="flex justify-between text-gray-600 dark:text-gray-300 font-medium mb-4">
                <span>{duration}</span>
                <span>{price}</span>
              </div>
              <button className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-500 transition">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
