import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  FileText, 
  CheckCircle, 
  Clock, 
  Search, 
  ArrowLeft, 
  BarChart3
} from 'lucide-react';
import { bootcampDays } from '../data/bootcampDays';

const initialMockSubmissions = [
  { id: 'KQ-1', name: 'Prasanna Kumar', email: 'prasanna@gmail.com', rollNumber: 'CS001', day: 1, score: 15, maxScore: 17, programmingStatus: 'Pending', time: '38:12', submittedAt: '2026-09-28 10:45 AM' },
  { id: 'KQ-2', name: 'Rahul Varma', email: 'rahul.v@gmail.com', rollNumber: 'CS042', day: 1, score: 12, maxScore: 17, programmingStatus: 'Evaluated', time: '44:50', submittedAt: '2026-09-28 10:55 AM' },
  { id: 'KQ-3', name: 'Priya Reddy', email: 'priya.r@college.edu', rollNumber: 'IT012', day: 2, score: 16, maxScore: 17, programmingStatus: 'Pending', time: '35:20', submittedAt: '2026-09-28 11:35 AM' },
  { id: 'KQ-4', name: 'Ananya Sen', email: 'ananya@gmail.com', rollNumber: 'AI007', day: 2, score: 14, maxScore: 17, programmingStatus: 'Evaluated', time: '41:15', submittedAt: '2026-09-28 01:10 PM' },
  { id: 'KQ-5', name: 'Karthik S', email: 'karthik.s@gmail.com', rollNumber: 'CS089', day: 3, score: 17, maxScore: 17, programmingStatus: 'Pending', time: '39:00', submittedAt: '2026-09-29 09:20 AM' },
];

