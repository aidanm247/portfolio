'use client';

import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-gray-900"
          >
            Portfolio 
          </motion.div> 
          
          <nav className="flex space-x-8">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </motion.a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
