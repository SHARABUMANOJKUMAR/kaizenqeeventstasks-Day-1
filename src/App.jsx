import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RegistrationPage from './components/RegistrationPage';
import AssessmentPage from './components/AssessmentPage';
import SuccessPage from './components/SuccessPage';
import MentorDashboard from './components/MentorDashboard';

function App() {
  const [studentData, setStudentData] = useState(null);
  const [assessmentData, setAssessmentData] = useState(null);

  // Load from local storage
  useEffect(() => {
    const savedStudent = localStorage.getItem('kq_student');
    const savedAssessment = localStorage.getItem('kq_assessment');
    
    if (savedStudent) setStudentData(JSON.parse(savedStudent));
    if (savedAssessment) setAssessmentData(JSON.parse(savedAssessment));
  }, []);

  const handleRegistration = (data) => {
    setStudentData(data);
    localStorage.setItem('kq_student', JSON.stringify(data));
  };

  const handleAssessmentComplete = (data) => {
    // Clear local storage on complete, unless we want them to see success page repeatedly
    localStorage.removeItem('kq_student');
    localStorage.removeItem('kq_assessment');
    setStudentData(null);
    setAssessmentData(null);
  };

  return (
    <Router>
      <div className="min-h-screen bg-background font-sans text-text-main">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route 
            path="/register" 
            element={<RegistrationPage onRegister={handleRegistration} />} 
          />
          <Route 
            path="/assessment" 
            element={
              studentData ? (
                <AssessmentPage 
                  studentData={studentData} 
                  initialData={assessmentData}
                  onComplete={handleAssessmentComplete}
                />
              ) : (
                <Navigate to="/register" replace />
              )
            } 
          />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/mentor" element={<MentorDashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
