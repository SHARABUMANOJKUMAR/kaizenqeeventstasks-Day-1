import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Code2, Coffee, Bot } from 'lucide-react';
import { getAllBootcamps } from '../data/bootcamps';

const colors = {
  purple: {
    bg: 'bg-purple-600',
    hover: 'hover:bg-purple-700',
    lightBg: 'bg-purple-50',
    lightText: 'text-purple-600',
    border: 'border-purple-500',
    topBorder: 'bg-purple-500'
  },
  blue: {
    bg: 'bg-blue-600',
    hover: 'hover:bg-blue-700',
    lightBg: 'bg-blue-50',
    lightText: 'text-blue-600',
    border: 'border-blue-500',
    topBorder: 'bg-blue-500'
  },
  orange: {
    bg: 'bg-orange-600',
    hover: 'hover:bg-orange-700',
    lightBg: 'bg-orange-50',
    lightText: 'text-orange-600',
    border: 'border-orange-500',
    topBorder: 'bg-orange-500'
  }
};

const LandingPage = () => {
  const navigate = useNavigate();
  const bootcamps = getAllBootcamps();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col font-sans text-text-main">
      {/* Background decorations */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-primary-50/50 to-transparent pointer-events-none -z-10" />
      
      {/* Navbar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <img 
              src="https://res.cloudinary.com/dwv8kc9vb/image/upload/v1788465282/KAIZEN_Q_EVENTS_kxjtz4.png" 
              alt="Kaizen Q Bootcamps" 
              className="h-10 sm:h-11 w-auto object-contain"
            />
            <div className="hidden sm:block border-l border-gray-200 pl-3.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Kaizen Q Bootcamps</span>
              <h2 className="text-xs font-semibold text-text-main">Your Learning Hub</h2>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <section className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-sm font-semibold mb-6 shadow-sm">
              <Sparkles size={16} className="text-primary-600" />
              <span>🚀 Learn by Building</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-main tracking-tight leading-tight mb-6">
              KAIZEN Q BOOTCAMPS
            </h1>

            <p className="text-xl font-bold text-primary mb-4 tracking-widest uppercase">
              Learn • Build • Deploy • Innovate
            </p>

            <p className="text-lg text-text-muted leading-relaxed">
              Hands-on bootcamps designed to take students from programming fundamentals to real-world AI applications. Choose your bootcamp and start building.
            </p>
          </motion.div>
        </section>

        {/* Bootcamps Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bootcamps.map((bc, idx) => {
            const color = colors[bc.accentColor] || colors.purple;
            
            return (
              <motion.div
                key={bc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-soft hover:shadow-lg transition-all duration-300 flex flex-col group relative overflow-hidden"
              >
                {/* Dynamic Accent Top Border */}
                <div className={`absolute top-0 inset-x-0 h-1.5 ${color.topBorder}`} />
                
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${color.lightBg} ${color.lightText} flex items-center justify-center text-2xl`}>
                    {bc.icon}
                  </div>
                  {bc.status === 'available' ? (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 uppercase tracking-wider border border-emerald-200">
                      🟢 AVAILABLE
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 uppercase tracking-wider border border-amber-200">
                      🟡 COMING SOON
                    </span>
                  )}
                </div>

                <h2 className="text-2xl font-bold text-text-main mb-2">
                  {bc.name}
                </h2>
                <p className="text-sm text-text-muted mb-6 flex-1 min-h-[40px]">
                  {bc.description}
                </p>

                <div className="space-y-2 mb-6 text-sm font-medium text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center rounded bg-gray-50 border border-gray-100">📅</div>
                    <span>{bc.totalDays} Days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center rounded bg-gray-50 border border-gray-100">💻</div>
                    <span>{bc.tagline}</span>
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/bootcamps/${bc.slug}`)}
                  disabled={bc.status !== 'available'}
                  className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                    bc.status === 'available'
                      ? `${color.bg} ${color.hover} text-white shadow-md hover:shadow-lg`
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {bc.status === 'available' ? (
                    <>
                      Explore Bootcamp <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  ) : (
                    'Coming Soon'
                  )}
                </button>
              </motion.div>
            );
          })}
        </section>

        <section className="text-center mt-16 pb-8">
           <p className="text-sm font-medium text-text-muted">
             "One Platform. Multiple Skills. Real Projects."
           </p>
        </section>
      </main>

      <footer className="w-full bg-white border-t border-gray-100 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <div>
            <span className="font-bold text-text-main">Kaizen Q Bootcamps</span> &copy; {new Date().getFullYear()} Kaizen Q Events. All rights reserved.
          </div>
          <a href="https://kaizenqevents.click" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-700 font-semibold transition-colors flex items-center gap-1">
            Visit Official Website <ArrowRight size={14} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
