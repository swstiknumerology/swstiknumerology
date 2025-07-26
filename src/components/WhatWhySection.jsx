import React from 'react';

const WhatWhySection = ({
  whatTitle = 'What is Numerology?',
  whatIcon = '?',
  whatText,
  whyTitle = 'Why Numerology?',
  whyIcon = '!',
  whyText,
  className = ''
}) => (
  <div className={`w-full max-w-6xl my-12 mt-18 ${className}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#06402B] mb-8 tracking-tight drop-shadow-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>Discover the Power of Numerology</h2>
    <div className="w-46 h-1 mt-5 bg-[#FFB823] mx-auto mb-6 rounded-full" />
    <div className="relative flex flex-col md:flex-row rounded-3xl shadow-2xl overflow-hidden mt-12 border-2 border-[#06402B] bg-white">
      {/* What is Numerology? */}
      <div className="flex-1 p-10 flex flex-col items-center md:items-start justify-start z-10">
        <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#06402B] shadow-lg">
          <span className="text-3xl font-extrabold text-[#06402B]">{whatIcon}</span>
        </div>
        <h3 className="text-xl md:text-4xl font-bold text-[#06402B] mb-4 text-center md:text-left" style={{ fontFamily: 'Poppins, sans-serif' }}>{whatTitle}</h3>
        <p className="text-[#2D4F2B] text-base md:text-lg leading-relaxed text-center md:text-left" style={{ fontFamily: 'Arial, sans-serif' }}>{whatText}</p>
      </div>
      {/* Divider */}
      <div className="hidden md:block w-px bg-gradient-to-b from-[#06402B] to-[#06402B] my-8 z-10" />
      {/* Why Numerology? */}
      <div className="flex-1 p-10 flex flex-col items-center md:items-start justify-start z-10">
        <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#06402B] shadow-lg">
          <span className="text-3xl font-extrabold text-[#06402B]">{whyIcon}</span>
        </div>
        <h3 className="text-xl md:text-4xl font-bold text-[#06402B] mb-4 text-center md:text-left" style={{ fontFamily: 'Poppins, sans-serif' }}>{whyTitle}</h3>
        <p className="text-[#2D4F2B] text-base md:text-lg leading-relaxed text-center md:text-left" style={{ fontFamily: 'Arial, sans-serif' }}>{whyText}</p>
      </div>
    </div>
  </div>
);

export default WhatWhySection; 