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
    if (day.status === 'locked' || day.status === 'coming_soon' || day.status === 'closed') {
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
    <div className="min-h-screen bg-background relative overflow-x-hidden flex flex-col justify-between">
      {/* Background soft ambient blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] rounded-full bg-primary-100/50 blur-3xl pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary-light/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-accent-light/50 blur-3xl pointer-events-none" />

      {/* Top Navbar — Clean branding, mentor & student login removed */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="https://res.cloudinary.com/dwv8kc9vb/image/upload/v1788465282/KAIZEN_Q_EVENTS_kxjtz4.png" 
              alt="Kaizen Q Bootcamps" 
              className="h-12 w-auto object-contain"
            />
            <div className="hidden sm:block border-l-2 border-gray-200 pl-4">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Kaizen Q Bootcamps</span>
              <h2 className="text-sm font-semibold text-text-main">Python with AI</h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary-50 text-primary-700 border border-primary-200 shadow-xs">
              <Sparkles size={13} className="text-primary-600" />
              5-Day Hands-On Bootcamp
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14 w-full relative z-10">
        
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs sm:text-sm font-semibold mb-4 shadow-xs">
              <Sparkles size={14} className="text-primary-600" />
              <span>KAIZEN Q BOOTCAMPS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-text-main tracking-tight leading-tight mb-4">
              Python with AI
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-primary mb-3">
              5-DAY HANDS-ON BOOTCAMP
            </p>

            <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed mb-6 font-light">
              &ldquo;From Python Foundations to Real-World AI Applications&rdquo;
            </p>

            <p className="text-xs uppercase tracking-widest text-text-muted font-semibold">
              Learn &bull; Build &bull; Deploy &bull; Innovate
            </p>
          </motion.div>
        </section>

        {/* Bootcamp Overview Cards */}
        <section className="mb-14 md:mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-soft flex flex-col items-center text-center">
              <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
                <Calendar size={22} />
              </div>
              <h3 className="font-bold text-text-main text-sm sm:text-base">5 Days</h3>
              <p className="text-xs text-text-muted mt-1">Structured hands-on pathway</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-soft flex flex-col items-center text-center">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Terminal size={22} />
              </div>
              <h3 className="font-bold text-text-main text-sm sm:text-base">Hands-On Code</h3>
              <p className="text-xs text-text-muted mt-1">Live browser Python execution</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-soft flex flex-col items-center text-center">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <Layers size={22} />
              </div>
              <h3 className="font-bold text-text-main text-sm sm:text-base">Mini Projects</h3>
              <p className="text-xs text-text-muted mt-1">Pandas, ML & Prompt design</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-soft flex flex-col items-center text-center">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                <Rocket size={22} />
              </div>
              <h3 className="font-bold text-text-main text-sm sm:text-base">AI Product</h3>
              <p className="text-xs text-text-muted mt-1">Streamlit Hackathon showcase</p>
            </div>
          </div>
        </section>

        {/* Student Progress Section */}
        <section className="mb-14 md:mb-16">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft border border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Your Learning Journey</span>
                <h3 className="text-xl sm:text-2xl font-bold text-text-main">Your Bootcamp Progress</h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-primary font-mono">
                  {progressPercent}%
                </span>
                <span className="text-xs text-text-muted font-medium">
                  {completedDays.length} of {bootcampDays.length} Days Completed
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden mb-6">
              <motion.div 
                className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Days status row */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {bootcampDays.map((d) => {
                const isDone = completedDays.includes(d.id);
                return (
                  <div 
                    key={d.id}
                    className={`p-3 rounded-xl border flex items-center gap-2.5 transition-colors
                      ${isDone 
                        ? 'bg-emerald-50/70 border-emerald-200 text-emerald-800' 
                        : 'bg-gray-50 border-gray-200 text-text-muted'
                      }
                    `}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-bold text-xs
                      ${isDone ? 'bg-emerald-500 text-white' : 'bg-gray-200 text-gray-500'}
                    `}>
                      {isDone ? <CheckCircle2 size={14} /> : d.id}
                    </div>
                    <div className="truncate">
                      <p className="text-xs font-semibold truncate">Day {d.id}</p>
                      <p className="text-[11px] text-text-muted truncate">
                        {isDone ? '✓ Completed' : '○ Not Started'}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Day Cards Section */}
        <section className="mb-12">
          <div className="text-center md:text-left mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Curriculum</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-text-main">
                Choose a Day to Begin
              </h2>
            </div>
            <p className="text-sm text-text-muted max-w-md">
              Each day includes comprehensive conceptual MCQs, logic puzzles, and interactive Python coding challenges.
            </p>
          </div>

          {/* All 5 Day Cards Grid - Seamless, perfectly aligned */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Clean, Properly Aligned Footer (No Mentor Links) */}
      <footer className="w-full bg-white border-t border-gray-100 py-6 px-4 sm:px-8 mt-auto relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <img 
              src="https://res.cloudinary.com/dwv8kc9vb/image/upload/v1788465282/KAIZEN_Q_EVENTS_kxjtz4.png" 
              alt="Kaizen Q" 
              className="h-8 w-auto object-contain"
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
