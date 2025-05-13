// Navbar.jsx
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Sections from '../Sections';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNavClick = (section, id) => {
    setActiveSection(section);
    setMenuAbierto(false);
  };

  const handleToggle = () => {
    setMenuAbierto(!menuAbierto);
  };

  // 👇 Detecta scroll para agregar sombra y opacidad
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // cambia si scroll > 10px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar-container ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-logo">
          <a href="#home" onClick={() => handleNavClick('home')}>
            <img src="./logo_cholchol.png" alt="Logo" />
          </a>
        </div>

        <button className="menu-toggle" onClick={handleToggle}>
          {menuAbierto ? '✖' : '☰'}
        </button>

        <ul className={`navbar-links ${menuAbierto ? 'show' : ''}`}>
          <li className={activeSection === 'home' ? 'active' : ''} onClick={() => handleNavClick('home')}>Inicio</li>
          <li className={activeSection === 'salud' ? 'active' : ''} onClick={() => handleNavClick('salud')}>Salud</li>
          <li className={activeSection === 'educacion' ? 'active' : ''} onClick={() => handleNavClick('educacion')}>Educación</li>
          <li className={activeSection === 'aseo' ? 'active' : ''} onClick={() => handleNavClick('aseo')}>Aseo y Ornato</li>
          <li className={activeSection === 'contacto' ? 'active' : ''} onClick={() => handleNavClick('contacto')}>Contacto</li>
        </ul>
      </nav>

      <Sections activeSection={activeSection} />
    </>
  );
};

export default Navbar;
