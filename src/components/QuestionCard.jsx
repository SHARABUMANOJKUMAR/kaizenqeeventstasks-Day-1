import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import MCQQuestion from './MCQQuestion';
import CodeQuestion from './CodeQuestion';

const QuestionCard = ({ 
  question, 
  questionIndex, 
  totalQuestions, 
  currentAnswer, 
  onAnswer, 
  onNext, 
  onPrev 
}) => {
  
  const isLast = questionIndex === totalQuestions - 1;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="card flex flex-col h-full overflow-hidden"
    >
      <div className="p-6 md:p-8 flex-1 overflow-y-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
            Question {questionIndex + 1} of {totalQuestions}
          </span>
          {question.type === 'code' && (
            <span className="bg-accent-light text-orange-600 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              Programming Task
            </span>
          )}
        </div>

        <div className="prose max-w-none mb-8">
          {question.type === 'mcq' ? (
            <MCQQuestion 
              question={question} 
              currentAnswer={currentAnswer} 
              onAnswer={(ans) => onAnswer(question.id, ans)} 
            />
          ) : (
            <CodeQuestion 
              question={question} 
              currentAnswer={currentAnswer} 
              onAnswer={(ans) => onAnswer(question.id, ans)} 
            />
          )}
        </div>
      </div>

      <div className="bg-gray-50 border-t border-gray-100 p-4 md:px-8 flex justify-between items-center">
        <button
          onClick={onPrev}
          disabled={questionIndex === 0}
          className="btn-secondary flex items-center gap-2 px-4 py-2"
        >
          <ArrowLeft size={18} /> Previous
        </button>

        <button
          onClick={onNext}
          className="btn-primary flex items-center gap-2 px-6 py-2"
        >
          {isLast ? (
            <>Review Answers <Check size={18} /></>
          ) : (
            <>Next <ArrowRight size={18} /></>
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default QuestionCard;
