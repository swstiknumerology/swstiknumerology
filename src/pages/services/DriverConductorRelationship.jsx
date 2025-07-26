import React from 'react';
import NumerologyForm from '../../components/NumerologyForm';
import { services as allServices } from '../Services';
import { FaAtom, FaBook, FaAddressBook, FaFileSignature } from 'react-icons/fa';
import { Baby } from 'lucide-react';
import { TbCrystalBall } from 'react-icons/tb';

const description = `In numerology, the Driver and Conductor relationship also known as the Mulank (Driver) and Bhagyank (Conductor) is a vital combination that reveals how an individual functions internally and externally. These numbers are derived from the date of birth: the Driver is the digit of the birth day (e.g., 1 to 31), and the Conductor is the total sum of the full birth date (day, month, year).

The Driver represents your natural instincts, core personality, and how you respond to situations emotionally and spontaneously. It is your internal engine the force that drives your reactions and choices. On the other hand, the Conductor reflects your broader destiny, direction, and how your life unfolds in a more structured, external sense.

The relationship between these two numbers shows how aligned your inner motivations are with your outer path. A harmonious pairing often leads to clarity, success, and personal satisfaction. A conflicting combination may create internal friction or confusion in decision-making.

Understanding this dynamic helps balance your actions with your life purpose. When the Driver and Conductor work in synergy, it creates a powerful flow that supports both personal and professional growth.`;

const icons = {
  'Driver & Conductor Relationship': <FaAtom className="text-4xl" style={{ color: '#06402B' }} />,
  'Name Number Compatibility': <FaBook className="text-4xl" style={{ color: '#06402B' }} />,
  'Mobile Number Numerology': <FaAddressBook className="text-4xl" style={{ color: '#06402B' }} />,
  'Signature Numerology': <FaFileSignature className="text-4xl" style={{ color: '#06402B' }} />,
  'Baby Name Number': <Baby className="size-10" style={{ color: '#06402B' }} />,
};

const DriverConductorRelationship = () => {
  const otherServices = allServices.filter(s => s.title !== 'Driver & Conductor Relationship');
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-16 pb-10">
      <h1 className="text-4xl md:text-5xl font-bold text-[#06402B] mb-4 mt-4 text-center tracking-wide" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '1px' }}>
        Driver & Conductor Relationship
      </h1>
      <div className="w-24 h-1 bg-[#FFB823] mx-auto mb-8 rounded-full" />
      <div className="w-full max-w-lg mx-auto mb-12">
        <NumerologyForm 
          extraFields={[]} 
          submitLabel="Get Result" 
          serviceName="Driver & Conductor Relationship" 
        />
      </div>
      <h2 className="text-2xl md:text-4xl font-bold text-[#06402B] mb-4 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
        What is Driver & Conductor Relationship?
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
        {/* Driver & Conductor Relationship card is omitted since this is the current page */}
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
        {/* Mobile Number Numerology Card */}
        <div className="relative group bg-gradient-to-br from-[#FFF1CA] via-[#FFF9E3] to-white rounded-3xl shadow-2xl p-8 flex flex-col justify-between border border-[#06402B] overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="flex justify-center items-center mb-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#06402B]" style={{ backgroundColor: '#FFF6D1' }}>
              <FaAddressBook className="text-4xl" style={{ color: '#06402B' }} />
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r bg-[#06402B] rounded-t-3xl" />
          <div className="flex-1 flex flex-col">
            <h3 className="text-2xl font-extrabold mb-2 transition-colors duration-200" style={{ color: '#1B3A2B', fontFamily: 'Poppins, sans-serif' }}>Mobile Number Numerology</h3>
            <p className="mb-2 text-sm font-bold" style={{ color: '#6B3F19', fontFamily: 'Arial, sans-serif' }}>
              Reveal the hidden power of your mobile number and its influence on your daily life and opportunities.
            </p>
          </div>
          <button
            onClick={() => window.location.href='/services/mobile-number-numerology'}
            className="mt-4 px-7 py-2 bg-gradient-to-r bg-[#06402B] text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-all duration-200 self-end border-2"
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

export default DriverConductorRelationship;