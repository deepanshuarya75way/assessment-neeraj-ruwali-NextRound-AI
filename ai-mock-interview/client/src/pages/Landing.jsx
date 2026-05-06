import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  Bot, ChevronRight, Play, CheckCircle2, 
  User, MessageSquare, LineChart, Timer, 
  Code2, Database, Layout, ShieldCheck, 
  History, Users
} from "lucide-react";
import Navbar from "../components/Navbar";

export default function Landing() {
  const navigate = useNavigate();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 overflow-x-hidden selection:bg-yellow-400/30">
      <Navbar />

      <main className="relative pt-24">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-yellow-400/5 to-transparent pointer-events-none" />
        <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-yellow-400/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Hero Section */}
        <section id="interviews" className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <motion.div 
              initial="initial"
              animate="animate"
              variants={stagger}
              className="flex-1 text-center lg:text-left"
            >
              <motion.div 
                variants={fadeIn}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                <span className="text-xs font-semibold text-slate-400 tracking-wide uppercase">Practice with an AI interviewer</span>
              </motion.div>
              
              <motion.h1 
                variants={fadeIn}
                className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
              >
                Practice real interview questions <br className="hidden lg:block"/>
                <span className="text-slate-400">with instant feedback</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeIn}
                className="text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
              >
                Prepare for DSA, technical, HR, and system design interviews with an AI interviewer that adapts to your level and gives actionable feedback.
              </motion.p>
              
              <motion.div 
                variants={fadeIn}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <button 
                  onClick={() => navigate("/login")}
                  className="btn-primary w-full sm:w-auto min-w-[180px] shadow-lg shadow-yellow-400/10"
                >
                  Start Mock Interview <ChevronRight className="w-4 h-4" />
                </button>
                <button className="btn-secondary w-full sm:w-auto min-w-[160px]">
                  <Play className="w-4 h-4 fill-current" /> Watch Demo
                </button>
              </motion.div>
            </motion.div>

            {/* Right Visual: Realistic Product Preview */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 relative w-full max-w-[600px] lg:max-w-none"
            >
              <div className="relative z-10 p-2 bg-white/[0.02] border border-white/[0.08] rounded-3xl backdrop-blur-3xl shadow-2xl overflow-hidden">
                {/* Dashboard Header Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.05]">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                    </div>
                    <span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase ml-2">Interview Session #42</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <Timer className="w-3 h-3 text-yellow-400" /> 24:12
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-4 lg:p-6 grid grid-cols-12 gap-4">
                  {/* Left Column: Interview & Chat */}
                  <div className="col-span-8 space-y-4">
                    {/* Webcam Preview */}
                    <div className="relative aspect-video rounded-xl bg-[#0f0f0f] border border-white/[0.05] overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-black/40 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[10px] font-medium">Live Feed</span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity">
                        <User className="w-12 h-12 text-slate-600" />
                      </div>
                    </div>

                    {/* AI Chat Messages */}
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-md bg-yellow-400 flex items-center justify-center flex-shrink-0">
                          <Bot className="w-3.5 h-3.5 text-black" />
                        </div>
                        <div className="bg-white/[0.03] border border-white/[0.05] rounded-xl rounded-tl-none px-3 py-2 text-xs text-slate-300 max-w-[80%]">
                          Explain how the virtual DOM works in React and its benefits for performance.
                        </div>
                      </div>
                      <div className="flex gap-3 flex-row-reverse">
                        <div className="w-6 h-6 rounded-md bg-white/[0.05] border border-white/[0.1] flex items-center justify-center flex-shrink-0">
                          <User className="w-3.5 h-3.5 text-slate-400" />
                        </div>
                        <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl rounded-tr-none px-3 py-2 text-xs text-slate-200 max-w-[80%]">
                          The virtual DOM is a lightweight copy of the real DOM. It allows React to compute differences...
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Feedback & Score */}
                  <div className="col-span-4 space-y-4">
                    {/* Score Circle */}
                    <div className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-4 flex flex-col items-center justify-center text-center">
                      <div className="relative w-16 h-16 mb-2">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <circle className="text-white/5" strokeWidth="8" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
                          <circle className="text-yellow-400" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="62.8" strokeLinecap="round" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">75</div>
                      </div>
                      <span className="text-[10px] text-slate-500 font-medium uppercase tracking-tight">Interview Score</span>
                    </div>

                    {/* Topic Tags */}
                    <div className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-4">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block mb-3">Topic Tags</span>
                      <div className="flex flex-wrap gap-2">
                        {['React', 'JS Basics', 'Performance'].map(tag => (
                          <span key={tag} className="text-[9px] px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-slate-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Analytics Card */}
                    <div className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-4 overflow-hidden relative">
                       <div className="flex justify-between items-end gap-1 h-12">
                          {[40, 70, 45, 90, 65, 80].map((h, i) => (
                            <motion.div 
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              transition={{ duration: 1, delay: i * 0.1 }}
                              className="w-full bg-yellow-400/20 rounded-t-sm"
                            />
                          ))}
                       </div>
                       <span className="text-[10px] text-slate-500 font-medium mt-2 block">Performance Analytics</span>
                    </div>
                  </div>
                </div>

                {/* AI Feedback Banner */}
                <div className="mt-2 bg-yellow-400/5 border-t border-yellow-400/10 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-full bg-yellow-400/10 text-yellow-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-medium text-slate-200">AI Feedback Generated: <span className="text-slate-400">Improve depth in React Hooks explanation.</span></span>
                  </div>
                  <button className="text-[10px] font-bold text-yellow-400 uppercase hover:underline">Details</button>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-yellow-400/10 blur-[100px] rounded-full pointer-events-none" />
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/[0.03]">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
            <div className="max-w-xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Trusted by students worldwide</h2>
              <p className="text-slate-400 text-lg">Real feedback from candidates who landed their dream jobs using NextRound.</p>
            </div>
            <div className="hidden md:flex gap-2">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-white cursor-pointer transition-colors">
                <ChevronRight className="w-5 h-5 rotate-180" />
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-white cursor-pointer transition-colors">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "“Helped me crack my Atlassian OA in just 2 weeks. The depth of questions was incredible.”",
                author: "Aman Sharma",
                role: "IIIT Delhi",
                avatar: "AS"
              },
              {
                text: "“The feedback felt surprisingly close to a real interviewer. It pinpointed my exact weaknesses.”",
                author: "Priya Mehta",
                role: "BTech CSE",
                avatar: "PM"
              },
              {
                text: "“I became much more confident in HR rounds. The adaptive AI really pushes you to think.”",
                author: "Rohan Verma",
                role: "Final Year Student",
                avatar: "RV"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="premium-card p-8 flex flex-col justify-between"
              >
                <p className="text-lg text-slate-300 mb-8 font-medium italic leading-relaxed">
                  {item.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-yellow-400">
                    {item.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-none">{item.author}</h4>
                    <span className="text-xs text-slate-500">{item.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features Grid Section */}
        <section id="features" className="max-w-7xl mx-auto px-6 py-24 bg-[#0d0d0d]/50">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">Precision-engineered features</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Everything you need to master technical interviews without the stress.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Bot,
                title: "AI Mock Interviews",
                desc: "Simulate real scenarios with voice and text-based AI interaction."
              },
              {
                icon: LineChart,
                title: "Instant Feedback",
                desc: "Get scored on communication, logic, and technical accuracy immediately."
              },
              {
                icon: Database,
                title: "Company-wise Practice",
                desc: "Access curated question sets from Google, Amazon, Meta, and more."
              },
              {
                icon: Layout,
                title: "Performance Analytics",
                desc: "Track your progress with detailed charts and skill breakdown metrics."
              },
              {
                icon: MessageSquare,
                title: "Resume-based Questions",
                desc: "AI scans your resume to ask personalized project and experience questions."
              },
              {
                icon: History,
                title: "Interview History",
                desc: "Review your past sessions, transcripts, and areas for improvement."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="premium-card p-8 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-yellow-400 group-hover:bg-yellow-400/5 group-hover:border-yellow-400/20 transition-all mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/[0.03]">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">Simple, transparent pricing</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Focus on your preparation, not on the costs.</p>
          </div>

          <div className="flex justify-center">
            <div className="premium-card p-8 lg:p-12 w-full max-w-[450px] relative border-yellow-400/20">
              <div className="absolute top-0 right-0 px-4 py-1 bg-yellow-400 text-black text-[10px] font-bold uppercase rounded-bl-xl rounded-tr-2xl">Most Popular</div>
              <h3 className="text-2xl font-bold text-white mb-2">Full Access</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-white">₹0</span>
                <span className="text-slate-500 font-medium">/lifetime</span>
              </div>
              <p className="text-slate-400 text-sm mb-8">Get everything you need to crack your next interview round. Limited time offer for students.</p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Unlimited AI Mock Interviews",
                  "Detailed Performance Analytics",
                  "Company-wise Practice Sets",
                  "Resume Analysis & Feedback",
                  "DSA Pattern Mastery Paths"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button onClick={() => navigate("/login")} className="btn-primary w-full">Start Practicing Free</button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-5xl mx-auto px-6 py-32 text-center">
          <div className="premium-card p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.05),transparent)] pointer-events-none" />
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">Ready to ace your <br/> next round?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => navigate("/login")} className="btn-primary min-w-[200px]">Get Started Now</button>
              <button className="btn-secondary min-w-[200px]">Browse Resources</button>
            </div>
            <p className="mt-8 text-slate-500 text-sm font-medium">Join 2,000+ students practicing today.</p>
          </div>
        </section>

        {/* Footer (Minimal) */}
        <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-yellow-400" />
            <span className="font-bold text-white">NextRound AI</span>
          </div>
          <div className="flex gap-8 text-sm text-slate-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <span className="text-xs text-slate-600">© 2024 NextRound AI. Built for the next generation of engineers.</span>
        </footer>
      </main>
    </div>
  );
}

