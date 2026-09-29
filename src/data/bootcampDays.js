export const bootcampDays = [
  {
    id: 1,
    dayNumber: 1,
    title: "Python Foundations for AI",
    shortTitle: "Python Foundations",
    description: "Build confidence with Python programming fundamentals and logical reasoning.",
    topics: ["Variables", "Conditions", "Loops", "Data Structures", "Functions"],
    status: "closed", // Closed: yesterday's tasks completed, submissions closed
    durationMinutes: 45,
    totalQuestions: 21,
    mcqCount: 17,
    codingCount: 4,
    route: "/day/1",
    accentColor: "purple",
    theme: {
      badgeBg: "bg-gray-100",
      badgeText: "text-gray-600",
      border: "border-gray-200",
      borderActive: "border-gray-400",
      hoverBorder: "hover:border-gray-300",
      glowBg: "from-gray-500/5 to-slate-500/5",
      btnBg: "bg-gray-200 text-gray-500 cursor-not-allowed",
      btnSecondary: "text-gray-500 bg-gray-100",
      accentText: "text-gray-600",
      cardBorder: "border-gray-200",
      iconBg: "bg-gray-100 text-gray-500",
      pillBg: "bg-gray-50 text-gray-600 border-gray-200"
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
    status: "coming_soon", // Locked / coming soon
    durationMinutes: 45,
    totalQuestions: 21,
    mcqCount: 17,
    codingCount: 4,
    route: "/day/3",
    accentColor: "mint",
    theme: {
      badgeBg: "bg-emerald-50",
      badgeText: "text-emerald-700",
      border: "border-emerald-200",
      borderActive: "border-emerald-500",
      hoverBorder: "hover:border-emerald-300",
      glowBg: "from-emerald-500/10 to-teal-500/10",
      btnBg: "bg-emerald-600 hover:bg-emerald-700",
      btnSecondary: "text-emerald-700 bg-emerald-50 hover:bg-emerald-100",
      accentText: "text-emerald-600",
      cardBorder: "border-emerald-100",
      iconBg: "bg-emerald-100 text-emerald-600",
      pillBg: "bg-emerald-50 text-emerald-700 border-emerald-200"
    }
  },
  {
    id: 4,
    dayNumber: 4,
    title: "Python + Generative AI",
    shortTitle: "Generative AI",
    description: "Build AI-powered applications using Python, LLMs, and prompt engineering architectures.",
    topics: ["LLMs", "Prompt Engineering", "AI APIs", "Chatbots"],
    status: "coming_soon", // Locked / coming soon
    durationMinutes: 45,
    totalQuestions: 21,
    mcqCount: 17,
    codingCount: 4,
    route: "/day/4",
    accentColor: "peach",
    theme: {
      badgeBg: "bg-orange-50",
      badgeText: "text-orange-700",
      border: "border-orange-200",
      borderActive: "border-orange-500",
      hoverBorder: "hover:border-orange-300",
      glowBg: "from-orange-500/10 to-amber-500/10",
      btnBg: "bg-orange-500 hover:bg-orange-600",
      btnSecondary: "text-orange-700 bg-orange-50 hover:bg-orange-100",
      accentText: "text-orange-600",
      cardBorder: "border-orange-100",
      iconBg: "bg-orange-100 text-orange-600",
      pillBg: "bg-orange-50 text-orange-700 border-orange-200"
    }
  },
  {
    id: 5,
    dayNumber: 5,
    title: "Build, Deploy & AI Hackathon",
    shortTitle: "Build & Deploy",
    description: "Turn your Python skills into a real, deployable AI product ready for user showcase.",
    topics: ["Streamlit", "GitHub", "Deployment", "AI Product", "Presentation"],
    status: "coming_soon", // Locked / coming soon
    durationMinutes: 45,
    totalQuestions: 21,
    mcqCount: 17,
    codingCount: 4,
    route: "/day/5",
    accentColor: "amber",
    theme: {
      badgeBg: "bg-amber-50",
      badgeText: "text-amber-700",
      border: "border-amber-200",
      borderActive: "border-amber-500",
      hoverBorder: "hover:border-amber-300",
      glowBg: "from-amber-500/10 to-yellow-500/10",
      btnBg: "bg-amber-600 hover:bg-amber-700",
      btnSecondary: "text-amber-700 bg-amber-50 hover:bg-amber-100",
      accentText: "text-amber-600",
      cardBorder: "border-amber-100",
      iconBg: "bg-amber-100 text-amber-600",
      pillBg: "bg-amber-50 text-amber-700 border-amber-200"
    }
  }
];

export const getDayConfig = (dayId) => {
  const num = parseInt(dayId, 10);
  return bootcampDays.find(d => d.id === num || d.dayNumber === num) || null;
};
