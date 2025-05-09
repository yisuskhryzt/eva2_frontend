// Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';
import Sections from './Sections'; // Importa el componente Sections

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuAbierto, setMenuAbierto] = useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuAbierto(false); // Oculta el menú en móviles
  };

  const handleToggle = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <>
      <nav className="navbar-container">
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

      {/* Llama a Sections y pasa activeSection como prop */}
      <Sections activeSection={activeSection} />
    </>
  );
};

export default Navbar;


