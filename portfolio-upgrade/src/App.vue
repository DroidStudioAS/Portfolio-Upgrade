<template>
  <header class="fixed-header">
    <!-- Mobile Menu Button -->
    <button class="mobile-menu-btn" @click="toggleMenu" aria-label="Toggle menu">
      <span class="hamburger" :class="{ 'is-active': isMenuOpen }"></span>
    </button>

    <!-- Desktop Navigation -->
    <div class="nav-container" :class="{ 'mobile': isMenuOpen }">
      <nav>
        <a @click.prevent="scrollToSectionAndCloseMenu('home')" href="#home" class="nav-link">Home</a>
        <a @click.prevent="scrollToSectionAndCloseMenu('experience')" href="#experience" class="nav-link">Experience</a>
        <a @click.prevent="scrollToSectionAndCloseMenu('skills')" href="#skills" class="nav-link">Skills</a>
        <a @click.prevent="scrollToSectionAndCloseMenu('projects')" href="#projects" class="nav-link">Projects</a>
        <a @click.prevent="scrollToSectionAndCloseMenu('contact')" href="#contact" class="nav-link">Contact</a>
      </nav>
    </div>
  </header>
  
  <a href="/my_cv.pdf" download class="cv-button floating-cv">
    <span class="vertical-text">Download CV</span>
  </a>
  
  <router-view/>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto'
    },
    scrollToSectionAndCloseMenu(sectionId) {
      this.scrollToSection(sectionId)
      this.isMenuOpen = false
      document.body.style.overflow = 'auto'
    }
  }
}
</script>

<style>
/* CSS Reset */
@tailwind base;
@tailwind components;
@tailwind utilities;

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
  pointer-events: none;
}

.nav-container {
  background-color: var(--primary-dark);
  padding: 1rem 2rem;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
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

.floating-cv {
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: auto;
  z-index: 1000;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  padding: 2rem 1rem;
  border-radius: 50px;
  background-color: var(--accent-color);
  box-shadow: 0 4px 15px rgba(66, 185, 131, 0.3);
}

.vertical-text {
  transform: rotate(180deg);
  white-space: nowrap;
}

.mobile-menu-btn {
  display: none;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1001;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  pointer-events: auto;
}

.hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-light);
  position: relative;
  transition: all 0.3s ease;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background: var(--text-light);
  transition: all 0.3s ease;
}

.hamburger::before {
  top: -8px;
}

.hamburger::after {
  bottom: -8px;
}

.hamburger.is-active {
  background: transparent;
}

.hamburger.is-active::before {
  transform: rotate(45deg);
  top: 0;
}

.hamburger.is-active::after {
  transform: rotate(-45deg);
  bottom: 0;
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: block;
  }

  .nav-container {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(10, 10, 10, 0.98);
    padding: 4rem 1rem;
    border-radius: 0;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
  }

  .nav-container.mobile {
    display: flex;
  }

  nav {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .nav-link {
    font-size: 1.2rem;
    padding: 0.75rem 1.5rem;
  }

  .floating-cv {
    writing-mode: horizontal-tb;
    position: fixed;
    right: 1rem;
    bottom: 2rem;
    top: auto;
    transform: none;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    z-index: 1002; /* Ensure it's above the mobile menu */
  }

  .vertical-text {
    transform: none;
  }
}
</style>
