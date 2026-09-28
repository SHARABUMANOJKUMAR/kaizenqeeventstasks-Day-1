import React from 'react';
import Timer from './Timer';

const AssessmentHeader = ({ studentName, timeRemaining, setTimeRemaining, onTimeUp }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <h1 className="text-primary font-bold text-lg leading-tight">KAIZEN Q LMS</h1>
            <p className="text-xs text-text-muted">Python with AI</p>
          </div>
          <div className="md:hidden">
            <h1 className="text-primary font-bold text-md">Kaizen Q</h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end mr-4 border-r border-gray-100 pr-4">
            <span className="text-sm font-medium text-text-main">{studentName}</span>
            <span className="text-xs text-text-muted">Day 1 Assessment</span>
          </div>
          
          <Timer 
            timeRemaining={timeRemaining} 
            setTimeRemaining={setTimeRemaining} 
            onTimeUp={onTimeUp} 
          />
        </div>
      </div>
    </header>
  );
};

export default AssessmentHeader;
