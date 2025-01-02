import React from 'react';
import './App.css'; // Tailwind CSS

function App() {
  return (
    <div className="font-sans bg-gray-900 text-white">
      {/* Header Section */}
      <header className="bg-gray-800 text-white p-8 text-center">
        <h1 className="text-4xl font-extrabold">Welcome to My Portfolio</h1>
        <nav className="flex justify-center space-x-6 mt-4">
          <a href="#about" className="hover:underline">About Me</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#education" className="hover:underline">Education</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#frameworks" className="hover:underline">Frameworks</a>
        </nav>
      </header>

      {/* About Me Section */}
      <section id="about" className="p-8 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6">Hey, it's me, Aaron Fernandes</h2>
        <div className="flex justify-center mb-6">
          {/* Your Round Image */}
          <img 
            src="aaron-image.jpg"  // Replace with your image path
            alt="Aaron Fernandes"
            className="w-32 h-32 object-cover rounded-full border-4 border-gray-400"
          />
        </div>
        <p className="max-w-2xl mx-auto text-center text-gray-400">
          Hello! I'm a passionate developer with a knack for creating impactful software solutions that solve real-world problems.
        </p>
        {/* Links to GitHub and LinkedIn */}
        <div className="flex justify-center mt-6 space-x-6">
          <a href="https://github.com/aaron-fernandes" target="_blank" rel="noopener noreferrer">
            <img src="github-logo.png" alt="GitHub" className="w-8 h-8" /> {/* Replace with actual GitHub logo path */}
          </a>
          <a href="https://www.linkedin.com/in/aaron-fernandes/" target="_blank" rel="noopener noreferrer">
            <img src="linkedin-logo.png" alt="LinkedIn" className="w-8 h-8" /> {/* Replace with actual LinkedIn logo path */}
          </a>
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
            <p className="text-gray-400">Another project with a brief description.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <img src="project3.jpg" alt="Project 3" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold">Project 3</h3>
            <p className="text-gray-400">Brief description of your third project.</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="p-8 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6">Education</h2>
        <div className="flex justify-center space-x-6">
          <div className="text-center">
            <img src="education.jpg" alt="Education" className="w-32 h-32 object-cover rounded-full mb-4" />
            <p className="text-xl font-semibold">Bachelor's Degree in Computer Science</p>
            <p className="text-gray-400">XYZ University - 2024</p>
          </div>
        </div>
      </section>

     {/* Skills Section */}
<section id="skills" className="p-8 bg-gray-900">
  <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">JavaScript</h3>
      <p className="text-gray-400">Experienced with modern JavaScript, asynchronous programming, and ES6+ features. Comfortable using JavaScript for both client-side and server-side development.</p>
    </div>
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">Python</h3>
      <p className="text-gray-400">Proficient in Python for web development, automation scripts, and machine learning. Familiar with libraries like Flask, Django, Pandas, and TensorFlow.</p>
    </div>
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">C++</h3>
      <p className="text-gray-400">Skilled in C++ for system-level programming, data structures, algorithms, and performance optimization. Experienced in building efficient software with low-level memory management.</p>
    </div>
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">React</h3>
      <p className="text-gray-400">Proficient in building dynamic and responsive web applications with React, including state management with Redux and hooks, and creating reusable UI components.</p>
    </div>
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">Node.js</h3>
      <p className="text-gray-400">Experienced in server-side development using Node.js, building RESTful APIs, and integrating with databases like MongoDB and SQL databases.</p>
    </div>
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">SQL</h3>
      <p className="text-gray-400">Strong command of SQL, including complex queries, database design, normalization, and optimization. Familiar with MySQL, PostgreSQL, and SQLite.</p>
    </div>
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">Git</h3>
      <p className="text-gray-400">Experienced with Git version control, working with GitHub, GitLab, and Bitbucket for team collaboration, branching, merging, and code reviews.</p>
    </div>
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">Docker</h3>
      <p className="text-gray-400">Familiar with Docker for containerization, building and deploying applications in isolated environments for consistency across development, testing, and production stages.</p>
    </div>
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">Machine Learning</h3>
      <p className="text-gray-400">Experienced in applying machine learning algorithms using Python and libraries like Scikit-learn, TensorFlow, and Keras for classification, regression, and clustering tasks.</p>
    </div>
  </div>
</section>


      {/* Frameworks Section */}
      <section id="frameworks" className="p-8 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6">Frameworks & Libraries</h2>
        <div className="flex justify-center space-x-6">
          <div className="text-center">
            <img src="react-logo.png" alt="React" className="w-24 h-24 mb-4" />
            <p className="text-xl font-semibold">React</p>
          </div>
          <div className="text-center">
            <img src="nodejs-logo.png" alt="Node.js" className="w-24 h-24 mb-4" />
            <p className="text-xl font-semibold">Node.js</p>
          </div>
          <div className="text-center">
            <img src="tailwind-logo.png" alt="Tailwind CSS" className="w-24 h-24 mb-4" />
            <p className="text-xl font-semibold">Tailwind CSS</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-4 mt-8">
        <p className="text-gray-400">Made with ❤️ using React and Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;