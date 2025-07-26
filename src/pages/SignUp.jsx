import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext.jsx';

const SignUp = () => {
  const { login } = useUser();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.confirm) {
      setError('All fields are required.');
      return;
    }
    if (form.password !== form.confirm) {
      setError('Passwords do not match.');
      return;
    }
    // Fake sign up: just save to context/localStorage
    login({ name: form.name, email: form.email });
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border-[#06402B] border-2">
        <h2 className="text-3xl font-bold text-center text-[#06402B] mb-2" style={{fontFamily:'Poppins'}}>Create Account</h2>
        <p className="text-center text-[#06402B] mb-6">Sign up to get started</p>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-[#06402B] font-medium mb-1">Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full px-4 py-2 border border-[#06402B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06402B] bg-[#FFF] placeholder-[#708A58]" placeholder="Enter your name" />
          </div>
          <div>
            <label className="block text-[#2D4F2B] font-medium mb-1">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full px-4 py-2 border border-[#06402B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06402B] bg-[#FFF] placeholder-[#06402B]" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-[#2D4F2B] font-medium mb-1">Password</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} className="w-full px-4 py-2 border border-[#06402B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06402B] bg-[#FFF] placeholder-[#06402B]" placeholder="Create a password" />
          </div>
          <div>
            <label className="block text-[#2D4F2B] font-medium mb-1">Confirm Password</label>
            <input type="password" name="confirm" value={form.confirm} onChange={handleChange} className="w-full px-4 py-2 border border-[#06402B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06402B] bg-[#FFF] placeholder-[#06402B]" placeholder="Confirm your password" />
          </div>
          {error && <div className="text-red-600 text-sm text-center">{error}</div>}
          <button type="submit" className="w-full bg-[#06402B] text-white font-bold py-2 rounded-lg hover:bg-[#2D4F2B] transition-colors">Sign Up</button>
        </form>
        <p className="mt-6 text-center text-[#06402B]">Already have an account? <Link to="/login" className="text-[#06402B] font-semibold hover:underline">Login</Link></p>
      </div>
    </div>
  );
};

export default SignUp; 