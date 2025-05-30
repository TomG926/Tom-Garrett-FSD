// src/App.js

import React from 'react';
import Navbar from './Navbar';
import { FaGithub, FaExternalLinkAlt, FaNewspaper, FaLinkedin } from 'react-icons/fa';

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
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 animate-fade-in">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden rounded-4xl bg-gradient-to-r from-primary-600 to-secondary-600 p-8 md:p-12 animate-slide-up">
          <div className="relative z-10">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
              Tom Garrett
            </h1>
            <p className="mb-8 text-xl text-white md:text-2xl">
              Senior Full Stack Developer & Technical Team Lead
            </p>
            <p className="mb-8 text-lg text-white">
              Donegal, County Donegal, Ireland
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/thomasgarrett-digital"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 text-white backdrop-blur-sm transition-all hover:bg-white/30 hover:scale-105"
              >
                <FaLinkedin className="text-xl" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </section>

        {/* Summary Section */}
        <section id="summary" className="mt-12 animate-fade-in">
          <div className="rounded-2xl bg-white/90 p-8 backdrop-blur-sm shadow-material dark:bg-neutral-800/90">
            <h2 className="mb-6 text-3xl font-bold text-neutral-900 dark:text-white">
              Summary
            </h2>
            <p className="text-lg leading-relaxed text-neutral-800 dark:text-neutral-200">
              Senior Full Stack Developer & Technical Team Lead with expertise in React Native and a strong background in Ruby on Rails.
              Featured in Microsoft Starters Hub and Enterprise Ireland's New Frontiers Program. Proven track
              record in innovative web and mobile application development.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mt-12">
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 dark:text-white animate-slide-up">
            Experience
          </h2>
          <div className="space-y-8">
            {/* ResidentRadius */}
            <div className="group rounded-2xl bg-white/90 p-8 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <h3 className="text-3xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">ResidentRadius</h3>
              <p className="text-secondary-600 mt-2 dark:text-secondary-400">
                Senior Full Stack Developer & Technical Team Lead — June 2024 - Present (1 year) | Ireland
              </p>
              <ul className="mt-6 space-y-3 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Development of advanced web applications using Ruby on Rails.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Utilising technologies such as Docker for efficient data management and deployment.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Documentation of application and code optimisation.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Communicating with stakeholders and remote working.</span>
                </li>
              </ul>
            </div>

            {/* DocuDynamics */}
            <div className="group rounded-2xl bg-white/90 p-8 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h3 className="text-3xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">DocuDynamics</h3>
              <p className="text-secondary-600 mt-2 dark:text-secondary-400">
                Technical Founder — November 2022 - June 2024 (1 year 8 months) | Dublin, County Dublin, Ireland
              </p>
              <ul className="mt-6 space-y-3 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Established a tech startup, leading product development with Ruby on Rails for a robust and scalable backend architecture.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Secured a coveted spot in the Microsoft Starters Hub, acknowledging the innovative potential of our startup.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Received initial funding and was offered a place on the New Frontiers Program in association with Enterprise Ireland.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Orchestrated strategic partnerships, integrating cloud technologies like AWS to ensure a resilient and scalable infrastructure.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Leveraged React Native for the development of cross-platform mobile applications, ensuring high performance and seamless user experience on both iOS and Android platforms.</span>
                </li>
              </ul>
            </div>

            {/* Independent Consultant */}
            <div className="group rounded-2xl bg-white/90 p-8 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <h3 className="text-3xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">Independent Consultant</h3>
              <p className="text-secondary-600 mt-2 dark:text-secondary-400">
                Senior Full Stack Developer — November 2022 - June 2024 (1 year 8 months) | Jersey, Channel Islands
              </p>
              <ul className="mt-6 space-y-3 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Led development of advanced web applications, focusing on scalability and performance using React, Node.js, Craft, Rails and PHP.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Designed and built MVP's for startups.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Integrated cutting-edge technologies such as GraphQL and Docker for efficient data management and deployment.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Trained junior developers in best practices for full-stack development and code optimization.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Assisted in integration of Cloudflare for over 100 sites, significantly enhancing load times, security and SEO.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Fostered a culture of excellence with emphasis on agile methodologies.</span>
                </li>
              </ul>
            </div>

            {/* Penco */}
            <div className="group rounded-2xl bg-white/90 p-8 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <h3 className="text-3xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">Penco</h3>
              <p className="text-secondary-600 mt-2 dark:text-secondary-400">
                Digital Operations Manager — December 2021 - November 2022 (1 year) | Dublin, County Dublin, Ireland
              </p>
              <ul className="mt-6 space-y-3 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Led software development projects primarily using Ruby on Rails for building robust and scalable web applications.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Implemented advanced features and optimized performance with Ruby and integrated JavaScript frameworks like React.js.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Championed Test-Driven Development (TDD) using RSpec to ensure high-quality code and reliability.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Guided the development team in Agile methodologies, particularly Scrum, to enhance team productivity and meet tight deadlines.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Oversaw the development and integration of a Salesforce CRM/CMS and Analytics system for the Mortgage section of the business.</span>
                </li>
              </ul>
            </div>

            {/* Gambling.com Group */}
            <div className="group rounded-2xl bg-white/90 p-8 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-fade-in" style={{ animationDelay: '500ms' }}>
              <h3 className="text-3xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">Gambling.com Group</h3>
              <p className="text-secondary-600 mt-2 dark:text-secondary-400">
                Frontend Developer — January 2019 - December 2019 (1 year) | County Dublin, Ireland
              </p>
              <ul className="mt-6 space-y-3 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Built engaging, high-performance web applications and sites using React and Redux for state management.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Collaborated closely with back-end teams to integrate RESTful APIs for seamless data flow.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Applied responsive design principles using CSS frameworks like Bootstrap for optimal user experience across devices.</span>
                </li>
              </ul>
            </div>

            {/* GRID Finance */}
            <div className="group rounded-2xl bg-white/90 p-8 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-fade-in" style={{ animationDelay: '600ms' }}>
              <h3 className="text-3xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">GRID Finance</h3>
              <p className="text-secondary-600 mt-2 dark:text-secondary-400">
                UX/UI Designer — January 2018 - January 2019 (1 year 1 month) | County Dublin, Ireland
              </p>
              <ul className="mt-6 space-y-3 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>UI design using tools like Sketch and Adobe XD for wireframing and prototyping.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Conducted user research and usability testing to inform design decisions.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Collaborated with development teams to implement designs using HTML5, CSS3, and JavaScript.</span>
                </li>
              </ul>
            </div>

            {/* Associated Newspapers */}
            <div className="group rounded-2xl bg-white/90 p-8 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-fade-in" style={{ animationDelay: '700ms' }}>
              <h3 className="text-3xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">Associated Newspapers</h3>
              <p className="text-secondary-600 mt-2 dark:text-secondary-400">
                Multimedia Designer — June 2017 - June 2018 (1 year 1 month) | Dublin, County Dublin, Ireland
              </p>
              <ul className="mt-6 space-y-3 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Created multimedia content using Adobe Creative Suite, focusing on Photoshop and Illustrator for graphic design.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Managed projects under tight deadlines, utilizing project management tools like Trello and Asana.</span>
                </li>
              </ul>
            </div>

            {/* Cauldron Recording Studios */}
            <div className="group rounded-2xl bg-white/90 p-8 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-fade-in" style={{ animationDelay: '800ms' }}>
              <h3 className="text-3xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">Cauldron Recording Studios</h3>
              <p className="text-secondary-600 mt-2 dark:text-secondary-400">
                Multimedia Designer — June 2016 - September 2016 (4 months) | Dublin, County Dublin, Ireland
              </p>
              <ul className="mt-6 space-y-3 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Assisted in multimedia production, gaining exposure to video editing software like Adobe Premiere Pro.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Contributed to creative brainstorming sessions and supported various design projects.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mt-12">
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 dark:text-white animate-slide-up">
            Top Skills
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* REST APIs */}
            <div className="group rounded-2xl bg-white/90 p-6 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-scale-in" style={{ animationDelay: '100ms' }}>
              <h3 className="text-2xl font-semibold mb-4 text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">REST APIs</h3>
              <div className="space-y-2">
                <div className="h-2 bg-neutral-200 rounded-full overflow-hidden dark:bg-neutral-700">
                  <div className="h-full bg-primary-500 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">Expert in designing and implementing RESTful APIs</p>
              </div>
            </div>

            {/* Web Applications */}
            <div className="group rounded-2xl bg-white/90 p-6 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-scale-in" style={{ animationDelay: '200ms' }}>
              <h3 className="text-2xl font-semibold mb-4 text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">Web Applications</h3>
              <div className="space-y-2">
                <div className="h-2 bg-neutral-200 rounded-full overflow-hidden dark:bg-neutral-700">
                  <div className="h-full bg-primary-500 rounded-full" style={{ width: '95%' }}></div>
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">Full-stack development of modern web applications</p>
              </div>
            </div>

            {/* Ruby on Rails */}
            <div className="group rounded-2xl bg-white/90 p-6 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-scale-in" style={{ animationDelay: '300ms' }}>
              <h3 className="text-2xl font-semibold mb-4 text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">Ruby on Rails</h3>
              <div className="space-y-2">
                <div className="h-2 bg-neutral-200 rounded-full overflow-hidden dark:bg-neutral-700">
                  <div className="h-full bg-primary-500 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">Expert in building scalable and maintainable web applications</p>
              </div>
            </div>

            {/* React */}
            <div className="group rounded-2xl bg-white/90 p-6 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-scale-in" style={{ animationDelay: '400ms' }}>
              <h3 className="text-2xl font-semibold mb-4 text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">React</h3>
              <div className="space-y-2">
                <div className="h-2 bg-neutral-200 rounded-full overflow-hidden dark:bg-neutral-700">
                  <div className="h-full bg-primary-500 rounded-full" style={{ width: '95%' }}></div>
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">Advanced frontend development with modern React patterns and best practices</p>
              </div>
            </div>

            {/* Project and Product Management */}
            <div className="group rounded-2xl bg-white/90 p-6 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-scale-in" style={{ animationDelay: '500ms' }}>
              <h3 className="text-2xl font-semibold mb-4 text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">Project & Product Management</h3>
              <div className="space-y-2">
                <div className="h-2 bg-neutral-200 rounded-full overflow-hidden dark:bg-neutral-700">
                  <div className="h-full bg-primary-500 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">Expert in agile methodologies, team leadership, and product strategy</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="mt-12">
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 dark:text-white animate-slide-up">
            Certifications
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <div className="group rounded-2xl bg-white/90 p-6 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-scale-in">
              <h3 className="text-xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">UX Research for Agile Teams</h3>
            </div>
            <div className="group rounded-2xl bg-white/90 p-6 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-scale-in">
              <h3 className="text-xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">Learning Java</h3>
            </div>
            <div className="group rounded-2xl bg-white/90 p-6 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-scale-in">
              <h3 className="text-xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">Java: Testing with JUnit</h3>
            </div>
            <div className="group rounded-2xl bg-white/90 p-6 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-scale-in">
              <h3 className="text-xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">Human Centered Design</h3>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="mt-12">
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 dark:text-white animate-slide-up">
            Publications
          </h2>
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-1">
            <div className="group rounded-2xl bg-white/90 p-6 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-scale-in">
              <h3 className="text-xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">
                <a 
                  href="https://www.thetimes.com/world/ireland-world/article/data-helps-irish-firms-face-the-future-cblz6ft5v" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Data helps Irish firms face the future
                </a>
              </h3>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mt-12">
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 dark:text-white animate-slide-up">
            Education
          </h2>
          <div className="space-y-6">
            <div className="group rounded-2xl bg-white/90 p-6 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-scale-in">
              <h3 className="text-xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">Dublin City University</h3>
              <p className="text-neutral-700 dark:text-neutral-300">Higher National Diploma, Computer Software Engineering · September 2020 - June 2022</p>
            </div>
            <div className="group rounded-2xl bg-white/90 p-6 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-scale-in">
              <h3 className="text-xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">Technological University Dublin</h3>
              <p className="text-neutral-700 dark:text-neutral-300">New Frontiers, Phase 2 · October 2022 - March 2023</p>
            </div>
            <div className="group rounded-2xl bg-white/90 p-6 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-scale-in">
              <h3 className="text-xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">Waterford Institute of Technology</h3>
              <p className="text-neutral-700 dark:text-neutral-300">Professional Diploma, Digital Marketing · September 2018 - June 2019</p>
            </div>
            <div className="group rounded-2xl bg-white/90 p-6 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-scale-in">
              <h3 className="text-xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">Dún Laoghaire Institute of Art, Design and Technology</h3>
              <p className="text-neutral-700 dark:text-neutral-300">BA (Hons), Digital Art · September 2013 - June 2017</p>
            </div>
            <div className="group rounded-2xl bg-white/90 p-6 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-scale-in">
              <h3 className="text-xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">Belvedere College S.J.</h3>
              <p className="text-neutral-700 dark:text-neutral-300">Leaving Certificate · September 2004 - June 2011</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mt-12">
          <div className="rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-600 p-8 text-center animate-float">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Contact
            </h2>
            <div className="space-y-4 text-white">
              <p>+353831137468 (Mobile)</p>
              <p>thomasgarrettdigital@gmail.com</p>
              <p>www.linkedin.com/in/thomasgarrett-digital</p>
            </div>
            <div className="mt-6">
              <a
                href="https://www.linkedin.com/in/thomasgarrett-pro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 text-white backdrop-blur-sm transition-all hover:bg-white/30 hover:scale-105"
              >
                <FaLinkedin className="text-xl" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-400 text-center py-6">
        <p>&copy; 2024 Tom Garrett. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
