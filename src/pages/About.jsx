import React from 'react';
import AboutSection from '../components/AboutSection';
import WhatWhySection from '../components/WhatWhySection';
import logo1 from '../assets/Logo1.jpg';

const aboutText = [
  "Hello, I’m Sujl Pandv, a passionate and professional numerologist with over 2.5 years of dedicated experience. My journey began with a fascination for the mystical power of numbers and how they influence our lives in ways most people never imagine.",
  "Numerology is not just a practice, it's a powerful tool for transformation. I specialize in name correction, mobile number analysis, business name suggestions, baby name numerology, lucky number guidance, relationship compatibility, and career path analysis. Every reading is personalized and accurate, helping clients align with their life path and unlock greater harmony and success.",
  "Over the past 2.5 years, I’ve worked with clients from diverse backgrounds, guiding them through important life decisions. Whether you’re feeling stuck, starting a new chapter, or simply curious about your destiny, I’m here to offer clear insights and practical advice through the lens of numerology."
];
const trustPoints = [
  "2.5+ years of professional numerology experience",
  "Personalized and accurate readings",
  "Guidance for life, career, and relationships",
  "Trusted by clients from diverse backgrounds"
];
const quote = "Let’s decode your destiny one number at a time.";

const whatText = `The word, “numerology,” is the science of numbers. The Numerology word comes from the Latin root, “numerus,” which means number and the Greek word, “logos,” which refers word or thought. These number-thoughts, or numerology is an ancient method of divination where numerical vibrations are charted in order to determine or predict the pattern of trends for the future.\n\nNumerology is a metaphysical science that studies the relationship between numbers and events in our lives. It is based on the belief that numbers carry specific vibrations and meanings that can reveal insights about a person’s personality, destiny, and life path. By analyzing names, birth dates, and other significant numbers, numerology helps individuals gain deeper self awareness and make more informed life decisions.`;
const whyText = `Once you learn how to use numerology successfully and implement it in your daily life you will soon see how it can guide you on a path to personal fulfillment and enjoyment. Numerology can be used to find a compatible partner, choose a career, determine your destiny and allows for full advantage of lucky days, events and years.\n\nNumerology is essential for our lives as it offers deep insights into our personality, purpose, and potential. By analyzing birth dates and names, numerology reveals patterns and energies that influence our decisions, relationships, and life path. It helps us understand our strengths and challenges, guiding us toward personal growth, balance, and fulfillment. Numerology also uncovers ideal career paths, compatibility in relationships, and favorable life periods. In a world full of uncertainty, numerology acts as a spiritual compass—empowering us to align with our true nature and make choices with clarity, confidence, and conscious awareness.`;

const About = () => (
  <div className="min-h-screen flex flex-col items-center justify-start pb-10 px-2 sm:px-4">
    <AboutSection
      logo={logo1}
      title="About Us"
      subtitle="Empowering lives through the science of numbers. Discover your true path with expert numerology guidance."
      aboutText={aboutText}
      trustPoints={trustPoints}
      quote={quote}
    />
    <WhatWhySection whatText={whatText} whyText={whyText} />
  </div>
);

export default About;