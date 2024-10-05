import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
    // Logic to handle the form submission (API, etc.)
  };

  return (
    <section id="contact" className="py-20 px-10 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <div>
          <label className="block mb-2">Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white" 
            required
          />
        </div>
        <div>
          <label className="block mb-2">Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white" 
            required
          />
        </div>
        <div>
          <label className="block mb-2">Message</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white" 
            rows="6" 
            required
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
