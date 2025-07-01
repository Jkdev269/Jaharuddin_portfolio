'use client';
import Head from 'next/head';
import { useTheme } from '@/app/context/ThemeContext';
import Projects from '@/component/projects';
import About from '@/component/About';
import Header from '@/component/Header';
import Skills from '@/component/Skills';
import Contact from '@/component/Contact';
import FloatingContact from '@/component/FloatingContact';

export default function Home() {
  const { isDarkMode } = useTheme();

  return (
    <>
      <Head>
        <title>Jaharuddin - MERN Developer</title>
        <meta name="description" content="Full-stack web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <FloatingContact isDarkMode={isDarkMode} />
    </>
  );
}
