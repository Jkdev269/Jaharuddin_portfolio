'use client';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '@/app/context/ThemeContext';
import FloatingContact from './FloatingContact';

export default function ClientLayout({ children }) {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className={`min-h-screen`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="max-w-4xl mx-auto px-6 py-12 pt-30">
        {children}
      </main>
      <FloatingContact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}
