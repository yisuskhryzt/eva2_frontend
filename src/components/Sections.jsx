// Sections.jsx
import React from 'react';
import ContactForm from './ContactForm';
import Home from'./Home';

const Sections = ({ activeSection }) => {
  return (
    <div>
      {activeSection === 'home' && (
        <section>
        <Home />
        </section>
      )}
      {activeSection === 'salud' && (
        <section>
          <h2>Salud</h2>
          <p>Contenido de la sección de Salud</p>
        </section>
      )}
      {activeSection === 'educacion' && (
        <section>
          <h2>Educación</h2>
          <p>Contenido de la sección de Educación</p>
        </section>
      )}
      {activeSection === 'aseo' && (
        <section>
          <h2>Aseo y Ornato</h2>
          <p>Contenido de la sección de Aseo y Ornato</p>
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
