"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Project9Content() {
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
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Building Card Game AI and Game Balancing
          </h1>
          <a
            href="https://github.com/aidanmessmore00/StPetersburgAI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium shrink-0"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View on GitHub
          </a>
        </div>
        <p className="text-lg text-gray-600 mb-6">Fall 2025</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["AI", "Machine Learning", "Java", "MCTS", "Game Theory"].map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Hero Image - St. Petersburg Cards */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img
          src="/images/stpetersburgcards.jpg"
          alt="St. Petersburg card game cards"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <figcaption className="text-gray-600 text-sm text-center mt-2">
          St. Petersburg card game by Hans im Glück — a strategic tableau-building game
        </figcaption>
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
            I built an AI player for St. Petersburg, a strategic card game by Hans im Glück. The project combined advanced game-playing algorithms with machine learning to create a competitive AI agent that placed <strong>1st out of ~20 participants</strong> in a class tournament. Beyond just building an AI, we also analyzed and attempted to rebalance the game itself through simulation and then taking the appropraite nerfs/buffs to card values.
          </p>
        </section>

        {/* MCTS Diagram (placed under Project Overview) */}
        <section>
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <img
              src="/images/mcts.png"
              alt="Monte Carlo Tree Search diagram showing selection, expansion, simulation, and backpropagation phases"
              className="w-full h-auto rounded"
            />
            <figcaption className="text-gray-600 text-sm text-center mt-2">
              MCTS iteratively builds a search tree, focusing on promising branches while maintaining exploration
            </figcaption>
          </div>
        </section>

        {/* MCTS Deep Dive */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Monte Carlo Tree Search (MCTS) - How It Works</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            MCTS is a decision-making algorithm that builds a search tree incrementally by simulating random game playouts. Unlike traditional minimax which exhaustively explores the game tree, MCTS focuses computational resources on the most promising moves.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">The Four Phases of MCTS</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-500">
                <h4 className="font-semibold text-gray-800 mb-2">1. Selection</h4>
                <p className="text-gray-600 text-sm">
                  Starting from the root, traverse the tree using the UCB1 formula to balance exploration of new moves vs. exploitation of known good moves. The formula: UCB1 = win_rate + C × √(ln(parent_visits) / node_visits)
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-500">
                <h4 className="font-semibold text-gray-800 mb-2">2. Expansion</h4>
                <p className="text-gray-600 text-sm">
                  When we reach a leaf node, expand it by adding one or more child nodes representing possible moves from that game state.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-yellow-500">
                <h4 className="font-semibold text-gray-800 mb-2">3. Simulation (Rollout)</h4>
                <p className="text-gray-600 text-sm">
                  From the new node, play out the game randomly (or with a lightweight policy) until a terminal state or at a certain depth is reached and from there we can evaluate the game state with logistic regression. This gives us an estimate of the position's value.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-purple-500">
                <h4 className="font-semibold text-gray-800 mb-2">4. Backpropagation</h4>
                <p className="text-gray-600 text-sm">
                  Propagate the simulation result back up the tree, updating visit counts and win statistics for all nodes along the path. Interestingly, the adaptation used was slightly different from the norm, and genAI struggled with this code. 
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Chance Sampling for Hidden Information</h3>
          <p className="text-gray-700 leading-relaxed">
            St. Petersburg involves hidden information (observatory draws, deck order). To handle this, I implemented <strong>Chance Sampling</strong>. Instead of treating unknown cards as fixed, the algorithm samples multiple possible "worlds" consistent with observed information, then averages results across these samples. This allows the AI to make robust decisions even when it can't see the opponent's cards or future card draws.
          </p>
        </section> 

        {/* Game Balancing Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Game Balancing Through Simulation</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Beyond creating a competitive AI player, I developed a systematic approach to analyze and rebalance the game itself. The core insight: by running thousands of games between near-optimal AI players, we can identify which cards are disproportionately powerful or weak.
          </p>

          {/* Empirical Balance Report moved to bottom */}

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">The Balancing Pipeline</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Mass Simulation</h4>
                  <p className="text-gray-600 text-sm">Run thousands of games between two instances of the MCTS AI playing against each other. Both players use near-optimal strategies, so outcomes reflect true card strength rather than player skill differences.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Card Performance Tracking</h4>
                  <p className="text-gray-600 text-sm">For each game, track which cards were purchased, when they were purchased, and correlate with final victory margins. Cards that appear frequently in winning tableaus are flagged as potentially overpowered.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Statistical Analysis</h4>
                  <p className="text-gray-600 text-sm">Calculate win-rate correlation for each card: how much does acquiring a specific card increase your probability of winning? Cards with extreme positive or negative correlations are imbalanced.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Value Adjustment</h4>
                  <p className="text-gray-600 text-sm">Propose cost/point adjustments for imbalanced cards. Increase cost or decrease points for overpowered cards; decrease cost or increase points for underpowered ones.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">5</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Validation Loop</h4>
                  <p className="text-gray-600 text-sm">Re-run the simulation with adjusted card values. Repeat until card win-rate correlations converge toward neutral (no single card dominates outcomes).</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Why Near-Optimal Players Matter</h3>
          <p className="text-gray-700 leading-relaxed">
            Using random or weak AI players for balancing would give misleading results—powerful cards might appear weak if players don't know to prioritize them. By using MCTS agents that play at a high level, we ensure that card performance data reflects true strategic value. If a card is overpowered, the AI <em>will</em> exploit it, and the statistics will show it.
          </p>
        </section>



        
      </motion.div>

      {/* Empirical Balance Report (Bottom) */}
      <motion.div
        className="mt-12 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Empirical Balance Report</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            This report presents an empirical analysis of game balance in Saint Petersburg, identifying statistical outliers and dominant strategies to inform the design of a balanced "Edition 3." Rather than relying on subjective observation, we generated objective performance data through extensive Monte-Carlo simulations using two advanced AI players: <strong>AIDanFMCTrainerTimeManaged</strong> (a time-sensitive agent trained on FlatMC data with feature selection) and <strong>AIDanExpectiMiniMaxTimeManaged</strong> (a time-sensitive version of our tournament two player).
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            For the preliminary analysis, to ensure statistical significance, we simulated <strong>1,200 games</strong> for the First Edition and <strong>750 games</strong> for the Second Edition, with strict time limits of <strong>3.0–3.5 minutes</strong> per game to replicate tournament pressure. Our analysis separates performance metrics into <strong>Early Game</strong> (Rounds 1–4) and <strong>Late Game</strong> (Round 5 onwards) to isolate early "snowball" effects from end-game scoring.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            We categorized cards by type (Workers, Aristocrats, Buildings) and normalized Win Rates and Pick Rates using the <strong>Modified Z-Score</strong>. The Buy Rate ("Pick Rate") is <strong>buysTotal / appearancesTotal</strong>, and the Win Rate is <strong>winsTotal / buysTotal</strong>, computed globally and per phase. We use the median and <strong>Median Absolute Deviation (MAD)</strong> with scale constant <strong>0.6745</strong> to detect outliers robustly. <em>Marijnski-Theater</em> was excluded due to a known mechanical bug.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We ran <strong>9 total Monte Carlo simulations</strong>, each with <strong>1500+ games</strong>, across variants of balance changes, then engineered <strong>Edition 3</strong> with targeted cost/value adjustments to flatten the power curve.
          </p>
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Results</h4>
            <div className="space-y-5">
              <div>
                <h5 className="font-semibold text-gray-800">Workers</h5>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>Nerfed <strong>Weaving Mill</strong> and <strong>Wharf</strong>, significantly reducing early-game win rate.</li>
                  <li><strong>Gold Smelter</strong> buff increases win rate.</li>
                  <li>Substantial reduction in early win-rate standard deviation.</li>
                  <li>Low pick rates for <strong>Carpenter Workshop</strong> and <strong>Gold Smelter</strong> likely due to AI search-depth limits.</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800">Buildings</h5>
                <p className="text-gray-700">No changes. Attempts on the original deck did not yield statistics as balanced as First Edition.</p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800">Aristocrats</h5>
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  <li>Standard deviation decreases across early, late, and overall win rates.</li>
                  <li>No single aristocrat stands out as dominant in overall or early win rate.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Results Summary removed; included inside report above */}
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
