import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import BootcampHome from './components/BootcampHome';
import RegistrationPage from './components/RegistrationPage';
import AssessmentPage from './components/AssessmentPage';
import SuccessPage from './components/SuccessPage';
import MentorDashboard from './components/MentorDashboard';
import NotFound from './components/NotFound';
import { getBootcampConfig } from './data/bootcamps';

// Wrapper for protected Day Assessment route that blocks locked upcoming days and guards registration
function DayRouteWrapper({ studentData, onComplete }) {
  const location = useLocation();
  const params = useParams();
  const bootcampId = params.bootcampId || 'python-with-ai';
  const dayId = parseInt(params.dayId || 1, 10);
  
  const bootcampConfig = getBootcampConfig(bootcampId);
  if (!bootcampConfig) {
    return <NotFound message="Bootcamp Not Found" subtitle="This bootcamp does not exist." />;
  }

  const dayConfig = bootcampConfig.days.find(d => d.id === dayId || d.dayNumber === dayId);

  // Block days that do not exist or are locked
  if (!dayConfig || dayConfig.status === 'locked' || dayConfig.status === 'coming_soon' || isNaN(dayId)) {
    return (
      <NotFound 
        message={`Day ${params.dayId || ''}: Access Restricted`}
        subtitle="This assessment is locked and not accessible yet. Check back soon!"
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
          {/* Main Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Bootcamp Dashboard */}
          <Route path="/bootcamps/:bootcampId" element={<BootcampHome studentData={studentData} />} />
          
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

          {/* Dynamic Day Assessments */}
          <Route 
            path="/bootcamps/:bootcampId/day/:dayId" 
            element={
              <DayRouteWrapper 
                studentData={studentData} 
                onComplete={handleAssessmentComplete}
              />
            } 
          />

          {/* Backward compatibility for legacy /day/:dayId routes */}
          <Route 
            path="/day/:dayId" 
            element={
              <DayRouteWrapper 
                studentData={studentData} 
                onComplete={handleAssessmentComplete}
              />
            } 
          />

          <Route path="/day1" element={<Navigate to="/bootcamps/python-with-ai/day/1" replace />} />
          <Route path="/day2" element={<Navigate to="/bootcamps/python-with-ai/day/2" replace />} />
          <Route path="/day3" element={<Navigate to="/bootcamps/python-with-ai/day/3" replace />} />
          <Route path="/day4" element={<Navigate to="/bootcamps/python-with-ai/day/4" replace />} />
          <Route path="/day5" element={<Navigate to="/bootcamps/python-with-ai/day/5" replace />} />
          <Route path="/assessment" element={<Navigate to="/bootcamps/python-with-ai/day/1" replace />} />

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
