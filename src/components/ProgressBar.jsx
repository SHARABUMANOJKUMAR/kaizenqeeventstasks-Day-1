import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full bg-white border-b border-gray-100">
      <div className="h-1.5 w-full bg-gray-100 overflow-hidden">
        <motion.div 
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-xs text-text-muted">
        <span>Progress</span>
        <span>{current} of {total} Answered</span>
      </div>
    </div>
  );
};

export default ProgressBar;
