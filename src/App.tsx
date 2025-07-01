import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Training from './components/Training';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import StickyNav from './components/StickyNav';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-inter overflow-x-hidden">
      <StickyNav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Training />
      <Education />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;