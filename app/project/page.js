"use client";
import { useTheme } from "@/app/context/ThemeContext";
export default function Projects() {
  const { isDarkMode } = useTheme();
  const projects = [
    {
      title: "Website Generator",
      description:
        "Generate Your Website in Minutes Describe what you want, and our AI-powered tool will create a custom website for you. No coding required!",
      url: "https://website-generator-wine.vercel.app/",
      tags: [
        "Next.js",
        // "React",
        "TailwindCSS",
      ],
      icon: (
        <svg
          className="w-10 h-10 text-purple-600"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <!-- Globe (represents web) --> */}
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M2 12H22" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 2C15 5 15 19 12 22C9 19 9 5 12 2Z"
            stroke="currentColor"
            strokeWidth="2"
          />

          {/* <!-- Gear (represents generator) --> */}
          <path
            d="M19.4 15C19.6 14.4 19.7 13.7 19.7 13C19.7 12.3 19.6 11.6 19.4 11L21 9.6L19.4 7.6L17.8 8.2C17.3 7.8 16.7 7.5 16 7.3L15.6 5.5H12.4L12 7.3C11.3 7.5 10.7 7.8 10.2 8.2L8.6 7.6L7 9.6L8.6 11C8.4 11.6 8.3 12.3 8.3 13C8.3 13.7 8.4 14.4 8.6 15L7 16.4L8.6 18.4L10.2 17.8C10.7 18.2 11.3 18.5 12 18.7L12.4 20.5H15.6L16 18.7C16.7 18.5 17.3 18.2 17.8 17.8L19.4 18.4L21 16.4L19.4 15Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      ),
    },
    {
      title: "Jtext",
      description:
        "Developed a real-time communication app with instant messaging, typing indicators, read receipts, voice/videocalls, and media sharing",
      url: "https://jtextfrontend.vercel.app/Jtext",
      tags: [
        "Reactjs",
        "Nodejs",
        "Express",
        "MongoDB",
        "Socket.io",
        "Agora",
        "firebase",
      ],
      icon: (
        <svg
          className="w-10 h-10 text-blue-500"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <!-- Chat bubble --> */}
          <path
            d="M8 12C8 8.68629 10.6863 6 14 6H50C53.3137 6 56 8.68629 56 12V36C56 39.3137 53.3137 42 50 42H28L16 54V42H14C10.6863 42 8 39.3137 8 36V12Z"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinejoin="round"
          />

          {/* <!-- JText lettermark --> */}
          <path
            d="M22 22H32M32 22V34M32 22H42"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Feedback messaging",
      description:
        "Created an anonymous messaging platform with secure user authentication and message management features.",
      url: "https://feedback-inbox.vercel.app/",
      tags: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "NextAuth.js",
        "ShadcnUI",
        "Zod",
        "TailwindCSS",
      ],

      icon: (
        <svg className="h-8 w-8" viewBox="0 0 46 32">
          <path
            d="M19.557.113C11.34.32 9.117 8.757 9.03 12.95c1.643-2.67 4.62-3.08 6.931-3.08 2.825.085 10.27.205 17.458 0C40.61 9.663 44.802 3.28 46 .112c-5.391-.085-18.228-.205-26.443 0zM14.422 14.234C3.332 14.234-.468 24.76.045 31.948c3.594-6.418 7.617-7.53 9.243-7.445h6.675c5.956 0 11.039-6.846 12.836-10.27H14.422z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "Nexamart E-commerce",
      description:
        "Full-stack MERN application with user authentication and admin dashboard.",
      url: "https://nexamart-jk.vercel.app/",
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
        "Redux",
      ],
      icon: (
        <svg
          className="w-10 h-10 text-blue-600"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3H5L6 14H18L19 6H7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="20" r="1" fill="currentColor" />
          <circle cx="17" cy="20" r="1" fill="currentColor" />
        </svg>
      ),
    },
  ];
  return (
    <>
      <section className="mb-16">
        <h2
          className={`text-3xl font-bold mb-8 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Projects
        </h2>
        <p className={`mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
          I’ve developed both commercial-grade and personal projects, ranging
          from real-time chat applications and anonymous feedback tools, to an
          AI-powered website generator. Each project showcases my full-stack
          development skills, creativity, and passion for building scalable,
          user-focused solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {projects.map((project, index) => (
            <a
              key={index}
              className="group mb-4 hover:scale-105 hover:shadow-lg rounded-xl transition duration-200 relative border border-slate-200 dark:border-slate-700 w-full block"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="pointer-events-none">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-100/50 to-teal-100/50 opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]" />
                <div className="absolute inset-0 rounded-xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100" />
              </div>
              <div className="relative h-full">
                <span className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />
                <span className="absolute w-px -left-px top-[50%] h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0" />
                <div className="flex flex-col items-start dark:border-gray-800 rounded p-4 relative">
                  <div className="my-4">{project.icon}</div>
                  <div>
                    <h4
                      className={`text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                    >
                      {project.title}
                    </h4>
                    <p
                      className={`mb-6 leading-relaxed ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {project.description}
                    </p>
                    <div className="pt-4 flex md:flex-row flex-wrap">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`leading-5 mb-2 transition-colors  rounded-md text-xs italic  mr-2 px-1 ${
                            isDarkMode
                              ? "bg-gray-800 text-gray-300 border-gray-700"
                              : "bg-gray-100 text-gray-700 border-gray-300"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
