import React from 'react';
import NumerologyForm from '../../components/NumerologyForm';
import { services as allServices } from '../Services';
import { FaAtom, FaBook, FaAddressBook, FaFileSignature } from 'react-icons/fa';
import { Baby } from 'lucide-react';
import { TbCrystalBall } from 'react-icons/tb';

const description = `Signature Numerology is a powerful and insightful tool that analyzes the vibrational energy embedded in the way a person signs their name. Your signature is not just a formality it is a direct extension of your personal energy and subconscious intent. In numerology, it reflects how you express your identity to the world and how others perceive your confidence, stability, and success potential.

Each letter in your signature carries a numeric value, and the overall formation, direction, style, and consistency of your signature all contribute to the energy it emits. When your signature is aligned with your core numbers especially your Name Number, Life Path, and Destiny Number it enhances your ability to manifest success, attract opportunities, and project authority.

An imbalanced or conflicting signature, however, can create energetic blockages. It may lead to delays, misunderstandings, or an inability to fully express your inner strengths. Through Signature Numerology, a professional numerologist evaluates the strokes, flow, and structure of your signature and, if needed, recommends subtle yet effective modifications.

Adjusting your signature in harmony with your numerological profile can empower your aura, strengthen your presence, and support personal and professional growth.

Your signature also attracts financial prosperity. Many financial experts and coaches suggest that your signature should be in sync with the principles of growth so that one can amass wealth. The subconscious mind is attuned to the positive energies embedded in the signature, and success manifests accordingly.

A signature is the reflection of your subconscious energy. If done correctly, you can channel that energy in a way to attract success and stability into your life. Follow the above-mentioned principles, make the required adjustments, and see how this simple tweak in your signature can take you from zero to hero! So, are you ready to make a change in your signature and hence your destiny? Begin today, and make the first step into a more successful tomorrow! Controlling this simple yet powerful aspect of your identity can make all the difference in setting grounds for eternal success and prosperity.

For more personalized insights about your signature and how numerology can influence your life, feel free to contact us. We offer detailed numerology readings and consultations to help you unlock your true potential and navigate your life's journey with confidence and clarity.`;

const icons = {
  'Driver & Conductor Relationship': <FaAtom className="text-4xl" style={{ color: '#06402B' }} />,
  'Name Number Compatibility': <FaBook className="text-4xl" style={{ color: '#06402B' }} />,
  'Mobile Number Numerology': <FaAddressBook className="text-4xl" style={{ color: '#06402B' }} />,
  'Signature Numerology': <FaFileSignature className="text-4xl" style={{ color: '#06402B' }} />,
  'Baby Name Number': <Baby className="size-10" style={{ color: '#06402B' }} />,
};

const SignatureNumerology = () => {
  const otherServices = allServices.filter(s => s.title !== 'Signature Numerology');
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-16 pb-10">
      <h1 className="text-4xl md:text-5xl font-bold text-[#06402B] mb-4 mt-4 text-center tracking-wide" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '1px' }}>
        Signature Numerology
      </h1>
      <div className="w-24 h-1 bg-[#FFB823] mx-auto mb-8 rounded-full" />
      <div className="w-full max-w-lg mx-auto mb-12">
        <NumerologyForm 
          extraFields={[{ name: 'signature', label: 'Upload Signature Document', type: 'file', accept: '.jpg,.jpeg,.png,.pdf' }]} 
          submitLabel="Get Result" 
          serviceName="Signature Numerology" 
        />
      </div>
      <h2 className="text-2xl md:text-4xl font-bold text-[#06402B] mb-4 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
        What is Signature Numerology?
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
        {/* Signature Numerology card is omitted since this is the current page */}
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

export default SignatureNumerology;