import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Mail, Building, BookOpen, Hash, GraduationCap } from 'lucide-react';

const RegistrationPage = ({ onRegister }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    college: '',
    branch: '',
    semester: '',
    rollNumber: '',
    phone: '',
    confirmInfo: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user types
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
      navigate('/assessment');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-50 rounded-bl-full opacity-50"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full z-10"
      >
        <div className="card p-6 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-text-main mb-2">Student Registration</h2>
            <p className="text-text-muted">Please provide your details to begin the assessment.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
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
                  placeholder="John Doe"
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
                  placeholder="john@example.com"
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
                  placeholder="University Name"
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
                  placeholder="CSE / IT / ECE"
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
                  placeholder="3rd Year / 6th Sem"
                />
                {errors.semester && <p className="text-red-500 text-xs mt-1">{errors.semester}</p>}
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-text-main flex items-center gap-2">
                  <Hash size={16} className="text-primary" /> Roll Number / ID *
                </label>
                <input 
                  type="text" 
                  name="rollNumber"
                  value={formData.rollNumber}
                  onChange={handleChange}
                  className={`input-field ${errors.rollNumber ? 'border-red-400' : ''}`}
                  placeholder="Student ID"
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
                placeholder="+1 234 567 890"
              />
            </div>

            <div className="pt-4 flex flex-col space-y-4">
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
                <span className={`text-sm select-none ${errors.confirmInfo ? 'text-red-500' : 'text-text-muted'}`}>
                  I confirm that the information provided is correct.
                </span>
              </label>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-primary w-full text-lg mt-4"
              >
                Continue to Assessment
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default RegistrationPage;
