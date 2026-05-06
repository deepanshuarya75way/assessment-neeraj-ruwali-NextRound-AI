import Navbar from "./Navbar";
import { motion } from "framer-motion";

function Layout({ children, pageTitle }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f8fafc] font-sans selection:bg-yellow-400/30 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-20 px-6 max-w-7xl mx-auto w-full relative z-10">
        {pageTitle && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 pb-6 border-b border-white/5"
          >
             <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">{pageTitle}</h1>
          </motion.div>
        )}
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </main>
      
      {/* Decorative background element */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-yellow-400/[0.02] blur-[120px] rounded-full pointer-events-none -z-10" />
    </div>
  );
}

export default Layout;

