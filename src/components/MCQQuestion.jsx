import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const MCQQuestion = ({ question, currentAnswer, onAnswer }) => {
  
  // Custom renderer for ReactMarkdown to handle code blocks
  const components = {
    code({node, inline, className, children, ...props}) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline ? (
        <div className="bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-xl overflow-x-auto text-sm font-mono my-4 shadow-inner">
          <code className={className} {...props}>
            {children}
          </code>
        </div>
      ) : (
        <code className="bg-gray-100 text-primary-700 px-1.5 py-0.5 rounded font-mono text-sm" {...props}>
          {children}
        </code>
      )
    }
  }

  return (
    <div className="w-full select-none" onDragStart={(e) => e.preventDefault()}>
      <div className="text-lg text-text-main font-medium mb-6 leading-relaxed">
        <ReactMarkdown components={components}>
          {question.question}
        </ReactMarkdown>
      </div>

      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = currentAnswer === option;
          const letter = String.fromCharCode(65 + index); // A, B, C, D
          
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => onAnswer(option)}
              className={`relative cursor-pointer p-4 rounded-xl border-2 transition-all duration-200 flex items-center group
                ${isSelected 
                  ? 'border-primary bg-primary-50/50 shadow-sm' 
                  : 'border-gray-100 bg-white hover:border-primary-200 hover:bg-gray-50'
                }
              `}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-semibold mr-4 transition-colors
                ${isSelected ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-primary-100 group-hover:text-primary'}
              `}>
                {letter}
              </div>
              
              <div className="flex-1 text-text-main">
                <ReactMarkdown components={components}>
                  {option}
                </ReactMarkdown>
              </div>

              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute right-4 text-primary"
                >
                  <CheckCircle2 size={24} />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MCQQuestion;
