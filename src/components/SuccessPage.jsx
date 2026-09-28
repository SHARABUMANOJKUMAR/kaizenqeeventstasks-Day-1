import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Home, Star, Target, Lightbulb } from 'lucide-react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import Confetti from 'react-confetti';

const SuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => window.removeEventListener('resize', detectSize);
  }, []);

  // Prevent showing success page if they just navigated here directly without submitting
  if (!state) {
    return <Navigate to="/" replace />;
  }

  const name = state?.studentName || 'Student';

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-[#eff6ff] via-white to-[#f5f3ff] relative overflow-hidden">
      <Confetti
        width={windowDimension.width}
        height={windowDimension.height}
        recycle={false}
        numberOfPieces={500}
        gravity={0.15}
        colors={['#6366f1', '#8b5cf6', '#3b82f6', '#a855f7', '#60a5fa']}
      />
      
      {/* Background blobs for aesthetics */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-60 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-3xl opacity-60 transform translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
        className="max-w-3xl w-full z-10"
      >
        <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-12 overflow-hidden relative">
          
          <motion.div 
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 12 }}
            className="flex justify-center mb-6"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-200">
              <CheckCircle2 size={48} className="text-white" />
            </div>
          </motion.div>

          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              🎊 Congratulations! Task Submitted Successfully! 🚀
            </h2>
            <div className="text-gray-600 text-lg md:text-xl space-y-4 leading-relaxed">
              <p>Dear <span className="font-bold text-gray-800">{name}</span>,</p>
              <p>Thank you for actively participating in our <strong>Python with AI Bootcamp</strong> and successfully submitting your task!</p>
              <p>Your enthusiasm, dedication, and willingness to learn are the first steps toward a bright and successful future. 🌟</p>
              <p className="font-semibold text-purple-700 bg-purple-50 inline-block px-4 py-2 rounded-lg">
                ✨ Keep Learning. Keep Building. Keep Growing!
              </p>
              <p>Believe in yourself, explore new technologies, and never stop improving. Every small step you take today brings you closer to your dreams.</p>
              <p className="font-bold text-blue-700">Your future is full of possibilities. Keep shining! 💙</p>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
          >
            <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-5 flex flex-col items-center text-center group hover:bg-blue-50 transition-colors">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3 text-blue-600 group-hover:scale-110 transition-transform">
                <Target size={20} />
              </div>
              <h4 className="font-bold text-gray-800 text-sm mb-1">Task Status</h4>
              <p className="text-sm text-gray-600">Submitted Successfully</p>
            </div>
            
            <div className="bg-purple-50/50 border border-purple-100 rounded-2xl p-5 flex flex-col items-center text-center group hover:bg-purple-50 transition-colors">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-3 text-purple-600 group-hover:scale-110 transition-transform">
                <Star size={20} />
              </div>
              <h4 className="font-bold text-gray-800 text-sm mb-1">Achievement</h4>
              <p className="text-sm text-gray-600">One More Step Towards Your Dream!</p>
            </div>

            <div className="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-5 flex flex-col items-center text-center group hover:bg-indigo-50 transition-colors">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mb-3 text-indigo-600 group-hover:scale-110 transition-transform">
                <Lightbulb size={20} />
              </div>
              <h4 className="font-bold text-gray-800 text-sm mb-1">Motivation</h4>
              <p className="text-xs text-gray-600 italic">"Great developers are not born; they are built through continuous learning and practice."</p>
            </div>
          </motion.div>

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg shadow-blue-200 flex items-center gap-3 transition-all hover:shadow-xl hover:from-blue-700 hover:to-purple-700"
            >
              <Home size={20} /> Back to Bootcamp
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SuccessPage;
