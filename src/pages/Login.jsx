import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext.jsx';

const Login = () => {
  const { login } = useUser();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError('All fields are required.');
      return;
    }
    // Fake login: just save to context/localStorage
    // For demo, use email as name before @
    const name = form.email.split('@')[0];
    login({ name, email: form.email });
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-18 px-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8 border-[#06402B] border-2">
        <h2 className="text-4xl font-bold text-center text-[#06402B] mb-2" style={{fontFamily:'Poppins'}}>Welcome Back</h2>
        <p className="text-center text-[#708A58] mb-6" style={{fontFamily:'Arial'}}>Login to your account</p>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-[#06402B] font-medium mb-1" style={{fontFamily:'Poppins'}}>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full px-4 py-2 border border-[#06402B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06402B] bg-[#fff] placeholder-[#06402B]" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-[#06402B] font-medium mb-1" style={{fontFamily:'Poppins'}}>Password</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} className="w-full px-4 py-2 border border-[#06402B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06402B] bg-[#FFF] placeholder-[#06402B]" placeholder="Enter your password" />
          </div>
          {error && <div className="text-red-600 text-sm text-center">{error}</div>}
          <button type="submit" className="w-full bg-[#06402B] text-white font-bold py-2 rounded-lg hover:bg-[#2D4F2B] transition-colors">Login</button>
        </form>
        <p className="mt-6 text-center text-[#06402B]">Don't have an account? <Link to="/signup" className="text-[#06402B] font-semibold hover:underline">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login; 