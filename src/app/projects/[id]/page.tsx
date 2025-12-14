"use client";

import { useParams, useRouter } from "next/navigation";
import { projects } from "@/app/data/projects";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Project3Content from "@/app/components/projects/Project3Content";
import Project4Content from "@/app/components/projects/Project4Content";
import Project5Content from "@/app/components/projects/Project5Content";
import Project6Content from "@/app/components/projects/Project6Content";
import Project7Content from "@/app/components/projects/Project7Content";
import Project9Content from "@/app/components/projects/Project9Content";
import Project1Content from "@/app/components/projects/Project1Content";

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const id = parseInt(params.id as string);
  
  const project = projects.find((p) => p.id === id);

  // Redirect to external URL if it exists (except for projects with custom content)
  useEffect(() => {
    // Skip redirect for projects that have custom embedded content
    const projectsWithCustomContent = [1, 7]; // Projects that render in-app content (e.g., embeds)
    if (project?.externalUrl && !projectsWithCustomContent.includes(project.id)) {
      window.open(project.externalUrl, "_blank");
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // If there's an external URL and no custom content, show a loading state while redirecting
  const projectsWithCustomContent = [1, 7]; // Projects that render in-app content (e.g., embeds)
  if (project.externalUrl && !projectsWithCustomContent.includes(project.id)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Redirecting to project...</p>
        </div>
      </div>
    );
  }

  // Render project-specific content based on project ID
  const renderProjectContent = () => {
    switch (id) {
      case 1:
        return <Project1Content />;
      case 3:
        return <Project3Content />;
      case 4:
        return <Project4Content />;
      case 5:
        return <Project5Content />;
      case 6:
        return <Project6Content />;
      case 7:
        return <Project7Content />;
      case 9:
        return <Project9Content />;
      default:
        return (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Project page coming soon</h1>
              <button
                onClick={() => router.push("/")}
                className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Back to Home
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {renderProjectContent()}
      </motion.div>
    </div>
  );
}
