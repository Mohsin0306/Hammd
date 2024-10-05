import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-10 bg-gray-800 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Selected Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl mb-4">Project 1</h3>
          <a href=""><img src="./images/1.jpg" alt="" /></a>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl mb-4">Project 2</h3>
          <a href=""><img src="./images/2.jpg" alt="" /></a>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl mb-4">Project 3</h3>
          <a href=""><img src="./images/3.jpg" alt="" /></a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
