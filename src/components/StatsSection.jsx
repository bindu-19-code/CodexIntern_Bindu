import React from "react";
import { FaGraduationCap, FaUsers, FaMoneyBillWave, FaChartLine } from "react-icons/fa";

const stats = [
  {
    heading: "2 Lac+ students trained",
    sub: "with practical coding projects",
    icon: <FaUsers className="text-orange-600 w-6 h-6" />,
  },
  {
    heading: "2,000 Alumni in top tech",
    sub: "working at FAANG & Unicorns",
    icon: <FaGraduationCap className="text-orange-600 w-6 h-6" />,
  },
  {
    heading: "₹2 Cr+ highest salary",
    sub: "achieved by our alumni",
    icon: <FaMoneyBillWave className="text-orange-600 w-6 h-6" />,
  },
  {
    heading: "150% average hike",
    sub: "after completing the courses",
    icon: <FaChartLine className="text-orange-600 w-6 h-6" />,
  },
];

const StatsSection = () => {
  return (
    <section className="relative py-24 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Vertical Tracker Line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full border-l-2 border-dashed border-gray-300 dark:border-gray-600"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center space-y-32 relative z-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center transform transition duration-700 hover:scale-105"
          >
            {/* Notch / Circle */}
            <div className="flex items-center justify-center mb-6 h-20 w-20 rounded-full bg-orange-100 dark:bg-orange-800 shadow-md">
              {stat.icon}
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold mb-4">{stat.heading}</h2>

            {/* Subtext */}
            <p className="text-lg text-gray-600 dark:text-gray-300">{stat.sub}</p>
          </div>
        ))}

        {/* CTA Button */}
        <div className="mt-12">
          <button
            onClick={() =>
              document.getElementById("courses").scrollIntoView({ behavior: "smooth" })
            }
            className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 hover:bg-orange-500 transition"
          >
            Explore Offerings
            <img
              src="https://files.codingninjas.com/arrow-double-down-32299.svg"
              alt="arrow icon"
              className="h-6 w-6 rotate-180"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
