import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-10 bg-gray-800 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Resume</h2>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10">
        <div className="mb-8 md:mb-0">
          <h3 className="text-2xl mb-4">Download My Resume</h3>
          <a href="/resume.pdf" download className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full">Download Resume</a>
        </div>
        <div>
          <iframe 
            src="/resume.pdf" 
            title="Resume" 
            className="w-full h-96 md:w-96" 
            frameBorder="0">
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Resume;
