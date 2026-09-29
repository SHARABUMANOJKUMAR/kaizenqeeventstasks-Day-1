import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Mail, Building, BookOpen, Hash, GraduationCap, ArrowLeft } from 'lucide-react';

const RegistrationPage = ({ onRegister, initialStudentData }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectPath = searchParams.get('redirect') || '/day/1';

  const [formData, setFormData] = useState(() => {
    if (initialStudentData) {
      return {
        fullName: initialStudentData.fullName || '',
        email: initialStudentData.email || '',
        college: initialStudentData.college || '',
        branch: initialStudentData.branch || '',
        semester: initialStudentData.semester || '',
        rollNumber: initialStudentData.rollNumber || '',
        phone: initialStudentData.phone || '',
        confirmInfo: true
      };
    }
    try {
      const saved = localStorage.getItem('kq_student');
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          fullName: parsed.fullName || '',
          email: parsed.email || '',
          college: parsed.college || '',
          branch: parsed.branch || '',
          semester: parsed.semester || '',
          rollNumber: parsed.rollNumber || '',
          phone: parsed.phone || '',
          confirmInfo: true
        };
      }
    } catch (e) {
      console.error("Error reading saved student profile", e);
    }
    return {
      fullName: '',
      email: '',
      college: '',
      branch: '',
      semester: '',
      rollNumber: '',
      phone: '',
      confirmInfo: false
    };
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid Email is required';
    if (!formData.college.trim()) newErrors.college = 'College Name is required';
    if (!formData.branch.trim()) newErrors.branch = 'Branch is required';
    if (!formData.semester.trim()) newErrors.semester = 'Year / Semester is required';
    if (!formData.rollNumber.trim()) newErrors.rollNumber = 'Roll Number is required';
    if (!formData.confirmInfo) newErrors.confirmInfo = 'Please confirm your information';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onRegister(formData);
      navigate(redirectPath, { replace: true });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-50 rounded-bl-full opacity-50 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-2xl w-full z-10 my-6"
      >
        <div className="card p-6 md:p-10">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-text-muted hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Bootcamp
            </button>
            <span className="text-xs uppercase font-bold tracking-wider text-primary bg-primary-50 px-2.5 py-1 rounded-full border border-primary-200">
              One-Time Registration
            </span>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-main mb-2">Student Registration</h2>
            <p className="text-sm text-text-muted">
              Enter your student details once. Your profile persists across all 5 bootcamp days.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              <div className="space-y-1">
                <label className="text-sm font-medium text-text-main flex items-center gap-2">
                  <User size={16} className="text-primary" /> Full Name *
                </label>
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`input-field ${errors.fullName ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : ''}`}
                  placeholder="e.g. Rahul Sharma"
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-text-main flex items-center gap-2">
                  <Mail size={16} className="text-primary" /> Email *
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input-field ${errors.email ? 'border-red-400' : ''}`}
                  placeholder="rahul@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-text-main flex items-center gap-2">
                  <Building size={16} className="text-primary" /> College Name *
                </label>
                <input 
                  type="text" 
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  className={`input-field ${errors.college ? 'border-red-400' : ''}`}
                  placeholder="e.g. IIT Bombay / NIT"
                />
                {errors.college && <p className="text-red-500 text-xs mt-1">{errors.college}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-text-main flex items-center gap-2">
                  <BookOpen size={16} className="text-primary" /> Branch *
                </label>
                <input 
                  type="text" 
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  className={`input-field ${errors.branch ? 'border-red-400' : ''}`}
                  placeholder="CSE / AI & DS / IT / ECE"
                />
                {errors.branch && <p className="text-red-500 text-xs mt-1">{errors.branch}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-text-main flex items-center gap-2">
                  <GraduationCap size={16} className="text-primary" /> Year / Semester *
                </label>
                <input 
                  type="text" 
                  name="semester"
                  value={formData.semester}
                  onChange={handleChange}
                  className={`input-field ${errors.semester ? 'border-red-400' : ''}`}
                  placeholder="e.g. 3rd Year / 6th Sem"
                />
                {errors.semester && <p className="text-red-500 text-xs mt-1">{errors.semester}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-text-main flex items-center gap-2">
                  <Hash size={16} className="text-primary" /> Roll Number / Student ID *
                </label>
                <input 
                  type="text" 
                  name="rollNumber"
                  value={formData.rollNumber}
                  onChange={handleChange}
                  className={`input-field ${errors.rollNumber ? 'border-red-400' : ''}`}
                  placeholder="e.g. 21CS045"
                />
                {errors.rollNumber && <p className="text-red-500 text-xs mt-1">{errors.rollNumber}</p>}
              </div>

            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-text-main">Phone Number (Optional)</label>
              <input 
                type="text" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input-field"
                placeholder="+91 98765 43210"
              />
            </div>

            <div className="pt-2 flex flex-col space-y-4">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-center mt-0.5">
                  <input 
                    type="checkbox" 
                    name="confirmInfo"
                    checked={formData.confirmInfo}
                    onChange={handleChange}
                    className="w-5 h-5 border-gray-300 rounded text-primary focus:ring-primary/20 transition-colors cursor-pointer"
                  />
                </div>
                <span className={`text-xs sm:text-sm select-none ${errors.confirmInfo ? 'text-red-500 font-medium' : 'text-text-muted'}`}>
                  I confirm that the information provided is correct and understand it will be linked to my submissions.
                </span>
              </label>

              <button
                type="submit"
                className="btn-primary w-full text-base sm:text-lg mt-3"
              >
                Save & Continue to Assessment
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default RegistrationPage;
