'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar({ isDarkMode, toggleDarkMode }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/project' },
    { name: 'Skills', href: '/skill' },
    { name: 'Contact', href: '/contact' }
  ];

  // Separate always-visible and hamburger-only links
  const alwaysVisible = ['Home', 'Projects'];
  const dropdownLinks = navLinks.filter((link) => !alwaysVisible.includes(link.name));

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex flex-col sm:flex-row justify-between items-start sm:items-center max-w-4xl w-full p-6 mx-auto backdrop-blur-md border-b transition-colors duration-200 ${
        isDarkMode 
          ? 'bg-black border-gray-700/20' 
          : 'bg-white/95 border-gray-200/20'
      }`}>
      <Link href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </Link>

      {/* Top Row: Left (Dark Mode) + Right (Mobile Links + Toggle) */}
      <div className="flex justify-between items-center w-full sm:w-auto">
        {/* Dark Mode Toggle */}
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          onClick={toggleDarkMode}
          className={`group rounded-full px-3 py-2 shadow-lg ring-1 backdrop-blur transition ${
            isDarkMode
              ? 'bg-zinc-900/90 ring-teal-500/50 hover:ring-white/20 shadow-zinc-800/5'
              : 'bg-white/90 ring-zinc-900/5 shadow-zinc-800/5'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            className={`h-4 w-4 ${isDarkMode ? 'text-teal-500' : 'text-gray-800'}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>

        {/* Mobile: Home + Projects + Hamburger */}
        <div className="flex sm:hidden flex-row items-center space-x-2 ml-4">
          {navLinks
            .filter((link) => alwaysVisible.includes(link.name))
            .map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative group rounded-lg px-2 py-1 text-sm transition-all ${
                    isDarkMode
                      ? 'text-gray-200 hover:text-white'
                      : 'text-gray-700 hover:text-black'
                  }`}
                >
                  <span
                    className={`group-hover:text-blue-500 transition-colors duration-200 ${
                      isDarkMode ? 'text-gray-100' : 'text-gray-700'
                    }`}
                  >
                    {link.name}
                  </span>
                  {isActive && (
                    <span className={`absolute inset-x-1 -bottom-px h-px bg-gradient-to-r transition-colors duration-200 ${
                      isDarkMode 
                        ? 'from-blue-400/0 via-blue-400/40 to-blue-400/0' 
                        : 'from-blue-500/0 via-blue-500/40 to-blue-500/0'
                    }`}></span>
                  )}
                </Link>
              );
            })}

          <button
            onClick={toggleMobileMenu}
            className={`p-2 rounded-md ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-black'}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div
        className={`hidden sm:block rounded-full px-3 text-sm font-medium shadow-lg ring-1 backdrop-blur ${
          isDarkMode
            ? 'bg-zinc-900/90 text-zinc-200 ring-white/10 shadow-zinc-800/5'
            : 'bg-white/90 text-zinc-800 ring-zinc-900/5 shadow-zinc-800/5'
        }`}
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`group relative rounded-lg px-3 inline-block py-2 text-sm transition-all delay-150 ${
                isDarkMode
                  ? 'text-gray-200 hover:text-white'
                  : 'text-gray-700 hover:text-black'
              }`}
            >
              <span
                className={`relative z-10 group-hover:text-blue-500 transition-colors duration-200 ${
                  isDarkMode ? 'text-gray-50' : 'text-gray-600'
                }`}
              >
                {link.name}
              </span>

              {isActive && (
                <span className={`absolute inset-x-1 -bottom-px h-px bg-gradient-to-r transition-colors duration-200 ${
                  isDarkMode 
                    ? 'from-blue-400/0 via-blue-400/40 to-blue-400/0' 
                    : 'from-blue-500/0 via-blue-500/40 to-blue-500/0'
                }`}></span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Mobile Dropdown: Blog, Snippets, Resources */}
      {isMobileMenuOpen && (
        <div
          className={`sm:hidden mt-4 w-full flex flex-col gap-2 rounded-md p-4 text-sm font-medium shadow ring-1 transition-all ${
            isDarkMode
              ? 'bg-zinc-900 text-white ring-white/10'
              : 'bg-white text-black ring-black/10'
          }`}
        >
          {dropdownLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)} // Close on click
                className={`group relative rounded-lg px-3 py-2 transition-colors ${
                  isActive ? 'text-blue-500' : ''
                }`}
              >
                <span className="group-hover:text-blue-500">{link.name}</span>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}