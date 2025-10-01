import React from "react";
import bannerImg from "../assets/banner.png"; // put your image in src/assets/

const Hero = () => (
  <section
    className="relative pt-24 pb-20 flex items-center justify-center text-center bg-cover bg-center bg-no-repeat overflow-hidden"
    style={{ backgroundImage: `url(${bannerImg})` }}
  >
    {/* Optional Overlay for better text readability */}
    <div className="absolute inset-0 bg-black bg-opacity-30"></div>

    {/* Background Accent Blobs */}
    <div className="absolute top-0 right-0 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

    <div className="relative max-w-6xl px-6 lg:px-12">
      {/* Text Section */}
      <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
        Get the Career You <span className="text-orange-400">Deserve, Faster</span>
      </h1>
      <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto text-center lg:text-center ">
        Join thousands of students progressing in coding careers with expertly
        crafted programs, mentorship, and hands-on projects.
      </p>

      {/* CTA Buttons */}
      <div className="flex justify-center gap-4">
        <button className="px-6 py-3 rounded-lg bg-orange-600 text-white font-semibold shadow hover:bg-orange-700 transition">
          Get Started
        </button>
        <button className="px-6 py-3 rounded-lg border border-white text-white font-medium hover:bg-white hover:text-orange-600 transition">
          Learn More
        </button>
      </div>
    </div>
  </section>
);

export default Hero;
