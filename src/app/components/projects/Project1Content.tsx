"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Project1Content() {
  const router = useRouter();

  // Google Doc URL - converted to embed format
  const googleDocUrl = "https://docs.google.com/document/d/1Mes5UjXAVdcX_FJkjoIadtf3mtbdFIes/preview";

  return (
    <div className="min-h-screen">
      {/* Background Section */}
      <motion.div
        className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => router.push("/")}
            className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
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
          </button>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Digital Technology Summer Fellowship 2024
          </h1>
          <p className="text-xl text-gray-700 mb-6 font-semibold">
            Building a "Smart" Basketball Shooting Shirt with Embedded Biomechanical Sensors
          </p>
          
          <div className="bg-white rounded-lg p-6 shadow-md mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Background</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              During the summer of 2024, I was chosen to participate in the Gettysburg College Innovation and Creativity Lab's Digital Technology Summer Fellowship. This competitive program provides students with funding and resources to pursue independent research projects at the intersection of technology and their chosen field. After pitching my idea to Eric Remy (Director of Educational Technology) and Josh Wagner (ICL Manager), I was granted 8 weeks and a $75 budget to develop a wearable biomechanical feedback system for basketball shooting.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The core challenge: Can I predict shot accuracy from real-time biomechanical data collected during the shooting motion? As a member of Gettysburg's basketball team, I wanted to merge my interests in wearable technology and biomechanics. While this project focuses on basketball free throws (a realistic scope for 8 weeks), the underlying principles motion tracking, sensor fusion, and biomechanical analysis are applicable to any athletic movement.
            </p>
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Biomechanical Focus Areas</h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                <li>Joint flexion angles at wrist, elbow, and shoulder using bend sensors</li>
                <li>Shot consistency metrics by comparing inertial measurement patterns across successful vs. unsuccessful attempts</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>


      {/* Conclusion Section */}
      <motion.div
        className="bg-gradient-to-r from-green-50 to-teal-50 px-6 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Outcomes & Reflections</h2>
          
          <div className="bg-white rounded-lg p-6 shadow-md mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What I Accomplished</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              My time in the <strong>Digital Technology Summer Fellowship</strong> at Gettysburg College was incredibly rewarding. I successfully created a <strong>functional wearable prototype</strong> embedded into a compression shirt that collected and analyzed biomechanical data from basketball shooting motions. The system used <strong>5 inertial measurement units (IMUs)</strong> and <strong>3 flex sensors</strong> to capture multi-segment kinematics across the hand, forearm, upper arm, shoulder, and chest.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Despite facing numerous technical challenges, from I2C address conflicts with multiple BNO085 sensors to Wi-Fi security issues with Arduino Cloud, I achieved significant milestones. The final prototype captured <strong>~40 data points per second</strong> across all sensors, providing detailed angular velocity, acceleration, and joint flexion data throughout each shooting motion. I was able to <strong>segment shooting vs. non-shooting movements</strong> algorithmically and visualize biomechanical patterns that correlated with shot outcomes.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What I Learned</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Reflecting on my initial goals, I set out to create a device that would provide real-time feedback on shot quality. While this was ambitious for an 8-week timeline with no prior Arduino experience, I successfully built the foundational sensing infrastructure and gathered valuable biomechanical insights. With more time, I'm confident I could train a machine learning model to predict shot accuracy from the kinematic features I've extracted.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The problem-solving and self-learning skills I Learned, troubleshooting obscure sensor bugs, interpreting technical datasheets, and iterating through failed prototypes, hopefully will translate across all aspects of my engineering career. The project also highlighted the importance of robust mechanical design; many hours were spent re-soldering broken connections, teaching me that wearable durability is just as critical as algorithmic accuracy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I plan to continue this work throughout the academic year, focusing on expanding the dataset, refining the biomechanical models, and implementing a real-time feedback system using haptic actuators or visual cues. The principles explored here, motion capture, sensor fusion, and kinematic analysis, extend far beyond basketball and could inform rehabilitation devices, injury prevention systems, or coaching tools for any sport.
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Acknowledgments</h3>
            <p className="text-gray-700 leading-relaxed">
              Special Thanks to Eric Remy, Josh Wagner, and particularly user Adafrit Forum's User "GammaBurst," for helping me solve the multiplexer integration issues. 
            </p>
          </div>

        </div>
      </motion.div>

      {/* Video Demonstrations */}
      <motion.div
        className="bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Video Demonstrations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Live Shot Tracking Demo</h3>
              <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/P7Iimp56Lgo"
                  title="Live Shot Tracking Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Slow Motion Tracking</h3>
              <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/f37SGuhXo4M"
                  title="Slow Motion Tracking"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

          {/* Full-screen Google Doc Embed */}
      <motion.div
        className="flex-1 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <iframe
          src={googleDocUrl}
          className="w-full h-full border-0"
          style={{ minHeight: "calc(100vh - 73px)" }}
          title="Smart Basketball Shooting Shirt - Research Document"
          allowFullScreen
        />
      </motion.div>

    </div>
  );
}
