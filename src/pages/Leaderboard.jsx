import React, { useEffect, useRef } from "react";

const students = [
  { id: 1, name: "Aarav Sharma", score: 980, avatar: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Maya Singh", score: 960, avatar: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Rohan Mehta", score: 940, avatar: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Priya Rao", score: 930, avatar: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "Karan Verma", score: 920, avatar: "https://i.pravatar.cc/150?img=5" },
  { id: 6, name: "Simran Kaur", score: 910, avatar: "https://i.pravatar.cc/150?img=6" },
  { id: 7, name: "Aditya Jain", score: 900, avatar: "https://i.pravatar.cc/150?img=7" },
];

const Leaderboard = () => {
  const scrollRef = useRef();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollStep = () => {
      if (!scrollContainer) return;
      scrollAmount += 1; // pixels per step, adjust speed here
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0; // reset scroll to start seamlessly
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scrollStep, 20); // smaller = faster
    return () => clearInterval(interval);
  }, []);

  // Duplicate students array to make seamless scrolling
  const repeatedStudents = [...students, ...students];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-700">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-hidden overflow-y-hidden"
        >
          {repeatedStudents.map(({ id, name, score, avatar }, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 border rounded-lg shadow-md p-6 bg-white hover:shadow-xl transform hover:scale-105"
            >
              <img
                src={avatar}
                alt={name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center mb-2 text-orange-600">
                {name}
              </h3>
              <p className="text-center text-black dark:text-black-300 font-medium">
                Score: {score}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
