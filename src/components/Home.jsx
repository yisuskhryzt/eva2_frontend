import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import './Home.css';
import QuickLinks from './QuickLinks';
import Services from './Services';
import News from './News';

const Home = () => {
  return (
    <div className="home-container">
      <header className="text-center py-5">
        <h1 className="titulo-principal">Bienvenidos a la Municipalidad</h1>
      </header>

      <section className="hero-section py-4">
        <Services />
      </section>

      <section className="noticias py-4">
        <News />
      </section>

      <section className="tramites py-4">
        <QuickLinks />
      </section>

      <section className="galeria py-5">
        <Container fluid>  {/* Usa 'fluid' para que el contenedor ocupe todo el ancho disponible */}
          <h2 className="text-center mb-4">Galería de Imágenes</h2>
          <Carousel fade>
            <Carousel.Item>
              <img className="d-block carousel-img" src="/logo_cholchol.png" alt="Imagen 1" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block carousel-img" src="/fondo.jpg" alt="Imagen 2" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block carousel-img" src="/entrada.jpg" alt="Imagen 3" />
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>

    </div>
  );
};

export default Home;
