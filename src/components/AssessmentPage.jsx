import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { day1Questions } from '../data/day1Questions';
import AssessmentHeader from './AssessmentHeader';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import QuestionNavigator from './QuestionNavigator';
import ReviewPage from './ReviewPage';
import SubmissionModal from './SubmissionModal';
import { ListChecks } from 'lucide-react';

const TOTAL_TIME = 45 * 60; // 45 minutes in seconds

const AssessmentPage = ({ studentData, initialData, onComplete }) => {
  const navigate = useNavigate();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(initialData?.answers || {});
  const [timeRemaining, setTimeRemaining] = useState(initialData?.timeRemaining || TOTAL_TIME);
  const [visited, setVisited] = useState(initialData?.visited || [0]);
  
  const [showReview, setShowReview] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  // Autosave
  useEffect(() => {
    const dataToSave = {
      answers,
      timeRemaining,
      visited
    };
    localStorage.setItem('kq_assessment', JSON.stringify(dataToSave));
  }, [answers, timeRemaining, visited]);

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
    if (currentQuestionIndex < day1Questions.length - 1) {
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
    const maxScore = day1Questions.filter(q => q.type === 'mcq').length;
    
    day1Questions.forEach(q => {
      if (q.type === 'mcq' && answers[q.id] === q.correctAnswer) {
        score += q.marks || 1;
      }
    });

    const submissionId = `KQ-PY-D1-${new Date().toISOString().split('T')[0].replace(/-/g, '')}-${Math.floor(1000 + Math.random() * 9000)}`;

    const payload = {
      timestamp: new Date().toISOString(),
      submissionId,
      studentData,
      answers,
      score,
      maxScore,
      timeRemaining,
      timeTaken: TOTAL_TIME - timeRemaining,
    };

    try {
      // Send to Google Sheets (Mocked for now if API not ready, replace with real fetch later)
      const scriptURL = import.meta.env.VITE_GOOGLE_SHEETS_API_URL;
      
      if (scriptURL) {
        await fetch(scriptURL, {
          method: 'POST',
          mode: 'no-cors', // Google Forms/Apps script standard
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        });
      }

      onComplete();
      navigate('/success', { 
        state: { 
          score, 
          maxScore,
          submissionId,
          studentName: studentData.fullName
        } 
      });
    } catch (error) {
      console.error('Submission failed', error);
      alert('Failed to submit. Your answers are saved locally. Please try again.');
      setIsSubmitting(false);
      setShowSubmitModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AssessmentHeader 
        studentName={studentData.fullName} 
        timeRemaining={timeRemaining} 
        setTimeRemaining={setTimeRemaining}
        onTimeUp={handleTimeUp}
      />
      
      <ProgressBar 
        current={Object.keys(answers).length} 
        total={day1Questions.length} 
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
              Questions
            </button>
          </div>

          <AnimatePresence mode="wait">
            {showReview ? (
              <ReviewPage 
                key="review"
                questions={day1Questions}
                answers={answers}
                visited={visited}
                onNavigate={handleNavigate}
                onSubmitClick={() => setShowSubmitModal(true)}
              />
            ) : (
              <QuestionCard
                key={currentQuestionIndex}
                question={day1Questions[currentQuestionIndex]}
                questionIndex={currentQuestionIndex}
                totalQuestions={day1Questions.length}
                currentAnswer={answers[day1Questions[currentQuestionIndex].id]}
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
            questions={day1Questions}
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
                <h3 className="font-semibold">Questions</h3>
                <button onClick={() => setShowMobileNav(false)} className="text-text-muted text-sm font-medium p-2">Close</button>
              </div>
              <QuestionNavigator 
                questions={day1Questions}
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
            totalQuestions={day1Questions.length}
            answeredCount={Object.keys(answers).length}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default AssessmentPage;
