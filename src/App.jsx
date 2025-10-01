import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./pages/Courses";
import Testimonials from "./pages/Testimonials";
import Footer from "./components/Footer";
import Events from "./pages/Events";
import Leaderboard from "./pages/Leaderboard";
import Pricing from "./pages/Pricing";
import StatsSection from "./components/StatsSection";
import ShimmerFooter from "./components/ShimmerFooter";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col transition-colors duration-300">
      <Navbar />
      <main className="flex-grow text-gray-800 dark:text-gray-200">
        {/* Hero Section */}
        <section id="hero" className="pt-16">
          <Hero />
        </section>

        {/* Courses */}\
        <section id="courses" className="pt-16">
          <Courses />
        </section>

        <StatsSection />

        {/* Events */}
        <section
          id="events"
          className="pt-16 py-20 text-center bg-gray-800 text-white"
        >
          <h2 className="text-3xl font-bold">Upcoming Events</h2>
          <p className="mt-4">Stay tuned for exciting workshops and hackathons!</p>
          <Events />
        </section>

        {/* Leaderboard */}
        <section
          id="leaderboard"
          className="pt-16 py-20 text-center bg-gray-100 dark:bg-gray-700 transition-colors duration-300"
        >
          <h2 className="text-3xl font-bold">Leaderboard</h2>
          <p className="mt-4 pb-6">See who’s excelling in coding challenges!</p>
          <Leaderboard />
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          className="pt-16 py-20 text-center bg-white dark:bg-gray-800 transition-colors duration-300"
        >
          <Pricing />
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="pt-16">
          <Testimonials />
        </section>

      </main>

      <Footer />

      <ShimmerFooter />

    </div>
  );
}

export default App;
