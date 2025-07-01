"use client";
import { useState, useRef } from "react";

import SuccessMessage from "@/component/SuccessMessage";
import { useTheme } from "@/app/context/ThemeContext";
import ErrorMessage from "@/component/ErrorMessage";
import LoadingSpinner from "@/component/LoadingSpinner";

export default function Contact() {
  const { isDarkMode } = useTheme();

  const Divider = () => {
    return (
      <div
        className={`border w-full my-8 ${
          isDarkMode ? "border-gray-600" : "border-gray-200"
        }`}
      />
    );
  };

  const [form, setForm] = useState(false);
  const inputEl = useRef(null);

  const subscribe = async (e) => {
    e.preventDefault();
    setForm({ state: "loading" });
    const res = await fetch("/api/contact", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: "error",
        message: error,
      });
      return;
    }

    inputEl.current.value = "";
    setForm({
      state: "success",
      message: `Hooray! You're now on the list. Check your inbox or promotions for a mail.`,
    });
  };

  return (
    <>
      <h2
        className={`text-3xl font-bold mb-6 ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Contact Me
      </h2>
      <p
        className={`text-lg mb-4 ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Have a project in mind, a collaboration idea, or just want to say hello?
        I&apos;m always open to new opportunities, freelance work, or just tech
        conversations. Feel free to reach out — I’ll get back to you as soon as
        possible! 📧 Email: jaharuddin269@gmail.com
      </p>
      <div
        className={`border rounded p-6 my-4 w-full ${
          isDarkMode
            ? "border-gray-800 bg-gray-900/50"
            : "border-blue-200 bg-blue-50"
        }`}
      >
        <h5
          className={`text-lg md:text-xl font-bold ${
            isDarkMode ? "text-gray-100" : "text-gray-900"
          }`}
        >
          I&apos;m currently looking for a full-time job in MERN Stack Development.
        </h5>
        <p className={`my-1 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
          Let&apos;s connect and discuss how I can add value to your team.
        </p>
        <a
          href="https://wa.me/918808761375?text=I want to work on a project with you"
          className="mt-4 px-4 text-center w-full font-bold h-8 bg-green-400 hover:bg-green-500 text-gray-900 py-1 rounded transition-colors inline-block"
          type="submit"
        >
          Chat on WhatsApp
        </a>

        <Divider />

        <p className={`my-1 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
          Drop in your email ID and I will get back to you.
        </p>

        <form className="relative my-4" onSubmit={subscribe}>
          <input
            ref={inputEl}
            aria-label="Email for newsletter"
            placeholder="jaharuddin269@gmail.com"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={`px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md border transition-colors ${
              isDarkMode
                ? "bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-400"
                : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
            }`}
          />
          <button
            className={`flex items-center justify-center absolute right-1 top-1 px-4 font-bold h-8 rounded w-28 transition-colors ${
              isDarkMode
                ? "bg-gray-700 hover:bg-gray-600 text-gray-100"
                : "bg-gray-100 hover:bg-gray-200 text-gray-900"
            }`}
            type="submit"
          >
            {form.state === "loading" ? <LoadingSpinner /> : "Send"}
          </button>
        </form>

        {form.state === "error" ? (
          <ErrorMessage>{form.message}</ErrorMessage>
        ) : form.state === "success" ? (
          <SuccessMessage>{form.message}</SuccessMessage>
        ) : (
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-200" : "text-gray-800"
            }`}
          ></p>
        )}
      </div>
    </>
  );
}
