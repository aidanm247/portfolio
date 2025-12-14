"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Project5Content() {
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
          Evaluating AI-Based Dietary Inflammatory Index Estimation
        </h1>
        <p className="text-lg text-gray-600 mb-6">Summer 2025</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["AI", "Nutrition Science", "Computer Vision", "Research"].map((tag, index) => (
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This project evaluates how accurately modern computer vision AI systems can estimate dietary components relevant to the <strong>Dietary Inflammatory Index (DII)</strong> from real-world meal data. I used latest OpenAI and Gemini's latest models. Using the <strong>SNAPme dataset</strong> as a ground-truth benchmark, which provides paired meal images and validated nutrient measurements, we compare AI-generated nutrient estimates across three input modalities: meal images (computer vision), ingredient text descriptions, and barcode-based nutrition labels.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Rather than training new models, I chose to benchmark current systems by measuring per-nutrient accuracy, coverage, and consistency relative to SNAPme ground truth. 
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Research Motivation</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Dietary Inflammatory Index (DII) quantifies how diet influences systemic inflammation based on nutrient intake. With the rise of AI-powered dietary tracking apps, there's growing interest in providing meal-level inflammatory feedback.
          </p>
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Core Research Questions</h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>How accurately can multimodal AI systems estimate DII-relevant nutrients from meal images?</li>
              <li>How does AI performance vary across input modalities (images vs. text vs. barcodes)?</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Methodology</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Dataset: SNAPme</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                I used the SNAPme dataset, which contains real-world meal images paired with validated nutrient measurements obtained through rigorous dietary assessment protocols. This provides ground-truth data for evaluating AI estimates.
              </p>
              <a
                href="https://agdatacommons.nal.usda.gov/articles/dataset/SNAPMe_A_Benchmark_Dataset_of_Food_Photos_with_Food_Records_for_Evaluation_of_Computer_Vision_Algorithms_in_the_Context_of_Dietary_Assessment/24856449?file=44532971"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
              >
                View SNAPme Dataset
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Input Modalities Tested</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Computer Vision</h4>
                  <p className="text-gray-600 text-sm">State-of-the-art vision-language models analyze meal images to estimate ingredients and portions, then infer nutrient composition.</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Text Descriptions</h4>
                  <p className="text-gray-600 text-sm">Users provide ingredient lists or meal descriptions, which NLP models parse to estimate nutritional content.</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Barcode Scanning</h4>
                  <p className="text-gray-600 text-sm">Packaged food barcodes retrieve verified nutrition labels from USDA/manufacturer databases, providing high-accuracy baselines.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Evaluation Metric</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>DII Score Error:</strong> We computed the actual DII score for each meal using SNAPme ground-truth nutrients, then generated AI-predicted DII scores based on estimated nutrients from each input modality. The primary evaluation metric is the absolute error (MAE) and correlation between predicted and actual DII scores, measuring how well AI-estimated nutrients preserve the inflammatory assessment.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Findings</h2>
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Performance</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              While AI models often produce reasonable estimates per-nutrient accuracy varies significantly. Vision models excel at macronutrients (calories, protein, carbs) but struggle with micronutrients (vitamin E, selenium, omega-3s) that require granular ingredient knowledge.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Barcode-based inputs unsurprisingly achieve the highest accuracy, followed by text descriptions. Image-only inputs show the most variability but remain useful for quick, low-friction logging.
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">The Per-Meal DII Problem</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              The traditional DII is designed to be computed over added up daily intake exhibits distortion when applied at the individual meal level. Per-meal scores are highly skewed and diverge from the biological intent of the index, leading to misleading inflammatory scores.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For example, a single anti-inflammatory meal might receive a moderate score when assessed, because the validated DII algorithm assumes daily totals.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Implications & Future Work</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            These findings suggest that direct application of the standard DII formulation to single meals is not aligned with image-based dietary assessment. As a result, I propose the need for a <strong>modified, per-meal inflammatory scoring framework</strong> that:
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
            <li>Preserves the biological intent of the DII (linking diet to inflammatory biomarkers).</li>
            <li>Accounts for meal-level variability rather than assuming daily aggregation.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            This work motivates the development of a <strong>meal-scaled inflammatory index</strong> better suited for multimodal AI-driven dietary assessment.
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
