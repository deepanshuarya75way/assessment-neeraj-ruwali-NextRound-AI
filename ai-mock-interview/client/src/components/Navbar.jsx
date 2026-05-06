import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LogOut, LayoutDashboard, Menu, X, 
  Bot, ChevronRight, Bell, User, 
  Layers, BarChart3, History as HistoryIcon, CreditCard
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const landingLinks = [
    { label: "Features", href: "/#features" },
    { label: "Mock Interviews", href: "/#interviews" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Pricing", href: "/#pricing" },
  ];

  const authenticatedLinks = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Explore Tools", href: "/dashboard#tools", icon: Layers },
    { label: "Performance", href: "/performance", icon: BarChart3 },
    { label: "History", href: "/history", icon: HistoryIcon },
    { label: "Pricing", href: "/#pricing", icon: CreditCard },
  ];

  const currentLinks = token ? authenticatedLinks : landingLinks;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || token ? "py-3 bg-black/60 backdrop-blur-md border-b border-white/5" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to={token ? "/dashboard" : "/"} className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center text-black transition-transform group-hover:scale-105">
            <Bot className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg tracking-tight text-white">NextRound <span className="text-yellow-400">AI</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {currentLinks.map((link) => {
            const isActive = location.pathname === link.href || (location.pathname + location.hash) === link.href;
            return (
              <Link 
                key={link.label}
                to={link.href}
                className={`px-4 py-2 text-sm font-medium transition-all rounded-lg relative ${
                  isActive ? "text-white" : "text-white/50 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div 
                    layoutId="nav-active"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-yellow-400 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          {!token ? (
            <>
              <Link to="/login" className="text-sm font-medium text-white/60 hover:text-white transition-colors px-4 py-2">
                Login
              </Link>
              <Link to="/login" className="btn-primary !py-2 !px-5 !text-sm">
                Get Started
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <button className="p-2 text-white/50 hover:text-white transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full border-2 border-black" />
              </button>
              
              <div className="h-6 w-px bg-white/10 mx-2" />
              
              <div className="flex items-center gap-3 pl-2 group cursor-pointer" onClick={() => setIsDrawerOpen(true)}>
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:border-yellow-400/50 transition-all overflow-hidden">
                  <User className="w-5 h-5" />
                </div>
                <div className="hidden lg:block text-left">
                  <p className="text-xs font-bold text-white leading-none mb-0.5">User</p>
                  <p className="text-[10px] text-white/40 leading-none">Pro Plan</p>
                </div>
              </div>
            </div>
          )}
          
          <button 
            onClick={() => setIsDrawerOpen(true)}
            className="md:hidden p-2 text-white/60 hover:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Profile/Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-[#0a0a0a] border-l border-white/10 z-50 p-6 flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-lg text-white">Menu</span>
                <button onClick={() => setIsDrawerOpen(false)} className="p-2 text-white/50 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {token && (
                <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">U</div>
                    <div>
                      <p className="text-sm font-bold text-white">User Account</p>
                      <p className="text-xs text-white/50">user@example.com</p>
                    </div>
                  </div>
                  <Link to="/dashboard" onClick={() => setIsDrawerOpen(false)} className="flex items-center gap-2 text-xs font-bold text-yellow-400 hover:underline">
                    View Profile <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              )}

              <div className="flex flex-col gap-2 flex-1">
                {currentLinks.map((link) => (
                  <Link 
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsDrawerOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                  >
                    {link.icon && <link.icon className="w-4 h-4" />}
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="pt-6 border-t border-white/5 mt-auto">
                {token ? (
                  <button 
                    onClick={() => {
                      handleLogout();
                      setIsDrawerOpen(false);
                    }} 
                    className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-red-400 hover:bg-red-400/10 rounded-xl transition-all"
                  >
                    <LogOut className="w-4 h-4" /> Sign Out
                  </button>
                ) : (
                  <Link to="/login" onClick={() => setIsDrawerOpen(false)} className="btn-primary w-full">Sign In</Link>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;


