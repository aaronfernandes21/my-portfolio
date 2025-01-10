import React from 'react';
import './App.css'; // Tailwind CSS

function App() {
  return (
    <div className="font-sans bg-gray-900 text-white">
      {/* Header Section */}
      <header className="bg-gray-800 text-white p-8 flex justify-between items-center">
        <h1 className="text-4xl font-extrabold">Welcome to My Portfolio</h1>
        <nav className="flex space-x-6 items-center">
          <a href="#about" className="hover:underline">About Me</a>
          <a href="#education" className="hover:underline">Education</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#frameworks" className="hover:underline">Frameworks</a>
          <a
            href="/Resume.pdf" // Correct relative path
            download="Resume.pdf" // Forces download with a custom filename
            className="hover:underline bg-transparent border border-white rounded-lg px-4 py-1"
          >
            Download Resume
          </a>
        </nav>
      </header>

      {/* About Me Section */}
      <section id="about" className="p-8 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6">Heyya! it's me, Aaron Fernandes</h2>
        <div className="flex justify-center mb-6">
          {/* Your Round Image */}
          <img 
            src="/images/aaron_profilepic.jpg"  // Replace with your image path
            alt="Aaron Fernandes"
            className="w-32 h-32 object-cover rounded-full border-4 border-gray-400"
          />
        </div>
        <p className="max-w-2xl mx-auto text-center text-gray-400">
          Hi there! I'm a developer who loves building software that makes a difference. Whether it's solving real-world problems or creating something meaningful, I’m always up for a challenge.
        </p>
        {/* Links to GitHub and LinkedIn */}
        <div className="flex justify-center mt-6 space-x-6">
          <a href="https://github.com/aaronfernandes21" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded shadow-lg">
            <img src="/images/github.png" alt="GitHub" className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/aaronfernandes21/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded shadow-lg">
            <img src="/images/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
          </a>
        </div>
        <div className="flex justify-center mt-4">
          <p className="text-gray-400 text-sm">
            Reach me at: <a href="mailto:aaronfernandescks2015@gmail.com" className="text-blue-400 hover:underline">aaronfernandescks2015@gmail.com</a>
          </p>
        </div>
      </section>

     {/* Education Section */}
<section id="education" className="p-8 mt-12 border-t-4 border-gray-500 shadow-lg bg-gray-800">
  <h2 className="text-3xl font-bold text-center mb-6 text-white">Education</h2>
  <div className="flex justify-center items-center">
    <div className="flex items-center space-x-6">
      {/* Image Section */}
      <a href="https://www.sahyadri.edu.in/" target="_blank" rel="noopener noreferrer">
        <img 
          src="/images/college.png" 
          alt="Education" 
          className="w-32 h-32 object-cover rounded-full mb-4" 
        />
      </a>
      {/* Text Section */}
      <div className="text-center">
        <p className="text-xl font-semibold text-white">Bachelor's Degree in Computer Science and Engineering</p>
        <p className="text-gray-400">Sahyadri College of Engineering and Management  2022-26</p>
      </div>
    </div>
  </div>
</section>


{/* Skills Section */}
<section id="skills" className="p-8 bg-gray-900">
  <h2 className="text-4xl font-extrabold text-center text-white mb-8 drop-shadow-md">Skills</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
    {/* Programming Languages */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 ease-in-out">
      <h3 className="text-xl font-semibold text-white mb-4">Programming Languages</h3>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="bg-gray-700 p-3 rounded-full w-32 text-center">
          <img src="https://img.icons8.com/color/48/c-programming.png" alt="C " className="w-16 h-16 mx-auto" />
        </div>
        <div className="bg-gray-700 p-3 rounded-full w-32 text-center">
          <img src="https://img.icons8.com/color/48/c-plus-plus-logo.png" alt="C++ " className="w-16 h-16 mx-auto" />
        </div>
        <div className="bg-gray-700 p-3 rounded-full w-32 text-center">
          <img src="https://img.icons8.com/color/48/python--v1.png" alt="Python " className="w-16 h-16 mx-auto" />
        </div>
      </div>
    </div>

    {/* Web Technologies */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 ease-in-out">
      <h3 className="text-xl font-semibold text-white mb-4">Web Technologies</h3>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="bg-gray-700 p-3 rounded-full w-32 text-center">
          <img src="https://img.icons8.com/color/48/html-5--v1.png" alt="HTML " className="w-16 h-16 mx-auto" />
        </div>
        <div className="bg-gray-700 p-3 rounded-full w-32 text-center">
          <img src="https://img.icons8.com/color/48/css3.png" alt="CSS " className="w-16 h-16 mx-auto" />
        </div>
        <div className="bg-gray-700 p-3 rounded-full w-32 text-center">
          <img src="https://img.icons8.com/color/48/javascript--v1.png" alt="JavaScript " className="w-16 h-16 mx-auto" />
        </div>
        <div className="bg-gray-700 p-3 rounded-full w-32 text-center">
          <img src="https://img.icons8.com/color/48/bootstrap--v2.png" alt="Bootstrap" className="w-16 h-16 mx-auto" />
        </div>
        <div className="bg-gray-700 p-3 rounded-full w-32 text-center">
          <img src="https://img.icons8.com/officel/80/react.png" alt="React " className="w-16 h-16 mx-auto" />
        </div>
      </div>
    </div>

    {/* Additional Tools */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 ease-in-out">
      <h3 className="text-xl font-semibold text-white mb-4">Additional Tools</h3>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="bg-gray-700 p-3 rounded-full w-32 text-center">
          <img src="https://img.icons8.com/color/48/figma--v1.png" alt="Figma " className="w-16 h-16 mx-auto" />
        </div>
        <div className="bg-gray-700 p-3 rounded-full w-32 text-center">
          <img src="https://img.icons8.com/color/48/git.png" alt="Git " className="w-16 h-16 mx-auto" />
        </div>
        <div className="bg-gray-700 p-3 rounded-full w-32 text-center">
          <img src="https://img.icons8.com/sf-black-filled/64/github.png" alt="GitHub " className="w-16 h-16 mx-auto" />
        </div>
        <div className="bg-gray-700 p-3 rounded-full w-32 text-center">
          <img src="https://img.icons8.com/color/48/visual-studio-code-2019.png" alt="VSCode " className="w-16 h-16 mx-auto" />
        </div>
        <div className="bg-gray-700 p-3 rounded-full w-32 text-center">
          <img src="/images/postman.png" alt="Postman Logo" className="w-16 h-16 mx-auto" />
        </div>
        <div className="bg-gray-700 p-3 rounded-full w-32 text-center">
          <img src="https://img.icons8.com/ios/50/flask.png" alt="Flask " className="w-16 h-16 mx-auto" />
        </div>
        <div className="bg-gray-700 p-3 rounded-full w-32 text-center">
          <img src="/images/nodejs.png" alt="Node" className="w-16 h-16 mx-auto" />
        </div>
      </div>
    </div>
  </div>
</section>




      {/* Projects Section */}
      <section id="projects" className="p-8 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <img src="project1.jpg" alt="Project 1" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="text-gray-400">A brief description of your project and its impact.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <img src="project2.jpg" alt="Project 2" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="text-gray-400">A brief description of your project and its impact.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <img src="project3.jpg" alt="Project 3" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold">Project 3</h3>
            <p className="text-gray-400">A brief description of your project and its impact.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>© 2025 Aaron Fernandes. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
