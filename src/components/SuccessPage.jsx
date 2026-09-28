import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Home } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const SuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const score = state?.score || 0;
  const maxScore = state?.maxScore || 17;
  const submissionId = state?.submissionId || 'KQ-PY-D1-XXXX';
  const name = state?.studentName || 'Student';

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-success-light rounded-full blur-3xl opacity-50"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="max-w-xl w-full z-10"
      >
        <div className="card p-10 text-center">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-6"
          >
            <div className="w-24 h-24 bg-success-light rounded-full flex items-center justify-center">
              <CheckCircle2 size={48} className="text-success" />
            </div>
          </motion.div>

          <h2 className="text-3xl font-bold text-text-main mb-2">Assessment Submitted Successfully</h2>
          <p className="text-text-muted mb-8">Great job, {name}! Your responses have been recorded.</p>

          <div className="bg-background rounded-xl p-6 text-left space-y-4 mb-8">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <span className="text-text-muted">Assessment</span>
              <span className="font-semibold text-text-main">Python with AI — Day 1</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <span className="text-text-muted">Objective Score</span>
              <span className="font-semibold text-primary">{score} / {maxScore}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <span className="text-text-muted">Programming Assignment</span>
              <span className="font-medium text-warning">Pending Mentor Evaluation</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-text-muted">Submission ID</span>
              <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">{submissionId}</span>
            </div>
          </div>

          <div className="p-4 bg-primary-50 rounded-xl mb-8">
            <p className="text-sm text-primary-800">
              Your programming answers will be evaluated by the mentor. You will receive your final score later.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="btn-secondary w-full flex items-center justify-center gap-2"
          >
            <Home size={18} /> Return Home
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default SuccessPage;
