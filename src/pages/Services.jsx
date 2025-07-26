import React from 'react';
import logo1 from '../assets/logo1.jpg';
import WhatWhySection from '../components/WhatWhySection';
import { TbCrystalBall } from 'react-icons/tb';
import { FaAtom, FaBook, FaAddressBook, FaFileSignature } from 'react-icons/fa';
import { Baby } from 'lucide-react';

const services = [
  {
    title: 'Personal Birth Chart',
    description: 'Discover your unique numerology blueprint, revealing your life path, strengths, and soul purpose.',
    benefits: [
      'Personalized analysis of your birth date and name',
      'Insights into your strengths and challenges',
      'Guidance for life decisions',
    ],
    link: '/services/personal-birth-chart',
  },
  {
    title: 'Driver & Conductor Relationship',
    description: 'Understand the interplay between your inner motivations (Driver) and life path (Conductor).',
    benefits: [
      'Relationship between inner self and destiny',
      'Clarity on life direction',
      'Personal growth insights',
    ],
    link: '/services/driver-conductor-relationship',
  },
  {
    title: 'Name Number Compatibility',
    description: 'See how your name’s vibration aligns with your birth numbers for harmony, success, and personal branding.',
    benefits: [
      'Name and birth number analysis',
      'Compatibility insights',
      'Branding guidance',
    ],
    link: '/services/name-number-compatibility',
  },
  {
    title: 'Mobile Number Numerology',
    description: 'Reveal the hidden power of your mobile number and its influence on your daily life and opportunities.',
    benefits: [
      'Mobile number energy analysis',
      'Tips for luck and success',
      'Personalized recommendations',
    ],
    link: '/services/mobile-number-numerology',
  },
  {
    title: 'Signature Numerology',
    description: 'How your signature style and numbers can affect your public image and personal energy.',
    benefits: [
      'Signature analysis',
      'Public image insights',
      'Energy alignment tips',
    ],
    link: '/services/signature-numerology',
  },
  {
    title: 'Baby Name Number',
    description: 'Find the most auspicious name number for your baby to ensure a harmonious and successful life path.',
    benefits: [
      'Baby name analysis',
      'Auspicious number selection',
      'Guidance for a bright future',
    ],
    link: '/services/baby-name-number',
  },
];


const whatText = `The word, “numerology,” is the science of numbers. The Numerology word comes from the Latin root, “numerus,” which means number and the Greek word, “logos,” which refers word or thought. These number-thoughts, or numerology is an ancient method of divination where numerical vibrations are charted in order to determine or predict the pattern of trends for the future.\n\nNumerology is a metaphysical science that studies the relationship between numbers and events in our lives. It is based on the belief that numbers carry specific vibrations and meanings that can reveal insights about a person’s personality, destiny, and life path. By analyzing names, birth dates, and other significant numbers, numerology helps individuals gain deeper self awareness and make more informed life decisions.`;
const whyText = `Once you learn how to use numerology successfully and implement it in your daily life you will soon see how it can guide you on a path to personal fulfillment and enjoyment. Numerology can be used to find a compatible partner, choose a career, determine your destiny and allows for full advantage of lucky days, events and years.\n\nNumerology is essential for our lives as it offers deep insights into our personality, purpose, and potential. By analyzing birth dates and names, numerology reveals patterns and energies that influence our decisions, relationships, and life path. It helps us understand our strengths and challenges, guiding us toward personal growth, balance, and fulfillment. Numerology also uncovers ideal career paths, compatibility in relationships, and favorable life periods. In a world full of uncertainty, numerology acts as a spiritual compass—empowering us to align with our true nature and make choices with clarity, confidence, and conscious awareness.`;


const ServiceCard = ({ title, description, benefits, link }) => (
  <div className="relative group bg-gradient-to-br from-[#FFF1CA] via-[#FFF9E3] to-white rounded-3xl shadow-2xl p-8 flex flex-col justify-between border border-[#06402B] overflow-hidden transition-transform duration-300 hover:scale-105">
    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#06402B] to-[#708A58] rounded-t-3xl" />
    <div className="flex-1 flex flex-col">
      <h3  style={{ color: '#1B3A2B', fontFamily: 'Poppins, sans-serif' }}
      className="text-2xl font-extrabold text-[#2D4F2B] mb-2 transition-colors duration-200">{title}</h3>
      <p className="text-[#708A58] mb-4 text-sm font-medium" style={{ color: '#6B3F19', fontFamily: 'Arial, sans-serif' }}>{description}</p>
      <ul className="mb-4 list-disc list-inside text-[#2D4F2B] text-sm space-y-1">
        {benefits.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
    <button
      onClick={() => window.location.href = link}
      className="mt-4 px-7 py-2 bg-gradient-to-r from-[#06402B] to-[#708A58] text-white font-bold rounded-lg shadow-lg hover:from-[#2D4F2B] hover:to-[#708A58] hover:scale-105 transition-all duration-200 self-end border-2"
    >
      Get Result
    </button>
    <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#FFB823]/20 rounded-full blur-2xl z-0" />
  </div>
);

const Services = () => (
  <div className="min-h-screen  flex flex-col items-center justify-start pt-16 pb-10">
    <h1 className="text-4xl md:text-5xl font-bold text-[#06402B] mb-8 text-center tracking-wide" style={{ letterSpacing: '2px', fontFamily: 'Poppins, sans-serif' }}>
      Our Numerology Services
    </h1>
    <div className="w-24 h-1 bg-[#FFB823] mx-auto mb-8 rounded-full" />
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
    <WhatWhySection whatText={whatText} whyText={whyText} />
  </div>
);

export { services };
export default Services;