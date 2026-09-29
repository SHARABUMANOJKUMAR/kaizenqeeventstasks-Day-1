import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock3, ListChecks, CheckCircle2, Lock, Sparkles, AlertCircle } from 'lucide-react';

const DayCard = ({ day, isCompleted, onSelect }) => {
  const isClosed = day.status === 'closed';
  const isLocked = day.status === 'locked' || day.status === 'coming_soon';
  const isDisabled = isClosed || isLocked;

  return (
    <motion.div
      whileHover={!isDisabled ? { y: -6, scale: 1.01 } : {}}
      whileTap={!isDisabled ? { scale: 0.99 } : {}}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`relative bg-surface rounded-2xl p-6 md:p-7 shadow-soft border transition-all duration-300 flex flex-col justify-between overflow-hidden group
        ${isClosed ? 'border-gray-200 opacity-85 bg-gray-50/40' : ''}
        ${isLocked ? 'border-gray-200/80 opacity-75 bg-gray-50/30' : ''}
        ${!isDisabled && isCompleted ? 'border-emerald-200 shadow-emerald-500/5' : ''}
        ${!isDisabled && !isCompleted ? `${day.theme.cardBorder} hover:shadow-soft-lg ${day.theme.hoverBorder}` : ''}
      `}
    >
      {/* Soft background gradient accent */}
      {!isDisabled && (
        <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${day.theme.glowBg} rounded-full blur-2xl pointer-events-none transform translate-x-12 -translate-y-12 transition-opacity group-hover:opacity-100 opacity-60`} />
      )}

      <div>
        {/* Top bar: Day label + Status */}
        <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${day.theme.badgeBg} ${day.theme.badgeText}`}>
            <Sparkles size={12} />
            Day {day.dayNumber}
          </span>

          {isClosed ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-gray-200">
              <CheckCircle2 size={13} className="text-gray-500" />
              Submissions Closed
            </span>
          ) : isLocked ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
              <Lock size={12} />
              Coming Soon
            </span>
          ) : isCompleted ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <CheckCircle2 size={13} className="text-emerald-600" />
              Completed
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Active Today
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className={`text-xl md:text-2xl font-bold mb-2.5 tracking-tight transition-colors relative z-10
          ${isDisabled ? 'text-gray-700' : 'text-text-main group-hover:text-primary'}
        `}>
          {day.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-muted mb-5 leading-relaxed relative z-10">
          {day.description}
        </p>

        {/* Closed / Coming soon banner note */}
        {isClosed && (
          <div className="mb-5 p-2.5 rounded-xl bg-gray-100/90 border border-gray-200 text-xs text-gray-600 flex items-center gap-2">
            <AlertCircle size={15} className="text-gray-500 shrink-0" />
            <span>Yesterday's task completed. Submissions closed.</span>
          </div>
        )}

        {isLocked && (
          <div className="mb-5 p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-500 flex items-center gap-2">
            <Lock size={14} className="text-gray-400 shrink-0" />
            <span>Unlocks on scheduled day. Focus on Day 2 today!</span>
          </div>
        )}

        {/* Topics Pills */}
        <div className="mb-6 relative z-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
            Topics Covered
          </p>
          <div className="flex flex-wrap gap-1.5">
            {day.topics.map((topic, i) => (
              <span
                key={i}
                className="text-xs px-2.5 py-1 rounded-lg bg-gray-50 text-text-main/80 border border-gray-100 font-medium"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer: Metadata + Action Button */}
      <div className="pt-4 border-t border-gray-100/80 relative z-10">
        <div className="flex items-center justify-between text-xs text-text-muted mb-4">
          <div className="flex items-center gap-1.5">
            <ListChecks size={15} className={isDisabled ? "text-gray-400" : "text-primary-400"} />
            <span>{day.totalQuestions} Questions</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock3 size={15} className={isDisabled ? "text-gray-400" : "text-amber-500"} />
            <span>{day.durationMinutes} Minutes</span>
          </div>
        </div>

        <button
          onClick={() => onSelect(day)}
          disabled={isDisabled}
          className={`w-full py-3 px-4 rounded-xl font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-xs
            ${isClosed
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
              : isLocked 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200' 
                : isCompleted
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/10'
                  : `${day.theme.btnBg} text-white shadow-soft group-hover:shadow-soft-lg`
            }
          `}
        >
          {isClosed ? (
            <>
              <CheckCircle2 size={15} />
              Day 1 Submissions Closed
            </>
          ) : isLocked ? (
            <>
              <Lock size={15} />
              Coming Soon
            </>
          ) : isCompleted ? (
            <>
              Review Tasks
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </>
          ) : (
            <>
              Start Day 2 Tasks
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default DayCard;
