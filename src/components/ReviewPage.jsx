import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, AlertCircle } from 'lucide-react';

const ReviewPage = ({ questions, answers, visited, onNavigate, onSubmitClick }) => {
  const answeredCount = Object.keys(answers).filter(k => answers[k] !== undefined && answers[k] !== '').length;
  const totalCount = questions.length;
  const unansweredCount = totalCount - answeredCount;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="card flex flex-col h-full"
    >
      <div className="p-6 md:p-10 flex-1 overflow-y-auto">
        <h2 className="text-2xl font-bold text-text-main mb-6">Review Your Answers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-success-light rounded-xl p-4 flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-bold text-success-700">{answeredCount}</span>
            <span className="text-sm font-medium text-success-800">Answered</span>
          </div>
          <div className="bg-accent-light rounded-xl p-4 flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-bold text-accent-700">{unansweredCount}</span>
            <span className="text-sm font-medium text-accent-800">Unanswered</span>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-bold text-gray-700">{totalCount}</span>
            <span className="text-sm font-medium text-gray-600">Total Questions</span>
          </div>
        </div>

        {unansweredCount > 0 && (
          <div className="bg-warning-light p-4 rounded-xl flex items-start gap-3 mb-8">
            <AlertCircle className="text-warning-700 shrink-0 mt-0.5" size={20} />
            <p className="text-sm text-warning-800 font-medium">
              You have {unansweredCount} unanswered {unansweredCount === 1 ? 'question' : 'questions'}. 
              Are you sure you want to submit?
            </p>
          </div>
        )}

        <div className="space-y-3">
          <h3 className="font-semibold text-text-main mb-4">Question Summary</h3>
          {questions.map((q, index) => {
            const hasAnswer = answers[q.id] !== undefined && answers[q.id] !== '';
            return (
              <div 
                key={q.id}
                onClick={() => onNavigate(index)}
                className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-primary-200 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-text-muted w-6">{index + 1}.</span>
                  <span className="text-sm font-medium truncate max-w-[200px] sm:max-w-xs md:max-w-md">
                    {q.type === 'mcq' ? 'Multiple Choice' : 'Programming Task'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {hasAnswer ? (
                    <span className="text-xs font-medium text-success flex items-center gap-1">
                      <CheckCircle2 size={14} /> Answered
                    </span>
                  ) : (
                    <span className="text-xs font-medium text-accent flex items-center gap-1">
                      <Circle size={14} /> Unanswered
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-gray-50 border-t border-gray-100 p-4 md:px-8 flex justify-end">
        <button
          onClick={onSubmitClick}
          className="btn-primary w-full md:w-auto"
        >
          Submit Assessment
        </button>
      </div>
    </motion.div>
  );
};

export default ReviewPage;
