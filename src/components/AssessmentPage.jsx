import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getBootcampConfig } from '../data/bootcamps';
import { getQuestionsForDay } from '../data/questionsRegistry';
import AssessmentHeader from './AssessmentHeader';
import DayNavigation from './DayNavigation';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import QuestionNavigator from './QuestionNavigator';
import ReviewPage from './ReviewPage';
import SubmissionModal from './SubmissionModal';
import NotFound from './NotFound';
import { ListChecks } from 'lucide-react';

const AssessmentPage = ({ studentData, onComplete }) => {
  const params = useParams();
  const navigate = useNavigate();

  // Determine current day from route params (e.g. /day/:dayId) or default to 1
  const bootcampId = params.bootcampId || 'python-with-ai';
  const dayId = params.dayId ? parseInt(params.dayId, 10) : 1;
  const bootcampConfig = useMemo(() => getBootcampConfig(bootcampId), [bootcampId]);
  const dayConfig = useMemo(() => bootcampConfig?.days.find(d => d.id === dayId || d.dayNumber === dayId), [bootcampConfig, dayId]);
  const questions = useMemo(() => getQuestionsForDay(dayId, bootcampId), [dayId, bootcampId]);

  const TOTAL_TIME = (dayConfig?.durationMinutes || 45) * 60; // in seconds
  const storageKey = `kq_${bootcampId}_assessment_day_${dayId}`;

  // Read initial saved draft for this specific day
  const getInitialDraft = () => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) return JSON.parse(saved);
      // Legacy backward-compatibility for Day 1
      if (bootcampId === 'python-with-ai' && dayId === 1) {
        const legacy = localStorage.getItem('kq_assessment');
        if (legacy) return JSON.parse(legacy);
      }
    } catch (e) {
      console.error("Error reading saved draft", e);
    }
    return null;
  };

  const initialData = getInitialDraft();

  const EXAM_VIOLATION_COOLDOWN_MINUTES = 2; // Configurable cooldown

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(initialData?.currentQuestionIndex || 0);
  const [answers, setAnswers] = useState(initialData?.answers || {});
  const [timeRemaining, setTimeRemaining] = useState(initialData?.timeRemaining || TOTAL_TIME);
  const [visited, setVisited] = useState(initialData?.visited || [0]);
  const [violations, setViolations] = useState(initialData?.violations || []);
  
  const [isExamLocked, setIsExamLocked] = useState(initialData?.isExamLocked || false);
  const [cooldownUntil, setCooldownUntil] = useState(initialData?.cooldownUntil || null);
  const [hasStartedExam, setHasStartedExam] = useState(initialData?.hasStartedExam || false);
  const [lastViolation, setLastViolation] = useState(initialData?.lastViolation || null);

  const [showReview, setShowReview] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [cooldownRemaining, setCooldownRemaining] = useState(0);

  // Cooldown Timer Logic
  useEffect(() => {
    let interval;
    if (isExamLocked && cooldownUntil) {
      interval = setInterval(() => {
        const remaining = Math.max(0, Math.floor((cooldownUntil - new Date().getTime()) / 1000));
        setCooldownRemaining(remaining);
        
        if (remaining <= 0) {
          setIsExamLocked(false);
          setCooldownUntil(null);
          // Re-enter Fullscreen automatically if possible
          try { document.documentElement.requestFullscreen().catch(() => {}); } catch(e) {}
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isExamLocked, cooldownUntil]);

  // When dayId changes, reload state for that day
  useEffect(() => {
    const draft = getInitialDraft();
    setCurrentQuestionIndex(draft?.currentQuestionIndex || 0);
    setAnswers(draft?.answers || {});
    setTimeRemaining(draft?.timeRemaining || TOTAL_TIME);
    setVisited(draft?.visited || [0]);
    setViolations(draft?.violations || []);
    setIsExamLocked(draft?.isExamLocked || false);
    setCooldownUntil(draft?.cooldownUntil || null);
    setHasStartedExam(draft?.hasStartedExam || false);
    setLastViolation(draft?.lastViolation || null);
    setShowReview(false);
    setShowSubmitModal(false);
  }, [dayId, TOTAL_TIME]);

  // Autosave progress for this specific day
  useEffect(() => {
    if (!dayConfig) return;
    const dataToSave = {
      dayId,
      currentQuestionIndex,
      answers,
      timeRemaining,
      visited,
      violations,
      isExamLocked,
      cooldownUntil,
      hasStartedExam,
      lastViolation
    };
    localStorage.setItem(storageKey, JSON.stringify(dataToSave));
  }, [dayId, currentQuestionIndex, answers, timeRemaining, visited, violations, isExamLocked, cooldownUntil, hasStartedExam, lastViolation, dayConfig, storageKey]);

  // Anti-Cheat System (No Copy, No Right-Click, No Screenshots/Print, Tab Tracking)
  useEffect(() => {
    if (!hasStartedExam || isExamLocked) return;

    const lockExam = (type) => {
      setViolations(prev => [...prev, { type, timestamp: new Date().toISOString() }]);
      setLastViolation(type);
      setIsExamLocked(true);
      const cooldownMs = EXAM_VIOLATION_COOLDOWN_MINUTES * 60 * 1000;
      setCooldownUntil(new Date().getTime() + cooldownMs);
      
      // Exit fullscreen safely to show modal clearly
      try {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        }
      } catch(e) {}
    };

    const preventContextMenu = (e) => { e.preventDefault(); lockExam('RIGHT_CLICK_ATTEMPT'); };
    
    const preventCopyPaste = (e) => {
      e.preventDefault();
      lockExam(`${e.type.toUpperCase()}_ATTEMPT`);
    };

    const preventShortcuts = (e) => {
      if (e.key === 'PrintScreen' || e.keyCode === 44) {
        try { navigator.clipboard.writeText(''); } catch (_) {}
        e.preventDefault();
        lockExam('SCREENSHOT_SHORTCUT_ATTEMPT');
      }
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key.toLowerCase() === 's') {
        try { navigator.clipboard.writeText(''); } catch (_) {}
        e.preventDefault();
        lockExam('SCREENSHOT_SHORTCUT_ATTEMPT');
      }
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key.toLowerCase() === 'i' || e.key.toLowerCase() === 'j' || e.key.toLowerCase() === 'c')) {
        e.preventDefault();
        lockExam('DEVTOOLS_ATTEMPT');
      }
      if (e.key === 'F12') {
        e.preventDefault();
        lockExam('DEVTOOLS_ATTEMPT');
      }
      if (e.ctrlKey || e.metaKey) {
        const forbiddenKeys = ['c', 'v', 'x', 'p', 's', 'a', 'u'];
        if (forbiddenKeys.includes(e.key.toLowerCase())) {
          e.preventDefault();
          if (e.key.toLowerCase() === 'p') lockExam('PRINT_ATTEMPT');
          else lockExam(`SUSPICIOUS_KEYBOARD_SHORTCUT`);
        }
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden || document.visibilityState === 'hidden') {
        lockExam('VISIBILITY_CHANGE');
      }
    };

    const handleWindowBlur = () => {
      lockExam('WINDOW_BLUR');
    };

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && hasStartedExam && !isExamLocked) {
        lockExam('FULLSCREEN_EXIT');
      }
    };

    document.addEventListener("contextmenu", preventContextMenu);
    document.addEventListener("copy", preventCopyPaste);
    document.addEventListener("cut", preventCopyPaste);
    document.addEventListener("paste", preventCopyPaste);
    document.addEventListener("keydown", preventShortcuts);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    window.addEventListener("blur", handleWindowBlur);

    return () => {
      document.removeEventListener("contextmenu", preventContextMenu);
      document.removeEventListener("copy", preventCopyPaste);
      document.removeEventListener("cut", preventCopyPaste);
      document.removeEventListener("paste", preventCopyPaste);
      document.removeEventListener("keydown", preventShortcuts);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, [hasStartedExam, isExamLocked]);

  // Validation: If Day does not exist
  if (!dayConfig || !questions) {
    return (
      <NotFound 
        message={`Day ${params.dayId || ''} Not Found`}
        subtitle="This assessment day does not exist in the 5-day bootcamp curriculum."
      />
    );
  }

  // Validation: If Day is closed (e.g. Day 1 yesterday's task)
  if (dayConfig.status === 'closed') {
    return (
      <NotFound 
        message={`Day ${dayConfig.dayNumber}: Submissions Closed`}
        subtitle="Yesterday's task for Day 1 (Python Foundations) has concluded and submissions are now closed. Today's active task is Day 2!"
      />
    );
  }

  // Validation: If Day is locked / coming soon (e.g. Days 3, 4, 5)
  if (dayConfig.status === 'locked' || dayConfig.status === 'coming_soon') {
    return (
      <NotFound 
        message={`Day ${dayConfig.dayNumber}: Coming Soon`}
        subtitle={`Day ${dayConfig.dayNumber} (${dayConfig.title}) is locked and will unlock on its scheduled day. Please complete today's Day 2 assessment!`}
      />
    );
  }

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleNavigate = (index) => {
    setCurrentQuestionIndex(index);
    if (!visited.includes(index)) {
      setVisited(prev => [...prev, index]);
    }
    setShowReview(false);
    setShowMobileNav(false);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      handleNavigate(currentQuestionIndex + 1);
    } else {
      setShowReview(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      handleNavigate(currentQuestionIndex - 1);
    }
  };

  const handleTimeUp = () => {
    setShowSubmitModal(true);
  };

  const submitAssessment = async () => {
    // Enforce Day 5 Submission Time (Oct 2, 2026 at 17:35 IST)
    if (dayConfig.id === 5) {
      const submissionStartTime = new Date("2026-10-02T17:35:00+05:30").getTime();
      if (new Date().getTime() < submissionStartTime) {
        alert("Submissions for Day 5 are locked until October 2, 2026 at 5:35 PM. Your progress is saved locally. Please come back and click Submit after the scheduled time!");
        return;
      }
    }

    setIsSubmitting(true);
    
    // Calculate objective score
    let score = 0;
    const maxScore = questions.filter(q => q.type === 'mcq').length;
    
    questions.forEach(q => {
      if (q.type === 'mcq' && answers[q.id] === q.correctAnswer) {
        score += q.marks || 1;
      }
    });

    const submissionId = `KQ-PY-D${dayConfig.id}-${new Date().toISOString().split('T')[0].replace(/-/g, '')}-${Math.floor(1000 + Math.random() * 9000)}`;

    const payload = {
      timestamp: new Date().toISOString(),
      submissionId,
      day: dayConfig.id,
      dayNumber: dayConfig.id,
      assessment: `Day ${dayConfig.id} - ${dayConfig.title}`,
      studentData,
      answers,
      score,
      maxScore,
      correctAnswersCount: score,
      incorrectAnswersCount: maxScore - score,
      timeRemaining,
      timeTaken: TOTAL_TIME - timeRemaining,
      violations
    };

    try {
      // Resolve Google Sheets API URL based on bootcamp
      let envKeyPrefix = "VITE_GOOGLE_SHEETS_API_URL_DAY";
      if (bootcampId === 'java-with-ai') {
        envKeyPrefix = "VITE_JAVA_DAY";
      }

      const scriptURL = 
        import.meta.env[`${envKeyPrefix}_${dayConfig.id}`] ||
        import.meta.env[`${envKeyPrefix}${dayConfig.id}`] ||
        import.meta.env[`VITE_GOOGLE_SHEETS_API_URL_DAY_${dayConfig.id}`] || // Fallback to generic
        dayConfig.sheetsUrl ||
        import.meta.env.VITE_GOOGLE_SHEETS_API_URL;
      
      if (scriptURL) {
        await fetch(scriptURL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        });
      }

      // Record completed day in localStorage
      try {
        const completedKey = bootcampConfig?.completedKey || 'kq_completed_days';
        const completed = JSON.parse(localStorage.getItem(completedKey) || '[]');
        if (!completed.includes(dayConfig.id)) {
          localStorage.setItem(completedKey, JSON.stringify([...completed, dayConfig.id]));
        }

        // Store in local submission log
        const subListKey = `kq_${bootcampId}_submissions`;
        const subList = JSON.parse(localStorage.getItem(subListKey) || '[]');
        subList.unshift({
          submissionId,
          day: dayConfig.id,
          dayTitle: dayConfig.title,
          studentName: studentData.fullName,
          score,
          maxScore,
          submittedAt: new Date().toLocaleString(),
          timeTaken: TOTAL_TIME - timeRemaining
        });
        localStorage.setItem(subListKey, JSON.stringify(subList.slice(0, 50)));
      } catch (err) {
        console.error("Error updating completed days", err);
      }

      // Clear this day's draft
      localStorage.removeItem(storageKey);
      if (bootcampId === 'python-with-ai' && dayConfig.id === 1) {
        localStorage.removeItem('kq_assessment');
      }

      if (onComplete) {
        onComplete(dayConfig.id);
      }

      navigate('/success', { 
        state: { 
          score, 
          maxScore,
          submissionId,
          studentName: studentData.fullName,
          dayId: dayConfig.id,
          dayTitle: dayConfig.title,
          bootcampId
        } 
      });
    } catch (error) {
      console.error('Submission failed', error);
      alert('Failed to submit. Your answers are saved locally. Please try again.');
      setIsSubmitting(false);
      setShowSubmitModal(false);
    }
  };

  const answeredCount = Object.keys(answers).filter(k => answers[k] !== undefined && answers[k] !== '').length;

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      
      {/* Background Watermarks & Stickers */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center opacity-[0.04]">
        {/* Center Large Watermark */}
        <img 
          src="https://res.cloudinary.com/dwv8kc9vb/image/upload/v1788803368/Kaizen_Q_Logo_with_Background_qy0d1n.png" 
          className="w-full max-w-4xl object-contain grayscale" 
          alt="" 
        />
        {/* Top Right Sticker */}
        <img 
          src="https://res.cloudinary.com/dwv8kc9vb/image/upload/v1788803584/Shaivika_Groups_Logo_BGT_xo5vqx.png" 
          className="absolute -top-10 -right-20 w-96 rotate-12 grayscale" 
          alt="" 
        />
        {/* Bottom Left Sticker */}
        <img 
          src="https://res.cloudinary.com/dwv8kc9vb/image/upload/v1788465425/KAIZEN_Q_EVENTS_FAVICON_o8hwrj.png" 
          className="absolute -bottom-10 -left-10 w-80 -rotate-12 grayscale" 
          alt="" 
        />
      </div>

      <div className="relative z-10 flex flex-col flex-1">
        <AssessmentHeader 
          studentName={studentData.fullName}
          dayConfig={dayConfig}
          timeRemaining={timeRemaining} 
          setTimeRemaining={setTimeRemaining}
          onTimeUp={handleTimeUp}
        />

      {!hasStartedExam ? (
        <div className="flex-1 flex items-center justify-center p-4 relative z-20">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl w-full text-center border-t-4 border-primary">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex justify-center items-center gap-2">⚠️ SECURE EXAM RULES</h2>
            <div className="text-left space-y-3 text-gray-600 mb-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
              <p>During this exam, the following actions are strictly prohibited:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 font-medium text-sm md:text-base">
                <li className="flex items-center gap-2">❌ No Copy / Paste / Cut</li>
                <li className="flex items-center gap-2">❌ No Tab/Window Switching</li>
                <li className="flex items-center gap-2">❌ No Right Click</li>
                <li className="flex items-center gap-2">❌ No Screenshot Attempts</li>
                <li className="flex items-center gap-2">❌ No Exiting Fullscreen</li>
                <li className="flex items-center gap-2">❌ No DevTools/Shortcuts</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-primary-700 bg-primary-50 p-3 rounded-lg border border-primary-100 leading-relaxed">
                Violating these rules will temporarily lock your session. Your progress is automatically saved and you can resume after a cooldown period.
              </p>
            </div>
            <button 
              onClick={() => {
                setHasStartedExam(true);
                try { document.documentElement.requestFullscreen().catch(() => {}); } catch(e) {}
              }}
              className="bg-primary text-white font-bold py-3 px-8 rounded-xl hover:bg-primary-700 transition shadow-lg w-full md:w-auto"
            >
              I UNDERSTAND — START EXAM
            </button>
          </div>
        </div>
      ) : isExamLocked ? (
        <div className="flex-1 flex items-center justify-center p-4 relative z-20">
          <div className="bg-white p-8 rounded-2xl shadow-xl max-w-xl w-full text-center border-t-4 border-red-500 relative overflow-hidden">
            <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-sm">🚨</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">EXAM SESSION LOCKED</h2>
            <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-6 font-bold tracking-wide border border-red-100 text-sm md:text-base">
              REASON: {lastViolation?.replace(/_/g, ' ')}
            </div>
            <div className="text-gray-600 mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100 text-sm text-left shadow-inner">
              <p className="mb-3 text-center text-gray-700 font-medium">Your exam progress has been safely saved.</p>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
                <span className="font-semibold text-gray-500">Question</span>
                <span className="font-bold text-gray-800">{currentQuestionIndex + 1} / {questions.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-500">Answers Saved</span>
                <span className="font-bold text-green-600">YES</span>
              </div>
            </div>
            <div className="mb-2 text-gray-600 font-medium">Exam will automatically resume in:</div>
            <div className="text-5xl font-mono font-black text-gray-800 bg-gray-100 py-4 rounded-xl mb-4 border border-gray-200 shadow-inner">
              {Math.floor(cooldownRemaining / 60).toString().padStart(2, '0')}:{(cooldownRemaining % 60).toString().padStart(2, '0')}
            </div>
            <p className="text-xs md:text-sm text-gray-500 font-medium">Please remain on this page. Do not refresh.</p>
          </div>
        </div>
      ) : (
        <>
          <DayNavigation currentDayId={dayConfig.id} bootcampConfig={bootcampConfig} />
          
          <div className="max-w-7xl mx-auto w-full px-4 pt-1 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
            <div className="w-full">
              <ProgressBar current={answeredCount} total={questions.length} />
            </div>
            <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-lg text-[11px] md:text-xs font-bold border border-green-200 shadow-sm shrink-0 w-full md:w-auto justify-center md:justify-start">
              🔒 SECURE MODE <span className="mx-1 opacity-50">|</span> VIOLATIONS: {violations.length}
            </div>
          </div>

          <div className="flex-1 flex flex-col md:flex-row max-w-7xl w-full mx-auto p-4 gap-6 relative z-10">
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col relative">
          
          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex justify-end mb-4">
            <button 
              onClick={() => setShowMobileNav(!showMobileNav)}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm text-primary font-medium"
            >
              <ListChecks size={20} />
              Questions ({answeredCount}/{questions.length})
            </button>
          </div>

          <AnimatePresence mode="wait">
            {showReview ? (
              <ReviewPage 
                key="review"
                questions={questions}
                answers={answers}
                visited={visited}
                onNavigate={handleNavigate}
                onSubmitClick={() => setShowSubmitModal(true)}
              />
            ) : (
              <QuestionCard
                key={`${dayConfig.id}-${currentQuestionIndex}`}
                question={questions[currentQuestionIndex]}
                questionIndex={currentQuestionIndex}
                totalQuestions={questions.length}
                currentAnswer={answers[questions[currentQuestionIndex].id]}
                onAnswer={handleAnswer}
                onNext={handleNext}
                onPrev={handlePrev}
                bootcampId={bootcampId}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Right Sidebar - Navigator (Desktop) */}
        <div className="hidden md:block w-80">
          <QuestionNavigator 
            questions={questions}
            answers={answers}
            visited={visited}
            currentIndex={currentQuestionIndex}
            onNavigate={handleNavigate}
            showReview={showReview}
          />
        </div>

        {/* Mobile Navigator Overlay */}
        <AnimatePresence>
          {showMobileNav && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed inset-x-0 bottom-0 z-50 p-4 bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] md:hidden max-h-[70vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Questions (Day {dayConfig.id})</h3>
                <button 
                  onClick={() => setShowMobileNav(false)} 
                  className="text-text-muted text-sm font-medium p-2"
                >
                  Close
                </button>
              </div>
              <QuestionNavigator 
                questions={questions}
                answers={answers}
                visited={visited}
                currentIndex={currentQuestionIndex}
                onNavigate={handleNavigate}
                showReview={showReview}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showSubmitModal && (
          <SubmissionModal
            onClose={() => setShowSubmitModal(false)}
            onSubmit={submitAssessment}
            isSubmitting={isSubmitting}
            totalQuestions={questions.length}
            answeredCount={answeredCount}
          />
        )}
      </AnimatePresence>
        </>
      )}
      </div>
    </div>
  );
};

export default AssessmentPage;
