import React from 'react';

const QuestionNavigator = ({ questions, answers, visited, currentIndex, onNavigate, showReview }) => {
  
  return (
    <div className="card p-4 h-full flex flex-col">
      <div className="mb-4 pb-4 border-b border-gray-100">
        <h3 className="font-semibold text-text-main">Navigator</h3>
        <div className="flex gap-4 mt-3 text-xs text-text-muted">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-success-light border border-success"></div>
            <span>Answered</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-primary-100 border border-primary"></div>
            <span>Current</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2 overflow-y-auto pr-2 pb-4">
        {questions.map((q, index) => {
          const isAnswered = answers[q.id] !== undefined && answers[q.id] !== '';
          const isCurrent = !showReview && index === currentIndex;
          const isVisited = visited.includes(index);

          let btnClass = "w-10 h-10 rounded-lg text-sm font-medium flex items-center justify-center transition-all ";
          
          if (isCurrent) {
            btnClass += "bg-primary-100 text-primary-700 border-2 border-primary shadow-sm scale-110";
          } else if (isAnswered) {
            btnClass += "bg-success-light text-success-700 border border-success";
          } else if (isVisited) {
            btnClass += "bg-secondary-light text-secondary-700 border border-secondary border-dashed";
          } else {
            btnClass += "bg-gray-50 text-gray-500 border border-gray-200 hover:bg-gray-100";
          }

          return (
            <button
              key={q.id}
              onClick={() => onNavigate(index)}
              className={btnClass}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      
      {showReview && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="bg-primary-50 text-primary-700 rounded-lg p-3 text-center text-sm font-medium border border-primary-200">
            Reviewing Answers
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionNavigator;
