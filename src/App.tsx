import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import References from './components/References';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero
        onContactClick={() => scrollToSection('contact')}
        onProjectsClick={() => scrollToSection('projects')}
      />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Publications />
      <References />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
