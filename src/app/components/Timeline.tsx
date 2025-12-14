'use client';

import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Timeline() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Project Cards */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={project.id}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
