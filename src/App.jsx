import { useEffect } from 'react';
// Corrected Import Path
import Lenis from 'lenis'; 
import CustomCursor from './components/CustomCursor.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Timeline from './components/Timeline.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';
import Navigation from './components/Navigation.jsx';
import Footer from './components/Footer.jsx';

function App() {
  useEffect(() => {
    // Standard Lenis initialization
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative">
      <Navigation />
      <section id="home">
        <Hero />
      </section>
      
      {/* Add id attributes to other sections */}
      <section id="about">
        {/* About content */}
          <About />
      </section>
      <section id="timeline">
        {/* Timeline content */}
          <Timeline />
      </section>
      <section id="projects">
        {/* Projects content */}
        <Projects />
      </section>
      <section id="skills">
        {/* Skills content */}
        <Skills />
      </section>
      <section id="achievements">
        {/* Achievements content */}
        <Achievements />
      </section>
      <section id="contact">
        {/* Contact content */}
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;