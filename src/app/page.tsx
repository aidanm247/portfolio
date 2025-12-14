'use client';

import { motion } from 'framer-motion';
import Timeline from './components/Timeline';
import About from './components/About';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="bg-gray-100 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Links at the top */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-4 mb-0"
            >
              <motion.a
                href="https://docs.google.com/document/d/1QwoO6Myb2ehHif05Oy3oZlfsFKmocP9T/edit?usp=sharing&ouid=117800781232636956552&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="inline-block text-gray-600 hover:text-gray-900 transition-colors underline decoration-2 underline-offset-4 font-bold"
              >
                CV
              </motion.a>
              
              <span className="text-gray-400">|</span>
              
              <motion.a
                href="https://linkedin.com/in/aidan-mess"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="inline-block text-gray-600 hover:text-gray-900 transition-colors underline decoration-2 underline-offset-4 font-bold"
              >
                LinkedIn
              </motion.a>
              
              <span className="text-gray-400">|</span>
              
              <motion.a
                href="https://github.com/aidanm247"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="inline-block text-gray-600 hover:text-gray-900 transition-colors underline decoration-2 underline-offset-4 font-bold"
              >
                GitHub
              </motion.a>
            </motion.div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1"
              >
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-6">
                Welcome, my name is <span className="font-bold">Aidan Mess</span>, I'm a senior at Gettysburg College majoring in Computer Science(BS) with and also taking focus of classes in Biology, Anatomy, and Physiology. I am an aspiring biomedical engineer interested in doing research into
                biomechanics, physical therapy/rehabilitation, and building prosthetic devices. <br></br><br></br>

                I am currently a senior captain on the Men's Basketball Team, leading the Gettysburg Men's Basketball Player-Alumni Network, and a multiple time Centennial Conference Academic Honor Roll and CSC Academic All-District Athlete.
                Much of my interest in medicine comes from sports and my extensive injury history, which inspired me to want to pursue a career in medicine. 
                I hope to combine my passion for technology and medicine to make an impact in people's lives.<br></br><br></br>

                I am currently working on product, AI capability, and biomedical R&D at Quellios, a health tech startup focused on helping people monitor and reduce
                inflammation. I have gotten experience with reflectance Photoplethysmography  (rPPG) analysis, getting
                to work and conduct research in a professional setting, and help build a startup with leaders in the field such as Dr. Steven LeBeouf, Dr. Mike Aumer, and Mark Felice, who helped shape the modern field of wearable health
                technology. I'm particularly interested in building wearable devices for health and performance and biomedical engineering in general. <br></br> <br></br> Below are some of my recent projects/professional work:
              </p>
              </motion.div>
              
              {/* Profile Images */}
              <div className="w-full md:w-80 flex-shrink-0 space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="relative w-full aspect-square overflow-hidden bg-gray-200">
                    <img
                      src="/images/profile.jpg"
                      alt="Aidan Mess working on engineering projects"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-3 italic">
                    Working on my wearable tech prototype with the Gettysburg Innovation and Creativity Lab
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="relative w-full aspect-square overflow-hidden bg-gray-200">
                    <img
                      src="/images/presentationDTSF.JPEG"
                      alt="Aidan Mess presenting"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-3 italic">
                    2024 Digital Technology Summer Fellowship Research Presentation
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <div className="pb-20">
          <Timeline />
        </div>

        {/* About Section */}
        <About />
      </main>
    </>
  );
}
