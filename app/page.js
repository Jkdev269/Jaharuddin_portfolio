// pages/index.js
"use client";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/component/Navbar"; // Adjust the import path as necessary
import Projects from "@/component/projects";
import About from "@/component/About";
import Header from "@/component/Header";
import Skills from "@/component/Skills";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // const talks = [
  //   {
  //     title: "Components Of A Great Portfolio Website",
  //     description: "I talk about how to create a targeted website to land more job interviews and freelance clients with all the other things that matter. Hosted on codementor.",
  //     platform: "codementor.io",
  //     image: "/talks/codementor.jpg"
  //   },
  //   {
  //     title: "Crafting The Perfect Portfolio Website For Developers",
  //     description: "Talked about how to effectively utilise a portfolio website to put yourself in the best position to win.",
  //     platform: "roc8.careers",
  //     image: "/talks/roc8.png"
  //   },
  //   {
  //     title: "How To Use Algochurn To Clear Technical Interviews With Ease.",
  //     description: "Algochurn is a free resource that helps front-end developers practice machine coding questions. Here I talk about how to effectively make use of Algochurn.",
  //     platform: "Youtube",
  //     image: "/talks/algochurn-youtube.png"
  //   },
  //   {
  //     title: "How To Implement Debouncing In React.",
  //     description: "Debouncing is a method of preventing a function from being invoked too often. In this video, I talk about how to create a custom debounce function from scratch.",
  //     platform: "Youtube",
  //     image: "/talks/debouncing.png"
  //   }
  // ]

  // const timeline = [
  //   {
  //     year: "2023",
  //     events: [
  //       {
  //         title: "300+ users on Algochurn 🤌🏻",
  //         description: "Algochurn crossed 300 users and I couldn't be any happier.",
  //         link: "https://algochurn.com"
  //       }
  //     ]
  //   },
  //   {
  //     year: "2022",
  //     events: [
  //       {
  //         title: "Started working on Moonbeam 🤩",
  //         description: "Started working on Moonbeam as a front-end developer. Building a chrome extension was the most fun and challenging part.",
  //         link: "https://gomoonbeam.com"
  //       },
  //       {
  //         title: "Algochurn crosses 200 users 🤌🏻",
  //         description: "Algochurn is now helping 200+ registered users and 14,000+ monthly users.",
  //         link: "https://algochurn.com"
  //       },
  //       {
  //         title: "1,000+ Followers on Twitter 🌟",
  //         description: "Crossed 1,000 mark on Twitter. You can help increase the count by following me. 😉",
  //         link: "https://www.twitter.com/mannupaaji"
  //       },
  //       {
  //         title: "Built and launched Algochurn 🍾",
  //         description: "Built Algochurn, A platform to practice DS ALgo along with front-end to ace your next technical interview.",
  //         link: "https://algochurn.com"
  //       },
  //       {
  //         title: "Promoted to Senior Software Engineer 🎉",
  //         description: "Promoted to Senior Software Engineer - Worked on applications handling 20,000+ users per day. Working on Web, Mobile, and even TV applications. 🔥"
  //       }
  //     ]
  //   },
  //   {
  //     year: "2021",
  //     events: [
  //       {
  //         title: "Built Tailwind Master Kit 🪁",
  //         description: "Built TailwindMasterKit, A SaaS marketplace for beautiful, handcrafted Website components built with and for Tailwind supported websites. Built the components from the ground up for React and HTML in 30+ categories.",
  //         link: "https://www.tailwindmasterkit.com"
  //       },
  //       {
  //         title: "Created covidrescue.co.in 💊",
  //         description: "Created covidrescue.co.in to help people with verified leads on Oxygen, Remdesivir, Food, Beds, ICU, Medicines and more.",
  //         link: "https://www.covidrescue.co.in"
  //       },
  //       {
  //         title: "Created Covid-19 Vaccination slots notification system 💉",
  //         description: "Integrated Vaccination slots notification system in covidrescue web app. Notified people whenever vaccination slot was available in their area and city."
  //       }
  //     ]
  //   },
  //   {
  //     year: "2020",
  //     events: [
  //       {
  //         title: "Joined mroads 🎉",
  //         description: "Joined mroads as a Software Development Engineer. Working on their Flagship product as a Front-End Developer."
  //       },
  //       {
  //         title: "Cleared GATE 2019 💯",
  //         description: "Cleared GATE 2019 after 8 months of continuous studies. I still hate Computer System Architecture & Organization."
  //       },
  //       {
  //         title: "Competitive Programming 🏆",
  //         description: "Cleared Hackerrank and Hackerearth contests. Got a strong grip on Competitive Programming."
  //       },
  //       {
  //         title: "Taught programming to students🥳",
  //         description: "Taught fundamental programming to school students. It included Basic C programming, Introduction to Web Development and logic building."
  //       }
  //     ]
  //   },
  //   {
  //     year: "2019",
  //     events: [
  //       {
  //         title: "Placements - Got Placed ✨",
  //         description: "Had 3 offers in Hand. 1 On-Campus and 2 Off-Campus in the Software Developer (Full-Stack) roles."
  //       },
  //       {
  //         title: "Full-Stack Applications 🚀",
  //         description: "Started freelancing, developed full-stack applications for clients ranging from E-Commerce stores to static landing pages."
  //       },
  //       {
  //         title: "GATE Preparation ⚛️",
  //         description: "Started preparing for GATE (Graduate Aptitute Test in Engineering). Learnt all the Computer Science subjects again from scratch."
  //       }
  //     ]
  //   }
  // ]

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Add your email submission logic here
    setEmail("");
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Head>
        <title>Jaharuddin - MERN Developer, Writer, Creator</title>
        <meta
          name="description"
          content="Senior Software Engineer building SaaS products and web apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header/Navigation */}
      <header
        className={`border-b transition-colors duration-300 ${
          isDarkMode ? "border-gray-800" : "border-gray-200"
        }`}
      >
        <Navbar
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          toggleMobileMenu={toggleMobileMenu}
        />
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <Header isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        {/* Contact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            Want to hire me as a freelancer? Let's discuss.
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Drop your message and let's discuss about your project.
          </p>

          <div className="space-y-8">
            <Link
              href="https://wa.me/918808761375?text=I want to work on a project with you"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Chat on WhatsApp
            </Link>

            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-300 mb-6 text-lg">
                Drop in your email ID and I will get back to you.
              </p>
              <form onSubmit={handleSubmit} className="flex gap-4 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2024 Manu Arora. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link
                href="https://twitter.com/mannupaaji"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Twitter
              </Link>
              <Link
                href="https://github.com/manuarora700"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/manuarora28"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
