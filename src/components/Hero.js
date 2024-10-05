import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-10 md:px-20">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Hammad</h1>
      <h2 className="text-xl text-teal-400 mb-6">A Web-Developer and Designer</h2>
      <p className="mb-8">I'm always trying to bring real value and define problems with my designs. Welcome to my portfolio.</p>
      <a href='#projects' className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full btn">
        Check out my work
      </a>
    </section>
  );
};

export default Hero;
