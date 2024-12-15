<template>
  <div class="portfolio">
    <!-- Landing Section -->
    <section id="home" class="section hero-section">
      <div class="hero-content">
        <h1 class="hello-text">HELLO, WORLD.</h1>
        <h2 class="name">I'm Aleksandar Smiljanic</h2>
        <p class="title">Software Developer </p>
        <a @click.prevent="scrollToSection('experience')" href="#experience" class="cta-button">MORE ABOUT ME</a>
        <div class="social-links">
          <a href="#" target="_blank"><i class="fab fa-github"></i></a>
          <a href="#" target="_blank"><i class="fab fa-linkedin"></i></a>
          <a href="#" target="_blank"><i class="fab fa-behance"></i></a>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="section">
      <h2 class="section-title">Experience</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-content">
            <h3>Junior Backend Developer</h3>
            <p class="company">AppWorks</p>
            <p class="period">2024</p>
            <ul class="experience-list">
              <li>Built robust backends for live applications using Laravel, ensuring scalability and smooth performance.</li>
              <li>Developed Python middleware with Flask and Django, optimizing real-time functionality for dynamic systems.</li>
              <li>Prepared datasets for AI, cleaning and organizing data to enhance model accuracy and efficiency.</li>
              <li>Trained AI models, leveraging advanced techniques to improve speech recognition and system intelligence.</li>
            </ul>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-content">
            <h3>Full-Stack Software Developer (Intern)</h3>
            <p class="company">ITMentorstva</p>
            <p class="period">2024</p>
            <ul class="experience-list">
              <li>Enhanced the functional platform frontend and backend.</li>
              <li>Implemented new backend features, including email campaigns, special offers, and pop-ups.</li>
              <li>Optimized the user panel for improved user experience.</li>
            </ul>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-content">
            <h3>FQA Technician</h3>
            <p class="company">Testronic Labs</p>
            <p class="period">2024</p>
            <ul class="experience-list">
              <li>Followed test plans to ensure an excellent user experience.</li>
              <li>Utilized Jira for bug reporting, ticket management, and task tracking.</li>
            </ul>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-content">
            <h3>QA Tester</h3>
            <p class="company">TestIO</p>
            <p class="period">2023-2024</p>
            <ul class="experience-list">
              <li>Conducting manual bug reproductions on clients' websites and mobile apps to ensure a seamless User Experience.</li>
              <li>Providing usability suggestions to enhance feature implementation and maximize functionality.</li>
            </ul>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-content">
            <h3>Full-Stack Software Developer (Intern)</h3>
            <p class="company">Enon Solutions</p>
            <p class="period">2021-2022</p>
            <ul class="experience-list">
              <li>Designed and developed a 2D game using Vue.js in a team environment.</li>
              <li>Spearheaded the creation of game mechanics and systems, demonstrating a strong grasp of game design principles while ensuring seamless functionality and user engagement.</li>
              <li>Mastered the end-to-end process, including the design and implementation of the backend API and MySQL database, enabling data-driven gameplay and seamless user experiences.</li>
              <li>Crafted custom animations and enhanced the frontend to create an immersive gaming experience.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="section">
      <h2 class="section-title">Skills</h2>
      <div class="skills-container">
        <div class="skills-category">
          <div class="skills-grid">
            <div class="skill-item">
              <i class="fab fa-laravel"></i>
              <span>Laravel</span>
            </div>
            <div class="skill-item">
              <i class="fab fa-python"></i>
              <span>Python (Flask/Django)</span>
            </div>
            <div class="skill-item">
              <i class="fab fa-vuejs"></i>
              <span>Vue.JS</span>
            </div>
            <div class="skill-item">
              <i class="fab fa-java"></i>
              <span>Java (Android)</span>
            </div>
            <div class="skill-item">
              <i class="fas fa-database"></i>
              <span>SQL</span>
            </div>
            <div class="skill-item">
              <i class="fab fa-html5"></i>
              <span>HTML/CSS</span>
            </div>
            <div class="skill-item">
              <i class="fab fa-js"></i>
              <span>jQuery</span>
            </div>
            <div class="skill-item">
              <i class="fas fa-book-reader"></i>
              <span>Jupyter Notebooks</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section">
      <h2 class="section-title">Projects</h2>
      <div class="project-categories">
        <button 
          @click="currentCategory = 'all'" 
          :class="{ active: currentCategory === 'all' }"
          class="category-btn"
        >
          All Projects
        </button>
        <button 
          @click="currentCategory = 'professional'" 
          :class="{ active: currentCategory === 'professional' }"
          class="category-btn"
        >
          Professional Projects
        </button>
        <button 
          @click="currentCategory = 'personal'" 
          :class="{ active: currentCategory === 'personal' }"
          class="category-btn"
        >
          Personal Projects
        </button>
      </div>
      <div class="projects-grid">
        <div v-for="(project, index) in filteredProjects" 
             :key="index" 
             class="project-card"
             @click="openProject(project)">
          <div class="project-image">
            <img :src="project.image" :alt="project.name">
          </div>
          <div class="project-info">
            <div class="project-header">
              <h3>{{ project.name }}</h3>
              <span class="project-type">{{ project.type }}</span>
            </div>
            <p>{{ project.shortDescription }}</p>
          </div>
        </div>
      </div>

      <!-- Project Details Popup -->
      <div class="project-popup-overlay" v-if="selectedProject" @click="closeProject">
        <div class="project-popup" @click.stop>
          <button class="close-popup" @click="closeProject">&times;</button>
          <div class="popup-content">
            <h2>{{ selectedProject.name }}</h2>
            <span class="project-type">{{ selectedProject.type }}</span>
            
            <div class="popup-image">
              <img :src="selectedProject.image" :alt="selectedProject.name">
            </div>

            <div class="tech-stack">
              <h3>Tech Stack</h3>
              <div class="tech-tags">
                <span v-for="(tech, index) in selectedProject.techStack" 
                      :key="index" 
                      class="tech-tag">
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="my-role">
              <h3>My Role</h3>
              <p>{{ selectedProject.role }}</p>
            </div>

            <div class="project-description">
              <h3>Project Description</h3>
              <p>{{ selectedProject.fullDescription }}</p>
            </div>

            <div class="project-links">
              <a v-if="selectedProject.hasLiveLink()" 
                 :href="selectedProject.liveUrl" 
                 target="_blank" 
                 class="project-link">
                <i class="fas fa-globe"></i>
                View Live
              </a>
              <a v-if="selectedProject.hasGithubLink()" 
                 :href="selectedProject.githubUrl" 
                 target="_blank" 
                 class="project-link">
                <i class="fab fa-github"></i>
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section">
      <h2 class="section-title">Contact</h2>
      <div class="contact-container">
        <form class="contact-form">
          <div class="form-group">
            <input type="text" placeholder="Your Name" required>
          </div>
          <div class="form-group">
            <input type="email" placeholder="Your Email" required>
          </div>
          <div class="form-group">
            <textarea placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" class="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { Project } from '@/models/Project'

