import React from 'react';
import NumerologyForm from '../../components/NumerologyForm';
import { services as allServices } from '../Services';
import { FaAtom, FaBook, FaAddressBook, FaFileSignature } from 'react-icons/fa';
import { Baby } from 'lucide-react';
import { TbCrystalBall } from 'react-icons/tb';

const description = `Mobile Number Numerology is a specialized branch of numerology that analyzes the vibrational energy of a mobile number and its compatibility with the user’s core numerological profile. In today’s digital age, your mobile number is more than a contact detail it’s an energetic extension of your identity. Just like your name and date of birth, your mobile number emits a specific frequency that can influence your communication, relationships, business success, and overall life experiences.

Each digit in a mobile number carries its own vibration, and the sum of the entire number reveals a dominant energy or mobile number total. This total should ideally be compatible with your Mulank (Drive Number) and Bhagyank (Conductor Number) to ensure energetic harmony. When there is alignment, the mobile number can enhance your personal aura, improve connectivity, attract positive opportunities, and reduce unnecessary obstacles.

Conversely, an incompatible mobile number may lead to communication issues, delays, or stagnant energy in personal and professional life. As a professional numerologist, analyzing and selecting a vibration-friendly mobile number can help clients align their digital identity with their soul blueprint.

Mobile number numerology is a powerful tool for manifesting better results through conscious energy alignment.`;

const icons = {
  'Driver & Conductor Relationship': <FaAtom className="text-4xl" style={{ color: '#06402B' }} />,
  'Name Number Compatibility': <FaBook className="text-4xl" style={{ color: '#06402B' }} />,
  'Mobile Number Numerology': <FaAddressBook className="text-4xl" style={{ color: '#06402B' }} />,
  'Signature Numerology': <FaFileSignature className="text-4xl" style={{ color: '#06402B' }} />,
  'Baby Name Number': <Baby className="size-10" style={{ color: '#06402B' }} />,
};

