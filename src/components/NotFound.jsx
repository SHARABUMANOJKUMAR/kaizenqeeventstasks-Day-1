import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, AlertCircle, ArrowRight } from 'lucide-react';

const NotFound = ({ 
  message = "Day Not Found", 
  subtitle = "The requested assessment day does not exist in this 5-day bootcamp curriculum." 
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-md w-full bg-white rounded-3xl p-8 shadow-soft border border-gray-100 flex flex-col items-center"
      >
        <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
          <AlertCircle size={32} />
        </div>

        <h2 className="text-2xl font-bold text-text-main mb-2">
          {message}
        </h2>

        <p className="text-sm text-text-muted mb-8 leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col gap-3 w-full">
          {/* Direct link to today's active Day 2 task */}
          <button
            onClick={() => navigate('/day/2')}
            className="btn-primary w-full flex items-center justify-center gap-2 text-sm py-3"
          >
            <span>Start Today&apos;s Task (Day 2)</span>
            <ArrowRight size={16} />
          </button>

          <button
            onClick={() => navigate('/')}
            className="btn-secondary w-full flex items-center justify-center gap-2 text-sm py-3"
          >
            <ArrowLeft size={16} />
            Back to Bootcamp Home
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