const MentorDashboard = () => {
  const navigate = useNavigate();

  // Combine mock data with any live local submissions
  const allSubmissions = useMemo(() => {
    try {
      const localSubs = JSON.parse(localStorage.getItem('kq_submissions') || '[]');
      const formattedLocal = localSubs.map((s, idx) => ({
        id: s.submissionId || `LOCAL-${idx}`,
        name: s.studentName || 'Student',
        email: s.studentEmail || 'N/A',
        rollNumber: s.rollNumber || 'ID-TBD',
        day: s.day || 1,
        score: s.score || 0,
        maxScore: s.maxScore || 17,
        programmingStatus: 'Pending',
        time: s.timeTaken ? `${Math.floor(s.timeTaken / 60)}:${(s.timeTaken % 60).toString().padStart(2, '0')}` : '40:00',
        submittedAt: s.submittedAt || new Date().toLocaleString()
      }));
      return [...formattedLocal, ...initialMockSubmissions];
    } catch {
      return initialMockSubmissions;
    }
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDayFilter, setSelectedDayFilter] = useState('ALL');

  const filteredSubmissions = useMemo(() => {
    return allSubmissions.filter(s => {
      const matchesSearch = 
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        s.rollNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (s.email && s.email.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesDay = selectedDayFilter === 'ALL' || s.day === parseInt(selectedDayFilter, 10);

      return matchesSearch && matchesDay;
    });
  }, [allSubmissions, searchTerm, selectedDayFilter]);

  // Day breakdown counts
  const dayCounts = useMemo(() => {
    const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    allSubmissions.forEach(s => {
      if (counts[s.day] !== undefined) counts[s.day] += 1;
    });
    return counts;
  }, [allSubmissions]);

  // Unique students count
  const uniqueStudentsCount = useMemo(() => {
    const set = new Set(allSubmissions.map(s => s.rollNumber || s.name));
    return Math.max(set.size, 100);
  }, [allSubmissions]);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-text-muted hover:text-primary transition-colors mb-2"
            >
              <ArrowLeft size={16} />
              Back to Bootcamp Home
            </button>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-text-main">Mentor Dashboard</h1>
              <span className="bg-primary-50 text-primary-700 text-xs font-bold px-2.5 py-1 rounded-full border border-primary-200">
                Live Overview
              </span>
            </div>
            <p className="text-sm text-text-muted mt-1">Python with AI — 5-Day Hands-On Bootcamp Evaluation Hub</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-text-muted">Connected to:</span>
            <span className="text-xs font-mono bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-emerald-700 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Google Sheets Submissions
            </span>
          </div>
        </header>

        {/* Global Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-5 rounded-2xl shadow-soft border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary shrink-0">
              <Users size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Total Students</p>
              <h3 className="text-2xl font-bold text-text-main">{uniqueStudentsCount}</h3>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-2xl shadow-soft border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
              <FileText size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Total Submissions</p>
              <h3 className="text-2xl font-bold text-text-main">{allSubmissions.length}</h3>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-soft border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
              <CheckCircle size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Avg Objective</p>
              <h3 className="text-2xl font-bold text-text-main">14.8 / 17</h3>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-soft border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Pending Eval</p>
              <h3 className="text-2xl font-bold text-text-main">
                {allSubmissions.filter(s => s.programmingStatus === 'Pending').length}
              </h3>
            </div>
          </div>
        </div>

        {/* Day-wise Submissions Grid */}
        <div className="bg-white rounded-2xl p-5 shadow-soft border border-gray-100 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-text-main flex items-center gap-2">
              <BarChart3 size={18} className="text-primary" />
              Day-Wise Submissions Breakdown
            </h3>
            <span className="text-xs text-text-muted">Click a day pill to filter</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {bootcampDays.map((d) => {
              const count = dayCounts[d.id] || 0;
              const isSelected = selectedDayFilter === d.id.toString();

              return (
                <button
                  key={d.id}
                  onClick={() => setSelectedDayFilter(isSelected ? 'ALL' : d.id.toString())}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    isSelected 
                      ? 'border-primary bg-primary-50 ring-2 ring-primary/20' 
                      : 'border-gray-200 hover:border-primary/40 bg-gray-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-text-main">Day {d.id}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-bold font-mono ${
                      count > 0 ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {count}
                    </span>
                  </div>
                  <p className="text-[11px] text-text-muted truncate">{d.shortTitle}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Submissions Table with Filters */}
        <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden">
          
          <div className="p-4 sm:p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h2 className="text-lg font-bold text-text-main">Student Submissions</h2>
              <p className="text-xs text-text-muted">Showing {filteredSubmissions.length} recorded submissions</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              {/* Day filter dropdown */}
              <div className="relative">
                <select
                  value={selectedDayFilter}
                  onChange={(e) => setSelectedDayFilter(e.target.value)}
                  className="w-full sm:w-auto px-3.5 py-2 rounded-xl border border-gray-200 text-sm font-medium text-text-main bg-white outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                >
                  <option value="ALL">All Days (1–5)</option>
                  <option value="1">Day 1: Python Foundations</option>
                  <option value="2">Day 2: Data, APIs & Automation</option>
                  <option value="3">Day 3: Machine Learning</option>
                  <option value="4">Day 4: Generative AI</option>
                  <option value="5">Day 5: Build & Deploy</option>
                </select>
              </div>

              {/* Search bar */}
              <div className="relative flex-1 sm:w-64">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search student, roll, email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full text-sm rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-600 font-semibold text-xs uppercase tracking-wider border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4">Student</th>
                  <th className="px-6 py-4">Day</th>
                  <th className="px-6 py-4">Roll Number</th>
                  <th className="px-6 py-4">Objective Score</th>
                  <th className="px-6 py-4">Programming</th>
                  <th className="px-6 py-4">Time Taken</th>
                  <th className="px-6 py-4">Submitted At</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredSubmissions.length > 0 ? (
                  filteredSubmissions.map((sub, i) => (
                    <tr key={sub.id || i} className="hover:bg-gray-50/60 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-text-main">{sub.name}</div>
                        {sub.email && <div className="text-xs text-text-muted">{sub.email}</div>}
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-primary-50 text-primary-700 border border-primary-200">
                          Day {sub.day}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-mono text-xs text-text-muted">{sub.rollNumber}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                          sub.score >= 14 ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 
                          sub.score >= 10 ? 'bg-primary-50 text-primary-800' : 'bg-amber-50 text-amber-800'
                        }`}>
                          {sub.score} / {sub.maxScore || 17}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          sub.programmingStatus === 'Evaluated' 
                            ? 'text-emerald-700 bg-emerald-50 border border-emerald-200' 
                            : 'text-amber-700 bg-amber-50 border border-amber-200'
                        }`}>
                          {sub.programmingStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-text-muted font-mono text-xs">{sub.time}</td>
                      <td className="px-6 py-4 text-text-muted text-xs">{sub.submittedAt}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="px-6 py-12 text-center text-text-muted">
                      No submissions found matching the criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </div>
  );
};

export default MentorDashboard;
