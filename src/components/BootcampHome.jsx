import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getBootcampConfig } from '../data/bootcamps';
import DayCard from './DayCard';
import NotFound from './NotFound';
import { 
  Calendar, 
  Terminal, 
  Layers, 
  Rocket, 
  CheckCircle2, 
  Sparkles,
  ArrowLeft
} from 'lucide-react';

const BootcampHome = ({ studentData }) => {
  const navigate = useNavigate();
  const { bootcampId } = useParams();
  
  const bootcampConfig = getBootcampConfig(bootcampId || 'python-with-ai');
  
  if (!bootcampConfig) {
    return <NotFound message="Bootcamp Not Found" />;
  }

  const [completedDays, setCompletedDays] = useState([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(bootcampConfig.completedKey) || '[]');
      setCompletedDays(saved);
    } catch {
      setCompletedDays([]);
    }
  }, [bootcampConfig.completedKey]);

  const progressPercent = bootcampConfig.days.length > 0 
    ? Math.round((completedDays.length / bootcampConfig.days.length) * 100)
    : 0;

  const handleSelectDay = (day) => {
    if (day.status === 'locked' || day.status === 'coming_soon' || day.status === 'closed') {
      return;
    }
    const targetRoute = `/bootcamps/${bootcampConfig.slug}/day/${day.id}`;
    if (studentData) {
      navigate(targetRoute);
    } else {
      navigate(`/register?redirect=${encodeURIComponent(targetRoute)}`);
    }
  };

  const colorClasses = {
    purple: {
      lightBg: 'bg-purple-50',
      lightText: 'text-purple-600',
      textMain: 'text-purple-700',
      border: 'border-purple-200',
      gradient: 'from-purple-600 to-purple-500'
    },
    blue: {
      lightBg: 'bg-blue-50',
      lightText: 'text-blue-600',
      textMain: 'text-blue-700',
      border: 'border-blue-200',
      gradient: 'from-blue-600 to-blue-500'
    },
    orange: {
      lightBg: 'bg-orange-50',
      lightText: 'text-orange-600',
      textMain: 'text-orange-700',
      border: 'border-orange-200',
      gradient: 'from-orange-600 to-orange-500'
    }
  };

  const activeColor = colorClasses[bootcampConfig.accentColor] || colorClasses.purple;

  return (
    <div className="min-h-screen bg-background relative flex flex-col overflow-hidden">
      {/* Background soft ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
        <div className={`absolute -top-24 -left-24 w-96 h-96 rounded-full bg-${bootcampConfig.accentColor}-100/40 blur-3xl`} />
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-secondary-light/50 blur-3xl" />
        <div className="absolute -bottom-24 left-1/4 w-96 h-96 rounded-full bg-accent-light/40 blur-3xl" />
      </div>

      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <img 
              src="https://res.cloudinary.com/dwv8kc9vb/image/upload/v1788465282/KAIZEN_Q_EVENTS_kxjtz4.png" 
              alt="Kaizen Q Bootcamps" 
              className="h-10 sm:h-11 w-auto object-contain cursor-pointer"
              onClick={() => navigate('/')}
            />
            <div className="hidden sm:block border-l border-gray-200 pl-3.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Kaizen Q Bootcamps</span>
              <h2 className="text-xs font-semibold text-text-main">{bootcampConfig.name}</h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link to="/" className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors flex items-center gap-1.5 mr-2">
              <ArrowLeft size={16} /> Back to Bootcamps
            </Link>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${activeColor.lightBg} ${activeColor.textMain} border ${activeColor.border}`}>
              <Sparkles size={13} className={activeColor.lightText} />
              {bootcampConfig.tagline}
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
            <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full ${activeColor.lightBg} border ${activeColor.border} ${activeColor.textMain} text-xs font-semibold mb-3`}>
              <span className="text-lg">{bootcampConfig.icon}</span>
              <span className="uppercase tracking-wider">{bootcampConfig.name.toUpperCase()}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-main tracking-tight leading-tight mb-2.5">
              {bootcampConfig.name}
            </h1>

            <p className={`text-lg sm:text-xl font-semibold ${activeColor.textMain} mb-2`}>
              {bootcampConfig.tagline.toUpperCase()}
            </p>

            <p className="text-sm sm:text-base text-text-muted max-w-xl mx-auto leading-relaxed mb-4 font-light">
              &ldquo;{bootcampConfig.description}&rdquo;
            </p>

            <p className="text-[11px] uppercase tracking-widest text-text-muted font-semibold">
              Learn &bull; Build &bull; Deploy &bull; Innovate
            </p>
          </motion.div>
        </section>

        {/* Student Progress Section */}
        <section className="mb-8 md:mb-10">
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-soft border border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Your Learning Journey</span>
                <h3 className="text-lg sm:text-xl font-bold text-text-main">{bootcampConfig.name} Progress</h3>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-xl sm:text-2xl font-extrabold text-primary font-mono">
                  {progressPercent}%
                </span>
                <span className="text-xs text-text-muted font-medium">
                  ({completedDays.length} of {bootcampConfig.days.length} Completed)
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden mb-4">
              <motion.div 
                className={`h-full bg-gradient-to-r ${activeColor.gradient} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Days status row */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
              {bootcampConfig.days.map((d) => {
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
              Complete the current day's tasks. Upcoming days unlock as the bootcamp progresses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {bootcampConfig.days.map((day) => (
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

      {/* Footer */}
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