const MobileNumberNumerology = () => {
  const otherServices = allServices.filter(s => s.title !== 'Mobile Number Numerology');
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-16 pb-10">
      <h1 className="text-4xl md:text-5xl font-bold text-[#06402B] mb-4 mt-4 text-center tracking-wide" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '1px' }}>
        Mobile Number Numerology
      </h1>
      <div className="w-24 h-1 bg-[#FFB823] mx-auto mb-8 rounded-full" />
      <div className="w-full max-w-lg mx-auto mb-12">
        <NumerologyForm 
          extraFields={[{ name: 'mobile', label: 'Mobile Number', type: 'text', placeholder: 'Enter your mobile number' }]} 
          submitLabel="Get Result" 
          serviceName="Mobile Number Numerology" 
        />
      </div>
      <h2 className="text-2xl md:text-4xl font-bold text-[#06402B] mb-4 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
        What is Mobile Number Numerology?
      </h2>
      <div className="w-1/3 h-[1.5px] bg-[#06402B] mx-auto mb-8 rounded-full" />
      <p className="text-[#2D4F2B] text-base md:text-[22px] mb-12 max-w-4xl mx-auto text-justify" style={{ fontFamily: 'Arial, sans-serif' }}>
        {description}
      </p>
      <h2 className="text-5xl font-bold text-[#06402B] mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>Other Numerology Services :</h2>
      <div className="w-24 h-1 bg-[#FFB823] mx-auto mb-8 rounded-full" />
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mb-8">
        {/* Personal Birth Chart Card */}
        <div className="relative group bg-gradient-to-br from-[#FFF1CA] via-[#FFF9E3] to-white rounded-3xl shadow-2xl p-8 flex flex-col justify-between border border-[#06402B] overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="flex justify-center items-center mb-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#06402B]" style={{ backgroundColor: '#FFF6D1' }}>
              <TbCrystalBall className="text-4xl" style={{ color: '#06402B' }} />
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r bg-[#06402B] rounded-t-3xl" />
          <div className="flex-1 flex flex-col">
            <h3 className="text-2xl font-extrabold mb-2 transition-colors duration-200" style={{ color: '#1B3A2B', fontFamily: 'Poppins, sans-serif' }}>Personal Birth Chart</h3>
            <p className="mb-2 text-sm font-bold" style={{ color: '#6B3F19', fontFamily: 'Arial, sans-serif' }}>
              Discover your unique numerology blueprint, revealing your life path, strengths, and soul purpose.
            </p>
          </div>
          <button
            onClick={() => window.location.href='/services/personal-birth-chart'}
            className="mt-4 px-7 py-2 bg-gradient-to-r bg-[#06402B] text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-all duration-200 self-end border-2"
          >
            Get Result
          </button>
          <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#FFB823]/20 rounded-full blur-2xl z-0" />
        </div>
        {/* Driver & Conductor Relationship Card */}
        <div className="relative group bg-gradient-to-br from-[#FFF1CA] via-[#FFF9E3] to-white rounded-3xl shadow-2xl p-8 flex flex-col justify-between border border-[#06402B] overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="flex justify-center items-center mb-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#06402B]" style={{ backgroundColor: '#FFF6D1' }}>
              <FaAtom className="text-4xl" style={{ color: '#06402B' }} />
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r bg-[#06402B] rounded-t-3xl" />
          <div className="flex-1 flex flex-col">
            <h3 className="text-2xl font-extrabold mb-2 transition-colors duration-200" style={{ color: '#1B3A2B', fontFamily: 'Poppins, sans-serif' }}>Driver & Conductor Relationship</h3>
            <p className="mb-2 text-sm font-bold" style={{ color: '#6B3F19', fontFamily: 'Arial, sans-serif' }}>
              Understand the interplay between your inner motivations (Driver) and life path (Conductor).
            </p>
          </div>
          <button
            onClick={() => window.location.href='/services/driver-conductor-relationship'}
            className="mt-4 px-7 py-2 bg-gradient-to-r bg-[#06402B] text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-all duration-200 self-end border-2"
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
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r bg-[#06402B] rounded-t-3xl" />
          <div className="flex-1 flex flex-col">
            <h3 className="text-2xl font-extrabold mb-2 transition-colors duration-200" style={{ color: '#1B3A2B', fontFamily: 'Poppins, sans-serif' }}>Name Number Compatibility</h3>
            <p className="mb-2 text-sm font-bold" style={{ color: '#6B3F19', fontFamily: 'Arial, sans-serif' }}>
              See how your name’s vibration aligns with your birth numbers for harmony, success, and personal branding.
            </p>
          </div>
          <button
            onClick={() => window.location.href='/services/name-number-compatibility'}
            className="mt-4 px-7 py-2 bg-gradient-to-r bg-[#06402B] text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-all duration-200 self-end border-2"
          >
            Get Result
          </button>
          <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#FFB823]/20 rounded-full blur-2xl z-0" />
        </div>
        {/* Mobile Number Numerology card is omitted since this is the current page */}
        {/* Signature Numerology Card */}
        <div className="relative group bg-gradient-to-br from-[#FFF1CA] via-[#FFF9E3] to-white rounded-3xl shadow-2xl p-8 flex flex-col justify-between border border-[#06402B] overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="flex justify-center items-center mb-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#06402B]" style={{ backgroundColor: '#FFF6D1' }}>
              <FaFileSignature className="text-4xl" style={{ color: '#06402B' }} />
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r bg-[#06402B] rounded-t-3xl" />
          <div className="flex-1 flex flex-col">
            <h3 className="text-2xl font-extrabold mb-2 transition-colors duration-200" style={{ color: '#1B3A2B', fontFamily: 'Poppins, sans-serif' }}>Signature Numerology</h3>
            <p className="mb-2 text-sm font-bold" style={{ color: '#6B3F19', fontFamily: 'Arial, sans-serif' }}>
              How your signature style and numbers can affect your public image and personal energy.
            </p>
          </div>
          <button
            onClick={() => window.location.href='/services/signature-numerology'}
            className="mt-4 px-7 py-2 bg-gradient-to-r bg-[#06402B] text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-all duration-200 self-end border-2"
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
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r bg-[#06402B] rounded-t-3xl" />
          <div className="flex-1 flex flex-col">
            <h3 className="text-2xl font-extrabold mb-2 transition-colors duration-200" style={{ color: '#1B3A2B', fontFamily: 'Poppins, sans-serif' }}>Baby Name Number</h3>
            <p className="mb-2 text-sm font-bold" style={{ color: '#6B3F19', fontFamily: 'Arial, sans-serif' }}>
              Find the most auspicious name number for your baby to ensure a harmonious and successful life path.
            </p>
          </div>
          <button
            onClick={() => window.location.href='/services/baby-name-number'}
            className="mt-4 px-7 py-2 bg-gradient-to-r bg-[#06402B] text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-all duration-200 self-end border-2"
          >
            Get Result
          </button>
          <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#FFB823]/20 rounded-full blur-2xl z-0" />
        </div>
      </div>
    </div>
  );
};

export default MobileNumberNumerology;