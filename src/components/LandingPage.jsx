import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, Clock3, ListChecks, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-background">
      {/* Background decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-100 blur-3xl opacity-50"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary-light blur-3xl opacity-50"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full z-10 text-center"
      >
        <div className="mb-6 inline-flex items-center justify-center p-4 bg-white rounded-2xl shadow-soft">
          <Code2 size={48} className="text-primary" />
        </div>
        
        <h2 className="text-primary font-semibold tracking-wider uppercase mb-2">Kaizen Q LMS</h2>
        <h1 className="text-4xl md:text-6xl font-bold text-text-main mb-4 leading-tight">
          Python with AI Bootcamp
        </h1>
        <h3 className="text-2xl md:text-3xl text-text-muted mb-8 font-light">
          DAY 1 &mdash; Python Foundations
        </h3>
        
        <p className="text-lg text-text-muted mb-12 max-w-2xl mx-auto">
          Test your Python fundamentals, logical thinking, and programming skills in this comprehensive assessment.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm min-w-[140px]">
            <ListChecks className="text-secondary mb-2" size={28} />
            <span className="font-semibold text-text-main">21 Questions</span>
            <span className="text-sm text-text-muted">MCQ + Coding</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm min-w-[140px]">
            <Clock3 className="text-warning mb-2" size={28} />
            <span className="font-semibold text-text-main">45 Minutes</span>
            <span className="text-sm text-text-muted">Time Limit</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/register')}
          className="btn-primary text-lg flex items-center justify-center mx-auto gap-2 group"
        >
          Start Assessment
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LandingPage;
