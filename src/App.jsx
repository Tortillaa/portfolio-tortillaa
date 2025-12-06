import ColorBends from "./components/ColorBends/ColorBends";
import PillNav from "./components/PillNav/PillNav";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";

import Footer from "./components/Footer/Footer";

import logo from './assets/icons/logo.png';

function App() {
  return (
    <div className="relative min-h-screen">

      {/* Fondo animado (ColorBends) */}
      <ColorBends
        colors={["#4c00a3ff", "#4c00a3ff", "#4c00a3ff"]}
        speed={0.4}
        scale={1.5}
        frequency={1.4}
        warpStrength={1.1}
        noise={0.05}
        transparent
      />

      {/* Navbar */}
      <PillNav 
        logo={logo}
        logoAlt="Portfolio logo"
        items={[
          { label: 'Home', href: '#home' },
          { label: 'About', href: '#about' },
          { label: 'Skills', href: '#skills' },
          { label: 'Projects', href: '#projects' },
          { label: 'Contact', href: '#contact' }
        ]}
        activeHref="#home"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#ffffff"
        pillColor="#000000"
        hoveredPillTextColor="#000000"
        pillTextColor="#ffffff"
      />

      {/* Contenido principal */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
