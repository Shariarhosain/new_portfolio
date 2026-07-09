import { useMemo } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import Preloader from './components/Preloader';
import Starfield from './components/Starfield';
import FlyingShip from './components/FlyingShip';
import Moon from './components/Moon';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useGsapAnimations } from './hooks/useGsapAnimations';
import { useViewportHeight } from './hooks/useViewportHeight';
import './styles/global.css';

function AppContent() {
  const reduced = useMemo(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );
  const finePointer = useMemo(
    () => window.matchMedia('(hover: hover) and (pointer: fine)').matches,
    []
  );

  useViewportHeight();
  useGsapAnimations();

  return (
    <>
      <SEO />
      <Preloader />
      <Starfield reduced={reduced} />
      <Moon />
      <div id="progress" aria-hidden="true" />
      <CustomCursor reduced={reduced} finePointer={finePointer} />
      <Navigation />
      <FlyingShip reduced={reduced} />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Hero reduced={reduced} finePointer={finePointer} />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <AppContent />
    </HelmetProvider>
  );
}
