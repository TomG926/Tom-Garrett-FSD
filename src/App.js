// src/App.js

import React from 'react';
import Navbar from './Navbar';
import { FaLinkedin } from 'react-icons/fa';

function App() {
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
              Product Engineering Manager
            </p>
            <p className="mb-8 text-lg text-white">
              Dublin, County Dublin, Ireland
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
              5+ years of experience leading cross-functional teams to deliver
              innovative, user-centric digital solutions. Skilled in stakeholder
              collaboration, agile methodologies, and data-driven decision-making,
              with a proven track record of aligning product development with
              strategic business goals. Recognized for spearheading cutting-edge
              projects and fostering partnerships.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mt-12">
          <h2 className="mb-8 text-3xl font-bold text-neutral-900 dark:text-white animate-slide-up">
            Experience
          </h2>
          <div className="space-y-8">
            {/* DepositCloud */}
            <div className="group rounded-2xl bg-white/90 p-8 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <h3 className="text-3xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">DepositCloud</h3>
              <p className="text-secondary-600 mt-2 dark:text-secondary-400">
                Product Engineering Manager — June 2024 - Present (1 year 6 months) | Ireland
              </p>
              <ul className="mt-6 space-y-3 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Led development of Twilio-based contact center, boosting team efficiency and customer satisfaction.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Defined product requirements with stakeholders, prioritizing delivery for optimal results.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Guided a 7-person team in adopting agile practices, enhancing delivery speed and system reliability.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Optimized CI/CD processes using Docker and GitHub Actions, elevating system performance.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Established feedback mechanisms, significantly improving product quality and user experience.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Fostered cross-functional partnerships, aligning engineering goals with business objectives to drive innovation and effective project execution.</span>
                </li>
              </ul>
            </div>

            {/* DocuDynamics */}
            <div className="group rounded-2xl bg-white/90 p-8 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h3 className="text-3xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">DocuDynamics</h3>
              <p className="text-secondary-600 mt-2 dark:text-secondary-400">
                Founder — November 2022 - June 2024 (1 year 8 months) | Dublin, County Dublin, Ireland
              </p>
              <ul className="mt-6 space-y-3 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Led development of document platform, securing Microsoft Starters Hub support, enhancing user engagement.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Developed scalable apps, leveraging market feedback for continuous improvement and user satisfaction.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Directed product lifecycle, achieving acceptance into innovation programs, boosting platform credibility.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Spearheaded the development of a document intelligence platform, achieving a successful MVP launch that attracted key industry partnerships.</span>
                </li>
              </ul>
            </div>

            {/* Penco */}
            <div className="group rounded-2xl bg-white/90 p-8 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <h3 className="text-3xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">Penco</h3>
              <p className="text-secondary-600 mt-2 dark:text-secondary-400">
                Digital Operations Manager — December 2019 - November 2022 (3 years) | Dublin, County Dublin, Ireland
              </p>
              <ul className="mt-6 space-y-3 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Designed and implemented a user-centric interface for web and mobile apps, enhancing user engagement and satisfaction significantly.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Conducted in-depth market research to identify user needs, leading to targeted product features that drove user adoption and retention.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Orchestrated Salesforce CRM integration, boosting operational efficiency and user satisfaction.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Aligned product features with business goals, enhancing stakeholder engagement and retention.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Implemented agile methodologies, accelerating project timelines and fostering team collaboration.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Spearheaded the introduction of automated workflows, significantly reducing manual processes and allowing teams to focus on strategic objectives.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Cultivated strong relationships with technical and business teams, ensuring alignment on project goals and enhancing communication across departments.</span>
                </li>
              </ul>
            </div>

            {/* Gambling.com Group */}
            <div className="group rounded-2xl bg-white/90 p-8 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <h3 className="text-3xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">Gambling.com Group</h3>
              <p className="text-secondary-600 mt-2 dark:text-secondary-400">
                Full Stack Developer — January 2019 - December 2019 (1 year) | County Dublin, Ireland
              </p>
              <ul className="mt-6 space-y-3 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Built React frontends for high-traffic platforms, enhancing user engagement and team synergy.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Streamlined front-end development process, enhancing collaboration with backend teams, leading to faster deployment cycles and improved user experience.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Implemented performance optimization techniques on high-traffic platforms, resulting in noticeable gains in loading speed and user engagement.</span>
                </li>
              </ul>
            </div>

            {/* GRID Finance */}
            <div className="group rounded-2xl bg-white/90 p-8 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-fade-in" style={{ animationDelay: '500ms' }}>
              <h3 className="text-3xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">GRID Finance</h3>
              <p className="text-secondary-600 mt-2 dark:text-secondary-400">
                UX/UI Designer — January 2018 - January 2019 (1 year 1 month) | County Dublin, Ireland
              </p>
              <ul className="mt-6 space-y-3 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Led user research and testing to enhance design, boosting user satisfaction and engagement.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Enhanced user interface designs by conducting user research, resulting in a 30% increase in user satisfaction scores.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Implemented a new prototyping tool that streamlined the design process, reducing project turnaround time by 25%.</span>
                </li>
              </ul>
            </div>

            {/* Associated Newspapers */}
            <div className="group rounded-2xl bg-white/90 p-8 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-fade-in" style={{ animationDelay: '600ms' }}>
              <h3 className="text-3xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">Associated Newspapers</h3>
              <p className="text-secondary-600 mt-2 dark:text-secondary-400">
                Multimedia Designer — June 2017 - June 2018 (1 year 1 month) | Dublin, County Dublin, Ireland
              </p>
              <ul className="mt-6 space-y-3 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Designed multimedia content to enhance user engagement, managing projects with tools like Trello and Asana.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Contributed to creative strategy sessions, aligning designs with business objectives.</span>
                </li>
              </ul>
            </div>

            {/* Cauldron Recording Studios */}
            <div className="group rounded-2xl bg-white/90 p-8 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-fade-in" style={{ animationDelay: '700ms' }}>
              <h3 className="text-3xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">Cauldron Recording Studios</h3>
              <p className="text-secondary-600 mt-2 dark:text-secondary-400">
                Multimedia Designer — June 2016 - September 2016 (4 months) | Dublin, County Dublin, Ireland
              </p>
              <ul className="mt-6 space-y-3 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Supported multimedia production, contributing to user-focused design projects.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span>Gained experience in video editing and creative collaboration.</span>
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
            {/* Data Analysis */}
            <div className="group rounded-2xl bg-white/90 p-6 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-scale-in" style={{ animationDelay: '100ms' }}>
              <h3 className="text-2xl font-semibold mb-4 text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">Data Analysis</h3>
              <div className="space-y-2">
                <div className="h-2 bg-neutral-200 rounded-full overflow-hidden dark:bg-neutral-700">
                  <div className="h-full bg-primary-500 rounded-full" style={{ width: '95%' }}></div>
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">Expert in analyzing data to drive informed decision-making</p>
              </div>
            </div>

            {/* Data Visualization */}
            <div className="group rounded-2xl bg-white/90 p-6 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-scale-in" style={{ animationDelay: '200ms' }}>
              <h3 className="text-2xl font-semibold mb-4 text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">Data Visualization</h3>
              <div className="space-y-2">
                <div className="h-2 bg-neutral-200 rounded-full overflow-hidden dark:bg-neutral-700">
                  <div className="h-full bg-primary-500 rounded-full" style={{ width: '95%' }}></div>
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">Creating compelling visual representations of complex data</p>
              </div>
            </div>

            {/* JavaScript */}
            <div className="group rounded-2xl bg-white/90 p-6 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-scale-in" style={{ animationDelay: '300ms' }}>
              <h3 className="text-2xl font-semibold mb-4 text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">JavaScript</h3>
              <div className="space-y-2">
                <div className="h-2 bg-neutral-200 rounded-full overflow-hidden dark:bg-neutral-700">
                  <div className="h-full bg-primary-500 rounded-full" style={{ width: '95%' }}></div>
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">Advanced JavaScript development for modern web applications</p>
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
              <h3 className="text-xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">Technological University Dublin</h3>
              <p className="text-neutral-700 dark:text-neutral-300">Postgraduate Degree Part Time, Product Management · (June 2025 - September 2027)</p>
            </div>
            <div className="group rounded-2xl bg-white/90 p-6 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-scale-in">
              <h3 className="text-xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">Technological University Dublin</h3>
              <p className="text-neutral-700 dark:text-neutral-300">New Frontiers, Phase 2 · (October 2022 - March 2023)</p>
            </div>
            <div className="group rounded-2xl bg-white/90 p-6 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-scale-in">
              <h3 className="text-xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">Dublin City University</h3>
              <p className="text-neutral-700 dark:text-neutral-300">Higher National Diploma, Computer Software Engineering · (September 2020 - June 2022)</p>
            </div>
            <div className="group rounded-2xl bg-white/90 p-6 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-scale-in">
              <h3 className="text-xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">Waterford Institute of Technology</h3>
              <p className="text-neutral-700 dark:text-neutral-300">Professional Diploma, Digital Marketing · (September 2018 - June 2019)</p>
            </div>
            <div className="group rounded-2xl bg-white/90 p-6 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-scale-in">
              <h3 className="text-xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">Dún Laoghaire Institute of Art, Design and Technology</h3>
              <p className="text-neutral-700 dark:text-neutral-300">BA (Hons), Digital Art · (September 2013 - June 2017)</p>
            </div>
            <div className="group rounded-2xl bg-white/90 p-6 backdrop-blur-sm shadow-material transition-all hover:shadow-material-lg dark:bg-neutral-800/90 animate-scale-in">
              <h3 className="text-xl font-semibold text-primary-600 group-hover:text-primary-500 transition-colors dark:text-primary-400">Belvedere College S.J.</h3>
              <p className="text-neutral-700 dark:text-neutral-300">Leaving Certificate · (September 2004 - June 2011)</p>
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
              <p>0831885356</p>
              <p>tgarrett.92@icloud.com</p>
              <p>
                <a href="https://www.linkedin.com/in/thomasgarrett-digital" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  www.linkedin.com/in/thomasgarrett-digital
                </a>
                {' '}(LinkedIn)
              </p>
              <p>
                <a href="https://tomgarrett.dev" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  tomgarrett.dev
                </a>
                {' '}(Personal)
              </p>
            </div>
            <div className="mt-6">
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


