"use client";

import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} min-h-screen flex flex-col transition-colors duration-300`}>
      <Head>
        <title>Contact Us</title>
      </Head>

      {/* Header */}
      <header className="px-4 sm:px-6 lg:px-8 bg-transparent ">
        <nav className="flex justify-between items-center py-6 shadow-lg  border-gray-300">
          <h1 className="text-3xl font-extrabold text-gray-50">KupalsBlog</h1>
          <div className="space-x-6">
            {['Home', 'About', 'Contact'].map((item) => (
              <Link href={`/${item.toLowerCase()}`} key={item} legacyBehavior>
                <a className="text-gray-50 hover:text-indigo-500 transition duration-300 ease-in-out">{item}</a>
              </Link>
            ))}
          </div>
        </nav>
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-orange-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      {/* Main Section */}
      <main className="flex flex-1 items-center justify-center">
        <div className={`rounded-lg shadow-lg overflow-hidden flex w-full max-w-4xl ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
          {/* Left Section */}
          <div className="w-1/2 p-10">
            <h2 className="text-3xl font-bold mb-6">Write us</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <input type="text" id="name" name="name" placeholder="AdMike"
                  className={`mt-2 w-full py-3 px-4 rounded-lg border ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-100 text-gray-900 border-gray-400'} focus:ring-orange-500 focus:border-orange-500`} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input type="email" id="email" name="email" placeholder="admike@domain.com"
                  className={`mt-2 w-full py-3 px-4 rounded-lg border ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-100 text-gray-900 border-gray-400'} focus:ring-orange-500 focus:border-orange-500`} />
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="verification" name="verification"
                  className={`w-4 h-4 text-orange-500 rounded focus:ring-orange-500 focus:ring-2 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-400'}`} />
                <label htmlFor="verification" className="ml-2 text-sm">I am not a robot</label>
              </div>
              <button type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-300">
                Send Message
              </button>
            </form>
          </div>
          {/* Right Section */}
          <div className="w-1/2 p-10 flex items-center">
            <div className="w-full">
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea id="message" name="message" placeholder="Write text here..."
                className={`w-full h-40 py-3 px-4 rounded-lg border ${darkMode ? 'bg-gray-800 text-white border-gray-600' : 'bg-gray-100 text-gray-900 border-gray-400'} focus:ring-orange-500 focus:border-orange-500`} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
