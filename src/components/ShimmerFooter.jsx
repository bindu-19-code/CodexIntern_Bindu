import React from "react";

const ShimmerFooter = () => {
  return (
    <div className="text-center py-24 bg-gray-900 relative overflow-hidden">
      {/* Radial glow behind the text */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.2),transparent_70%)] animate-pulse"></div>
      </div>

      <h1 className="relative text-[100px] md:text-[120px] font-extrabold text-white inline-block">
        Coding Ninjas

        {/* Moving shimmer overlay */}
        <span
          className="
            absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent
            bg-[length:200%_100%] animate-shimmer
          "
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Coding Ninjas
        </span>
      </h1>
    </div>
  );
};

export default ShimmerFooter;
