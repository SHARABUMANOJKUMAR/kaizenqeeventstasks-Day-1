import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock3, ListChecks, CheckCircle2, Lock, Sparkles, AlertCircle } from 'lucide-react';

const DayCard = ({ day, isCompleted, onSelect }) => {
  const [timeLeft, setTimeLeft] = useState('');
  const [isTimeLocked, setIsTimeLocked] = useState(false);

  useEffect(() => {
    if (!day.unlockTime) {
      setIsTimeLocked(false);
      return;
    }

    const target = new Date(day.unlockTime).getTime();

    const update = () => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff <= 0) {
        setIsTimeLocked(false);
        setTimeLeft('');
        return;
      }
      
      setIsTimeLocked(true);
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / 1000 / 60) % 60);
      const s = Math.floor((diff / 1000) % 60);
      
      let str = '';
      if (d > 0) str += `${d}d `;
      str += `${h}h ${m}m ${s}s`;
      setTimeLeft(str);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [day.unlockTime]);

  const isClosed = day.status === 'closed';
  const isLockedStatus = day.status === 'locked' || day.status === 'coming_soon';
  const isDisabled = isClosed || isLockedStatus || isTimeLocked;

  return (
    <motion.div
      whileHover={!isDisabled ? { y: -6, scale: 1.01 } : {}}
      whileTap={!isDisabled ? { scale: 0.99 } : {}}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`relative bg-surface rounded-2xl p-5 sm:p-6 shadow-soft border transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full
        ${isClosed ? 'border-gray-200 opacity-85 bg-gray-50/40' : ''}
        ${isLockedStatus ? 'border-gray-200/80 opacity-75 bg-gray-50/30' : ''}
        ${!isDisabled && isCompleted ? 'border-emerald-200 shadow-emerald-500/5' : ''}
        ${!isDisabled && !isCompleted ? `${day.theme.cardBorder} hover:shadow-soft-lg ${day.theme.hoverBorder}` : ''}
      `}
    >
      {/* Soft background gradient accent */}
      {!isDisabled && (
        <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${day.theme.glowBg} rounded-full blur-2xl pointer-events-none transform translate-x-12 -translate-y-12 transition-opacity group-hover:opacity-100 opacity-60`} />
      )}

      <div className="flex-1 flex flex-col">
        {/* Top bar: Day label + Status */}
        <div className="flex items-center justify-between gap-2 mb-3 relative z-10">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${day.theme.badgeBg} ${day.theme.badgeText}`}>
            <Sparkles size={12} />
            Day {day.dayNumber}
          </span>

          {isClosed ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-gray-200">
              <CheckCircle2 size={13} className="text-gray-500" />
              Submissions Closed
            </span>
          ) : isLockedStatus ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
              <Lock size={12} />
              Coming Soon
            </span>
          ) : isTimeLocked ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-600 border border-orange-200">
              <Clock3 size={12} />
              Locked
            </span>
          ) : isCompleted ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <CheckCircle2 size={13} className="text-emerald-600" />
              Completed
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className={`text-xl md:text-2xl font-bold mb-2 tracking-tight transition-colors relative z-10
          ${isDisabled ? 'text-gray-700' : 'text-text-main group-hover:text-primary'}
        `}>
          {day.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-muted mb-4 leading-relaxed relative z-10">
          {day.description}
        </p>

        {/* Closed / Coming soon banner note */}
        {isClosed && (
          <div className="mb-4 p-2.5 rounded-xl bg-gray-100/90 border border-gray-200 text-xs text-gray-600 flex items-center gap-2">
            <AlertCircle size={15} className="text-gray-500 shrink-0" />
            <span>Task completed. Submissions closed.</span>
          </div>
        )}

        {isLockedStatus && (
          <div className="mb-4 p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-500 flex items-center gap-2">
            <Lock size={14} className="text-gray-400 shrink-0" />
            <span>Unlocks on scheduled day.</span>
          </div>
        )}

        {/* Topics Pills */}
        <div className="mt-auto pt-2 mb-5 relative z-10">
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
              : isLockedStatus
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200' 
                : isTimeLocked
                  ? 'bg-orange-50 text-orange-600 cursor-not-allowed border border-orange-200 animate-pulse'
                  : isCompleted
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/10'
                    : `${day.theme.btnBg} text-white shadow-soft group-hover:shadow-soft-lg`
            }
          `}
        >
          {isClosed ? (
            <>
              <CheckCircle2 size={15} />
              Day {day.dayNumber} Submissions Closed
            </>
          ) : isLockedStatus ? (
            <>
              <Lock size={15} />
              Coming Soon
            </>
          ) : isTimeLocked ? (
            <>
              <Clock3 size={15} />
              Unlocks in {timeLeft}
            </>
          ) : isCompleted ? (
            <>
              Review Day {day.dayNumber} Tasks
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </>
          ) : (
            <>
              Start Day {day.dayNumber}
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default DayCard;
