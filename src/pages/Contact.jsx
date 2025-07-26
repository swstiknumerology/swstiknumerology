import React, { useState } from 'react';
import WhatWhySection from '../components/WhatWhySection';
import { FaPlus, FaMinus } from 'react-icons/fa';

const whatText = `The word, “numerology,” is the science of numbers. The Numerology word comes from the Latin root, “numerus,” which means number and the Greek word, “logos,” which refers word or thought. These number-thoughts, or numerology is an ancient method of divination where numerical vibrations are charted in order to determine or predict the pattern of trends for the future.\n\nNumerology is a metaphysical science that studies the relationship between numbers and events in our lives. It is based on the belief that numbers carry specific vibrations and meanings that can reveal insights about a person’s personality, destiny, and life path. By analyzing names, birth dates, and other significant numbers, numerology helps individuals gain deeper self awareness and make more informed life decisions.`;
const whyText = `Once you learn how to use numerology successfully and implement it in your daily life you will soon see how it can guide you on a path to personal fulfillment and enjoyment. Numerology can be used to find a compatible partner, choose a career, determine your destiny and allows for full advantage of lucky days, events and years.\n\nNumerology is essential for our lives as it offers deep insights into our personality, purpose, and potential. By analyzing birth dates and names, numerology reveals patterns and energies that influence our decisions, relationships, and life path. It helps us understand our strengths and challenges, guiding us toward personal growth, balance, and fulfillment. Numerology also uncovers ideal career paths, compatibility in relationships, and favorable life periods. In a world full of uncertainty, numerology acts as a spiritual compass—empowering us to align with our true nature and make choices with clarity, confidence, and conscious awareness.`;

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = 'Invalid email.';
    if (!form.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-16 pb-10">
      {/* Contact Form at the top */}
      <div className="w-full max-w-2xl mx-auto mt-0">
        <div className="bg-[#FFF6D1] rounded-3xl shadow-2xl p-10 border-2 border-[#06402B]">
          <h2 className="text-3xl font-bold text-[#06402B] mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact Us</h2>
          {submitted && (
            <div className="mb-4 text-green-700 bg-green-100 border border-green-300 rounded p-3 text-center font-semibold">
              Thank you for reaching out! We will get back to you soon.
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-[#06402B] font-semibold text-xl mb-1" style={{ fontFamily: 'Arial, sans-serif' }}>Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 ${errors.name ? 'border-red-400' : 'border-[#06402B]'} bg-white text-[#06402B] focus:outline-none focus:ring-2 focus:ring-[#06402B]`}
                placeholder="Your Name"
                style={{ fontFamily: 'Arial, sans-serif' }}
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
            </div>
            <div>
              <label className="block text-[#06402B] font-semibold mb-1  text-xl" style={{ fontFamily: 'Arial, sans-serif' }}>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 ${errors.email ? 'border-red-400' : 'border-[#06402B]'} bg-white text-[#06402B] focus:outline-none focus:ring-2 focus:ring-[#06402B]`}
                placeholder="Your Email"
                style={{ fontFamily: 'Arial, sans-serif' }}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </div>
            <div>
              <label className="block text-[#06402B] font-semibold mb-1  text-xl" style={{ fontFamily: 'Arial, sans-serif' }}>Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 ${errors.subject ? 'border-red-400' : 'border-[#06402B]'} bg-white text-[#06402B] focus:outline-none focus:ring-2 focus:ring-[#06402B]`}
                placeholder="Subject"
                style={{ fontFamily: 'Arial, sans-serif' }}
              />
              {errors.subject && <span className="text-red-500 text-sm">{errors.subject}</span>}
            </div>
            <div>
              <label className="block text-[#06402B] font-semibold mb-1  text-xl" style={{ fontFamily: 'Arial, sans-serif' }}>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border-2 ${errors.message ? 'border-red-400' : 'border-[#06402B]'} bg-white text-[#06402B] focus:outline-none focus:ring-2 focus:ring-[#06402B]`}
                placeholder="Your Message"
                style={{ fontFamily: 'Arial, sans-serif' }}
              />
              {errors.message && <span className="text-red-500 text-xl">{errors.message}</span>}
            </div>
            <button
              type="submit"
              className="mt-2 px-8 py-3 bg-gradient-to-r from-[#06402B] to-[#2D4F2B] text-white font-bold rounded-lg shadow hover:from-[#2D4F2B] hover:to-[#06402B] transition-all duration-200 border-2 border-[#06402B] focus:outline-none focus:ring-2 focus:ring-[#06402B]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <WhatWhySection whatText={whatText} whyText={whyText} />
      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

// FAQSection component
function FAQSection() {
  const faqs = [
    {
      q: "What is numerology and how does it work?",
      a: "Numerology is the ancient science of numbers that reveals insights about a person's character, life purpose, and destiny through the study of their date of birth and name. Each number carries specific vibrations that influence life experiences."
    },
    {
      q: "What services do you offer as a professional numerologist?",
      a: "I offer personalized numerology consultations, including Life Path analysis, Name Correction, Baby Name Selection, Business Name Compatibility, Signature Analysis, Mobile Number Numerology, and Relationship Compatibility."
    },
    {
      q: "What are Driver & Conductor Numbers?",
      a: "The Driver & Conductor are calculated from your birth date and reveals your soul's mission, natural strengths, and the main direction of your life journey."
    },
    {
      q: "How can changing my name or signature affect my life?",
      a: "Your name and signature hold energetic vibrations. If they are not aligned with your core numerology, they may create obstacles. Adjusting them can attract clarity, confidence, and positive outcomes."
    },
    {
      q: "Is numerology helpful in choosing a baby name or business name?",
      a: "Absolutely! A well-aligned name supports emotional balance, growth, and future success by resonating positively with the birth date's vibrations."
    },
    {
      q: "How accurate is numerology?",
      a: "Numerology is highly accurate when done professionally. It combines logic and spiritual insight, offering practical guidance based on timeless principles."
    }
  ];
  const [open, setOpen] = useState(null);
  return (
    <div className="w-full max-w-6xl mx-auto mt-16 mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#06402B] mb-8 tracking-tight drop-shadow-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>FAQ’s</h2>
      <div className="flex flex-col gap-6">
        {faqs.map((faq, idx) => (
          <div key={idx}>
            <button
              className="flex items-center justify-between w-full text-left py-3 px-4 border-b-2 border-[#FFB823] focus:outline-none text-xl md:text-[22px]]"
              onClick={() => setOpen(open === idx ? null : idx)}
              style={{ fontFamily: 'Poppins, sans-serif', color: '#06402B', fontWeight: 600 }}
            >
              <span>{idx + 1}. {faq.q}</span>
              <span className="ml-2">{open === idx ? <FaMinus /> : <FaPlus />}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${open === idx ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}
              style={{ fontFamily: 'Arial, sans-serif' }}
            >
              <div className="px-4 text-[#2D4F2B] text-base md:text-lg">
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;