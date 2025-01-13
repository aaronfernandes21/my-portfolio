import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="font-sans bg-gray-900 text-white">
      
      <header className="bg-gray-800 text-white p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center sm:text-left mb-4 sm:mb-0">
          Welcome to My Portfolio
        </h1>

      
        <button onClick={toggleMenu} className="sm:hidden text-2xl">
          {menuOpen ? '×' : '≡'}
        </button>

       
        <nav className={`sm:flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center ${menuOpen ? 'block' : 'hidden'} sm:block`}>
          <a href="#about" className="hover:underline">About Me</a>
          <a href="#education" className="hover:underline">Education</a>
          
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a
            href="/Resume.pdf"
            download="Resume.pdf"
            className="hover:underline bg-transparent border border-white rounded-lg px-4 py-1"
          >
            Download Resume
          </a>
        </nav>
      </header>


  
      <section id="about" className="p-8 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6">Heyya! it's me, Aaron Fernandes</h2>
        <div className="flex justify-center mb-6">
       
          <img 
            src="/images/aaron_profilepic.jpg"  
            alt="Aaron Fernandes"
            className="w-32 h-32 object-cover rounded-full border-4 border-gray-400"
          />
        </div>
        <p className="max-w-2xl mx-auto text-center text-gray-400">
          Hi there! I'm a developer who loves building software that makes a difference. Whether it's solving real-world problems or creating something meaningful, I’m always up for a challenge.
        </p>
      
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

<section id="education" className="p-8 mt-12 border-t-4 border-gray-500 shadow-lg bg-gray-800">
  <h2 className="text-3xl font-bold text-center mb-6 text-white">Education</h2>
  <div className="flex justify-center items-center">
    <div className="flex items-center space-x-6">
   
      <a href="https://www.sahyadri.edu.in/" target="_blank" rel="noopener noreferrer">
        <img 
          src="/images/college.png" 
          alt="Education" 
          className="w-32 h-32 object-cover rounded-full mb-4" 
        />
      </a>
    
      <div className="text-center">
        <p className="text-xl font-semibold text-white">Bachelor's Degree in Computer Science and Engineering</p>
        <p className="text-gray-400">Sahyadri College of Engineering and Management  2022-26</p>
      </div>
    </div>
  </div>
</section>



<section id="skills" className="p-8 bg-gray-900">
  <h2 className="text-4xl font-extrabold text-center text-white mb-8 drop-shadow-md">Skills</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
   
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




<section id="projects" className="p-8 bg-gray-900">
  <h2 className="text-3xl font-bold text-center mb-6 text-white">Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
   
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <img src="/images/project-banner.png" alt="Project 1" className="w-full h-40 object-cover rounded mb-4" />
      <h3 className="text-xl font-semibold text-white">PROMED</h3>
      <p className="text-gray-400 mb-4">PROMED is a web application designed to retrieve information about medicines using QR codes and NFC tags. The system allows users to add, view, and track medicine details, including expiry and manufacturing dates.</p>
      <a 
        href="https://github.com/aaronfernandes21/PROMED" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white px-5 py-3 rounded-full font-medium shadow-lg hover:from-teal-400 hover:to-blue-500 transition-transform transform hover:scale-105"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2} 
          stroke="currentColor" 
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25c0 1.8.9 3.75 2.25 3.75H9m4.5-12L19.5 9m0 0l-6 6M19.5 9H9" />
        </svg>
        View Repository
      </a>
    </div>


    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <img src="/images/Designer.jpeg" alt="Project 2" className="w-full h-40 object-cover rounded mb-4" />
      <h3 className="text-xl font-semibold text-white">Personal Expense Tracker API</h3>
      <p className="text-gray-400 mb-4">A simple Node.js app for managing personal expenses: log new expenses, retrieve them by category or date, and analyze spending patterns. Features include spending analysis and daily/weekly/monthly summaries via cron jobs.</p>
      <a 
        href="https://github.com/aaronfernandes21/Personal-Expense-Tracker" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white px-5 py-3 rounded-full font-medium shadow-lg hover:from-teal-400 hover:to-blue-500 transition-transform transform hover:scale-105"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2} 
          stroke="currentColor" 
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25c0 1.8.9 3.75 2.25 3.75H9m4.5-12L19.5 9m0 0l-6 6M19.5 9H9" />
        </svg>
        View Repository
      </a>
    </div>
  </div>
</section>

<section id="organization" className="p-8 bg-gray-800">
  <h2 className="text-3xl font-bold text-center mb-6 text-white">Organization</h2>
  <div className="flex justify-center items-center">
    <a href="https://www.sosc.org.in/" target="_blank" rel="noopener noreferrer">
      <div className="flex items-center space-x-6">
        <img src="/images/Group 1906.png" alt="SOSC" className="w-32 h-32 object-cover rounded-full mb-4" />
        <div className="text-center">
          <p className="text-xl font-semibold text-white">Sahyadri Open Source Community</p>
          <p className="text-gray-400">Design Lead</p>
        </div>
      </div>
    </a>
  </div>
</section>


<section id="interests" className="p-8 bg-gray-900">
  <h2 className="text-3xl font-bold text-center mb-6 text-white">Other Interests</h2>
  <div className="flex justify-center gap-6">
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 ease-in-out w-1/3">
      <h3 className="text-xl font-semibold text-white mb-4">UI/UX Design</h3>
    </div>
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 ease-in-out w-1/3">
      <h3 className="text-xl font-semibold text-white mb-4">Music</h3>
    </div>
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300 ease-in-out w-1/3">
      <h3 className="text-xl font-semibold text-white mb-4">Videography</h3>
      <p className="text-gray-400 mt-2">Check out my work on <a href="https://www.instagram.com/local_lens_films?igsh=MTFoN3JrZ3Ixd3Bjcw==" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Instagram - Local Lens Films</a>.</p>
    </div>
  </div>
</section>


    
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>© 2025 Aaron Fernandes. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
