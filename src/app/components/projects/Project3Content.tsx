"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Project3Content() {
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
          Lightboard for Concussion Baselines and Return to Play Assessments
        </h1>
        <p className="text-lg text-gray-600 mb-6">Oct 2025</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["Hardware", "Machine Learning", "Medical Device", "Sensors", "Physical Therapy", "Rehabilitation"].map((tag, index) => (
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
          src="/images/concussion-board.jpg"
          alt="Concussion assessment lightboard"
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
            I noticed that the way our athletic training room was collecting data for concussion baselines with our 700+ athletes seemed flawed and could use some improvement. There is research supporting the use of reaction time testing for concussion assessment. The problem is that these devices cost more money than any normal AT room could afford.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Solution</h2>
          <p className="text-gray-700 leading-relaxed">
            Working with our athletic trainers, I created a hardware solution for rapid concussion assessment using arcade pressure-based sensors and machine learning algorithms. The device is designed for use in athletic training rooms and rehabilitation facilities.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Implementation</h2>
          <p className="text-gray-700 leading-relaxed">
            I built this in the Gettysburg College Innovation and Creativity Lab for approximately $100, making it much cheaper than existing commercial solutions while maintaining comparable accuracy and reliability.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
            <li>Arcade pressure-based sensors for reaction time measurement</li>
            <li>Machine learning algorithms for baseline assessment</li>
            <li>Cost-effective design (~$100 vs. thousands for commercial alternatives)</li>
            <li>Built for 700+ athlete testing capacity</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Impact</h2>
          <p className="text-gray-700 leading-relaxed">
            This device provides our athletic training room with an affordable, research-backed tool for concussion baseline testing and return-to-play assessments, ensuring better safety protocols for our student-athletes.
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
