import React, { useState } from 'react';
import { Users, FileText, CheckCircle, Clock, Search, Filter } from 'lucide-react';

const MentorDashboard = () => {
  // Mock data for display purposes
  const [submissions] = useState([
    { id: 'KQ-1', name: 'Prasanna', rollNumber: 'CS001', score: 15, programmingStatus: 'Pending', time: '40:12', submittedAt: '2026-09-28 10:45 AM' },
    { id: 'KQ-2', name: 'Rahul', rollNumber: 'CS042', score: 12, programmingStatus: 'Evaluated', time: '44:50', submittedAt: '2026-09-28 10:55 AM' },
    { id: 'KQ-3', name: 'Priya', rollNumber: 'IT012', score: 17, programmingStatus: 'Pending', time: '35:20', submittedAt: '2026-09-28 10:35 AM' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredSubmissions = submissions.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.rollNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-text-main">Mentor Dashboard</h1>
          <p className="text-text-muted">Python with AI Bootcamp - Day 1</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary">
              <Users size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-text-muted">Total Students</p>
              <h3 className="text-2xl font-bold text-text-main">100</h3>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-secondary-light rounded-xl flex items-center justify-center text-secondary-700">
              <FileText size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-text-muted">Submissions</p>
              <h3 className="text-2xl font-bold text-text-main">{submissions.length}</h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-success-light rounded-xl flex items-center justify-center text-success-700">
              <CheckCircle size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-text-muted">Avg Objective</p>
              <h3 className="text-2xl font-bold text-text-main">14.6 / 17</h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-warning-light rounded-xl flex items-center justify-center text-warning-700">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-text-muted">Pending Eval</p>
              <h3 className="text-2xl font-bold text-text-main">2</h3>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 md:p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-lg font-semibold text-text-main">Recent Submissions</h2>
            <div className="flex gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search student..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
              <button className="p-2 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 flex items-center gap-2">
                <Filter size={18} />
                <span className="hidden sm:inline">Filter</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4">Student</th>
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
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-text-main">{sub.name}</td>
                      <td className="px-6 py-4 text-text-muted">{sub.rollNumber}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                          sub.score > 14 ? 'bg-success-light text-success-800' : 
                          sub.score > 10 ? 'bg-primary-50 text-primary-800' : 'bg-warning-light text-warning-800'
                        }`}>
                          {sub.score} / 17
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-xs font-medium px-2 py-1 rounded ${
                          sub.programmingStatus === 'Evaluated' ? 'text-success-600 bg-success-50' : 'text-accent-600 bg-accent-50'
                        }`}>
                          {sub.programmingStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-text-muted">{sub.time}</td>
                      <td className="px-6 py-4 text-text-muted">{sub.submittedAt}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center text-text-muted">
                      No submissions found.
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
