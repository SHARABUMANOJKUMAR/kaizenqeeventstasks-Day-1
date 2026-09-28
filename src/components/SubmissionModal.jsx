import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Loader2 } from 'lucide-react';

const SubmissionModal = ({ onClose, onSubmit, isSubmitting, totalQuestions, answeredCount }) => {
  const unansweredCount = totalQuestions - answeredCount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden"
      >
        <div className="p-6 md:p-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-warning-light rounded-full flex items-center justify-center text-warning-700">
              <AlertTriangle size={32} />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-center text-text-main mb-2">Ready to submit?</h2>
          <p className="text-center text-text-muted mb-6">
            Once submitted, you cannot change your answers.
          </p>

          <div className="bg-gray-50 rounded-xl p-4 space-y-2 mb-8 border border-gray-100">
            <div className="flex justify-between items-center text-sm">
              <span className="text-text-muted">Answered</span>
              <span className="font-semibold text-success">{answeredCount} / {totalQuestions}</span>
            </div>
            {unansweredCount > 0 && (
              <div className="flex justify-between items-center text-sm">
                <span className="text-text-muted">Unanswered</span>
                <span className="font-semibold text-accent">{unansweredCount}</span>
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <button 
              onClick={onClose}
              disabled={isSubmitting}
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-text-main font-medium hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              Go Back
            </button>
            <button 
              onClick={onSubmit}
              disabled={isSubmitting}
              className="flex-1 bg-primary hover:bg-primary-600 text-white font-medium px-4 py-3 rounded-xl transition-colors shadow-soft flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isSubmitting ? (
                <><Loader2 size={18} className="animate-spin" /> Submitting...</>
              ) : (
                'Submit Assessment'
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SubmissionModal;
