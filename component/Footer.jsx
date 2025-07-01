
import Link from "next/link";

const ExternalLink = ({ href, children, isDarkMode }) => (
  <a
    className={`transition ${
      isDarkMode 
        ? "text-gray-400 hover:text-gray-300" 
        : "text-gray-500 hover:text-gray-600"
    }`}
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer({ isDarkMode }) {
  return (
    <footer className="flex flex-col justify-center items-start max-w-4xl mx-auto w-full  px-6">
      <hr className={`w-full border-1 mb-8 ${
        isDarkMode ? "border-gray-800" : "border-gray-200"
      }`} />
      
      <div className="w-full max-w-4xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link 
            href="/" 
            className={`transition ${
              isDarkMode 
                ? "text-gray-400 hover:text-gray-300" 
                : "text-gray-500 hover:text-gray-600"
            }`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`transition ${
              isDarkMode 
                ? "text-gray-400 hover:text-gray-300" 
                : "text-gray-500 hover:text-gray-600"
            }`}
          >
            About
          </Link>
          <Link 
            href="/skill" 
            className={`transition ${
              isDarkMode 
                ? "text-gray-400 hover:text-gray-300" 
                : "text-gray-500 hover:text-gray-600"
            }`}
          >
            Skills
          </Link>
          <Link 
            href="/project" 
            className={`transition ${
              isDarkMode 
                ? "text-gray-400 hover:text-gray-300" 
                : "text-gray-500 hover:text-gray-600"
            }`}
          >
            Projects
          </Link>
        </div>
        
        <div className="flex flex-col space-y-4">
          <ExternalLink 
            href="https://github.com/Jkdev269" 
            isDarkMode={isDarkMode}
          >
            GitHub
          </ExternalLink>
          <ExternalLink 
            href="https://www.linkedin.com/in/jaharuddin-990444319/" 
            isDarkMode={isDarkMode}
          >
            LinkedIn
          </ExternalLink>
          <ExternalLink 
            href="emailto:jaharudin269@gmail.com" 
            isDarkMode={isDarkMode}
          >
            Email
          </ExternalLink>
          <ExternalLink 
            href="number:+918808761375" 
            isDarkMode={isDarkMode}
          >
            Number
          </ExternalLink>
        </div>
        
        <div className="flex flex-col space-y-4">
          <Link 
            href="https://jtextfrontend.vercel.app/Jtext" 
            className={`transition ${
              isDarkMode 
                ? "text-gray-400 hover:text-gray-300" 
                : "text-gray-500 hover:text-gray-600"
            }`}
          >
            Jtext
          </Link>
          <Link 
            href="https://website-generator-wine.vercel.app/" 
            className={`transition ${
              isDarkMode 
                ? "text-gray-400 hover:text-gray-300" 
                : "text-gray-500 hover:text-gray-600"
            }`}
          >
            Website Generator
          </Link>
          <Link 
            href="https://nexamart-jk.vercel.app/" 
            className={`transition ${
              isDarkMode 
                ? "text-gray-400 hover:text-gray-300" 
                : "text-gray-500 hover:text-gray-600"
            }`}
          >
            Nexamart Ecommerce
          </Link>
          <Link 
            href="https://feedback-inbox.vercel.app/" 
            className={`transition ${
              isDarkMode 
                ? "text-gray-400 hover:text-gray-300" 
                : "text-gray-500 hover:text-gray-600"
            }`}
          >
            Feedback Messaging
          </Link>
        </div>
      </div>
      
      <div className={`text-sm ${
        isDarkMode ? "text-gray-400" : "text-gray-500"
      }`}>
        © {new Date().getFullYear()} Jaharuddin. All rights reserved.
      </div>
      
      <div className={`text-sm mt-2 ${
        isDarkMode ? "text-gray-400" : "text-gray-500"
      }`}>
        Built with{" "}
        <a 
          href="https://nextjs.org" 
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a 
          href="https://tailwindcss.com" 
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS
        </a>
        .
      </div>
    </footer>
  );
}