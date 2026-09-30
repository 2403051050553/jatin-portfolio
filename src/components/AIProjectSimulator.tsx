import React, { useState } from 'react';
import { Bot, Sparkles, Play, CheckCircle, RefreshCw, Award, Terminal } from 'lucide-react';

export const AIProjectSimulator: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState('Java HashMap');
  const [userAnswer, setUserAnswer] = useState(
    'HashMap in Java uses an array of buckets. When key.hashCode() is called, it computes an index. If there is a collision, it uses a linked list or red-black tree (since Java 8) to resolve it. Average lookup time is O(1).'
  );
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [evalResult, setEvalResult] = useState<{
    score: number;
    feedback: string[];
    timeComplexity: string;
    spaceComplexity: string;
    verdict: string;
  } | null>({
    score: 95,
    feedback: [
      'Accurately identified bucket array indexing and hashCode() computation.',
      'Correctly noted collision resolution via linked lists and Java 8 Red-Black Tree thresholding (treeify at 8 nodes).',
      'Accurate O(1) average lookup time complexity assessment.'
    ],
    timeComplexity: 'O(1) Average / O(N) Worst Case (High Collisions)',
    spaceComplexity: 'O(N) for Bucket array and Node entries',
    verdict: 'Excellent Answer - Meets Senior Technical Standard'
  });

  const topics = [
    { name: 'Java HashMap', defaultAns: 'HashMap uses bucket arrays and hashCode() modulo array length. Java 8 converts buckets to Red-Black Trees when chain length > 8.' },
    { name: 'Spring Boot REST', defaultAns: '@RestController handles incoming HTTP requests. @Autowired injects dependencies while Spring Data JPA manages ORM transactions.' },
    { name: 'SQL Joins & Indexing', defaultAns: 'INNER JOIN combines matching rows. B-Tree indexes speed up WHERE filtering from O(N) full table scan to O(log N) search.' },
    { name: 'Two Pointers DSA', defaultAns: 'Two pointers move inwards from left and right bounds to evaluate pairs in O(N) time instead of nested loops O(N^2).' }
  ];

  const handleTopicChange = (topicName: string, defaultAns: string) => {
    setSelectedTopic(topicName);
    setUserAnswer(defaultAns);
    setEvalResult(null);
  };

  const runAnalysis = () => {
    setIsAnalyzing(true);
    setEvalResult(null);

    setTimeout(() => {
      setIsAnalyzing(false);
      setEvalResult({
        score: Math.floor(Math.random() * 8) + 90,
        feedback: [
          `Strong conceptual accuracy for topic: ${selectedTopic}.`,
          'Identified key architectural principles and time complexity.',
          'Demonstrated clear technical vocabulary appropriate for SDE roles.'
        ],
        timeComplexity: selectedTopic.includes('Two Pointers') ? 'O(N)' : 'O(1) Average',
        spaceComplexity: 'O(1) Auxiliary Memory',
        verdict: 'Verified Competent Answer - High Rating'
      });
    }, 1200);
  };

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-purple-500/30 shadow-glow-purple space-y-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                <Bot className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">AI Project Feature Showcase</span>
                <h3 className="text-2xl font-black text-white">AI Interview Evaluator Simulator</h3>
              </div>
            </div>
            <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-purple-500/10 text-purple-300 border border-purple-500/30">
              🤖 Interactive Live Demo
            </span>
          </div>

          {/* Simulator Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Input Console */}
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">1. Select Technical Interview Topic</div>
              <div className="flex flex-wrap gap-2">
                {topics.map((t) => (
                  <button
                    key={t.name}
                    onClick={() => handleTopicChange(t.name, t.defaultAns)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                      selectedTopic === t.name
                        ? 'bg-purple-600 text-white border-purple-400 shadow-md'
                        : 'bg-slate-900 text-slate-400 border-white/10 hover:border-purple-500/30'
                    }`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>

              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider pt-2">2. Candidate Answer Input</div>
              <textarea
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                rows={5}
                className="w-full bg-slate-950 border border-white/10 rounded-xl p-4 text-xs sm:text-sm font-mono text-slate-200 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Type technical answer here..."
              />

              <button
                onClick={runAnalysis}
                disabled={isAnalyzing}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-sm transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-purple-200" />
                    Executing AI Analysis & Scoring Engine...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 text-purple-200 fill-current" />
                    Run AI Technical Answer Evaluation
                  </>
                )}
              </button>
            </div>

            {/* Right: AI Output Console */}
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-2">
                <Terminal className="w-4 h-4" /> AI Analytics Output & Rubric Evaluation
              </div>

              {isAnalyzing && (
                <div className="h-64 bg-slate-950 rounded-xl border border-white/10 p-6 flex flex-col items-center justify-center text-center space-y-3">
                  <Bot className="w-8 h-8 text-purple-400 animate-spin" />
                  <p className="text-xs font-mono text-purple-300">Tokenizing candidate input & parsing technical correctness...</p>
                </div>
              )}

              {!isAnalyzing && evalResult && (
                <div className="bg-slate-950 rounded-xl border border-purple-500/30 p-5 space-y-4">
                  {/* Score Row */}
                  <div className="flex items-center justify-between bg-slate-900/80 p-3 rounded-lg border border-purple-500/20">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-amber-400" />
                      <span className="text-xs font-bold text-white">Calculated Technical Score</span>
                    </div>
                    <div className="text-2xl font-black text-purple-400">{evalResult.score} / 100</div>
                  </div>

                  {/* Verdict */}
                  <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" /> {evalResult.verdict}
                  </div>

                  {/* Complexity breakdown */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2.5 rounded bg-slate-900 border border-white/5">
                      <span className="text-slate-400 block text-[10px]">Time Complexity</span>
                      <span className="text-cyan-300 font-bold">{evalResult.timeComplexity}</span>
                    </div>
                    <div className="p-2.5 rounded bg-slate-900 border border-white/5">
                      <span className="text-slate-400 block text-[10px]">Space Complexity</span>
                      <span className="text-purple-300 font-bold">{evalResult.spaceComplexity}</span>
                    </div>
                  </div>

                  {/* Feedback points */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400">AI Feedback Notes</div>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {evalResult.feedback.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
