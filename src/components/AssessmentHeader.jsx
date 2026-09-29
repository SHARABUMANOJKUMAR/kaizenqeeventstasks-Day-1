import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Timer from './Timer';

const AssessmentHeader = ({ 
  studentName, 
  dayConfig,
  timeRemaining, 
  setTimeRemaining, 
  onTimeUp 
}) => {
  const navigate = useNavigate();

  const dayNumber = dayConfig?.dayNumber || 1;
  const dayTitle = dayConfig?.shortTitle || dayConfig?.title || "Python Foundations";

  return (
    <header className="bg-white shadow-xs sticky top-0 z-40 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left: Back button + Logo + Title */}
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium text-text-muted hover:text-primary hover:bg-primary-50 transition-colors shrink-0"
            title="Return to Bootcamp Home"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to Bootcamp</span>
            <span className="sm:hidden">Back</span>
          </button>

          <div className="h-6 w-px bg-gray-200 shrink-0 hidden sm:block" />

          <img 
            src="https://res.cloudinary.com/dwv8kc9vb/image/upload/v1788465282/KAIZEN_Q_EVENTS_kxjtz4.png" 
            alt="Kaizen Q Bootcamps" 
            className="h-9 sm:h-11 w-auto object-contain shrink-0"
          />

          <div className="hidden lg:block border-l-2 border-gray-200 pl-3">
            <h1 className="text-primary font-bold text-sm leading-tight uppercase tracking-wider">
              KAIZEN Q BOOTCAMPS
            </h1>
            <p className="text-xs text-text-muted">Python with AI</p>
          </div>

          {/* Active Day badge */}
          <div className="truncate pl-1">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-primary-50 text-primary-700 border border-primary-200">
              Day {dayNumber}
            </span>
            <span className="ml-2 text-xs sm:text-sm font-semibold text-text-main hidden md:inline truncate">
              {dayTitle}
            </span>
          </div>
        </div>

        {/* Right: Student info + Timer */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {studentName && (
            <div className="hidden sm:flex flex-col items-end mr-1 sm:mr-3 border-r border-gray-100 pr-3">
              <span className="text-xs sm:text-sm font-semibold text-text-main truncate max-w-[140px]">
                {studentName}
              </span>
              <span className="text-[11px] text-text-muted">
                Day {dayNumber} Assessment
              </span>
            </div>
          )}
          
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
