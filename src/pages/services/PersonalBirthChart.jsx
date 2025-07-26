import React from 'react';
import NumerologyForm from '../../components/NumerologyForm';
import { services as allServices } from '../Services';
import { TbCrystalBall } from 'react-icons/tb';
import { FaAtom, FaBook, FaAddressBook, FaFileSignature } from 'react-icons/fa';
import { Baby } from 'lucide-react';

const PersonalBirthChart = () => {
  // Exclude this service from the other services grid
  const otherServices = allServices.filter(s => s.title !== 'Personal Birth Chart');
  const description = `A Personal Birth Chart in numerology is a powerful blueprint that reveals the unique vibrational energies encoded in your birth date and full name. It serves as a spiritual map, offering deep insights into your personality, strengths, life path, karmic lessons, and soul purpose. Key numbers such as the Life Path Number, Destiny Number, Soul Urge Number, and Personality Number each play a distinct role in shaping your life experiences and personal growth. Unlike generalized horoscopes, a numerology birth chart is entirely personal, based on immutable data: your date of birth and birth name. It uncovers your natural talents, emotional tendencies, inner desires, and potential challenges. Your chart can highlight specific life periods, cycles, and transitions, helping you make informed decisions and align your actions with your core nature. Professionally interpreted, a Personal Birth Chart empowers you to embrace your authenticity, enhance relationships, and navigate life with clarity and confidence whether for self-discovery, career planning, or spiritual growth.`;
  return (
    <div className="min-h-screen  flex flex-col items-center justify-start pt-16 pb-10">
      <h1 className="text-4xl md:text-5xl font-bold text-[#06402B] mb-4 mt-4 text-center tracking-wide" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '1px' }}>
        Personal Birth Chart
      </h1>
      <div className="w-24 h-1 bg-[#FFB823] mx-auto mb-8 rounded-full" />
      {/* Form styled like Home page */}
      {/* Reusable NumerologyForm for Personal Birth Chart, styled like Home page */}
      <div className="w-full max-w-lg mx-auto mb-12">
        <NumerologyForm
          extraFields={[]}
          submitLabel="Get Result"
          serviceName="Personal Birth Chart"
        />
      </div>
      
      {/* Service Description */}
      <h2 className="text-2xl md:text-4xl font-bold text-[#06402B] mb-4 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
        What is a Personal Birth Chart?
      </h2>
      <div className="w-1/3 h-[1.5px] bg-[#06402B] mx-auto mb-8 rounded-full" />
      <p className="text-[#2D4F2B] text-base md:text-[22px] mb-12 max-w-4xl mx-auto text-justify" style={{ fontFamily: 'Arial, sans-serif' }}>
        {description}
      </p>
      {/* Other Services Section */}
      <h2 className="text-5xl font-bold text-[#06402B] mb-6  text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>Other Numerology Services :</h2>
      <div className="w-24 h-1 bg-[#FFB823] mx-auto mb-8 rounded-full" />
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mb-8">
        {/* Personal Birth Chart icon is TbCrystalBall, so use the correct icon for each card below */}
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
        <div className="relative group bg-gradient-to-br from-[#FFF1CA] via-[#FFF9E3] to-white rounded-3xl shadow-2xl p-8  flex flex-col justify-between border border-[#06402B] overflow-hidden transition-transform duration-300 hover:scale-105">
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
    </div>
  );
};

export default PersonalBirthChart;