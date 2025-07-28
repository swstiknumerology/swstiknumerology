import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FiUser, FiShoppingCart, FiChevronDown } from 'react-icons/fi';
import logo from '../assets/swstik.png';
import { useUser } from '../UserContext.jsx';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
];

const Header = () => {
  const { user, logout } = useUser();
  const [dropdown, setDropdown] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!dropdown) return;
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdown]);

  const handleLogout = () => {
    logout();
    setDropdown(false);
    navigate('/');
  };

  return (
    <header className="bg-[#FFF1CA] shadow-md sticky top-0 z-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Monotype+Corsiva&display=swap');
      `}</style>
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-4 lg:px-8 min-h-[90px]">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-18 w-auto" />
          <span className="font-bold text-2xl text-[#6B3F19] tracking-wide flex flex-col justify-center">
            <span style={{ fontFamily: 'Monotype Corsiva, cursive', fontSize: '1.3rem', lineHeight: '1' }}>Swstik</span>
            <span style={{ fontFamily: 'Monotype Corsiva, cursive', fontSize: '1.3rem', lineHeight: '1'}}>Numerology</span>
          </span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-medium text-balance px-1 transition-colors duration-200 ${isActive ? 'text-[#FFB823] border-b-2 border-[#FFB823]' : 'text-[#06402B] hover:text-[#FFB823]'}`
              }
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        {/* Hamburger for Mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMobileNav((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className={`block h-0.5 w-6 bg-[#6B3F19] transition-all duration-300 ${mobileNav ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-[#6B3F19] my-1 transition-all duration-300 ${mobileNav ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-[#6B3F19] transition-all duration-300 ${mobileNav ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        {/* Right Side */}
        <div className="flex items-center gap-6 relative">
          <div className="relative" ref={dropdownRef}>
            {user ? (
              <>
                <button
                  className="hidden md:flex items-center gap-2 text-[#2D4F2B] font-medium focus:outline-none"
                  onClick={() => setDropdown((prev) => !prev)}
                  type="button"
                >
                  <FiUser className="text-xl" />
                  <span className="max-w-[120px] truncate">{user.name}</span>
                  <FiChevronDown className="text-base" />
                </button>
                {dropdown && (
                  <div className="absolute right-0 mt-2 w-44 bg-white border border-[#FFB823] rounded-lg shadow-lg z-50">
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-[#2D4F2B] bg-[#FFF1CA] transition-colors rounded-b-lg focus:bg-[#FFB823] focus:text-white"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <>
                <button
                  className="hidden md:flex items-center gap-1 text-[#2D4F2B] font-medium focus:outline-none"
                  onClick={() => setDropdown((prev) => !prev)}
                  type="button"
                >
                  <FiUser className="text-xl" />
                  <span>Log In / Register</span>
                  <FiChevronDown className="text-base" />
                </button>
                {dropdown && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-[#06402B] rounded-lg shadow-lg z-50">
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-[#06402B] text-balance bg-[#FFF1CA] transition-colors rounded-t-lg focus:bg-[#FFB823] focus:text-white"
                      onClick={() => setDropdown(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="block px-4 py-2 text-[#06402B] bg-[#FFF1CA] transition-colors rounded-b-lg focus:bg-[#FFB823] focus:text-white text-balance"
                      onClick={() => setDropdown(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
          <button className="relative text-[#06402B] hover:text-[#FFB823]" onClick={() => navigate('/products')}>
            <FiShoppingCart className="text-2xl cursor-pointer" />
            {/* Cart badge example: */}
            <span className="absolute -top-2 -right-2 cursor-pointer bg-[#FFB823] text-white text-xs rounded-full px-1">2</span>
          </button>
        </div>
      </div>
      {/* Mobile nav */}
      <nav
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${mobileNav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileNav(false)}
      >
        <div
          className={`absolute top-0 right-0 w-3/4 max-w-xs h-full bg-[#FFF1CA] shadow-lg p-6 flex flex-col gap-6 transition-transform duration-300 ${mobileNav ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={e => e.stopPropagation()}
        >
          <button
            className="self-end mb-4 text-2xl text-[#6B3F19] focus:outline-none"
            onClick={() => setMobileNav(false)}
            aria-label="Close navigation"
          >
            &times;
          </button>
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `block py-2 px-4 rounded text-lg font-medium transition-colors duration-200 ${isActive ? 'text-[#FFB823] bg-[#FFF1CA] border-l-4 border-[#FFB823]' : 'text-[#06402B] hover:text-[#FFB823] hover:bg-[#FFF1CA]'}`
              }
              style={{ fontFamily: 'Poppins, sans-serif' }}
              onClick={() => setMobileNav(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <div className="mt-4 border-t pt-4 flex flex-col gap-2">
            {user ? (
              <button
                onClick={() => { handleLogout(); setMobileNav(false); }}
                className="w-full text-left px-4 py-2 text-[#2D4F2B] bg-[#FFF1CA] rounded focus:bg-[#FFB823] focus:text-white"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-4 py-2 text-[#06402B] bg-[#FFF1CA] rounded-t focus:bg-[#FFB823] focus:text-white"
                  onClick={() => setMobileNav(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-[#06402B] bg-[#FFF1CA] rounded-b focus:bg-[#FFB823] focus:text-white"
                  onClick={() => setMobileNav(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;