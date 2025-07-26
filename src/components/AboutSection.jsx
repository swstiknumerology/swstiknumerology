import React from 'react';

const AboutSection = ({ logo, title, subtitle, aboutText, trustPoints, quote }) => (
  <section className="w-full pt-12 pb-12  relative flex justify-center items-center overflow-hidden">
    {/* Decorative accent shape */}
    <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-32  rounded-full blur-2xl z-0" />
    <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#708A58]/10 rounded-full blur-2xl z-0" />
    <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
      {/* Logo at the top */}
      <div className="mb-6 flex justify-center">
        <img src={logo} alt="Logo" className="h-20 w-20 object-contain rounded-full border-4 border-[#06402B] bg-white shadow" />
      </div>
      {/* Title and subtitle */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#06402B] mb-2 text-center">{title}</h2>
      <div className="w-28 h-1 bg-[#FFB823] rounded-full mx-auto mb-6 mt-5" />
      <p className="text-[#06402B] text-lg md:text-xl font-bold text-center mb-10 max-w-2xl mx-auto">{subtitle}</p>
      {/* About text and Why Trust Us stacked */}
      <div className="w-full flex flex-col items-center justify-center gap-8">
        {/* About text */}
        <div className="text-[#2D4F2B] text-lg md:text-xl leading-relaxed space-y-5 text-center md:text-left w-full">
          {aboutText.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        {/* Why Trust Us box */}
        <div className="flex flex-col items-center md:items-start bg-white/80 rounded-2xl p-10 shadow border border-[#06402B] max-w-2xl mx-auto mt-8 mb-5">
          <span className="mb-3 px-4 py-1 bg-[#06402B] text-white font-bold rounded-full text-xs tracking-widest uppercase">Why Trust Us?</span>
          <ul className="mb-6 space-y-2 text-[#06402B] text-base md:text-lg font-medium">
            {trustPoints.map((point, i) => <li key={i}>{point}</li>)}
          </ul>
          <div className="flex items-center gap-2 mb-2">
            <blockquote className="italic text-[#06402B] text-base md:text-lg font-semibold text-left">{quote}</blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection; 