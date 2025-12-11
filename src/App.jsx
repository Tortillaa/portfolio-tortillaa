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
      <div className="cb-bg">
        <ColorBends
          colors={["#1466c3", "#4898e8", "#c0d9f7"]}
          speed={0.4}
          scale={1.5}
          frequency={1.7}
          warpStrength={1.1}
          noise={0.05}
          transparent
        />
      </div>

      {/* Navbar */}
      <PillNav 
        logo={logo}
        logoAlt="Portfolio logo"
        items={[
          { label: 'About', href: '#about' },
          { label: 'Skills', href: '#skills' },
          { label: 'Projects', href: '#projects' },
          { label: 'Contact', href: '#contact' }
        ]}
        activeHref="#home"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#f1f7fe"
        pillColor="#2B3252"
        hoveredPillTextColor="#2B3252"
        pillTextColor="#f1f7fe"
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
