import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo1 from '../assets/Logo1.jpg'; 
import { TbCrystalBall } from "react-icons/tb";
import { FaAtom, FaBook, FaAddressBook, FaFileSignature } from "react-icons/fa";
import { Baby } from 'lucide-react';

const Home = () => {
  const [form, setForm] = useState({ dob: '', place: '', name: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (form.name.trim()) {
      // Redirect to the new page with the name as a query parameter
      navigate(`/name-number-compounder?name=${encodeURIComponent(form.name)}`);
    } else {
      alert('Please enter a name.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-16 pb-0 mt-2">
      {/* Top Section: White background */}
      <div className="w-full bg-white flex flex-col items-center">
        {/* Title */}
        <h1 className="text-7xl md:text-5xl font-semibold mb-2 text-center" style={{ fontFamily: 'Poppins , sans-serif', color: '#06402B' }}>
          Unlock the Secret of Numerology !!
        </h1>
        <div className="w-46 h-1 mt-5 bg-[#FFB823] mx-auto mb-6 rounded-full" />
        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl mb-10 text-center font-bold" style={{ fontFamily: 'Arial, sans-serif', color: '#6B3F19' }}>
          Know your Name Number      
            </h2>
        
        {/* Form Container */}
        <form
          onSubmit={handleSubmit}
          className="relative bg-white shadow-xl rounded-2xl border border-[#06402B] px-8 py-10 w-full max-w-2xl flex flex-col gap-6 items-center justify-center"
        >
          <div className="w-full flex flex-col md:flex-row md:items-center gap-4">
            <label className="w-full md:w-1/3 text-[#06402B] font-semibold text-xl">Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className="w-full md:w-2/3 px-4 py-2 border  rounded-lg text-[#06402B] focus:outline-none focus:ring-2 focus:ring-[#06402B]"
              required
            />
          </div>
          <div className="w-full flex flex-col md:flex-row md:items-center gap-4">
            <label className="w-full md:w-1/3 text-[#06402B] font-semibold text-xl">Name:</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="w-full md:w-2/3 px-4 py-2 border rounded-lg text-[#06402B] focus:outline-none focus:ring-2 focus:ring-[#06402B] placeholder-[#06402B]"
              required
            />
          </div>
          <div className="w-full flex flex-col md:flex-row md:items-center gap-4">
            <label className="w-full md:w-1/3 text-[#06402B] font-semibold text-xl">Place of Birth:</label>
            <input
              type="text"
              name="place"
              value={form.place}
              onChange={handleChange}
              placeholder="Enter Location"
              className="w-full md:w-2/3 px-4 py-2 border rounded-lg  text-[#06402B]  focus:outline-none focus:ring-2 focus:ring-[#06402B] placeholder-[#06402B]"
              required
            />
          </div>
          {/* Button and Result in a row */}
          <div className="w-full flex flex-col md:flex-row justify-end items-center gap-4 mt-4">
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-[#2D4F2B] text-white font-bold rounded-lg shadow"
            >
              Get Result
            </button>
          </div>
        </form>

        {/* Engaging Section Before Cards */}
        <div className="w-full max-w-6xl text-center mt-10">
          <p className="text-[#6B3F19] text-lg md:text-2xl font-bold " style={{ fontFamily: 'Arial, sans-serif' }}>
            Dive deeper into your personal numerology! Explore our unique services below to discover how numbers can guide your destiny, enhance your relationships, and reveal your true potential.
          </p>
          <p className="text-2xl md:text-5xl mt-12 font-bold text-[#06402B] " style={{ fontFamily: 'Poppins, sans-serif' }}>Our Services :</p>
             <div className="w-38 h-1 bg-[#FFB823] mx-auto mb-10 mt-8 rounded-full" />
        </div>


        
        {/* Cards Section */}
        <div className="w-full max-w-6xl mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Personal Birth Chart Card */}
          <div className="relative group bg-gradient-to-br from-[#FFF1CA] via-[#FFF9E3] to-white rounded-3xl shadow-2xl p-8 flex flex-col justify-between border border-[#06402B] overflow-hidden transition-transform duration-300 hover:scale-105">
            {/* Icon */}
            <div className="flex justify-center items-center mb-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#06402B]" style={{ backgroundColor: '#FFF6D1' }}>
                <TbCrystalBall className="text-4xl" style={{ color: '#06402B' }} />
              </div>
            </div>
            {/* Accent bar */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r bg-[#06402B]  rounded-t-3xl" />
            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-extrabold mb-2 transition-colors duration-200" style={{ color: '#1B3A2B', fontFamily: 'Poppins' }}>Personal Birth Chart</h3>
              <p className="mb-2 text-sm font-bold" style={{ color: '#6B3F19', fontFamily: 'Arial, sans-serif' }}>
                Discover your unique numerology blueprint, revealing your life path, strengths, and soul purpose.
              </p>
            </div>
            <button
              onClick={() => window.location.href='/services/personal-birth-chart'}
              className="mt-4 px-7 py-2 bg-gradient-to-r bg-[#06402B]  text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-all duration-200 self-end border-2 "
            >
              Get Result
            </button>
            {/* Decorative circle */} 
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#FFB823]/20 rounded-full blur-2xl z-0" />
          </div>
          {/* Driver & Conductor Relationship Card */}
          <div className="relative group bg-gradient-to-br from-[#FFF1CA] via-[#FFF9E3] to-white rounded-3xl shadow-2xl p-8 flex flex-col justify-between border border-[#06402B] overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="flex justify-center items-center mb-4">
               <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#06402B]" style={{ backgroundColor: '#FFF6D1' }}>
                <FaAtom className="text-4xl" style={{ color: '#06402B' }} />
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r bg-[#06402B]  rounded-t-3xl" />
            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-extrabold mb-2 transition-colors duration-200" style={{ color: '#1B3A2B', fontFamily: 'Poppins, sans-serif' }}>Driver & Conductor Relationship</h3>
              <p className="mb-2 text-sm font-bold" style={{ color: '#6B3F19', fontFamily: 'Arial, sans-serif' }}>
                Understand the interplay between your inner motivations (Driver) and life path (Conductor).
              </p>
            </div>
            <button
              onClick={() => window.location.href='/services/driver-conductor-relationship'}
              className="mt-4 px-7 py-2 bg-gradient-to-r bg-[#06402B]  text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-all duration-200 self-end border-2 "
            >
              Get Result
            </button>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#FFB823]/20 rounded-full blur-2xl z-0" />
          </div>
          {/* Name Number Compatibility Card */}
          <div className="relative group bg-gradient-to-br from-[#FFF1CA] via-[#FFF9E3] to-white rounded-3xl shadow-2xl p-8 flex flex-col justify-between border border-[#06402B] overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="flex justify-center items-center mb-4">
               <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#06402B]" style={{ backgroundColor: '#FFF6D1' }}>
                <FaBook className="text-4xl" style={{ color: '#06402B' }} />
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r bg-[#06402B]  rounded-t-3xl" />
            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-extrabold mb-2 transition-colors duration-200" style={{ color: '#1B3A2B', fontFamily: 'Poppins, sans-serif' }}>Name Number Compatibility</h3>
              <p className="mb-2 text-sm font-bold" style={{ color: '#6B3F19', fontFamily: 'Arial, sans-serif' }}>
                See how your name’s vibration aligns with your birth numbers for harmony, success, and personal branding.
              </p>
             
            </div>
            <button
              onClick={() => window.location.href='/services/name-number-compatibility'}
              className="mt-4 px-7 py-2 bg-gradient-to-r bg-[#06402B]  text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-all duration-200 self-end border-2 "
            >
              Get Result  
            </button>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#FFB823]/20 rounded-full blur-2xl z-0" />
          </div>
          {/* Mobile Number Numerology Card */}
          <div className="relative group bg-gradient-to-br from-[#FFF1CA] via-[#FFF9E3] to-white rounded-3xl shadow-2xl p-8 flex flex-col justify-between border border-[#06402B] overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="flex justify-center items-center mb-4">
             <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#06402B]" style={{ backgroundColor: '#FFF6D1' }}>
                <FaAddressBook className="text-4xl" style={{ color: '#06402B' }} />
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r bg-[#06402B]  rounded-t-3xl" />
            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-extrabold mb-2 transition-colors duration-200" style={{ color: '#1B3A2B', fontFamily: 'Poppins, sans-serif' }}>Mobile Number Numerology</h3>
              <p className="mb-2 text-sm font-bold" style={{ color: '#6B3F19', fontFamily: 'Arial, sans-serif' }}>
                Reveal the hidden power of your mobile number and its influence on your daily life and opportunities.
              </p>
            </div>
            <button
              onClick={() => window.location.href='/services/mobile-number-numerology'}
              className="mt-4 px-7 py-2 bg-gradient-to-r bg-[#06402B]  text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-all duration-200 self-end border-2 "
            >
              Get Result  
            </button>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#FFB823]/20 rounded-full blur-2xl z-0" />
          </div>
          {/* Signature Numerology Card */}
          <div className="relative group bg-gradient-to-br from-[#FFF1CA] via-[#FFF9E3] to-white rounded-3xl shadow-2xl p-8 flex flex-col justify-between border border-[#06402B] overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="flex justify-center items-center mb-4">
             <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#06402B]" style={{ backgroundColor: '#FFF6D1' }}>
                <FaFileSignature className="text-4xl" style={{ color: '#06402B' }} />
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r bg-[#06402B]  rounded-t-3xl" />
            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-extrabold mb-2 transition-colors duration-200" style={{ color: '#1B3A2B', fontFamily: 'Poppins, sans-serif' }}>Signature Numerology</h3>
              <p className="mb-2 text-sm font-bold" style={{ color: '#6B3F19', fontFamily: 'Arial, sans-serif' }}>
                How your signature style and numbers can affect your public image and personal energy.
              </p>
            </div>
            <button
              onClick={() => window.location.href='/services/signature-numerology'}
              className="mt-4 px-7 py-2 bg-gradient-to-r bg-[#06402B]  text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-all duration-200 self-end border-2 "
            >
              Get Result
            </button>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#FFB823]/20 rounded-full blur-2xl z-0" />
          </div>
          {/* Baby Name Number Card */}
          <div className="relative group bg-gradient-to-br from-[#FFF1CA] via-[#FFF9E3] to-white rounded-3xl shadow-2xl p-8 flex flex-col justify-between border border-[#06402B] overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="flex justify-center items-center mb-4">
             <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#06402B]" style={{ backgroundColor: '#FFF6D1' }}>
                <Baby className="size-10" style={{ color: '#06402B' }} />
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r bg-[#06402B]  rounded-t-3xl" />
            <div className="flex-1 flex flex-col">
              <h3 className="text-2xl font-extrabold mb-2 transition-colors duration-200" style={{ color: '#1B3A2B', fontFamily: 'Poppins, sans-serif' }}>Baby Name Number</h3>
              <p className="mb-2 text-sm font-bold" style={{ color: '#6B3F19', fontFamily: 'Arial, sans-serif' }}>
                Find the most auspicious name number for your baby to ensure a harmonious and successful life path.
              </p>
            </div>
            <button
              onClick={() => window.location.href='/services/baby-name-number'}
              className="mt-4 px-7 py-2 bg-gradient-to-r bg-[#06402B]  text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-all duration-200 self-end border-2 "
            >
              Get Result
            </button>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#FFB823]/20 rounded-full blur-2xl z-0" />
          </div>
        </div>







        {/* Numerology Info Section (What & Why) */}
        <div className="w-full max-w-6xl my-12 mt-18 ">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#06402B] mb-8 tracking-tight drop-shadow-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>Discover the Power of Numerology</h2>
          <div className="w-46 h-1 mt-5 bg-[#FFB823] mx-auto mb-6 rounded-full" />
          <div className="relative flex flex-col md:flex-row rounded-3xl shadow-2xl overflow-hidden mt-12 border-2 border-[#06402B]">
           
            {/* What is Numerology? */}
            <div className="flex-1 p-10 flex flex-col items-center md:items-start justify-start z-10">
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full  border-2 border-[#06402B] shadow-lg">
                <span className="text-3xl font-extrabold text-[#06402B]">?</span>
              </div>
              <h3 className="text-xl md:text-4xl font-bold text-[#06402B] mb-4 text-center md:text-left" style={{ fontFamily: 'Poppins, sans-serif' }}>What is Numerology?</h3>
              <p className="text-[#2D4F2B] text-base md:text-lg leading-relaxed text-center md:text-left" style={{ fontFamily: 'Arial, sans-serif' }}>
                The word, “numerology,” is the science of numbers. The Numerology word comes from the Latin root, “numerus,” which means number and the Greek word, “logos,” which refers word or thought. These number-thoughts, or numerology is an ancient method of divination where numerical vibrations are charted in order to determine or predict the pattern of trends for the future.<br /><br />
                Numerology is a metaphysical science that studies the relationship between numbers and events in our lives. It is based on the belief that numbers carry specific vibrations and meanings that can reveal insights about a person’s personality, destiny, and life path. By analyzing names, birth dates, and other significant numbers, numerology helps individuals gain deeper self awareness and make more informed life decisions.
              </p>
            </div>
            {/* Divider */}
            <div className="hidden md:block w-px bg-gradient-to-b from-[#06402B] to-[#06402B] my-8 z-10" />
            {/* Why Numerology? */}
            <div className="flex-1 p-10 flex flex-col items-center md:items-start justify-start z-10">
              <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full  border-2 border-[#06402B] shadow-lg">
                <span className="text-3xl font-extrabold text-[#06402B]">!</span>
              </div>
              <h3 className="text-xl md:text-4xl font-bold text-[#06402B] mb-4 text-center md:text-left" style={{ fontFamily: 'Poppins, sans-serif' }}>Why Numerology?</h3>
              <p className="text-[#2D4F2B] text-base md:text-lg leading-relaxed text-center md:text-left" style={{ fontFamily: 'Arial, sans-serif' }}>
                Once you learn how to use numerology successfully and implement it in your daily life you will soon see how it can guide you on a path to personal fulfillment and enjoyment. Numerology can be used to find a compatible partner, choose a career, determine your destiny and allows for full advantage of lucky days, events and years.<br /><br />
                Numerology is essential for our lives as it offers deep insights into our personality, purpose, and potential. By analyzing birth dates and names, numerology reveals patterns and energies that influence our decisions, relationships, and life path. It helps us understand our strengths and challenges, guiding us toward personal growth, balance, and fulfillment. Numerology also uncovers ideal career paths, compatibility in relationships, and favorable life periods. In a world full of uncertainty, numerology acts as a spiritual compass—empowering us to align with our true nature and make choices with clarity, confidence, and conscious awareness.
              </p>
            </div>
          </div>
        </div>
      </div>





      {/* About Us Section (unchanged color, flush with footer) */}
      <section className="w-full pt-12 pb-12  relative flex justify-center items-center overflow-hidden">
        
        {/* Decorative accent shape */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-32  rounded-full blur-2xl z-0" />
        
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#708A58]/10 rounded-full blur-2xl z-0" />
        
          <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
          
          {/* Logo at the top */}
          <div className="mb-6 flex justify-center">
            {/* Replace with your real logo if available */}
            <img src={logo1} alt="Logo" className="h-20 w-20 object-contain rounded-full border-4 border-[#06402B] bg-white shadow" />
          </div>

          {/* Title and subtitle */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#06402B] mb-2 text-center">About Us</h2>

          <div className="w-28 h-1 bg-[#FFB823] rounded-full mx-auto mb-6 mt-5" />
          
          <p className="text-[#06402B] text-lg md:text-xl font-bold text-center mb-10 max-w-2xl mx-auto">Empowering lives through the science of numbers. Discover your true path with expert numerology guidance.</p>
         
          {/* 2-column layout */}
          <div className="w-full flex flex-col items-center justify-center gap-8">
            {/* About text */}
            <div className="text-[#2D4F2B] text-lg md:text-xl leading-relaxed space-y-5 text-center md:text-left w-full ">
              <p>
                Hello, I’m <span className="font-bold text-[#06402B]">Sujl Pandv</span>, a passionate and professional numerologist with over <span className="text-[#06402B] font-bold">2.5 years</span> of dedicated experience. My journey began with a fascination for the mystical power of numbers and how they influence our lives in ways most people never imagine.
              </p>
              <p>
                Numerology is not just a practice it's a <span className="text-[#06402B] font-bold">powerful tool for transformation</span>. I specialize in name correction, mobile number analysis, business name suggestions, baby name numerology, lucky number guidance, relationship compatibility, and career path analysis. Every reading is <span className="text-[#06402B] font-bold">personalized and accurate</span>, helping clients align with their life path and unlock greater harmony and success.
              </p>
              <p>
                Over the past 2.5 years, I’ve worked with clients from diverse backgrounds, guiding them through important life decisions. Whether you’re feeling stuck, starting a new chapter, or simply curious about your destiny, I’m here to offer clear insights and practical advice through the lens of numerology.
              </p>
            </div>
            
            {/* Why Trust Us box */}
            <div className="flex flex-col items-center md:items-start bg-white/80 rounded-2xl p-10 shadow border border-[#06402B] max-w-2xl mx-auto mt-8 mb-5">
              <span className="mb-3 px-4 py-1 bg-[#06402B] text-white font-bold rounded-full text-xs tracking-widest uppercase">Why Trust Us?</span>
              <ul className="mb-6 space-y-2 text-[#06402B] text-base md:text-lg font-medium">
                <li><span className="text-[#06402B] font-bold">2.5+ years</span> of professional numerology experience</li>
                <li><span className="text-[#06402B] font-bold">Personalized</span> and accurate readings</li>
                <li>Guidance for <span className="text-[#06402B] font-bold">life, career, and relationships</span></li>
                <li>Trusted by clients from <span className="text-[#06402B] font-bold">diverse backgrounds</span></li>
              </ul>
              <div className="flex items-center gap-2 mb-2">
                <blockquote className="italic text-[#06402B] text-base md:text-lg font-semibold text-left">“Let’s decode your destiny one number at a time.”</blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;