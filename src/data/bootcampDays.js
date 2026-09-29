export const bootcampDays = [
  {
    id: 1,
    dayNumber: 1,
    title: "Python Foundations for AI",
    shortTitle: "Python Foundations",
    description: "Build confidence with Python programming fundamentals and logical reasoning.",
    topics: ["Variables", "Conditions", "Loops", "Data Structures", "Functions"],
    status: "available", // Open and accessible
    durationMinutes: 45,
    totalQuestions: 21,
    mcqCount: 17,
    codingCount: 4,
    route: "/day/1",
    accentColor: "purple",
    theme: {
      badgeBg: "bg-purple-50",
      badgeText: "text-purple-700",
      border: "border-purple-200",
      borderActive: "border-purple-500",
      hoverBorder: "hover:border-purple-300",
      glowBg: "from-purple-500/10 to-indigo-500/10",
      btnBg: "bg-purple-600 hover:bg-purple-700",
      btnSecondary: "text-purple-700 bg-purple-50 hover:bg-purple-100",
      accentText: "text-purple-600",
      cardBorder: "border-purple-100",
      iconBg: "bg-purple-100 text-purple-600",
      pillBg: "bg-purple-50 text-purple-700 border-purple-200"
    }
  },
  {
    id: 2,
    dayNumber: 2,
    title: "Python for Data, APIs & Automation",
    shortTitle: "Data, APIs & Automation",
    description: "Turn Python into a practical data and automation engine with Pandas, APIs, and file workflows.",
    topics: ["Pandas", "NumPy", "CSV", "JSON", "APIs", "Automation"],
    status: "available", // Today's active task
    durationMinutes: 45,
    totalQuestions: 21,
    mcqCount: 17,
    codingCount: 4,
    route: "/day/2",
    sheetsUrl: "https://script.google.com/macros/s/AKfycbze18nFtzKFw5hLuaRTN_QmsXz-Jn6qnqRknKTWl8wAwRtBe8pE6IsakGKPxZgY0rTv/exec",
    accentColor: "blue",
    theme: {
      badgeBg: "bg-blue-50",
      badgeText: "text-blue-700",
      border: "border-blue-200",
      borderActive: "border-blue-500",
      hoverBorder: "hover:border-blue-300",
      glowBg: "from-blue-500/10 to-cyan-500/10",
      btnBg: "bg-blue-600 hover:bg-blue-700",
      btnSecondary: "text-blue-700 bg-blue-50 hover:bg-blue-100",
      accentText: "text-blue-600",
      cardBorder: "border-blue-100",
      iconBg: "bg-blue-100 text-blue-600",
      pillBg: "bg-blue-50 text-blue-700 border-blue-200"
    }
  },
  {
    id: 3,
    dayNumber: 3,
    title: "Python + Machine Learning",
    shortTitle: "Machine Learning",
    description: "Make Python learn from data using supervised and unsupervised learning algorithms.",
    topics: ["ML Fundamentals", "Regression", "Classification", "Scikit-Learn"],
    status: "locked", // Completely locked
    durationMinutes: 45,
    totalQuestions: 21,
    mcqCount: 17,
    codingCount: 4,
    route: "/day/3",
    accentColor: "mint",
    theme: {
      badgeBg: "bg-gray-100",
      badgeText: "text-gray-500",
      border: "border-gray-200",
      borderActive: "border-gray-300",
      hoverBorder: "hover:border-gray-200",
      glowBg: "from-gray-500/5 to-slate-500/5",
      btnBg: "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200",
      btnSecondary: "text-gray-400 bg-gray-50",
      accentText: "text-gray-400",
      cardBorder: "border-gray-200/80",
      iconBg: "bg-gray-100 text-gray-400",
      pillBg: "bg-gray-50 text-gray-500 border-gray-100"
    }
  },
  {
    id: 4,
    dayNumber: 4,
    title: "Python + Generative AI",
    shortTitle: "Generative AI",
    description: "Build AI-powered applications using Python, LLMs, and prompt engineering architectures.",
    topics: ["LLMs", "Prompt Engineering", "AI APIs", "Chatbots"],
    status: "locked", // Completely locked
    durationMinutes: 45,
    totalQuestions: 21,
    mcqCount: 17,
    codingCount: 4,
    route: "/day/4",
    accentColor: "peach",
    theme: {
      badgeBg: "bg-gray-100",
      badgeText: "text-gray-500",
      border: "border-gray-200",
      borderActive: "border-gray-300",
      hoverBorder: "hover:border-gray-200",
      glowBg: "from-gray-500/5 to-slate-500/5",
      btnBg: "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200",
      btnSecondary: "text-gray-400 bg-gray-50",
      accentText: "text-gray-400",
      cardBorder: "border-gray-200/80",
      iconBg: "bg-gray-100 text-gray-400",
      pillBg: "bg-gray-50 text-gray-500 border-gray-100"
    }
  },
  {
    id: 5,
    dayNumber: 5,
    title: "Build, Deploy & AI Hackathon",
    shortTitle: "Build & Deploy",
    description: "Turn your Python skills into a real, deployable AI product ready for user showcase.",
    topics: ["Streamlit", "GitHub", "Deployment", "AI Product", "Presentation"],
    status: "locked", // Completely locked
    durationMinutes: 45,
    totalQuestions: 21,
    mcqCount: 17,
    codingCount: 4,
    route: "/day/5",
    accentColor: "amber",
    theme: {
      badgeBg: "bg-gray-100",
      badgeText: "text-gray-500",
      border: "border-gray-200",
      borderActive: "border-gray-300",
      hoverBorder: "hover:border-gray-200",
      glowBg: "from-gray-500/5 to-slate-500/5",
      btnBg: "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200",
      btnSecondary: "text-gray-400 bg-gray-50",
      accentText: "text-gray-400",
      cardBorder: "border-gray-200/80",
      iconBg: "bg-gray-100 text-gray-400",
      pillBg: "bg-gray-50 text-gray-500 border-gray-100"
    }
  }
];

export const getDayConfig = (dayId) => {
  const num = parseInt(dayId, 10);
  return bootcampDays.find(d => d.id === num || d.dayNumber === num) || null;
};
