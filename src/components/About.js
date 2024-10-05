import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-10 bg-gray-900 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="mb-6">Living and designing in Abbotabad, Pakistan. Currently working as a freelancer and hoping to further my career in the design space.</p>
          <a href='#contact' className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full">Let's start a project together!</a>
        </div>
        <div>
          <img src="./images/owner.jpg" alt="Laura Gonzalez" className="rounded-full shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default About;
