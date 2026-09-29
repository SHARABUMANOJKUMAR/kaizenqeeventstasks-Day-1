import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { bootcampDays } from '../data/bootcampDays';
import DayCard from './DayCard';
import { 
  Calendar, 
  Terminal, 
  Layers, 
  Rocket, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';

const BootcampHome = ({ studentData }) => {
  const navigate = useNavigate();

  // Completed days list from localStorage
  const [completedDays] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('kq_completed_days') || '[]');
    } catch {
      return [];
    }
  });

  const progressPercent = Math.round((completedDays.length / bootcampDays.length) * 100);

  const handleSelectDay = (day) => {
    if (day.status === 'locked' || day.status === 'coming_soon' || day.status === 'closed' || day.id > 2) {
      return;
    }
    // If student is already registered, navigate directly
    if (studentData) {
      navigate(day.route);
    } else {
      // Direct them to register first, then redirect back to this day
      navigate(`/register?redirect=${encodeURIComponent(day.route)}`);
    }
  };

  return (
    <div className="min-h-screen bg-background relative flex flex-col overflow-hidden">
      {/* Background soft ambient blobs contained within overflow-hidden */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary-100/40 blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-secondary-light/50 blur-3xl" />
        <div className="absolute -bottom-24 left-1/4 w-96 h-96 rounded-full bg-accent-light/40 blur-3xl" />
      </div>

      {/* Top Navbar — Clean branding */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <img 
              src="https://res.cloudinary.com/dwv8kc9vb/image/upload/v1788465282/KAIZEN_Q_EVENTS_kxjtz4.png" 
              alt="Kaizen Q Bootcamps" 
              className="h-10 sm:h-11 w-auto object-contain"
            />
            <div className="hidden sm:block border-l border-gray-200 pl-3.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Kaizen Q Bootcamps</span>
              <h2 className="text-xs font-semibold text-text-main">Python with AI</h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary-700 border border-primary-200">
              <Sparkles size={13} className="text-primary-600" />
              5-Day Hands-On Bootcamp
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 w-full relative z-10 flex flex-col justify-start">
        
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-semibold mb-3">
              <Sparkles size={13} className="text-primary-600" />
              <span>KAIZEN Q BOOTCAMPS</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-main tracking-tight leading-tight mb-2.5">
              Python with AI
            </h1>

            <p className="text-lg sm:text-xl font-semibold text-primary mb-2">
              5-DAY HANDS-ON BOOTCAMP
            </p>

            <p className="text-sm sm:text-base text-text-muted max-w-xl mx-auto leading-relaxed mb-4 font-light">
              &ldquo;From Python Foundations to Real-World AI Applications&rdquo;
            </p>

            <p className="text-[11px] uppercase tracking-widest text-text-muted font-semibold">
              Learn &bull; Build &bull; Deploy &bull; Innovate
            </p>
          </motion.div>
        </section>

        {/* Bootcamp Overview Cards */}
        <section className="mb-8 md:mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-soft flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-2.5">
                <Calendar size={20} />
              </div>
              <h3 className="font-bold text-text-main text-sm">5 Days</h3>
              <p className="text-xs text-text-muted mt-0.5">Structured pathway</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-soft flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-2.5">
                <Terminal size={20} />
              </div>
              <h3 className="font-bold text-text-main text-sm">Hands-On Code</h3>
              <p className="text-xs text-text-muted mt-0.5">Live browser Python</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-soft flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2.5">
                <Layers size={20} />
              </div>
              <h3 className="font-bold text-text-main text-sm">Mini Projects</h3>
              <p className="text-xs text-text-muted mt-0.5">Pandas, ML & Prompts</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-soft flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-2.5">
                <Rocket size={20} />
              </div>
              <h3 className="font-bold text-text-main text-sm">AI Product</h3>
              <p className="text-xs text-text-muted mt-0.5">Streamlit showcase</p>
            </div>
          </div>
        </section>

        {/* Student Progress Section */}
        <section className="mb-8 md:mb-10">
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-soft border border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Your Learning Journey</span>
                <h3 className="text-lg sm:text-xl font-bold text-text-main">Bootcamp Progress</h3>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-xl sm:text-2xl font-extrabold text-primary font-mono">
                  {progressPercent}%
                </span>
                <span className="text-xs text-text-muted font-medium">
                  ({completedDays.length} of {bootcampDays.length} Completed)
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden mb-4">
              <motion.div 
                className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Days status row */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
              {bootcampDays.map((d) => {
                const isDone = completedDays.includes(d.id);
                return (
                  <div 
                    key={d.id}
                    className={`p-2.5 rounded-xl border flex items-center gap-2 transition-colors
                      ${isDone 
                        ? 'bg-emerald-50/70 border-emerald-200 text-emerald-800' 
                        : 'bg-gray-50 border-gray-200 text-text-muted'
                      }
                    `}
                  >
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 font-bold text-[11px]
                      ${isDone ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-500'}
                    `}>
                      {isDone ? <CheckCircle2 size={13} /> : d.id}
                    </div>
                    <div className="truncate">
                      <p className="text-xs font-semibold truncate">Day {d.id}</p>
                      <p className="text-[10px] text-text-muted truncate">
                        {isDone ? 'Completed' : 'Pending'}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Day Cards Section */}
        <section className="mb-6">
          <div className="text-center md:text-left mb-6 flex flex-col md:flex-row md:items-end justify-between gap-3">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Curriculum</span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-text-main">
                Choose a Day to Begin
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-text-muted max-w-md">
              Complete Day 1 and Day 2 tasks. Upcoming days unlock as the bootcamp progresses.
            </p>
          </div>

          {/* All 5 Day Cards Grid - Seamless, perfectly aligned */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {bootcampDays.map((day) => (
              <DayCard 
                key={day.id}
                day={day}
                isCompleted={completedDays.includes(day.id)}
                onSelect={handleSelectDay}
              />
            ))}
          </div>
        </section>

      </main>

      {/* Clean, Properly Aligned Footer (No Excess Whitespace Below) */}
      <footer className="w-full bg-white border-t border-gray-100 py-4 px-4 sm:px-8 mt-auto relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            <img 
              src="https://res.cloudinary.com/dwv8kc9vb/image/upload/v1788465282/KAIZEN_Q_EVENTS_kxjtz4.png" 
              alt="Kaizen Q" 
              className="h-7 w-auto object-contain"
            />
            <span className="font-semibold text-text-main text-sm">Kaizen Q Bootcamps</span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <span>&copy; {new Date().getFullYear()} Kaizen Q Events. All rights reserved.</span>
          </div>

          <div className="flex items-center justify-center">
            <a 
              href="https://kaizenqevents.click" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-700 font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>Visit Official Website</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BootcampHome;
