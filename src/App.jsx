import React from 'react';
import Footer from './components/Footer';
import './App.css';
import Sections from './components/Sections';
import Header from './components/Header';
import IntroModal from './components/IntroModal/IntroModal';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="app-content">
        <Sections />
      </main>
      <Footer />
      <IntroModal />
    </div>
  );
}

export default App;
