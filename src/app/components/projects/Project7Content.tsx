"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Project7Content() {
  const router = useRouter();
  const videoEmbedUrl = "https://www.youtube.com/embed/Zisv9xzG3WE";
  const videoWatchUrl = "https://youtu.be/Zisv9xzG3WE";

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <motion.button
        onClick={() => router.push("/")}
        className="mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Projects
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-xl p-10 mb-8"
      >
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-3">MatchDB</h1>
            <p className="text-xl text-gray-600">Career matchmaking database for Gettysburg Basketball</p>
            <p className="text-sm text-gray-500 mt-2">Summer 2025</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 text-sm text-gray-600">
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-white rounded-2xl shadow-xl p-10 mb-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Demo</h2>
          <a
            href={videoWatchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            Watch on YouTube
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m0 0l-6-6m6 6l-6 6" />
            </svg>
          </a>
        </div>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Walkthrough of MatchDB - the career matchmaking platform I built to connect Gettysburg Men&apos;s Basketball players with ~100 alumni mentors based on shared interests and career goals. Data flows from a Google Form into Sheets, then the OpenAI API reads those rows to pair players with alumni automatically. Alumni information is kept at a very surface level(phone #, career title, short description, LinkedIn) to respect privacy, while still providing enough context for meaningful connections.
        </p>
        <div className="relative w-full overflow-hidden rounded-2xl shadow-xl bg-black aspect-video">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`${videoEmbedUrl}?rel=0`}
            title="MatchDB Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-2xl shadow-xl p-10 mb-8"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-5">Overview</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            MatchDB streamlines outreach between current student-athletes and alumni willing to mentor. Players submit a Google Form, responses land in Sheets, and the OpenAI API reads that sheet data to rank best-fit alumni automatically before guided outreach begins.
          </p>
          <p>
            The product includes an admin view for tracking conversations, a lightweight matching engine fed by the Sheets intake, and structured prompts that help players send professional, personalized messages without cold-email anxiety.
          </p>
        </div>
      </motion.div>




      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white rounded-2xl shadow-xl p-10"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Outcomes</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <h3 className="text-lg font-semibold text-gray-900">Stack</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Google Forms + Sheets intake feeding Firestore for alumni/player data and outreach statuses</li>
              <li>Cloud Functions plus OpenAI API calls to read Sheets rows, rank matches, and send reminders</li>
            </ul>
          </div>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <h3 className="text-lg font-semibold text-gray-900">Impact</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>~100 alumni onboarded with structured profiles</li>
              <li>Players matched to 2-3 mentors each with tracked outreach</li>
              <li>Meaningful introductions that translated into internships and informational interviews</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
