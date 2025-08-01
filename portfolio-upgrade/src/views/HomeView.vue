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
          <a href="https://github.com/DroidStudioAS" target="_blank"><i class="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/aleksandar-smiljanic-335a8a23a" target="_blank"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="section">
      <h2 class="section-title">Experience</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-content">
            <h3>Software Developer</h3>
            <p class="company">AppWorks, Belgrade</p>
            <p class="period">2023 - Present</p>
            <ul class="experience-list">
              <li>Developed robust backend systems for leading Serbian clients using Laravel, Flask, and FastAPI.</li>
              <li>Built and launched AI-first products, including transcription tools and custom-trained models.</li>
              <li>Integrated AI features into legacy systems, improving automation and efficiency.</li>
              <li>Designed and maintained system architecture across all projects, ensuring clean, scalable codebases.</li>
            </ul>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-content">
            <h3>Software Developer</h3>
            <p class="company">ITMentorstva, Remote</p>
            <p class="period">2021-2023</p>
            <ul class="experience-list">
              <li>Developed backend systems using Laravel, with a focus on SOLID principles and performance.</li>
              <li>Designed and deployed relational database schemas to support scalable application logic.</li>
              <li>Maintained and improved existing codebases across multiple production environments.</li>
              <li>Contributed to one of Serbia's leading educational platforms, delivering stable and user-focused backend solutions.</li>
            </ul>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-content">
            <h3>Software Developer - Intern</h3>
            <p class="company">Enon Solution, Belgrade</p>
            <p class="period">2020-2021</p>
            <ul class="experience-list">
              <li>Built web applications using Vue.js and Node.js as part of a full-stack workflow.</li>
              <li>Gained hands-on experience with relational databases and data modeling.</li>
              <li>Explored fundamentals of 2D animations.</li>
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
              <span>Flask</span>
            </div>
            <div class="skill-item">
              <i class="fab fa-python"></i>
              <span>Django</span>
            </div>
            <div class="skill-item">
              <i class="fas fa-rocket"></i>
              <span>FastAPI</span>
            </div>
            <div class="skill-item">
              <i class="fab fa-node-js"></i>
              <span>NodeJS</span>
            </div>
            <div class="skill-item">
              <i class="fab fa-java"></i>
              <span>Java (Android)</span>
            </div>
            <div class="skill-item">
              <i class="fas fa-database"></i>
              <span>MySQL</span>
            </div>
            <div class="skill-item">
              <i class="fab fa-vuejs"></i>
              <span>Vue.JS</span>
            </div>
            <div class="skill-item">
              <i class="fas fa-leaf"></i>
              <span>MongoDB</span>
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
          image: '/images/litteraworks-interface.png',
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
          name: 'Moderator',
          type: 'Web Application',
          category: 'professional',
          image: '/images/moderator_interface.jpg',
          shortDescription: 'AI-powered comment moderation system with machine learning and customizable criteria',
          fullDescription: 'Developing a comprehensive comment moderation platform that leverages AI and machine learning to provide customizable content filtering solutions. The system features adaptive learning algorithms that improve over time based on client-specific criteria and keyword patterns, offering both single comment testing and bulk processing capabilities with advanced column mapping features.',
          techStack: ['Flask', 'AI/ML', 'Machine Learning', 'Data Processing', 'RESTful APIs', 'Vue.js', 'MySQL'],
          role: 'Responsible for the complete full-stack development of this innovative moderation system. Architected both frontend and backend components, implemented machine learning algorithms for adaptive keyword detection, designed the bulk upload system with column mapping functionality, and created a flexible framework that allows clients to define custom moderation criteria that evolve and improve based on usage patterns.',
          onGithub: false,
          isLive: false,
          githubUrl: '',
          liveUrl: '',
          sortOrder: 2
        }),
        new Project({
          name: 'CommentaScript',
          type: 'Website',
          category: 'personal',
          image: '/images/commenta-interface.png',
          shortDescription: 'AI-powered automated sports commentary and highlight generation system',
          fullDescription: 'CommentaScript is an innovative AI tool designed to automatically create text broadcasts of sports matches. The system generates real-time play-by-play descriptions, calculates precise timing of events, and automatically creates highlight videos from match footage.',
          techStack: ['Laravel', 'Python', 'AI/ML', 'RESTful APIs', 'MySQL'],
          role: 'Designed the Laravel backend architecture and developed the core Python middleware responsible for generating play-by-play descriptions, calculating event timings, and automating highlight video creation. Implemented advanced AI algorithms for real-time sports event analysis and commentary generation.',
          onGithub: false,
          isLive: false,
          githubUrl: '',
          liveUrl: '',
          sortOrder: 3
        }),
        new Project({
          name: 'mPanel',
          type: 'Website',
          category: 'professional',
          image: '/images/mpanel-interface.png',
          shortDescription: 'Internal CMS system with AI capabilities for mobile app creation',
          fullDescription: 'mPanel is a sophisticated CMS system used globally by clients to create custom mobile applications. The system incorporates advanced AI functionalities for content management and optimization, making it a powerful tool for mobile app development.',
          techStack: ['Laravel', 'Blade', 'AI/ML', 'PHP', 'RESTful APIs', 'MySQL'],
          role: 'Enhanced the system with AI capabilities including automatic article translation, SEO recommendations, and AI-powered social media post generation. Developed custom blocks using the Blade templating system and architected new project features to expand system functionality.',
          onGithub: false,
          isLive: false,
          githubUrl: '',
          liveUrl: '',
          sortOrder: 4
        }),
        new Project({
          name: 'McDonald\'s Serbia & Croatia',
          type: 'Mobile App',
          category: 'professional',
          image: '/images/mcd_interface.jpg',
          shortDescription: 'Seasonal promotional games and reward systems for McDonald\'s mobile application',
          fullDescription: 'Developed comprehensive seasonal giveaway and reward game systems for McDonald\'s mobile applications in Serbia and Croatia markets. Working as an external contractor, I created engaging promotional mechanics that enhanced customer retention and brand engagement through interactive gaming experiences and reward distribution systems.',
          techStack: ['Laravel', 'Game Development', 'Reward Systems', 'RESTful APIs', 'MySQL', 'Mobile Integration'],
          role: 'As an external contractor, I architected and developed seasonal promotional game mechanics and reward systems using Laravel. Created robust backend infrastructure to handle high-traffic promotional events, implemented secure reward distribution algorithms, and ensured seamless integration with McDonald\'s existing mobile application ecosystem across Serbian and Croatian markets.',
          onGithub: false,
          isLive: true,
          githubUrl: '',
          liveUrl: 'https://play.google.com/store/apps/details?id=com.mcdonalds.mobileapp&hl=en',
          sortOrder: 5
        }),
        new Project({
          name: 'Politika Prodavnica',
          type: 'Mobile App',
          category: 'professional',
          image: '/images/politika_interface.jpg',
          shortDescription: 'Mobile newspaper app with advanced PDF manipulation and e-commerce backend',
          fullDescription: 'Developed the complete backend infrastructure for Politika Prodavnica, a mobile application that enables users to purchase and read digital editions of Serbia\'s oldest newspaper. The system features advanced PDF manipulation capabilities with custom link insertion, comprehensive e-commerce functionality, and seamless integration with mobile platforms.',
          techStack: ['Laravel', 'Python', 'PDF Manipulation', 'E-commerce', 'RESTful APIs', 'MySQL'],
          role: 'Implemented the entire backend system using Laravel for handling digital newspaper purchases and user management. Developed sophisticated Python logic for PDF manipulation, creating dynamic marked areas with custom internal and external links that meet specific client requirements. Architected the e-commerce infrastructure to support subscription models and individual issue purchases.',
          onGithub: false,
          isLive: true,
          githubUrl: '',
          liveUrl: 'https://play.google.com/store/apps/details?id=io.mediaworks.android.politikaProdavnica&hl=sr',
          sortOrder: 6
        }),
        new Project({
          name: 'Insajder',
          type: 'Website',
          category: 'professional',
          image: '/images/insajder_interface.jpg',
          shortDescription: 'Large-scale database migration and dual API architecture for news platform',
          fullDescription: 'Executed a comprehensive database migration project for Insajder, involving the modification and integration of an existing database schema containing 66,000 articles into our system architecture. Developed a robust dual API solution supporting both REST and GraphQL endpoints to provide flexible data access for frontend teams across multiple platforms.',
          techStack: ['Laravel', 'RESTful APIs', 'GraphQL', 'PostgreSQL', 'MySQL', 'Database Migration', 'PHP'],
          role: 'Led the complete database schema modification and migration process, successfully integrating 66,000 existing articles into our platform architecture. Designed and implemented comprehensive REST and GraphQL APIs using Laravel, ensuring seamless data access and optimal performance for frontend integration. Managed complex database operations across PostgreSQL and MySQL systems while maintaining data integrity throughout the migration process.',
          onGithub: false,
          isLive: true,
          githubUrl: '',
          liveUrl: 'https://insajder.net/',
          sortOrder: 7
        }),
        new Project({
          name: 'Teletext Generator',
          type: 'Web Application',
          category: 'personal',
          image: '/images/teletext_interface.jpg',
          shortDescription: 'Automated teletext article generation from URLs and text input with multiple format variations',
          fullDescription: 'Developing an innovative web application that automates the creation of teletext articles from various input sources. The system can process both URLs and pasted text content, transforming them into properly formatted teletext articles with different stylistic variations. This tool streamlines the traditionally manual process of teletext content creation for broadcasting and digital media applications.',
          techStack: ['Python', 'Vue.js', 'Content Processing', 'Web Scraping', 'Text Analysis', 'RESTful APIs'],
          role: 'Designed and developed the complete full-stack application from concept to implementation. Built the Vue.js frontend interface for intuitive user interaction and content input, while developing the Python backend to handle URL processing, content extraction, text analysis, and teletext formatting algorithms. Implemented multiple generation variations to provide flexible output options for different teletext broadcasting requirements.',
          onGithub: false,
          isLive: false,
          githubUrl: '',
          liveUrl: '',
          sortOrder: 8
        }),
        new Project({
          name: 'FK Partizan Website',
          type: 'Website',
          category: 'professional',
          image: '/images/partizan-interface.png',
          shortDescription: 'Statistics API for one of Serbia\'s largest football clubs',
          fullDescription: 'Developed a comprehensive statistics API for FK Partizan, one of Serbia\'s premier football clubs. The API provides detailed statistical data including league standings, team performance metrics, and individual player statistics for each match.',
          techStack: ['Laravel', 'MySQL', 'RESTful APIs', 'PHP'],
          role: 'Developed the statistics API that powers the club\'s website, implementing endpoints for fetching detailed match statistics, team performance data, and player metrics. Created a robust database structure to handle complex sports statistics and real-time data updates.',
          onGithub: false,
          isLive: true,
          githubUrl: '',
          liveUrl: 'https://partizan.rs/sr',
          sortOrder: 9
        }),
        new Project({
          name: 'Futsal Club Partizan',
          type: 'Website',
          category: 'professional',
          image: '/images/fts_partizan.jpg',
          shortDescription: 'Complete REST API development for futsal club frontend integration',
          fullDescription: 'Developed a comprehensive REST API using Laravel to power the frontend of Futsal Club Partizan\'s website. The API handles all backend operations including team management, match scheduling, player statistics, and administrative functions, providing seamless data integration for the club\'s digital presence.',
          techStack: ['Laravel', 'RESTful APIs', 'PHP', 'MySQL', "VueJS"],
          role: 'Architected and developed the entire REST API backend using Laravel, creating robust endpoints for frontend integration. Implemented comprehensive data management systems for team operations, match scheduling, and player statistics while ensuring optimal performance and scalability.',
          onGithub: false,
          isLive: true,
          githubUrl: '',
          liveUrl: 'https://www.futsalklubpartizan.rs/sr',
          sortOrder: 10
        }),
        new Project({
          name: 'ITMentorstva Website',
          type: 'Website',
          category: 'professional',
          image: '/images/itm-interface.png',
          shortDescription: 'Online programming school platform with advanced user tracking',
          fullDescription: 'Promotional website for an online programming school featuring comprehensive user activity tracking, email marketing integration, and dynamic feature implementation. The platform helps connect students with programming education opportunities.',
          techStack: ['Laravel', 'MySQL', 'Email Marketing', 'Analytics', 'User Tracking', 'PHP'],
          role: 'Implemented a sophisticated user activity tracking system, set up email marketing campaigns, and architected new website features. Focused on improving user engagement and conversion through data-driven development.',
          onGithub: false,
          isLive: true,
          githubUrl: '',
          liveUrl: 'https://itmentorstva.com/',
          sortOrder: 11
        }),
      ]
    }
  },
  async mounted() {
    try {
      const response = await fetch('https://portfolio-backend-production-119c.up.railway.app/api/success/');
      const data = await response.json();
      console.log('API Response:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
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
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(45deg, transparent 47%, var(--accent-color) 48%, var(--accent-color) 52%, transparent 53%) 0 0/50px 50px,
    linear-gradient(-45deg, transparent 47%, var(--accent-color) 48%, var(--accent-color) 52%, transparent 53%) 0 0/50px 50px;
  opacity: 0.05;
  pointer-events: none;
  z-index: 0;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
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
  padding-left: 3rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 3px;
  background: var(--accent-color);
  box-shadow: 
    0 0 10px var(--accent-color),
    0 0 20px var(--accent-color),
    0 0 30px var(--accent-color);
  opacity: 0.8;
  border-radius: 3px;
}

.timeline-item {
  margin-bottom: 2.5rem;
  padding: 2rem;
  background-color: rgba(18, 18, 18, 0.8);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-light);
  position: relative;
  backdrop-filter: blur(10px);
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -2.35rem;
  top: 2rem;
  width: 15px;
  height: 15px;
  background-color: var(--accent-color);
  border-radius: 50%;
  box-shadow: 
    0 0 10px var(--accent-color),
    0 0 20px var(--accent-color),
    0 0 30px var(--accent-color);
  z-index: 2;
}

.timeline-item::after {
  content: '';
  position: absolute;
  left: -1.8rem;
  top: 2.4rem;
  width: 1.8rem;
  height: 2px;
  background-color: var(--accent-color);
  box-shadow: 0 0 10px var(--accent-color);
}

.timeline-content {
  position: relative;
}

.timeline-content h3 {
  color: var(--accent-color);
  text-shadow: 0 0 10px rgba(66, 185, 131, 0.5);
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .timeline {
    padding-left: 2rem;
  }

  .timeline-item::before {
    left: -1.85rem;
    width: 12px;
    height: 12px;
  }

  .timeline-item::after {
    left: -1.3rem;
    width: 1.3rem;
  }
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
  justify-content: center;
}

.project-card {
  width: calc(33.333% - 1.35rem);
  min-width: 300px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
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
    width: calc(50% - 1rem);
  }
}

@media (max-width: 768px) {
  .section {
    padding: 2rem 0; /* Remove horizontal padding on sections */
  }

  .projects-grid {
    padding: 0;
    gap: 1rem;
  }
  
  .project-card {
    width: calc(100% - 2rem); /* Account for left and right margin */
    min-width: unset;
    margin: 0 1rem; /* Add horizontal margin instead of padding */
  }

  .project-categories {
    padding: 0 1rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .category-btn {
    width: 100%;
    max-width: 300px;
  }

  .project-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .project-info {
    padding: 1.5rem;
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
