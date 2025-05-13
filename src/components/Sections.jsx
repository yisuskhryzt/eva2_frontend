// Sections.jsx
import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import Home from'./Home';
import './Sections.css';

const Sections = ({ activeSection }) => {
  return (
    <div>
      {activeSection === 'home' && (
        <section id="home">
        <Home />
        </section>
      )}

      {activeSection === 'contacto' && (
        <section>
          <h2>Contacto</h2>
          <ContactForm />
        </section>
      )}
    </div>
  );
};

export default Sections;
