<template>
  <header class="fixed-header">
    <div class="nav-container">
      <nav>
        <a @click.prevent="scrollToSection('home')" href="#home" class="nav-link">Home</a>
        <a @click.prevent="scrollToSection('experience')" href="#experience" class="nav-link">Experience</a>
        <a @click.prevent="scrollToSection('skills')" href="#skills" class="nav-link">Skills</a>
        <a @click.prevent="scrollToSection('projects')" href="#projects" class="nav-link">Projects</a>
        <a @click.prevent="scrollToSection('contact')" href="#contact" class="nav-link">Contact</a>
      </nav>
      <a href="/assets/cv.pdf" download class="cv-button">
        Download CV
      </a>
    </div>
  </header>
  <router-view/>
</template>

<script>
export default {
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style>
/* CSS Reset */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

:root {
  --primary-dark: #0a0a0a;
  --primary-light: #ffffff;
  --secondary-dark: #1a1a1a;
  --accent-color: #42b983;
  --text-dark: #e0e0e0;
  --text-light: #ffffff;
  --background-dark: #121212;
}

#app {
  font-family: 'Poppins', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-light);
  background-color: var(--background-dark);
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 1rem;
  z-index: 1000;
  pointer-events: none; /* This ensures clicks pass through the header container */
}

.nav-container {
  background-color: var(--primary-dark);
  padding: 1rem 2rem;
  border-radius: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  pointer-events: auto;
  backdrop-filter: blur(10px);
  background-color: rgba(10, 10, 10, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: var(--text-light);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 25px;
}

.nav-link:hover {
  color: var(--accent-color);
  background-color: rgba(255, 255, 255, 0.1);
}

.cv-button {
  background-color: var(--accent-color);
  color: var(--text-light);
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  white-space: nowrap;
}

.cv-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(66, 185, 131, 0.3);
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    border-radius: 25px;
    padding: 1rem;
  }

  nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .nav-link {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
}
</style>
