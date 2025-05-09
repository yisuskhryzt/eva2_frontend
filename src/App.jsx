import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Sections from './components/Sections';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="app-content">
        <Sections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
