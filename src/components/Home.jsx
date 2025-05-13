import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import './Home.css';
import Galeria from './Galeria/Galeria';

const Home = () => {
  return (
    <div className="home-container">
      <header className="text-center py-5">
        <h1 className="titulo-principal">Bienvenidos a la Municipalidad</h1>
      </header>

      <Container className="mb-5">
        <Row>
          <Col md={6}>
            <img src="/entrada.jpg" alt="Municipalidad" className="img-fluid rounded shadow" />
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <p className="texto-presentacion">
              Nuestra municipalidad trabaja día a día por el bienestar de la comunidad, promoviendo el desarrollo local, la participación ciudadana y el acceso equitativo a los servicios.
            </p>
          </Col>
        </Row>
      </Container>

      <section className="noticias py-4">
        <Container>
          <h2 className="mb-4">Últimas Noticias</h2>
          <Row>
            <Col md={4}>
              <Card bg="dark" text="light" className="mb-3">
                <Card.Body>
                  <Card.Title>Inauguración de nuevo centro comunitario</Card.Title>
                  <Card.Text>El nuevo centro atenderá a más de 500 vecinos.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card bg="dark" text="light" className="mb-3">
                <Card.Body>
                  <Card.Title>Jornada de limpieza barrial</Card.Title>
                  <Card.Text>Voluntarios se reunieron para embellecer espacios públicos.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card bg="dark" text="light" className="mb-3">
                <Card.Body>
                  <Card.Title>Vacunación gratuita</Card.Title>
                  <Card.Text>Campaña activa en centros de salud municipales.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Usar el nuevo componente Galeria */}
      <Galeria/>

    </div>
  );
};

export default Home;
