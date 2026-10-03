import { bootcampDays as pythonDays } from './bootcampDays';
import { javaBootcampDays } from './javaBootcampDays';

export const bootcamps = {
  "python-with-ai": {
    id: "python-with-ai",
    name: "Python with AI",
    slug: "python-with-ai",
    description: "From Python Foundations to Real-World AI Applications",
    status: "available",
    days: pythonDays,
    completedKey: "kq_completed_days",
    totalDays: 5,
    icon: "🐍",
    accentColor: "purple",
    badgeLabel: "🚀 Learn by Building",
    tagline: "5-Day Hands-On Bootcamp"
  },
  "java-with-ai": {
    id: "java-with-ai",
    name: "Java with AI",
    slug: "java-with-ai",
    description: "From Java Fundamentals to AI-Powered Applications",
    status: "available",
    days: javaBootcampDays,
    completedKey: "kq_java_completed_days",
    totalDays: 5,
    icon: "☕",
    accentColor: "blue",
    badgeLabel: "🚀 Learn by Building",
    tagline: "5-Day Hands-On Bootcamp"
  },
  "generative-ai": {
    id: "generative-ai",
    name: "Generative AI Bootcamp",
    slug: "generative-ai",
    description: "Master Prompt Engineering, LLMs, AI Agents & GenAI Apps",
    status: "coming_soon",
    days: [],
    completedKey: "kq_genai_completed_days",
    totalDays: 5,
    icon: "🤖",
    accentColor: "orange",
    badgeLabel: "Advanced AI Learning",
    tagline: "Advanced AI Learning"
  }
};

export const getBootcampConfig = (bootcampId) => {
  return bootcamps[bootcampId] || null;
};

export const getAllBootcamps = () => {
  return Object.values(bootcamps);
};
