import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-12 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
      {/* Column 1: Contact */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
        <p>Coding Ninjas Toll Free Number: 1800-123-3598</p>
        <p>Email: contact@codingninjas.com</p>
      </div>

      {/* Column 2: Our Offerings */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-white">Our Offerings</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/job-bootcamp" className="hover:text-orange-500">
              Job Bootcamp
            </Link>
          </li>
          <li>
            <Link to="/code-360" className="hover:text-orange-500">
              Code 360
            </Link>
          </li>
          <li>
            <Link to="/professional-certifications" className="hover:text-orange-500">
              Professional Certifications
            </Link>
          </li>
          <li>
            <Link to="/student-certifications" className="hover:text-orange-500">
              Student Certifications
            </Link>
          </li>
        </ul>
      </div>

      {/* Column 3: Community */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-white">Community</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/10x-club" className="hover:text-orange-500">
              10X Club
            </Link>
          </li>
          <li>
            <Link to="/student-chapters" className="hover:text-orange-500">
              Student Chapters
            </Link>
          </li>
          <li>
            <Link to="/hire-from-us" className="hover:text-orange-500">
              Hire from us
            </Link>
          </li>
        </ul>
      </div>

      {/* Column 4: Policies */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-white">Policies & Info</h3>
        <ul className="space-y-2">
          <li>
            <Link to="/privacy-policy" className="hover:text-orange-500">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/terms-of-service" className="hover:text-orange-500">
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link to="/pricing-refund-policy" className="hover:text-orange-500">
              Pricing & Refund Policy
            </Link>
          </li>
          <li>
            <Link to="/bug-bounty" className="hover:text-orange-500">
              Bug Bounty
            </Link>
          </li>
          <li>
            <Link to="/press-release" className="hover:text-orange-500">
              Press Release
            </Link>
          </li>
        </ul>
      </div>
    </div>

    {/* Socials */}
    <div className="mt-8 flex justify-center space-x-6">
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-orange-500">
        Instagram
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-orange-500">
        Facebook
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-orange-500">
        LinkedIn
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="hover:text-orange-500">
        Twitter
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="hover:text-orange-500">
        YouTube
      </a>
    </div>

    <p className="mt-8 text-center text-gray-400">
      © 2025 Coding Ninjas. All rights reserved.
    </p>
  </footer>
);

export default Footer;
