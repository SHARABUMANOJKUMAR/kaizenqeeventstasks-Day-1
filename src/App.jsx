import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import BootcampHome from './components/BootcampHome';
import RegistrationPage from './components/RegistrationPage';
import AssessmentPage from './components/AssessmentPage';
import SuccessPage from './components/SuccessPage';
import MentorDashboard from './components/MentorDashboard';
import NotFound from './components/NotFound';

// Wrapper for protected Day Assessment route that blocks locked upcoming days and guards registration
function DayRouteWrapper({ studentData, onComplete }) {
  const location = useLocation();
  const params = useParams();
  const dayId = parseInt(params.dayId || 1, 10);

  // Strictly block upcoming days (Day 3, 4, 5)
  if (dayId > 2 || isNaN(dayId)) {
    return (
      <NotFound 
        message={`Day ${params.dayId || ''}: Access Restricted`}
        subtitle="This assessment is locked and not accessible yet. Only Day 1 and Day 2 are currently open!"
      />
    );
  }

  if (!studentData) {
    return <Navigate to={`/register?redirect=${encodeURIComponent(location.pathname)}`} replace />;
  }

  return (
    <AssessmentPage 
      studentData={studentData} 
      onComplete={onComplete}
    />
  );
}

function App() {
  const [studentData, setStudentData] = useState(() => {
    try {
      const saved = localStorage.getItem('kq_student');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const handleRegistration = (data) => {
    setStudentData(data);
    localStorage.setItem('kq_student', JSON.stringify(data));
  };

  const handleAssessmentComplete = (dayId) => {
    // Preserve student identity across all 5 days!
    // Individual day drafts are cleared inside AssessmentPage.
  };

  return (
    <Router>
      <div className="min-h-screen bg-background font-sans text-text-main">
        <Routes>
          {/* 5-Day Bootcamp Home */}
          <Route path="/" element={<BootcampHome studentData={studentData} />} />
          
          {/* One-Time Student Registration */}
          <Route 
            path="/register" 
            element={
              <RegistrationPage 
                onRegister={handleRegistration} 
                initialStudentData={studentData} 
              />
            } 
          />

          {/* Dynamic Day Assessments: /day/1, /day/2, /day/3, /day/4, /day/5 */}
          <Route 
            path="/day/:dayId" 
            element={
              <DayRouteWrapper 
                studentData={studentData} 
                onComplete={handleAssessmentComplete}
              />
            } 
          />

          {/* Alternate route pattern: /day1, /day2, etc. */}
          <Route 
            path="/day1" 
            element={<Navigate to="/day/1" replace />} 
          />
          <Route 
            path="/day2" 
            element={<Navigate to="/day/2" replace />} 
          />
          <Route 
            path="/day3" 
            element={<Navigate to="/day/3" replace />} 
          />
          <Route 
            path="/day4" 
            element={<Navigate to="/day/4" replace />} 
          />
          <Route 
            path="/day5" 
            element={<Navigate to="/day/5" replace />} 
          />

          {/* Backward compatibility for legacy /assessment route */}
          <Route 
            path="/assessment" 
            element={<Navigate to="/day/1" replace />} 
          />

          {/* Assessment Completion / Success Page */}
          <Route path="/success" element={<SuccessPage />} />

          {/* Mentor Dashboard */}
          <Route path="/mentor" element={<MentorDashboard />} />

          {/* Catch-all Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
