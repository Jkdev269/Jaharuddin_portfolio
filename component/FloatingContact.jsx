"use client";
import { useState } from "react";
export default function FloatingContact({ isDarkMode }) {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
      const [contactFormData, setContactFormData] = useState({
        email: "",
        message: ""
      });
     const toggleContactForm = () => {
    setIsContactFormOpen((prev) => !prev);
  };
     const handleContactFormChange = (e) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 const handleContactFormSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactFormData),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Message sent successfully!");
      setContactFormData({ email: "", message: "" });
      setIsContactFormOpen(false);
    } else {
      alert(data.error || "Something went wrong");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to send message. Try again.");
  }
};


    return (
        <div className="fixed right-4 md:right-10 bottom-10 flex flex-col items-end z-20">
        {/* Contact Form - appears above the button */}
        <div 
          className={`mb-4 rounded-xl shadow-2xl bg-white dark:bg-zinc-800 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${
            isContactFormOpen 
              ? 'opacity-100 transform translate-y-0 scale-100' 
              : 'opacity-0 transform translate-y-4 scale-95 pointer-events-none'
          }`}
          style={{ width: '380px', maxWidth: '90vw' }}
        >
          {/* Header */}
          <div className="p-4 bg-gray-100 dark:bg-zinc-700 relative">
            <button
              onClick={toggleContactForm}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-600 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-gray-700 font-bold text-xl dark:text-white pr-8">
              Have a question? Drop in your message 👇
            </h2>
            <small className="text-xs text-gray-500 dark:text-gray-400">
              It won't take more than 10 seconds. Shoot your shot. 😉
            </small>
          </div>

          {/* Form Content */}
          <form onSubmit={handleContactFormSubmit} className="p-6 flex flex-col">
            <label className="text-sm font-normal text-black mb-2 dark:text-white">
              Email Address
            </label>
            <input 
              type="email" 
              name="email"
              value={contactFormData.email}
              onChange={handleContactFormChange}
              className="text-black rounded-md border border-gray-200 py-2 px-3 focus:outline-none focus:border-gray-400 placeholder:text-sm dark:bg-zinc-800 dark:border-gray-700 dark:text-white mb-1 transition-colors" 
              placeholder="johndoe@xyz.com"
              required
            />
            <small className="h-4 min-h-4 text-red-500 font-semibold"></small>

            <label className="text-sm font-normal text-black mb-2 dark:text-white">
              Message
            </label>
            <textarea 
              name="message"
              value={contactFormData.message}
              onChange={handleContactFormChange}
              rows="4" 
              className="text-black rounded-md border border-gray-200 py-2 px-3 focus:outline-none focus:border-gray-400 placeholder:text-sm dark:bg-zinc-800 dark:border-gray-700 dark:text-white mb-1 resize-none transition-colors" 
              placeholder="I'd love a compliment from you."
              required
            />
            <small className="h-4 min-h-4 text-red-500 font-semibold mb-4"></small>

            <button 
              type="submit"
              className="text-black dark:text-white w-full px-4 py-3 border-2 border-black rounded-md font-bold text-lg dark:border-gray-700 transition duration-200 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-white"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Floating Chat Button */}
        <button 
          onClick={toggleContactForm}
          className={`w-14 h-14 rounded-full flex items-center justify-center hover:scale-105 hover:shadow-xl transition-all duration-200 shadow-lg ${
            isDarkMode ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            stroke="currentColor" 
            className={`w-6 h-6 transition-transform duration-300 ${
              isContactFormOpen ? 'rotate-45' : 'rotate-0'
            } ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
          >
            {isContactFormOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" 
              />
            )}
          </svg>
        </button>
      </div>
    );
}