export default {
  name: 'HomeView',
  data() {
    return {
      currentCategory: 'all',
      selectedProject: null,
      projects: [
        new Project({
          name: 'Litteraworks',
          type: 'Website',
          category: 'professional',
          image: '/placeholder.jpg',
          shortDescription: 'AI-powered tool for transcription, subtitle generation, and text-to-speech conversion',
          fullDescription: 'Litteraworks is a comprehensive AI platform that provides automated solutions for transcription, subtitle generation, and text-to-speech conversion. The platform is designed to handle various media formats and deliver high-quality output for professional use.',
          techStack: ['Laravel', 'Python', 'Flask', 'Django', 'AI/ML', 'RESTful APIs'],
          role: 'As the lead backend developer, I am responsible for all backend operations, with a primary focus on Python middleware development and Laravel backend implementation. My work involves designing and maintaining the core infrastructure that powers the AI processing capabilities of the platform.',
          onGithub: false,
          isLive: true,
          githubUrl: '',
          liveUrl: 'https://litteraworks.cloud',
          sortOrder: 1
        }),
        new Project({
          name: 'FK Partizan Website',
          type: 'Website',
          category: 'professional',
          image: '/placeholder.jpg',
          shortDescription: 'Statistics API for one of Serbia\'s largest football clubs',
          fullDescription: 'Developed a comprehensive statistics API for FK Partizan, one of Serbia\'s premier football clubs. The API provides detailed statistical data including league standings, team performance metrics, and individual player statistics for each match.',
          techStack: ['Laravel', 'MySQL', 'RESTful APIs', 'PHP'],
          role: 'Developed the statistics API that powers the club\'s website, implementing endpoints for fetching detailed match statistics, team performance data, and player metrics. Created a robust database structure to handle complex sports statistics and real-time data updates.',
          onGithub: false,
          isLive: true,
          githubUrl: '',
          liveUrl: 'https://partizan.rs/sr',
          sortOrder: 2
        }),
        new Project({
          name: 'mPanel',
          type: 'Website',
          category: 'professional',
          image: '/placeholder.jpg',
          shortDescription: 'Internal CMS system with AI capabilities for mobile app creation',
          fullDescription: 'mPanel is a sophisticated CMS system used globally by clients to create custom mobile applications. The system incorporates advanced AI functionalities for content management and optimization, making it a powerful tool for mobile app development.',
          techStack: ['Laravel', 'Blade', 'AI/ML', 'PHP', 'RESTful APIs', 'MySQL'],
          role: 'Enhanced the system with AI capabilities including automatic article translation, SEO recommendations, and AI-powered social media post generation. Developed custom blocks using the Blade templating system and architected new project features to expand system functionality.',
          onGithub: false,
          isLive: false,
          githubUrl: '',
          liveUrl: '',
          sortOrder: 3
        }),
        new Project({
          name: 'ITMentorstva Website',
          type: 'Website',
          category: 'professional',
          image: '/placeholder.jpg',
          shortDescription: 'Online programming school platform with advanced user tracking',
          fullDescription: 'Promotional website for an online programming school featuring comprehensive user activity tracking, email marketing integration, and dynamic feature implementation. The platform helps connect students with programming education opportunities.',
          techStack: ['Laravel', 'MySQL', 'Email Marketing', 'Analytics', 'User Tracking', 'PHP'],
          role: 'Implemented a sophisticated user activity tracking system, set up email marketing campaigns, and architected new website features. Focused on improving user engagement and conversion through data-driven development.',
          onGithub: false,
          isLive: true,
          githubUrl: '',
          liveUrl: 'https://itmentorstva.com/',
          sortOrder: 4
        }),
        new Project({
          name: 'CommentaScript',
          type: 'Website',
          category: 'personal',
          image: '/placeholder.jpg',
          shortDescription: 'AI-powered automated sports commentary and highlight generation system',
          fullDescription: 'CommentaScript is an innovative AI tool designed to automatically create text broadcasts of sports matches. The system generates real-time play-by-play descriptions, calculates precise timing of events, and automatically creates highlight videos from match footage.',
          techStack: ['Laravel', 'Python', 'AI/ML', 'RESTful APIs', 'MySQL'],
          role: 'Designed the Laravel backend architecture and developed the core Python middleware responsible for generating play-by-play descriptions, calculating event timings, and automating highlight video creation. Implemented advanced AI algorithms for real-time sports event analysis and commentary generation.',
          onGithub: false,
          isLive: false,
          githubUrl: '',
          liveUrl: '',
          sortOrder: 5
        }),
        // Rest of the projects with default sort order (999)
      ]
    }
  },
  computed: {
    filteredProjects() {
      const filtered = this.currentCategory === 'all' 
        ? this.projects 
        : this.projects.filter(project => project.category === this.currentCategory);
      
      return filtered.sort((a, b) => a.sortOrder - b.sortOrder);
    }
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    openProject(project) {
      this.selectedProject = project
      document.body.style.overflow = 'hidden'
    },
    closeProject() {
      this.selectedProject = null
      document.body.style.overflow = 'auto'
    }
  }
}
</script>

