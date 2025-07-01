"use client";
import { useTheme } from "@/app/context/ThemeContext";
import React from "react";
const Skills = () => {
  const { isDarkMode } = useTheme();
  const skills = [
    { name: "MongoDB", category: "Database" },
    { name: "Express.js", category: "Backend" },
    { name: "React.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "JavaScript", category: "Language" },
    { name: "TypeScript", category: "Language" },
    { name: "Next.js", category: "Framework" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Shadcn UI", category: "UI Library" },
    { name: "Socket.io", category: "Real-time" },
    { name: "Firebase", category: "Backend" },
    { name: "Redux", category: "State Management" },
    { name: "Agora", category: "Communication" },
    { name: "Zod", category: "Validation" },
    { name: "NextAuth.js", category: "Authentication" },
    { name: "Git", category: "Version Control" },
    { name: "GitHub", category: "Version Control" },
  ];

  const featuredSkills = [
    "React.js",
    "Node.js",
    "MongoDB",
    "Next.js",
    "TypeScript",
  ];

  return (
    <section className="mb-16">
      <h2
        className={`text-3xl font-bold mb-8 ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Technical Skills
      </h2>
      <p className={`mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
        As a full-stack MERN developer, I’ve worked with a wide range of
        technologies across frontend, backend, and real-time systems. Below is a
        breakdown of the tools and frameworks I specialize in: Frontend:
        React.js, Next.js, Tailwind CSS, Shadcn UI, TypeScript, Redux Backend:
        Node.js, Express.js, Firebase Database & APIs: MongoDB, Socket.io
        (real-time), Agora (video/audio communication) Auth & Validation:
        NextAuth.js, Zod Version Control: Git, GitHub Other Tools: JavaScript,
        TypeScript, Git CLI My expertise allows me to build fast, scalable, and
        secure web applications — from intuitive UIs to robust backend APIs and
        real-time features.
      </p>

      {/* Featured Skills */}
      <div className="mb-8">
        <h3
          className={`text-xl font-semibold mb-4 ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Featured
        </h3>
        <div className="flex flex-wrap gap-3 mb-6">
          {featuredSkills.map((skill) => (
            <span
              key={skill}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-100/50 to-teal-100/50 text-white hover:bg-blue-700"
                  : "bg-blue-100 text-blue-800 hover:bg-blue-200"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* All Skills with background hover gradient effect */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`group relative p-4 rounded-lg border transition-all duration-200 hover:scale-105 overflow-hidden ${
              isDarkMode
                ? "bg-gray-900 border-gray-700"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            {/* Gradient overlay (same as project card) */}
            <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-r from-blue-100/50 to-teal-100/50 opacity-0 group-hover:opacity-100 transition duration-300 dark:from-[#202D2E] dark:to-[#303428]" />
            <div className="relative z-10">
              <div
                className={`font-medium mb-1 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                {skill.name}
              </div>
              <div
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {skill.category}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
