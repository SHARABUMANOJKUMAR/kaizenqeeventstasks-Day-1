import React, { useEffect } from 'react';
import { Clock3 } from 'lucide-react';

const Timer = ({ timeRemaining, setTimeRemaining, onTimeUp }) => {
  
  useEffect(() => {
    if (timeRemaining <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeRemaining(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, setTimeRemaining, onTimeUp]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const isWarning = timeRemaining < 300; // less than 5 minutes
  const isDanger = timeRemaining < 60;   // less than 1 minute

  return (
    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-lg font-bold transition-colors
      ${isDanger ? 'bg-red-50 text-red-600' : 
        isWarning ? 'bg-warning-light text-warning-700' : 'bg-primary-50 text-primary-700'}`}
    >
      <Clock3 size={18} className={isDanger ? 'animate-pulse' : ''} />
      {formatTime(timeRemaining)}
    </div>
  );
};

export default Timer;
