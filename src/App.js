// src/App.js

import React from 'react';
import Navbar from './Navbar';
import { FaGithub, FaExternalLinkAlt, FaNewspaper } from 'react-icons/fa';

function App() {
  const portfolioProjects = [
    {
      title: 'Guest Nutrition',
      description: 'An AI-powered recipe generator that helps users create healthy meals based on dietary preferences and available ingredients. Features personalized nutrition analysis and meal planning.',
      technologies: ['Python', 'React', 'OpenAI API', 'PostgreSQL'],
      githubLink: 'https://github.com/yourusername/guest-nutrition',
      liveLink: 'https://guest-nutrition-demo.com',
    },
    {
      title: 'Paw Tribe',
      description: 'A platform dedicated to reuniting lost pets with their owners. Features advanced filtering for lost pet posts and Facebook Ads integration for increased visibility.',
      technologies: ['Ruby on Rails', 'React', 'Facebook API', 'PostgreSQL'],
      githubLink: 'https://github.com/yourusername/paw-tribe',
      liveLink: 'https://paw-tribe-demo.com',
    },
    {
      title: 'Fake News Checker',
      description: 'A Google Chrome plugin that verifies the credibility of news articles by cross-referencing trusted sources and providing reliability scores. Includes a sleek, user-friendly interface.',
      technologies: ['JavaScript', 'Node.js', 'Chrome Extension APIs', 'MongoDB'],
      githubLink: 'https://github.com/yourusername/fake-news-checker',
      liveLink: 'https://fake-news-checker-demo.com',
    },
    {
      title: 'DocuDynamics',
      description: 'An automated document scanning and processing application that extracts key data from documents and integrates with cloud storage solutions.',
      technologies: ['Python', 'Django', 'React', 'AWS S3'],
      githubLink: 'https://github.com/yourusername/docu-dynamics',
      liveLink: 'https://docu-dynamics-demo.com',
    },
  ];  

  return (
    <div className="font-sans bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header
        id="hero"
        className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white py-20 text-center mt-16"
      >
        <h1 className="text-5xl font-extrabold drop-shadow-lg">Tom Garrett</h1>
        <p className="mt-4 text-2xl">Senior Full Stack Developer</p>
        <p className="mt-2 text-lg">Dublin, County Dublin, Ireland</p>
        <a
          href="https://www.linkedin.com/in/thomasgarrett-digital"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200 transition transform hover:scale-105"
        >
          Connect on LinkedIn
        </a>
      </header>

      {/* Summary Section */}
      <section id="summary" className="py-16 px-6 bg-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Summary</h2>
          <p className="text-lg leading-relaxed">
            Senior Full Stack Developer with expertise in React Native and a strong background in Ruby on Rails.
            Featured in Microsoft Starters Hub and Enterprise Ireland's New Frontiers Program. Proven track
            record in innovative web and mobile application development.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-900 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>

          {/* Experience Items */}
          {/* ResidentRadius */}
          <div className="mb-12 bg-gradient-to-r from-gray-700 to-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold">ResidentRadius</h3>
            <p className="text-indigo-400">
              Senior Developer — June 2024 - Present (6 months) | Ireland
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
              <li>Developed advanced web applications using Ruby on Rails, enhancing user experience and system performance.</li>
              <li>Implemented containerization with Docker to streamline development workflows and ensure consistent deployment environments.</li>
              <li>Authored comprehensive documentation for applications and optimized codebases, reducing technical debt and improving maintainability.</li>
              <li>Collaborated with cross-functional teams and stakeholders through effective communication, facilitating remote work and agile practices.</li>
            </ul>
          </div>

          {/* DocuDynamics */}
          <div className="mb-12 bg-gradient-to-r from-gray-700 to-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold">DocuDynamics</h3>
            <p className="text-indigo-400">
              Technical Founder — November 2022 - June 2024 (1 year 8 months) | Dublin, County Dublin, Ireland
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
              <li>
                Founded and led a tech startup, overseeing end-to-end product development with Ruby on Rails to build a scalable and efficient backend infrastructure.
              </li>
              <li>
                Achieved recognition by securing a spot in the prestigious Microsoft Starters Hub, highlighting the innovative potential of the startup.
              </li>
              <li>
                Successfully raised initial funding and gained acceptance into the New Frontiers Program in collaboration with Enterprise Ireland, providing strategic growth opportunities.
              </li>
              <li>
                Forged strategic partnerships and integrated AWS cloud services, ensuring a resilient and scalable infrastructure to support rapid growth and high availability.
              </li>
              <li>
                Developed cross-platform mobile applications using React Native, delivering high-performance and seamless user experiences on both iOS and Android platforms.
              </li>
            </ul>
          </div>

          {/* Independent Consultant */}
          <div className="mb-12 bg-gradient-to-r from-gray-700 to-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold">Independent Consultant</h3>
            <p className="text-indigo-400">
              Senior Full Stack Developer — November 2022 - June 2024 (1 year 8 months) | Jersey, Channel Islands
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
              <li>
                Led the development of high-performance web applications, focusing on scalability and efficiency using React, Node.js, Ruby on Rails, and PHP.
              </li>
              <li>Designed and launched MVPs for multiple startups, facilitating rapid product-market fit testing.</li>
              <li>
                Integrated modern technologies such as GraphQL and Docker, optimizing data management and deployment processes for enhanced performance and reliability.
              </li>
              <li>
                Mentored and trained junior developers, promoting best practices in full stack development and code optimization to foster a skilled and efficient team.
              </li>
              <li>
                Spearheaded the integration of Cloudflare across over 100 websites, significantly improving load times, security measures, and SEO performance.
              </li>
              <li>
                Cultivated a culture of excellence by implementing agile methodologies, enhancing team productivity, and ensuring timely delivery of projects.
              </li>
            </ul>
          </div>

          {/* Penco */}
          <div className="mb-12 bg-gradient-to-r from-gray-700 to-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold">Penco</h3>
            <p className="text-indigo-400">
              Digital Operations Manager — December 2021 - November 2022 (1 year) | Dublin, County Dublin, Ireland
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
              <li>
                Directed software development projects using Ruby on Rails, delivering robust and scalable web applications that met business requirements.
              </li>
              <li>
                Enhanced application features and optimized performance by leveraging Ruby and integrating React.js, resulting in improved user engagement and satisfaction.
              </li>
              <li>
                Championed Test-Driven Development (TDD) with RSpec, ensuring high-quality code and reducing bugs in production.
              </li>
              <li>
                Guided the development team in adopting Agile methodologies, particularly Scrum, to boost productivity and meet tight project deadlines efficiently.
              </li>
              <li>
                Managed the development and integration of a Salesforce CRM/CMS and Analytics system for the Mortgage division, streamlining operations and data analysis.
              </li>
            </ul>
          </div>

          {/* Gambling.com Group */}
          <div className="mb-12 bg-gradient-to-r from-gray-700 to-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold">Gambling.com Group</h3>
            <p className="text-indigo-400">
              Frontend Developer — January 2019 - December 2019 (1 year) | County Dublin, Ireland
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
              <li>
                Developed engaging, high-performance web applications and websites using React and Redux for effective state management.
              </li>
              <li>
                Collaborated closely with backend teams to integrate RESTful APIs, ensuring seamless data flow and application functionality.
              </li>
              <li>
                Implemented responsive design principles with CSS frameworks like Bootstrap, delivering optimal user experiences across various devices and screen sizes.
              </li>
            </ul>
          </div>

          {/* GRID Finance */}
          <div className="mb-12 bg-gradient-to-r from-gray-700 to-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold">GRID Finance</h3>
            <p className="text-indigo-400">
              UX/UI Designer — January 2018 - January 2019 (1 year 1 month) | County Dublin, Ireland
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
              <li>
                Designed user interfaces using tools like Sketch and Adobe XD for wireframing and prototyping, enhancing user engagement and satisfaction.
              </li>
              <li>
                Conducted comprehensive user research and usability testing, informing design decisions and improving application usability.
              </li>
              <li>
                Collaborated with development teams to implement designs using HTML5, CSS3, and JavaScript, ensuring design fidelity and functionality.
              </li>
            </ul>
          </div>

          {/* Associated Newspapers */}
          <div className="mb-12 bg-gradient-to-r from-gray-700 to-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold">Associated Newspapers</h3>
            <p className="text-indigo-400">
              Multimedia Designer — June 2017 - June 2018 (1 year 1 month) | Dublin, County Dublin, Ireland
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
              <li>
                Created compelling multimedia content using Adobe Creative Suite, specializing in Photoshop and Illustrator for high-quality graphic design.
              </li>
              <li>
                Managed multiple projects under tight deadlines, utilizing project management tools like Trello and Asana to ensure timely delivery and client satisfaction.
              </li>
            </ul>
          </div>

          {/* Cauldron Recording Studios */}
          <div className="mb-12 bg-gradient-to-r from-gray-700 to-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold">Cauldron Recording Studios</h3>
            <p className="text-indigo-400">
              Multimedia Designer — June 2016 - September 2016 (4 months) | Dublin, County Dublin, Ireland
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
              <li>
                Assisted in multimedia production, gaining hands-on experience with video editing software like Adobe Premiere Pro.
              </li>
              <li>
                Contributed to creative brainstorming sessions and supported various design projects, enhancing team collaboration and project outcomes.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Full Stack Development Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Ruby on Rails */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-2">Ruby on Rails</h3>
              <p>
                Expertise in building robust and scalable backend systems using Rails MVC architecture, ActiveRecord, and RESTful APIs. Proficient in integrating third-party APIs and managing database migrations.
              </p>
            </div>

            {/* React */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-2">React</h3>
              <p>
                Skilled in developing dynamic and responsive front-end interfaces with React, utilizing hooks, state management with Redux, and component-based architecture. Experience with React Router and integrating with RESTful services.
              </p>
            </div>

            {/* Node.js */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-2">Node.js</h3>
              <p>
                Proficient in building scalable server-side applications using Node.js and Express.js. Experienced in handling asynchronous operations, RESTful API development, and integrating with databases like MongoDB and PostgreSQL.
              </p>
            </div>

            {/* Python */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-2">Python</h3>
              <p>
                Experienced in using Python for backend development with frameworks like Django and Flask. Skilled in scripting, data analysis, and automating tasks to enhance application functionality.
              </p>
            </div>

            {/* RESTful APIs */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-2">RESTful APIs</h3>
              <p>
                Designing and integrating RESTful APIs to enable seamless data communication between front-end and back-end systems. Ensuring scalability, security, and efficiency in API implementations.
              </p>
            </div>

            {/* Database Management */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-2">Database Management</h3>
              <p>
                Proficient in managing relational databases like PostgreSQL and MySQL, as well as NoSQL databases such as MongoDB. Skilled in database design, optimization, and writing complex queries.
              </p>
            </div>

            {/* Version Control */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-2">Version Control (Git)</h3>
              <p>
                Experienced in using Git for version control, including branching, merging, and collaborating on projects using platforms like GitHub and GitLab.
              </p>
            </div>

            {/* Deployment & DevOps */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-2">Deployment & DevOps</h3>
              <p>
                Skilled in deploying applications using Docker, AWS, and Heroku. Experienced in setting up CI/CD pipelines to streamline development and deployment processes.
              </p>
            </div>

            {/* Testing & QA */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-2">Testing & QA</h3>
              <p>
                Proficient in implementing testing strategies using tools like RSpec for Ruby, Jest for JavaScript, and pytest for Python to ensure application reliability and performance.
              </p>
            </div>
            
          </div>
        </div>
      </section>


      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>
          <ul className="max-w-3xl mx-auto space-y-4 text-gray-300">
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✔️</span> UX Research for Agile Teams
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✔️</span> Learning Java
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✔️</span> Java: Testing with JUnit
            </li>
            <li className="flex items-center">
              <span className="text-green-400 mr-2">✔️</span> Human-Centered Design
            </li>
          </ul>
        </div>
      </section>

{/* Publications Section */}
<section id="publications" className="py-20 px-6 bg-gray-900">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-5xl font-extrabold text-white mb-12">Publications</h2>
    
    <div className="grid md:grid-cols-2 gap-12">
      {/* Publication Card 1 */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-center mb-4">
          <FaNewspaper className="h-8 w-8 text-white mr-2" />
          <h3 className="text-3xl font-semibold text-white">Data Helps Irish Firms Face the Future</h3>
        </div>
        <p className="text-indigo-200 mb-2">Featured in <span className="font-semibold">The Times Business on Sunday</span></p>
        <p className="text-gray-200 mb-4">
          An insightful analysis on how data-driven strategies are empowering Irish businesses to navigate and thrive in the evolving market landscape.
        </p>
        <a
          href="https://www.thetimes.com/world/ireland-world/article/data-helps-irish-firms-face-the-future-cblz6ft5v?region=ie"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-indigo-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors"
        >
          Read More
        </a>
      </div>
    </div>
  </div>
</section>


      {/* New Portfolio Section */}
      <section id="portfolio" className="py-16 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-700 to-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-3xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-indigo-500 text-gray-100 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-400 hover:text-white transition"
                  >
                    <FaGithub className="h-5 w-5 mr-1" /> {/* Using FaGithub */}
                    GitHub
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-400 hover:text-white transition"
                    >
                      <FaExternalLinkAlt className="h-5 w-5 mr-1" /> {/* Using FaExternalLinkAlt */}
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
          <div className="space-y-12">
            {/* Dublin City University */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-semibold">Dublin City University</h3>
              <p className="text-indigo-200">
                Higher National Diploma, Computer Software Engineering · September 2020 - June 2022
              </p>
            </div>
            {/* Technological University Dublin */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-semibold">Technological University Dublin</h3>
              <p className="text-indigo-200">
                New Frontiers, Phase 2 · October 2022 - March 2023
              </p>
            </div>
            {/* Waterford Institute of Technology */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-semibold">Waterford Institute of Technology</h3>
              <p className="text-indigo-200">
                Professional Diploma, Digital Marketing · September 2018 - June 2019
              </p>
            </div>
            {/* Dún Laoghaire Institute of Art, Design and Technology */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-semibold">
                Dún Laoghaire Institute of Art, Design and Technology
              </h3>
              <p className="text-indigo-200">
                BA (Hons), Digital Art · September 2013 - June 2017
              </p>
            </div>
            {/* Belvedere College S.J. */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-semibold">Belvedere College S.J.</h3>
              <p className="text-indigo-200">
                Leaving Certificate · September 2004 - June 2011
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contact</h2>
          <a
            href="https://www.linkedin.com/in/thomasgarrett-digital"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-lg hover:underline"
          >
            www.linkedin.com/in/thomasgarrett-digital
          </a>
          <form className="mt-12 max-w-md mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-indigo-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-indigo-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border border-indigo-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-gray-900 py-3 rounded hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p>&copy; 2024 Tom Garrett. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
