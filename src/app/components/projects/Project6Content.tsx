"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Project6Content() {
  const router = useRouter();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Back Button */}
      <motion.button
        onClick={() => router.push("/")}
        className="mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <svg
          className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Home
      </motion.button>

      {/* Project Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          iOS App Meal Recognition and Tracking, and UI Design
        </h1>
        <p className="text-lg text-gray-600 mb-6">Spring 2025</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["AI", "Health Tech", "iOS development"].map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img
          src="/images/figma_design3.jpg"
          alt="iOS app UI design in Figma"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Project Description */}
      <motion.div
        className="prose prose-lg max-w-none space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            I led the development of AI-powered meal recognition and tracking features for Quellios's iOS app, combining advanced computer vision with intuitive user interface design. This work directly contributed to the startup's first product launch.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Implementation</h2>
          <p className="text-gray-700 leading-relaxed">
            I built the AI meal recognition system using the OpenAI API, enabling users to simply photograph their meals and receive detailed nutritional analysis. The system identifies food items, estimates portions, and calculates nutritional content automatically.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
            <li>Integration with OpenAI API for image recognition</li>
            <li>Real-time meal identification and analysis</li>
            <li>Automatic nutritional calculation</li>
            <li>Meal tracking and history features</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">UI/UX Design Process</h2>
          <p className="text-gray-700 leading-relaxed">
            I designed the complete user interface in Figma, focusing on creating an intuitive and visually appealing experience that makes nutrition tracking effortless. My design was adopted for the startup's first launch, balancing aesthetics with functionality.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
            <li>Complete UI design in Figma</li>
            <li>User-centered design approach</li>
            <li>Seamless meal capture flow</li>
            <li>Clean, modern interface implementation</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Impact</h2>
          <p className="text-gray-700 leading-relaxed">
            This feature became a core component of Quellios's value proposition, making nutrition tracking as simple as taking a photo. The design and implementation were adopted for the company's first product launch, validating the approach with real users.
          </p>
        </section>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="mt-12 pt-12 border-t border-gray-200 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <button
          onClick={() => router.push("/")}
          className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
        >
          View More Projects
        </button>
      </motion.div>
    </div>
  );
}
