import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, Code2, BrainCircuit, X, Check, Copy, 
  ChevronRight, Activity, FileText, User, 
  Target, Zap, Clock, TrendingUp, BarChart3,
  Search, ShieldCheck, Database, Layout, MessageSquare,
  History, Users, Award, Map, BookOpen, RefreshCw, Gift
} from "lucide-react";
import axios from "axios";

function PricingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
       {isOpen && (
         <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
         >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="bg-[#0f172a] border border-white/10 w-full max-w-4xl rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/5 rounded-full p-2 transition-colors z-10">
               <X className="w-5 h-5" />
            </button>

            <div className="p-10 text-center relative">
                <div className="absolute top-[-50%] left-1/2 transform -translate-x-1/2 w-96 h-96 bg-yellow-400/10 rounded-full blur-[80px] pointer-events-none"></div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight relative z-10">Level up your interview prep.</h2>
                <p className="text-slate-400 max-w-xl mx-auto text-lg relative z-10">Get unlimited access to AI Coach, real-time code execution, and curated FAANG design mocks.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 px-8 md:px-12 pb-12 relative z-10">
               {/* Free Tier */}
               <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col transition-colors backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-2">Basic</h3>
                  <div className="flex items-baseline gap-1 mb-8">
                     <span className="text-5xl font-black text-white">$0</span>
                     <span className="text-white/50 font-medium">/ forever</span>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1 text-sm text-white/80 font-medium">
                     <li className="flex items-center gap-3"><div className="p-1 bg-yellow-400/20 rounded-full text-yellow-400"><Check className="w-3 h-3" /></div> 5 Mock Interviews / month</li>
                     <li className="flex items-center gap-3"><div className="p-1 bg-yellow-400/20 rounded-full text-yellow-400"><Check className="w-3 h-3" /></div> Basic DSA Pattern Maps</li>
                     <li className="flex items-center gap-3 opacity-40"><div className="p-1 bg-white/10 rounded-full text-white/50"><X className="w-3 h-3" /></div> No System Design Mocks</li>
                  </ul>
                  <button disabled className="w-full py-4 rounded-xl bg-white/10 text-white/50 font-bold transition-colors">Current Plan</button>
               </div>

               {/* Pro Tier */}
               <div className="bg-white/[0.03] border border-yellow-400/30 rounded-3xl p-8 flex flex-col relative shadow-[0_0_40px_rgba(251,191,36,0.05)]">
                  <div className="absolute -top-3 right-8 bg-yellow-400 text-black px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-md">Most Popular</div>
                  <h3 className="text-xl font-bold text-white mb-2">NextRound Pro</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                     <span className="text-5xl font-black text-white">$15</span>
                     <span className="text-white/50 font-medium">/ month</span>
                  </div>
                  <div className="text-xs text-yellow-400 font-bold mb-6 flex items-center gap-1.5 bg-yellow-400/10 w-fit px-3 py-1.5 rounded-full border border-yellow-400/20">
                     $12.75/mo with code NEXTROUND15
                  </div>
                  <ul className="space-y-4 mb-8 flex-1 text-sm text-white/90 font-medium">
                     <li className="flex items-center gap-3"><div className="p-1 bg-yellow-400/20 rounded-full text-yellow-400"><Check className="w-3 h-3" /></div> Unlimited Mock Interviews</li>
                     <li className="flex items-center gap-3"><div className="p-1 bg-yellow-400/20 rounded-full text-yellow-400"><Check className="w-3 h-3" /></div> Full System Design Tracks</li>
                     <li className="flex items-center gap-3"><div className="p-1 bg-yellow-400/20 rounded-full text-yellow-400"><Check className="w-3 h-3" /></div> Unlimited AI Coach</li>
                  </ul>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                       alert("Redirecting to Checkout...");
                       onClose();
                    }}
                    className="btn-primary w-full py-4 rounded-xl !text-base"
                  >
                    Upgrade to Pro
                  </motion.button>
               </div>
            </div>
          </motion.div>
         </motion.div>
       )}
    </AnimatePresence>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(true);
  const [showPricing, setShowPricing] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const t = setTimeout(() => setInitialLoad(false), 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!initialLoad && location.hash === "#tools") {
      const element = document.getElementById("tools");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [initialLoad, location.hash]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText("NEXTROUND15");
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleStartInterview = async (e) => {
    e.preventDefault();
    if (!role.trim() || !experience.trim()) return;

    setLoading(true);
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/ai/generate`,
        { role, experience },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      navigate("/interview", {
        state: {
          interview: {
            _id: response.data._id || "temp-id",
            questions: response.data.questions || [],
            role,
            experience,
          },
        },
      });
     } catch (error) {
        console.error(error);
     } finally {
      setLoading(false);
      setIsModalOpen(false);
    }
  };

  if (initialLoad) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-8 animate-pulse">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="space-y-3">
            <div className="h-8 bg-white/5 rounded-lg w-64"></div>
            <div className="h-4 bg-white/5 rounded-lg w-48"></div>
          </div>
          <div className="flex gap-4">
            <div className="h-12 bg-white/5 rounded-xl w-32"></div>
            <div className="h-12 bg-white/5 rounded-xl w-32"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1,2,3,4].map(i => <div key={i} className="h-24 bg-white/5 rounded-2xl"></div>)}
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8 h-[400px] bg-white/5 rounded-3xl"></div>
          <div className="col-span-4 h-[400px] bg-white/5 rounded-3xl"></div>
        </div>
      </div>
    );
  }

  const exploreTools = [
    { title: "Resume Analyzer", desc: "AI-powered feedback on your resume structure and keywords.", icon: FileText, href: "/resume-analyzer", color: "text-blue-400" },
    { title: "DSA Pattern Mastery", desc: "Master 15+ patterns that cover 90% of interview questions.", icon: BookOpen, href: "/learn/dsa", color: "text-yellow-400" },
    { title: "System Design Coach", desc: "Architect scalable systems with real-time AI architectural feedback.", icon: Layout, href: "/practice/coach", color: "text-emerald-400" },
    { title: "AI HR Interview", desc: "Practice behavioral rounds with an AI that evaluates soft skills.", icon: MessageSquare, href: "/dashboard", color: "text-pink-400" },
    { title: "Career Analytics", desc: "Track your growth across all interview domains with granular metrics.", icon: BarChart3, href: "/analytics", color: "text-purple-400" },
    { title: "Code Practice", desc: "Solve competitive programming challenges in an IDE environment.", icon: Code2, href: "/practice/code", color: "text-rose-400" },
    { title: "Interview History", desc: "Review your past sessions, transcripts, and areas for improvement.", icon: History, href: "/history", color: "text-indigo-400" },
    { title: "Mastery Certificates", desc: "Earn and share digital credentials for your interview milestones.", icon: Award, href: "/certificates", color: "text-orange-400" },
    { title: "Leaderboard", desc: "Compete with peers globally and track your standing.", icon: Target, href: "/leaderboard", color: "text-yellow-500" },
    { title: "Revision Hub", desc: "Quickly review key concepts and previous interview mistakes.", icon: RefreshCw, href: "/revision-hub", color: "text-amber-400" },
    { title: "Developer Community", desc: "Connect with others preparing for top-tier tech roles.", icon: Users, href: "/community", color: "text-sky-400" },
    { title: "Refer & Earn", desc: "Invite friends to NextRound and unlock premium features.", icon: Gift, href: "/referrals", color: "text-lime-400" },
  ];


  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <PricingModal isOpen={showPricing} onClose={() => setShowPricing(false)} />

      {/* Promo Bar */}
      <AnimatePresence>
        {showPromo && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-sm py-3 px-6 rounded-2xl flex items-center justify-between mb-10 overflow-hidden"
          >
            <div className="flex items-center gap-3">
              <Sparkles className="w-4 h-4" />
              <span>Limited time — 15% off Pro with code <strong className="ml-1 tracking-wider uppercase">NEXTROUND15</strong></span>
              <button 
                onClick={handleCopyCode}
                className="p-1.5 hover:bg-yellow-400/20 rounded-md transition-colors"
              >
                {copiedCode ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => setShowPricing(true)} className="text-xs font-bold uppercase tracking-wider hover:underline">See plans</button>
              <button onClick={() => setShowPromo(false)} className="text-yellow-400/50 hover:text-white"><X className="w-4 h-4" /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Welcome back, Neeraj 👋</h1>
          <p className="text-slate-400">Continue your interview preparation and track your progress.</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="btn-primary"
          >
            <Zap className="w-4 h-4 fill-current" /> Start Mock Interview
          </button>
          <button onClick={() => setShowPricing(true)} className="btn-secondary">
            Upgrade to Pro
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {[
          { label: "Interviews Done", val: "12", icon: Activity, trend: "+2 this week" },
          { label: "Average Score", val: "78%", icon: Target, trend: "Top 15%" },
          { label: "Strongest Topic", val: "React", icon: Zap, trend: "92% Accuracy" },
          { label: "Study Streak", val: "5 Days", icon: Clock, trend: "Personal Best" },
        ].map((stat, i) => (
          <div key={i} className="premium-card p-5 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</span>
              <div className="p-2 rounded-lg bg-white/5 text-slate-400">
                <stat.icon className="w-4 h-4" />
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-white mb-1">{stat.val}</p>
              <p className="text-[10px] text-yellow-400/80 font-medium">{stat.trend}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-8 mb-12">
        {/* Left: Continue Practice & Activity */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Continue Practice</h2>
              <Link to="/history" className="text-xs font-bold text-yellow-400 uppercase tracking-wider hover:underline">View All</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Senior Frontend Developer", date: "2 hours ago", score: 84, type: "DSA + React" },
                { title: "System Design Mock", date: "Yesterday", score: 72, type: "Architecture" },
              ].map((item, i) => (
                <div key={i} className="premium-card p-6 group cursor-pointer hover:bg-white/[0.03]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-white group-hover:text-yellow-400 transition-colors">{item.title}</h3>
                      <p className="text-xs text-slate-500">{item.type} • {item.date}</p>
                    </div>
                    <div className="text-xl font-bold text-white">{item.score}</div>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${item.score}%` }}
                      className="bg-yellow-400 h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-6">Performance Insights</h2>
            <div className="premium-card p-8">
               <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="relative w-40 h-40">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle className="text-white/5" strokeWidth="10" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
                      <circle className="text-yellow-400" strokeWidth="10" strokeDasharray="251.2" strokeDashoffset="50" strokeLinecap="round" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-bold text-white">80</span>
                      <span className="text-[10px] text-slate-500 font-bold uppercase">Mastery</span>
                    </div>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-8 w-full">
                    {[
                      { label: "Communication", val: "85%", icon: MessageSquare },
                      { label: "Technical Logic", val: "78%", icon: Code2 },
                      { label: "Problem Solving", val: "92%", icon: BrainCircuit },
                      { label: "System Design", val: "65%", icon: Layout },
                    ].map((m, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-tight">
                          <span className="text-slate-500 flex items-center gap-2">
                            <m.icon className="w-3 h-3" /> {m.label}
                          </span>
                          <span className="text-white">{m.val}</span>
                        </div>
                        <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                          <div className="bg-white/20 h-full w-full" style={{ width: m.val }} />
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
               <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4 text-sm text-slate-400">
                  <ShieldCheck className="w-5 h-5 text-yellow-400" />
                  <span>AI Insight: Your DSA problem-solving speed improved by 18% this week.</span>
               </div>
            </div>
          </section>
        </div>

        {/* Right: Recommendations */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-white mb-6">Upcoming Recommendations</h2>
            <div className="space-y-4">
              {[
                { title: "Master Graph Traversal", tag: "Weakness", desc: "Based on your last BFS solution.", icon: TrendingUp },
                { title: "Review Scalability Patterns", tag: "Next Step", desc: "Level up from Load Balancers.", icon: Sparkles },
                { title: "Behavioral Prep", tag: "Recommended", desc: "Focus on Conflict Resolution.", icon: Users },
              ].map((rec, i) => (
                <div key={rec.title} className="premium-card p-5 group hover:border-yellow-400/30 transition-all">
                  <div className="flex gap-4">
                    <div className="p-3 rounded-xl bg-white/5 text-slate-400 group-hover:text-yellow-400 transition-colors">
                      <rec.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest">{rec.tag}</span>
                      <h3 className="font-bold text-white mb-1">{rec.title}</h3>
                      <p className="text-xs text-slate-500">{rec.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <div className="premium-card p-6 bg-gradient-to-br from-yellow-400/5 to-transparent border-yellow-400/10">
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <Gift className="w-5 h-5 text-yellow-400" /> Refer & Earn
            </h3>
            <p className="text-sm text-slate-400 mb-6">Invite your friends to NextRound and get 1 month of Pro for free.</p>
            <button onClick={() => navigate('/referrals')} className="btn-secondary w-full">Learn More</button>
          </div>
        </div>
      </div>

      {/* Explore Tools Section */}
      <section id="tools" className="pt-12 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Explore Tools</h2>
            <p className="text-slate-400">Functional utilities to sharpen every aspect of your interview game.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {exploreTools.map((tool, i) => (
            <Link 
              key={tool.title} 
              to={tool.href}
              className="premium-card p-6 group hover:bg-white/[0.02] transition-all"
            >
              <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${tool.color}`}>
                <tool.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                {tool.title} <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-yellow-400" />
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Start Interview Modal (Logic Preserved) */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#0f172a] border border-white/20 w-full max-w-lg rounded-[2.5rem] shadow-2xl p-8 lg:p-10 relative"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/5 rounded-full p-2 transition-colors">
                 <X className="w-5 h-5" />
              </button>

              <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Session Config</h2>
              <p className="text-sm text-slate-400 mb-8 pb-6 border-b border-white/5">Configure your interview parameters.</p>

              <form onSubmit={handleStartInterview} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Target Role</label>
                  <input
                    type="text"
                    required
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Senior Frontend Developer"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white/20 rounded-xl px-5 py-4 focus:outline-none focus:border-yellow-400/50 transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Experience Context</label>
                  <select
                    required
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-5 py-4 appearance-none focus:outline-none focus:border-yellow-400/50 transition-all font-medium [&>option]:bg-gray-900"
                  >
                    <option value="" disabled className="text-white/30">Select experience tier</option>
                    <option value="Internship">Internship Level</option>
                    <option value="Junior">Junior (0-2 years)</option>
                    <option value="Mid-Level">Mid-Level (2-5 years)</option>
                    <option value="Senior">Senior (5+ years)</option>
                    <option value="Lead/Manager">Lead / Managerial</option>
                  </select>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                   <button
                     type="submit"
                     disabled={loading || !role || !experience}
                     className="btn-primary w-full !py-4 shadow-xl shadow-yellow-400/10"
                   >
                     {loading ? (
                       <span className="flex items-center gap-2">
                         <svg className="animate-spin h-5 w-5 text-black" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                         Initializing Architecture...
                       </span>
                     ) : (
                       <span className="flex items-center gap-2">
                         Start Mock Interview <ChevronRight className="w-4 h-4" />
                       </span>
                     )}
                   </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}