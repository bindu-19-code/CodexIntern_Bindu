import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Amit Sharma",
    role: "Full-Stack Developer",
    feedback:
      "Coding Ninjas helped me land my first software developer job with their comprehensive curriculum and mentorship.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Neha Gupta",
    role: "Data Scientist",
    feedback:
      "The hands-on projects and live sessions made learning machine learning practical and enjoyable.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Ravi Kumar",
    role: "Software Engineer",
    feedback:
      "I improved my problem-solving skills tremendously, thanks to Coding Ninjas’ DSA course and coding challenges.",
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
  },
];

const Testimonials = () => (
  <section className="max-w-7xl mx-auto py-16 px-6 bg-orange-50 rounded-lg">
    <h2 className="text-3xl font-bold text-center mb-12 text-black">
      What Our Students Say
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map(({ id, name, role, feedback, avatar }) => (
        <div
          key={id}
          className="bg-gray-800 text-white p-6 shadow hover:shadow-lg transition-shadow text-center flex flex-col items-center rounded-lg"
        >
          <img
            src={avatar}
            alt={`${name} avatar`}
            className="w-20 h-20 rounded-full object-cover mb-4"
          />
          <p className="text-white-700 italic mb-4">"{feedback}"</p>
          <h3 className="text-xl font-semibold text-orange-600">{name}</h3>
          <p className="text-white-600">{role}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
