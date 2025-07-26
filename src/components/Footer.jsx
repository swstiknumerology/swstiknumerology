import React from 'react';
import { FiInstagram, FiFacebook, FiYoutube, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from "../assets/swstik.png";

const services = [
  { name: 'Personal Birth Chart', path: '/services/personal-birth-chart' },
  { name: 'Driver & Conductor Relationship', path: '/services/driver-conductor-relationship' },
  { name: 'Name Number Compatibility', path: '/services/name-number-compatibility' },
  { name: 'Mobile Number Numerology', path: '/services/mobile-number-numerology' },
  { name: 'Signature Numerology', path: '/services/signature-numerology' },
  { name: 'Baby Name Number', path: '/services/baby-name-number' },
];

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact Us', path: '/contact' },
];

const Footer = () => {
  return (
    <footer className="bg-[#06402B] text-[#FFF1CA] pt-10 pb-4 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-evenly items-start">
        {/* Logo and Brand */}
        <div className="flex flex-col mb-6 md:mb-0">
          <div className="flex flex-row items-center gap-4 md:gap-3">
            <div className="w-16 h-16 bg-[#fff] rounded-full flex items-center justify-center">
              {/* Logo goes here */}
              <img src={logo} alt="Logo" className="h-16 w-auto" />
            </div>
            <span
              className="font-medium text-2xl text-[#FFF1CA] flex flex-col justify-center"
              style={{ fontFamily: 'Monotype Corsiva, cursive', fontSize: '1.5rem', lineHeight: '1.3' }}
            >
              Swstik<br /> Numerology
            </span>
          </div>
          <p
            className="mt-3 text-white text-[15px] w-xs"
            style={{ fontFamily: 'Arial, sans-serif' }}
          >
            Numbers are more than digits they carry energy, meaning, and messages from the universe. At Amazing in Numerology, we reveal the hidden codes behind your name and birth date to help you understand who you truly are and where you're headed. Discover how your numbers can unlock success, harmony, and inner peace.
          </p>
        </div>


        {/* Navbar Links */}
        <div>
          <h3 className="text-[#FFB823] font-semibold text-lg mb-3 mx-16">Quick Links</h3>
          <ul className="list-disc pl-6 space-y-2 mx-[57px] text-[16px]">
            {navLinks.map(link => (
              <li key={link.name}>
                <Link to={link.path} className="text-white hover:text-[#FFB823] transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        {/* Services */}
        <div>
          <h3 className="text-[#FFB823] font-semibold text-xl mb-3 mx-[-18px]">Our Services</h3>
          <ul className="space-y-2 text-[16px]">
            {services.map(service => (
              <li key={service.name} className="text-white list-disc hover:text-[#FFB823] cursor-pointer">
                <Link to={service.path} className="hover:text-[#FFB823] transition-colors">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>



        {/* Contact & Social */}
       <div className="flex flex-col items-start">
  <h3 className="text-[#FFB823] font-semibold text-lg mb-3">Contact</h3>

  <p className="text-md text-white mb-2">
    Location: 
    <a
      href="https://maps.app.goo.gl/K8EqoZumzoHUrJvW9"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-[#FFB823] ml-1"
    >
      Surat, Gujarat, India
    </a>
  </p>

  <p className="text-md text-white mb-2">
    Phone: 
    <a
      href="tel:+917567327666"
      className="hover:text-[#FFB823] ml-1"
    >
      +91 7567 327 666
    </a>
  </p>

  <p className="text-md text-white mb-2">
    Email: 
    <a
      href="mailto:swstiknumerology@gmail.com"
      className="hover:text-[#FFB823] ml-1"
    >
      swstiknumerology@gmail.com
    </a>
  </p>

  <div className="flex gap-4 mt-2">
    <a
      href="https://www.instagram.com/swstiknumerology?igsh=MTJpZ2dteHM4aXdqbA=="
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#FFB823] text-2xl"
    >
      <FiInstagram />
    </a>
    <a
      href="https://www.facebook.com/share/1AcaKQVg1j/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#FFB823] text-2xl"
    >
      <FiFacebook />
    </a>
    <a
      href="https://youtube.com/@swstiknumerology?si=jIt1LCTIgXBPbkyb"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#FFB823] text-2xl"
    >
      <FiYoutube />
    </a>
    <a
      href="https://x.com/swstik1035?t=n38pHmw-pR4kD0T1wiSGZw&s=09"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#FFB823] text-2xl"
    >
      <FiX />
    </a>
  </div>
</div>

      </div>
      <div className="border-t border-[#fff] mt-8 pt-4 text-center text-white text-sm">
        © {new Date().getFullYear()} Swstik Numerology. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;