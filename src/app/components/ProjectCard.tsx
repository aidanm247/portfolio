'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="flex flex-col md:flex-row gap-8 items-start mb-16 cursor-pointer group"
      >
      {/* Image Section - Always on the left */}
      <div className="w-full md:w-1/3 flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto max-h-48 object-contain group-hover:opacity-80 transition-opacity duration-300"
        />
      </div>

      {/* Content Section - Always on the right */}
      <div className="w-full md:w-2/3 space-y-3">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            {project.year}
          </span>
          <h3 className="text-2xl font-bold text-gray-900 mt-1 group-hover:text-gray-700 transition-colors">
            {project.title}
          </h3>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 leading-relaxed"
        >
          {project.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-2"
        >
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full border border-gray-200"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
      </motion.div>
    </Link>
  );
}
