import React from "react";

const events = [
  {
    id: 1,
    title: "React Bootcamp",
    date: "Oct 15, 2025",
    description: "Hands-on React workshop with real-world projects.",
  },
  {
    id: 2,
    title: "DSA Challenge",
    date: "Oct 22, 2025",
    description: "Solve problems and compete with the top coders.",
  },
  {
    id: 3,
    title: "AI & ML Workshop",
    date: "Nov 5, 2025",
    description: "Get started with AI/ML and build your first model.",
  },
];

const Events = () => (
  <section className="py-16 bg-gray-800 dark:bg-gray-800">
    <div className="max-w-7xl mx-auto px-6">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map(({ id, title, date, description }) => (
          <div
            key={id}
            className="border rounded-lg shadow-md p-6 hover:shadow-xl hover:scale-105 transform transition-all duration-300 bg-gray-50 dark:bg-gray-700"
          >
            <h3 className="text-xl font-semibold mb-2 text-orange-600">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">{date}</p>
            <p className="text-gray-700 dark:text-gray-200 mb-4">{description}</p>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2 rounded hover:from-orange-600 hover:to-orange-500 w-full transition-colors">
              Register
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Events;
