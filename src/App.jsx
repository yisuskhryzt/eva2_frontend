import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sections from './components/Sections';
import IntroModal from './components/intromodal'; // Importación del modal
import './styles/App.css';

function App() {
  return (
    <div className="app-wrapper">
      <IntroModal /> {/* Modal aparece al cargar la aplicación */}
      <Navbar />
      <main className="app-content">
        <Sections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
