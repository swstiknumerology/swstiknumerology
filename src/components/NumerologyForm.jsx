import React, { useState } from 'react';
import { useUser } from '../UserContext.jsx';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

const NumerologyForm = ({ extraFields = [], onSubmit, submitLabel = 'Get Result', serviceName }) => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', dob: '', place: '', ...Object.fromEntries(extraFields.map(f => [f.name, ''])) });
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.dob.trim()) newErrors.dob = 'Date of Birth is required.';
    if (!form.place.trim()) newErrors.place = 'Place of Birth is required.';
    extraFields.forEach(f => {
      if (f.type === 'file') {
        if (!file) newErrors[f.name] = f.label + ' is required.';
      } else if (!form[f.name]?.trim()) {
        newErrors[f.name] = f.label + ' is required.';
      }
    });
    return newErrors;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleFileChange = e => {
    setFile(e.target.files[0]);
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    if (!user) {
      alert('Please log in to submit the form and receive your result by email.');
      return;
    }

    try {
      // 1. Send confirmation email to the user
      const userTemplateParams = {
        to_email: user.email,
        to_name: user.name,
        message: 'Thank you for your submission! Our team will get back to you within 2-3 days at your registered email address.'
      };
      await emailjs.send(
        'service_7u7jsag',
        'template_vagwluq', 
        userTemplateParams,
        'Kmx5pMC6SlUQOMmlo'
      );

      // 2. Send detailed email to the admin
      const adminTemplateParams = {
        service_name: serviceName, // Add the service name here
        user_name: form.name,
        user_email: user.email,
        user_dob: form.dob,
        user_place: form.place,
        // Combine extra fields into a single string
        other_details: extraFields.map(f => `${f.label}: ${form[f.name] || 'Not provided'}`).join('\n')
      };
      await emailjs.send(
        'service_7u7jsag',
        'template_tplty0a', // IMPORTANT: Create and use a new template ID for the admin
        adminTemplateParams,
        'Kmx5pMC6SlUQOMmlo'
      );

      setSubmitted(true);
      if (onSubmit) onSubmit({ ...form, file });
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
      setForm({ name: '', dob: '', place: '', ...Object.fromEntries(extraFields.map(f => [f.name, ''])) });
      setFile(null);
      navigate('/thank-you');
    } catch (err) {
      console.error('EmailJS error:', err);
      alert('Failed to send email. Please check your EmailJS configuration or try again later.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-2xl px-8 py-10 w-full max-w-2xl flex flex-col gap-6 items-center justify-center border border-[#06402B]"
    >
        <div className="w-full flex flex-col md:flex-row md:items-center gap-4">
          <label className="w-full md:w-1/3 text-[#06402B] font-semibold text-xl">Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full md:w-2/3 px-4 py-2 border border-[#06402B] rounded-lg text-[#06402B] placeholder-[#06402B] focus:outline-none focus:ring-2 focus:ring-[#06402B]"
            required
          />
        </div>
        <div className="w-full flex flex-col md:flex-row md:items-center gap-4">
          <label className="w-full md:w-1/3 text-[#06402B] font-semibold text-xl">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            className="w-full md:w-2/3 px-4 py-2 border border-[#06402B] rounded-lg text-[#06402B] focus:outline-none focus:ring-2 focus:ring-[#06402B]"
            required
          />
        </div>
        <div className="w-full flex flex-col md:flex-row md:items-center gap-4">
          <label className="w-full md:w-1/3 text-[#06402B] font-semibold text-xl">Place of Birth:</label>
          <input
            type="text"
            name="place"
            value={form.place}
            onChange={handleChange}
            placeholder="Place of Birth"
            className="w-full md:w-2/3 px-4 py-2 border border-[#06402B] rounded-lg text-[#06402B] placeholder-[#06402B] focus:outline-none focus:ring-2 focus:ring-[#06402B]"
            required
          />
        </div>
        {extraFields.map(f => (
          <div key={f.name} className="w-full flex flex-col md:flex-row md:items-center gap-4">
            <label className="w-full md:w-1/3 text-[#06402B] font-semibold text-xl">{f.label}:</label>
            {f.type === 'file' ? (
              <input
                type="file"
                name={f.name}
                accept={f.accept || '*'}
                onChange={handleFileChange}
                className="w-full md:w-2/3 px-4 py-2 border border-[#06402B] rounded-lg text-[#06402B] focus:outline-none focus:ring-2 focus:ring-[#06402B]"
              />
            ) : (
              <input
                type={f.type || 'text'}
                name={f.name}
                value={form[f.name]}
                onChange={handleChange}
                placeholder={f.placeholder || f.label}
                className="w-full md:w-2/3 px-4 py-2 border border-[#06402B] rounded-lg text-[#06402B] placeholder-[#06402B] focus:outline-none focus:ring-2 focus:ring-[#06402B]"
              />
            )}
          </div>
        ))}
        {/* Button aligned right on desktop, full width on mobile */}
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="mt-4 md:mt-0 w-full md:w-auto px-8 py-3 bg-[#2D4F2B] text-white font-bold rounded-lg shadow"
          >
            {submitLabel}
          </button>
        </div>
        {submitted && (
          <div className="w-full text-green-700 bg-green-100 border border-green-300 rounded p-3 text-center font-semibold mt-2">
            Thank you! Your details have been submitted.
          </div>
        )}
      </form>
  );
};

export default NumerologyForm; 