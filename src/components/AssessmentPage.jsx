import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getDayConfig } from '../data/bootcampDays';
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
  const dayId = params.dayId ? parseInt(params.dayId, 10) : 1;
  const dayConfig = useMemo(() => getDayConfig(dayId), [dayId]);
  const questions = useMemo(() => getQuestionsForDay(dayId), [dayId]);

  const TOTAL_TIME = (dayConfig?.durationMinutes || 45) * 60; // in seconds
  const storageKey = `kq_assessment_day_${dayId}`;

  // Read initial saved draft for this specific day
  const getInitialDraft = () => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) return JSON.parse(saved);
      // Legacy backward-compatibility for Day 1
      if (dayId === 1) {
        const legacy = localStorage.getItem('kq_assessment');
        if (legacy) return JSON.parse(legacy);
      }
    } catch (e) {
      console.error("Error reading saved draft", e);
    }
    return null;
  };

  const initialData = getInitialDraft();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(initialData?.answers || {});
  const [timeRemaining, setTimeRemaining] = useState(initialData?.timeRemaining || TOTAL_TIME);
  const [visited, setVisited] = useState(initialData?.visited || [0]);
  const [violations, setViolations] = useState(initialData?.violations || []);
  
  const [showReview, setShowReview] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  // When dayId changes, reload state for that day
  useEffect(() => {
    const draft = getInitialDraft();
    setCurrentQuestionIndex(0);
    setAnswers(draft?.answers || {});
    setTimeRemaining(draft?.timeRemaining || TOTAL_TIME);
    setVisited(draft?.visited || [0]);
    setViolations(draft?.violations || []);
    setShowReview(false);
    setShowSubmitModal(false);
  }, [dayId, TOTAL_TIME]);

  // Autosave progress for this specific day
  useEffect(() => {
    if (!dayConfig) return;
    const dataToSave = {
      dayId,
      answers,
      timeRemaining,
      visited,
      violations
    };
    localStorage.setItem(storageKey, JSON.stringify(dataToSave));
  }, [dayId, answers, timeRemaining, visited, violations, dayConfig, storageKey]);

  // Anti-Cheat System (No Copy, No Right-Click, No Screenshots/Print, Tab Tracking)
  useEffect(() => {
    const recordViolation = (type) => {
      setViolations(prev => [...prev, { type, timestamp: new Date().toISOString() }]);
    };

    // 1. Prevent Right-Click
    const preventContextMenu = (e) => {
      e.preventDefault();
      recordViolation('RIGHT_CLICK_ATTEMPT');
    };
    
    // 2. Prevent Copy, Cut, Paste
    const preventCopyPaste = (e) => {
      e.preventDefault();
      recordViolation(`${e.type.toUpperCase()}_ATTEMPT`);
      alert("Copy/Paste is disabled during the assessment.");
    };

    // 3. Prevent Keyboard Shortcuts (PrintScreen, Ctrl+C, Ctrl+P, Ctrl+S, Win+Shift+S)
    const preventShortcuts = (e) => {
      if (e.key === 'PrintScreen' || e.keyCode === 44) {
        try { navigator.clipboard.writeText(''); } catch (_) {}
        recordViolation('PRINTSCREEN_ATTEMPT');
        alert("Screenshots are disabled.");
        e.preventDefault();
      }

      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key.toLowerCase() === 's') {
        try { navigator.clipboard.writeText(''); } catch (_) {}
        recordViolation('SCREENSHOT_SHORTCUT_ATTEMPT');
        alert("Screenshots are disabled.");
        e.preventDefault();
      }
      
      if (e.ctrlKey || e.metaKey) {
        const forbiddenKeys = ['c', 'v', 'x', 'p', 's'];
        if (forbiddenKeys.includes(e.key.toLowerCase())) {
          e.preventDefault();
          recordViolation(`KEYBOARD_SHORTCUT_${e.key.toUpperCase()}`);
          if (e.key.toLowerCase() !== 'v') {
            alert("This shortcut is disabled during the assessment.");
          }
        }
      }
    };

    // 4. Track Tab Switching (Visibility API)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        recordViolation('TAB_SWITCH_MINIMIZE');
        alert("Warning: Switching tabs or minimizing the window is recorded as suspicious activity during the assessment.");
      }
    };

    document.addEventListener("contextmenu", preventContextMenu);
    document.addEventListener("copy", preventCopyPaste);
    document.addEventListener("cut", preventCopyPaste);
    document.addEventListener("paste", preventCopyPaste);
    document.addEventListener("keydown", preventShortcuts);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("contextmenu", preventContextMenu);
      document.removeEventListener("copy", preventCopyPaste);
      document.removeEventListener("cut", preventCopyPaste);
      document.removeEventListener("paste", preventCopyPaste);
      document.removeEventListener("keydown", preventShortcuts);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

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
      timeRemaining,
      timeTaken: TOTAL_TIME - timeRemaining,
      violations
    };

    try {
      // Resolve Google Sheets API URL: checks day-specific env, then dayConfig.sheetsUrl, then default env
      const scriptURL = 
        import.meta.env[`VITE_GOOGLE_SHEETS_API_URL_DAY_${dayConfig.id}`] ||
        import.meta.env[`VITE_GOOGLE_SHEETS_API_URL_DAY${dayConfig.id}`] ||
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
        const completed = JSON.parse(localStorage.getItem('kq_completed_days') || '[]');
        if (!completed.includes(dayConfig.id)) {
          localStorage.setItem('kq_completed_days', JSON.stringify([...completed, dayConfig.id]));
        }

        // Store in local submission log
        const subList = JSON.parse(localStorage.getItem('kq_submissions') || '[]');
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
        localStorage.setItem('kq_submissions', JSON.stringify(subList.slice(0, 50)));
      } catch (err) {
        console.error("Error updating completed days", err);
      }

      // Clear this day's draft
      localStorage.removeItem(storageKey);
      if (dayConfig.id === 1) {
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
          dayTitle: dayConfig.title
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
    <div className="min-h-screen bg-background flex flex-col">
      <AssessmentHeader 
        studentName={studentData.fullName}
        dayConfig={dayConfig}
        timeRemaining={timeRemaining} 
        setTimeRemaining={setTimeRemaining}
        onTimeUp={handleTimeUp}
      />

      <DayNavigation currentDayId={dayConfig.id} />
      
      <ProgressBar 
        current={answeredCount} 
        total={questions.length} 
      />

      <div className="flex-1 flex flex-col md:flex-row max-w-7xl w-full mx-auto p-4 gap-6">
        
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
    </div>
  );
};

export default AssessmentPage;