<style scoped>
.portfolio {
  padding-top: 80px;
  background-color: var(--background-dark);
  margin: 0;
  min-height: 100vh;
}

.section {
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.hero-section {
  padding-top: 0;
  margin-top: -80px; /* Compensate for the fixed header padding */
  background-color: var(--primary-dark);
  color: var(--text-light);
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hello-text {
  color: var(--accent-color);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.name {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.title {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.8;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: var(--accent-color);
  color: var(--text-light);
  text-decoration: none;
  border-radius: 25px;
  transition: transform 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
}

.social-links {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.social-links a {
  color: var(--text-light);
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: var(--accent-color);
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: var(--text-light);
}

/* Timeline styles */
.timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.timeline-item {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: var(--secondary-dark);
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-light);
}

/* Skills styles */
.skills-container {
  max-width: 1000px;
  margin: 0 auto;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  padding: 0 2rem;
}

.skill-item {
  text-align: center;
  padding: 2rem;
  background-color: var(--secondary-dark);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.skill-item:hover {
  transform: translateY(-5px);
  border-color: var(--accent-color);
  box-shadow: 0 4px 15px rgba(66, 185, 131, 0.2);
}

.skill-item i {
  font-size: 2.5rem;
  color: var(--accent-color);
}

.skill-item span {
  color: var(--text-light);
  font-size: 1.1rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    padding: 0 1rem;
  }

  .skill-item {
    padding: 1.5rem;
  }

  .skill-item i {
    font-size: 2rem;
  }

  .skill-item span {
    font-size: 1rem;
  }
}

/* Project Categories */
.project-categories {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.category-btn {
  background: none;
  border: 2px solid var(--accent-color);
  color: var(--text-light);
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.category-btn:hover,
.category-btn.active {
  background-color: var(--accent-color);
  transform: translateY(-2px);
}

/* Projects Grid */
.projects-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 0 2rem;
  max-width: 1800px;
  margin: 0 auto;
}

.project-card {
  flex: 0 0 calc(33.333% - 1.35rem);
  min-width: 380px;
  background-color: var(--secondary-dark);
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.project-image {
  width: 100%;
  height: 280px;
  overflow: hidden;
}

.project-info {
  padding: 2rem;
}

.project-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.project-header h3 {
  font-size: 1.6rem;
  font-weight: 600;
}

.project-type {
  background-color: var(--accent-color);
  color: var(--text-light);
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
}

.project-info p {
  font-size: 1.2rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
}

/* Popup Styles */
.project-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.project-popup {
  background-color: var(--secondary-dark);
  width: 100%;
  max-width: 600px;
  height: 100vh;
  overflow-y: auto;
  animation: slideIn 0.3s ease;
  position: relative;
  padding: 2rem;
}

.close-popup {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--text-light);
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.close-popup:hover {
  color: var(--accent-color);
}

.popup-content {
  margin-top: 2rem;
}

.popup-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.popup-content .project-type {
  display: inline-block;
  margin-bottom: 2rem;
}

.popup-image {
  width: 100%;
  height: 300px;
  margin: 2rem 0;
  border-radius: 8px;
  overflow: hidden;
}

.popup-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tech-stack {
  margin: 2rem 0;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tech-tag {
  background-color: var(--primary-dark);
  color: var(--accent-color);
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 0.9rem;
  border: 1px solid var(--accent-color);
}

.my-role,
.project-description {
  margin: 2rem 0;
}

.my-role h3,
.project-description h3,
.tech-stack h3 {
  color: var(--accent-color);
  margin-bottom: 1rem;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 1800px) {
  .projects-grid {
    max-width: 1600px;
  }
}

@media (max-width: 1400px) {
  .project-card {
    flex: 0 0 calc(50% - 1rem);
    min-width: 360px;
  }
}

@media (max-width: 1000px) {
  .project-card {
    flex: 0 0 100%;
    min-width: unset;
  }
}

/* Contact styles */
.contact-container {
  max-width: 600px;
  margin: 0 auto;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  background-color: var(--secondary-dark);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  font-size: 1rem;
  color: var(--text-light);
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent-color);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.submit-button {
  background-color: var(--accent-color);
  color: var(--text-light);
  padding: 1rem 2rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(66, 185, 131, 0.3);
  background-color: #4dd196;
}

/* Update container widths */
.timeline,
.skills-container,
.contact-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.experience-list {
  list-style: none;
  text-align: left;
  margin-top: 1rem;
}

.experience-list li {
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
  line-height: 1.5;
}

.experience-list li::before {
  content: "•";
  color: var(--accent-color);
  position: absolute;
  left: 0;
  font-weight: bold;
}

.timeline-content h3 {
  color: var(--accent-color);
  margin-bottom: 0.5rem;
}

.company {
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.period {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-light);
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--accent-color);
  border-radius: 25px;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.project-link i {
  font-size: 1.2rem;
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.project-link:hover {
  background-color: var(--accent-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(66, 185, 131, 0.2);
}
</style>
