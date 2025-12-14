"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Project4Content() {
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
          PPG Signal Analysis
        </h1>
        <p className="text-lg text-gray-600 mb-6">Summer 2025</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["Research", "Signal Processing", "Health Tech", "Data Analysis"].map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>



      {/* Project Description */}
      <motion.div
        className="prose prose-lg max-w-none space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview/Summer 2025 Internship Work</h2>
          <p className="text-gray-700 leading-relaxed">
            At Quellios, I worked on helping to develop and visualize proprietary algorithms for analyzing Photoplethysmography (PPG) signals using the iPhone camera as a reflectance PPG sensor. This innovative approach allows users to place their finger over the camera to capture cardiovascular data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Background - What is Photoplethysmography(PPG)?</h2>
          <p className="text-gray-700 leading-relaxed">
            Photoplethysmography (PPG) is an non-invasive optical measurement technique used to detect blood volume changes in peripheral vascular bed tissue. This is based on the optical absorbtion properties of vascular tissue when light is shined in. By shining a light source, most commonly a pulse oximeter, onto the skin and measuring the light that is reflected back, we can infer information about blood volume changes. From the sensor measurements, we can construct a waveform that corresponds to the cardiac cycle, with two main components: the AC component,
            and the DC component. The AC component is the pulsatile part that varies with each heartbeat, while the DC component represents the non-pulsatile baseline level of blood volume. Below is an example of a typical PPG waveform.
          </p>
        </section>

        {/*PPG Image Waveform*/}
        <img src="/images/PPGWaveform1.png" alt="PPG Waveform Example" className="my-4" />

        <figcaption className="text-gray-600 text-sm text-center">
          Figure 1: Example of a PPG waveform. AC component corresponds to the pulsatile changes due to heartbeats, while the DC component represents the baseline blood volume.
        </figcaption>

          <section>
            <p className="text-gray-700 leading-relaxed">
              As can be seen above, the PPG waveform reflects the cardiac cycle, with each peak corresponding to a heartbeat. By analyzing the characteristics of this waveform, we can extract valuable cardiovascular metrics such as heart rate, heart rate variability, and other important indicators of cardiovascular health.
              Although, this technology is relative unknown to the general public, it is widely used in clinical and wearable health monitoring devices, such as pulse oximeters and fitness trackers.
              Below is a diagram of a typical pulse oximeter setup used to measure PPG signals.
            </p>
          </section>

        {/*PPG Finger Image */}
        <img src="/images/transmittanceppg.png" alt="PPG Finger Example" className="my-4" />
        <figcaption className="text-gray-600 text-sm text-center">
          Figure 2: Typical pulse oximeter setup for measuring
          photoplethysmography (PPG) signals using transmissive measurement.
        </figcaption>

        {/* Information about what is learned from PPG in modern wearable devices */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">PPG Measurement Insights</h2>
          <p className="text-gray-700 leading-relaxed">
            Modern wearable devices leverage PPG technology to provide users with continuous health monitoring.
             By analyzing the PPG waveform, these devices can extract a variety of physiological metrics, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
            <li>Heart Rate: The number of heartbeats per minute, derived from the frequency of the PPG waveform peaks.</li>
            <li>Heart Rate Variability (HRV): The variation in time intervals between consecutive heartbeats, providing insights into autonomic nervous system function and stress levels.</li>
            <li>Blood Oxygen Saturation (SpO2): An estimate of the oxygen levels in the blood, calculated using the ratio of red and infrared light absorption.</li>
            <li>Respiration Rate: The number of breaths taken per minute, inferred from subtle variations in the PPG signal related to respiratory activity.</li>
            <li>Stress and Recovery Metrics: By analyzing HRV and other PPG-derived metrics, wearables can provide insights into stress levels and recovery status.</li>
            <li>Sleep Monitoring: PPG data can be used to assess sleep quality and stages by tracking heart rate patterns throughout the night.</li>
            <li>Arterial Stiffness: PPG can be used to estimate arterial stiffness, an important indicator of cardiovascular health and disease risk.</li>
            <li>Inflammation Detection: Emerging research suggests that PPG signals may provide insights into inflammation levels in the body, potentially aiding in the management of inflammatory conditions. This is what I aimed to help with.</li>
          </ul>
        </section>
  




        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Approach</h2>
          <p className="text-gray-700 leading-relaxed">
            The technology leverages the iPhone's camera hardware to detect subtle changes in blood volume through optical sensors. By analyzing these signals, we can extract meaningful cardiovascular metrics and health indicators.
            This pipeline involved several key steps:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
            <li> PPG capture - user's place their finger on the iPhone camera for around 30 seconds, and must remain still during this time to allow for accurate data collection without motion artifacts.</li>
            <li> Signal Processing - Recording are uploaded, algorithms were applied to filter noise, enhance signal quality, and extract relevant features from the raw PPG data.</li>
            <li> Metric Extraction - From the processed PPG signals, users were given an inflammatory score based on their unique physiological data and their dietary habits.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">My Contributions to Research & Development</h2>

          {/* Disclaimer to protect proprietary details */}
          <p className="text-sm text-gray-500 mb-4">
            <strong>Disclaimer:</strong> The descriptions below emphasize technical complexity architecture. I cannot reveal proprietary algorithmic details or exact information. That is the intellectual property of Quellios. The text focuses on methods, infrastructure, and outcomes rather than source code or protected formulas.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">Technical Challenge</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Using a iPhone camera as a reflectance PPG sensor presents an low Signal-to-Noise Ratio (SNR). This means that light fluctuations, movements of the finger, and camera noise obscure the cardiac AC component. I helped with our other engineers to design a multi-stage pipeline that isolates the pulsatile component so downstream feature extraction and validation are possible.
          </p>


          <h3 className="text-lg font-semibold text-gray-800 mb-2">Signal cleaning & core functions used</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            I leveraged proven DSP building blocks to stabilize the signal. Key functions and approaches included:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>
              <strong>Baseline wander mitigation:</strong>high-order Butterworth high-pass filters implemented in second-order section (SOS) form to remove slow baseline drift while ensuring numerical stability.
            </li>
            <li>
              <strong>Bandpass isolation:</strong> zero-phase Butterworth bandpass using sosfiltfilt with tuned cutoffs to preserve PPG morphology without introducing phase delay.
            </li>
            <li>
              <strong>Derivative-based features:</strong> first- and second-order derivatives to capture steepness and markers for feature engineering.
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">End-to-end data infrastructure</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            I designed the storage and retrieval system that supported our R&D process:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li><strong>Metadata / indexing:</strong> Google Cloud Firestore for session/user metadata, measurement state, and quick queries.</li>
            <li><strong>Raw signal store:</strong> Google Cloud Storage buckets for storage of large JSON signal PPG files.</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">Interactive research dashboard (Streamlit)</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            To accelerate iteration, I architected and shipped a Streamlit-based interactive dashboard that became the team's primary signal-inspection and validation tool.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li><strong>Database integration:</strong> Direct query UI into Firestore and on-demand retrieval from Cloud Storage(Google Buckets).</li>
            <li><strong>On-demand processing:</strong> Run any signal-processing variant live (Butterworth, sosfiltfilt, derivative, causal filters) on stored sessions.</li>
            <li><strong>On-demand metrics:</strong> Run any algorithm on stored sessions to extract  biometrics (e.g., HR, HRV).</li>
            <li><strong>Visualizations:</strong> spectrograms (DTFT-based), metric based plots(users can click on a biometric and visualize the PPG data for that session), and correlation panels linking physiological features to contextual data.</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">My key contributions</h3>
          <div className="text-gray-700 space-y-3">
            <div>
            Two-tier storage (Firestore + GCS) enabling fast research queries and secure raw-signal archival.
            </div>
            <div>
             Streamlit research dashboard for rapid R&D iteration and visualization (time, frequency, derivatives, biometrics).
            </div>
            <div>
             Physiological results with contextual user logs to enable model training and richer interpretation.
            </div>
          </div>
        </section>
      </motion.div>

          {/* Container for side-by-side videos */}
          <div className="flex flex-col md:flex-row md:justify-center md:gap-6 mt-8 mb-4">

            {/* Video 1: Correct PPG Capture */}
            <div className="flex-1 max-w-sm mx-auto md:mx-0">
              <video muted controls className="w-full rounded-lg shadow-lg">
                <source src="/images/QCapture.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <figcaption className="text-gray-600 text-sm text-center mt-2">
                Figure 3: Demonstration of a clean PPG signal capture.
              </figcaption>
            </div>

            {/* Video 2: Capture with Motion Artifacts */}
            <div className="flex-1 max-w-sm mx-auto md:mx-0 mt-6 md:mt-0">
              <video muted controls className="w-full rounded-lg shadow-lg">
                <source src="/images/QCapture_MA.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <figcaption className="text-gray-600 text-sm text-center mt-2">
                Figure 4: Demonstration of motion artifact impact on signal quality.
              </figcaption>
            </div>

          </div>

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
