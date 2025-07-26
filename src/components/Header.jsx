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
        {/* Navigation */}
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
        {/* Right Side */}
        <div className="flex items-center gap-6 relative">
          <div className="relative" ref={dropdownRef}>
            {user ? (
              <>
                <button
                  className="flex items-center gap-2 text-[#2D4F2B] font-medium focus:outline-none"
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
                  className="flex items-center gap-1 text-[#2D4F2B] font-medium focus:outline-none"
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
      {/* Mobile nav (optional, not implemented here) */}
    </header>
  );
};

export default Header;