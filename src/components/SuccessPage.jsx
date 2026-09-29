import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Home, Star, Target, Lightbulb, ArrowRight } from 'lucide-react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import { getDayConfig } from '../data/bootcampDays';

const SuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => window.removeEventListener('resize', detectSize);
  }, []);

  // Prevent showing success page if they navigated here directly without submitting
  if (!state) {
    return <Navigate to="/" replace />;
  }

  const name = state?.studentName || 'Student';
  const dayId = state?.dayId || 1;
  const dayConfig = getDayConfig(dayId);
  const nextDayId = dayId < 5 ? dayId + 1 : null;
  const score = state?.score ?? 0;
  const maxScore = state?.maxScore ?? 17;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-[#eff6ff] via-white to-[#f5f3ff] relative overflow-hidden">
      <Confetti
        width={windowDimension.width}
        height={windowDimension.height}
        recycle={false}
        numberOfPieces={500}
        gravity={0.15}
        colors={['#6366f1', '#8b5cf6', '#3b82f6', '#a855f7', '#60a5fa']}
      />
      
      {/* Background blobs for aesthetics */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-60 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-3xl opacity-60 transform translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
        className="max-w-2xl w-full z-10 my-8"
      >
        <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 p-6 sm:p-10 md:p-12 overflow-hidden relative">
          
          <motion.div 
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 12 }}
            className="flex justify-center mb-6"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-200">
              <CheckCircle2 size={44} className="text-white" />
            </div>
          </motion.div>

          {/* Day Completion Header */}
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 mb-3">
              ✓ Day {dayId} Completed
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
              Assessment Submitted Successfully! 🚀
            </h2>
            <p className="text-text-muted text-sm sm:text-base">
              {dayConfig?.title || `Day ${dayId} Assessment`}
            </p>
          </div>

          {/* Student Greeting */}
          <div className="text-gray-600 text-sm sm:text-base space-y-2 mb-8 text-center">
            <p>Dear <span className="font-bold text-gray-800">{name}</span>,</p>
            <p>Fantastic work! Your assessment for <strong>Day {dayId}</strong> has been received and securely recorded.</p>
          </div>

          {/* Score & Evaluation Card */}
          <div className="bg-gradient-to-br from-gray-50 to-primary-50/30 rounded-2xl p-5 sm:p-6 border border-gray-200/80 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
              
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-xs">
                <span className="text-xs uppercase font-semibold tracking-wider text-text-muted block mb-1">
                  Objective Score
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold text-emerald-600 font-mono">
                  {score} <span className="text-lg text-text-muted font-normal">/ {maxScore}</span>
                </span>
                <span className="text-xs text-emerald-700 block mt-1 font-medium">
                  {Math.round((score / (maxScore || 1)) * 100)}% Accuracy
                </span>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-xs flex flex-col justify-center">
                <span className="text-xs uppercase font-semibold tracking-wider text-text-muted block mb-1">
                  Programming Tasks
                </span>
                <span className="text-lg sm:text-xl font-bold text-amber-600">
                  Pending Evaluation
                </span>
                <span className="text-xs text-text-muted block mt-1">
                  Mentors will review your code
                </span>
              </div>

            </div>
          </div>

          {/* Motivation Quote */}
          <div className="bg-indigo-50/60 border-l-4 border-primary p-4 rounded-r-xl mb-8 text-xs sm:text-sm text-indigo-950 italic">
            &ldquo;Great developers are not born; they are built through continuous learning and daily practice.&rdquo;
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center items-center">
            <button
              onClick={() => navigate('/')}
              className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 text-sm py-3.5 px-8"
            >
              <Home size={18} />
              Back to Bootcamp Home
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default SuccessPage;
