import React from 'react';
import NumerologyForm from '../../components/NumerologyForm';
import { services as allServices } from '../Services';
import { FaAtom, FaBook, FaAddressBook, FaFileSignature } from 'react-icons/fa';
import { Baby } from 'lucide-react';
import { TbCrystalBall } from 'react-icons/tb';

const description = `Name Number Compatibility is a key concept in numerology that examines how well an individual’s name vibrations align with their core birth numbers particularly the Mulank (Driver Number) and Bhagyank (Conductor Number). Each alphabet carries a specific numerical value, and when these values are added together and reduced, they form the Name Number a powerful indicator of one’s public persona, career success, and external identity.

In numerology, your name is more than just a label it carries energy that influences how others perceive you, how you present yourself to the world, and the kinds of opportunities you attract. When your Name Number is compatible with your birth numbers, it creates harmony between your inner self and outer expression, often leading to better flow in life, stronger relationships, and professional success.

However, if the Name Number is incompatible or in conflict with your core numbers, it can result in resistance, repeated challenges, or misalignment with your true purpose. In such cases, a numerologist may recommend a name correction or adjustment to bring balance and alignment. Evaluating Name Number Compatibility is essential for personal branding, business names, and choosing auspicious names for newborns.

When you take birth into this world, everything is fixed be it your driver number, conductor number, your period, etc. But, fortunately, your name spelling is not fixed. It is totally under your control and you can take the charge to change it. With my experience of the last 20 years, I want to emphasize that your name spelling contributes 30 to 40% in your overall success or failure in life. Therefore, I strongly suggest to sync your name spelling as early as possible with your date of birth.`;

const icons = {
  'Driver & Conductor Relationship': <FaAtom className="text-4xl" style={{ color: '#06402B' }} />,
  'Name Number Compatibility': <FaBook className="text-4xl" style={{ color: '#06402B' }} />,
  'Mobile Number Numerology': <FaAddressBook className="text-4xl" style={{ color: '#06402B' }} />,
  'Signature Numerology': <FaFileSignature className="text-4xl" style={{ color: '#06402B' }} />,
  'Baby Name Number': <Baby className="size-10" style={{ color: '#06402B' }} />,
};

const NameNumberCompatibility = () => {
  const otherServices = allServices.filter(s => s.title !== 'Name Number Compatibility');
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-16 pb-10">
      <h1 className="text-4xl md:text-5xl font-bold text-[#06402B] mb-4 mt-4 text-center tracking-wide" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '1px' }}>
        Name Number Compatibility
      </h1>
      <div className="w-24 h-1 bg-[#FFB823] mx-auto mb-8 rounded-full" />
      <div className="w-full max-w-lg mx-auto mb-12">
        <NumerologyForm 
          extraFields={[]} 
          submitLabel="Get Result" 
          serviceName="Name Number Compatibility" 
        />
      </div>
      <h2 className="text-2xl md:text-4xl font-bold text-[#06402B] mb-4 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
        What is Name Number Compatibility?
      </h2>
      <div className="w-1/3 h-[1.5px] bg-[#06402B] mx-auto mb-8 rounded-full" />
      <p className="text-[#2D4F2B] text-base md:text-[22px] mb-12 max-w-4xl mx-auto text-justify" style={{ fontFamily: 'Arial, sans-serif' }}>
        {description}
      </p>
      <h2 className="text-5xl font-bold text-[#06402B] mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>Other Numerology Services :</h2>
      <div className="w-24 h-1 bg-[#FFB823] mx-auto mb-8 rounded-full" />
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mb-8">
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
        {/* Name Number Compatibility card is omitted since this is the current page */}
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
      </div>
    </div>
  );
};

export default NameNumberCompatibility;