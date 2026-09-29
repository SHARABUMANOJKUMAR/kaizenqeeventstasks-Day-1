import React from 'react';
import { useNavigate } from 'react-router-dom';
import { bootcampDays } from '../data/bootcampDays';
import { CheckCircle2, Lock } from 'lucide-react';

const DayNavigation = ({ currentDayId }) => {
  const navigate = useNavigate();
  const currentNum = parseInt(currentDayId, 10);

  // Read completed days from localStorage
  const completedDays = (() => {
    try {
      return JSON.parse(localStorage.getItem('kq_completed_days') || '[]');
    } catch {
      return [];
    }
  })();

  return (
    <div className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 py-2.5 px-4 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-text-muted hidden sm:inline">
          Bootcamp Days:
        </span>

        {/* Scrollable pill container */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none py-0.5 max-w-full">
          {bootcampDays.map((day) => {
            const isCurrent = day.id === currentNum;
            const isCompleted = completedDays.includes(day.id);
            const isLocked = day.status === 'locked' || day.status === 'coming_soon';

            let pillStyle = "px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ";

            if (isCurrent) {
              pillStyle += "bg-primary text-white shadow-sm font-semibold scale-102";
            } else if (isCompleted) {
              pillStyle += "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200";
            } else if (isLocked) {
              pillStyle += "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200";
            } else {
              pillStyle += "bg-gray-50 text-text-main hover:bg-primary-50 hover:text-primary border border-gray-200/80";
            }

            return (
              <button
                key={day.id}
                onClick={() => {
                  if (!isLocked && !isCurrent) {
                    navigate(day.route);
                  }
                }}
                disabled={isLocked || isCurrent}
                aria-current={isCurrent ? "page" : undefined}
                className={pillStyle}
                title={`${day.title} (${day.status})`}
              >
                <span>Day {day.id}</span>
                {isCompleted && !isCurrent && (
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                )}
                {isLocked && (
                  <Lock size={12} className="text-gray-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DayNavigation;
