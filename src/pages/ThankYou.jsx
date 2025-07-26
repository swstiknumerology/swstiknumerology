import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ThankYou = () => (
  <div className="bg-gray-50 min-h-max flex flex-col">
    <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
      <div className="bg-white rounded-2xl shadow-xl px-10 py-12  mt-20 mb-20 border-4 border-[#06402B] max-w-lg w-full">
        <div className="flex justify-center mb-6">
          <svg
            className="w-20 h-20 text-[#06402B]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2l4-4m5 2a9 9 0 11-18 0a9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1
          className="text-4xl md:text-5xl font-bold text-[#06402B] mb-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Thank You!
        </h1>
        <p
          className="text-lg md:text-xl text-[#06402B] mb-6"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          Your details have been submitted.<br />Our team will get back to you within 2-3 days.
        </p>
        <a
          href="/"
          className="inline-block bg-[#06402B] text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Go Back Home
        </a>
      </div>
    </main>
  </div>
);

export default ThankYou;
