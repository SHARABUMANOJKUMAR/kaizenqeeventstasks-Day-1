import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock3, ListChecks, CheckCircle2, Lock, Sparkles } from 'lucide-react';

const DayCard = ({ day, isCompleted, onSelect }) => {
  const isLocked = day.status === 'locked' || day.status === 'coming_soon';

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`relative bg-surface rounded-2xl p-6 md:p-7 shadow-soft border transition-all duration-300 flex flex-col justify-between overflow-hidden group
        ${isCompleted ? 'border-emerald-200 shadow-emerald-500/5' : `${day.theme.cardBorder} hover:shadow-soft-lg ${day.theme.hoverBorder}`}
      `}
    >
      {/* Soft background gradient accent */}
      <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${day.theme.glowBg} rounded-full blur-2xl pointer-events-none transform translate-x-12 -translate-y-12 transition-opacity group-hover:opacity-100 opacity-60`} />

      <div>
        {/* Top bar: Day label + Status */}
        <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${day.theme.badgeBg} ${day.theme.badgeText}`}>
            <Sparkles size={12} />
            Day {day.dayNumber}
          </span>

          {isCompleted ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <CheckCircle2 size={13} className="text-emerald-600" />
              Completed
            </span>
          ) : isLocked ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
              <Lock size={12} />
              {day.status === 'coming_soon' ? 'Coming Soon' : 'Locked'}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50/80 text-emerald-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-text-main mb-2.5 tracking-tight group-hover:text-primary transition-colors relative z-10">
          {day.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-muted mb-5 leading-relaxed relative z-10">
          {day.description}
        </p>

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
            <ListChecks size={15} className="text-primary-400" />
            <span>{day.totalQuestions} Questions</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock3 size={15} className="text-amber-500" />
            <span>{day.durationMinutes} Minutes</span>
          </div>
        </div>

        <button
          onClick={() => onSelect(day)}
          disabled={isLocked}
          className={`w-full py-3 px-4 rounded-xl font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-xs
            ${isLocked 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : isCompleted
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/10'
                : `${day.theme.btnBg} text-white shadow-soft group-hover:shadow-soft-lg`
            }
          `}
        >
          {isLocked ? (
            <>
              <Lock size={15} />
              {day.status === 'coming_soon' ? 'Coming Soon' : 'Locked'}
            </>
          ) : isCompleted ? (
            <>
              Review Tasks
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </>
          ) : (
            <>
              View Tasks
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default DayCard;
