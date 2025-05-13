
import React, { useState, useEffect } from 'react';

const News = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  const newsItems = [
    {
      id: 1,
      title: "Municipalidad realizará operativo de esterilización canina",
      summary: "El próximo sábado 20 de mayo se realizará un operativo gratuito de esterilización para mascotas en la plaza central.",
      image: "https://municholchol.cl/wp-content/uploads/2023/04/Firma-convenio-1024x576.jpeg",
      date: "12 de mayo, 2023",
      category: "Servicios"
    },
    {
      id: 2,
      title: "Ceremonia de entrega de subsidios habitacionales",
      summary: "Más de 50 familias de nuestra comuna recibieron sus certificados de subsidio habitacional en emotiva ceremonia presidida por el alcalde.",
      image: "https://municholchol.cl/wp-content/uploads/2022/07/9-Rendir-cuenta-publica-de-todos-los-programas-incluyendo-los-convenios-y-recursos-propios-usando-en-la-gestion-anual.-1024x768.jpeg",
      date: "10 de mayo, 2023",
      category: "Eventos"
    },
    {
      id: 3,
      title: "Lanzamiento programa de emprendimiento local",
      summary: "La municipalidad junto a SERCOTEC lanzaron el programa de apoyo al emprendimiento local con fondos de hasta $2 millones.",
      image: "https://municholchol.cl/wp-content/uploads/2022/07/4-Taller-programa-PROGYSO.-1024x583.jpeg",
      date: "8 de mayo, 2023", 
      category: "Desarrollo"
    },
    {
      id: 4,
      title: "Inauguración de nueva sede social en sector rural",
      summary: "Con la presencia de autoridades locales se inauguró la nueva sede social que beneficiará a más de 200 familias del sector.",
      image: "https://municholchol.cl/wp-content/uploads/2022/07/Foto-Recepcion-equipo-fonasa-movil-1024x768.jpg",
      date: "5 de mayo, 2023",
      category: "Infraestructura"
    },
    {
      id: 5,
      title: "Programa de ayudas sociales para adultos mayores",
      summary: "La municipalidad anuncia un nuevo programa de ayuda social dirigido a adultos mayores de la comuna.",
      image: "https://municholchol.cl/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-05-at-14.59.31-1024x768.jpeg",
      date: "3 de mayo, 2023",
      category: "Social"
    },
    {
      id: 6,
      title: "Calendario de talleres culturales para el mes de mayo",
      summary: "El departamento de cultura presenta un nutrido calendario de talleres gratuitos para la comunidad durante el mes de mayo.",
      image: "https://municholchol.cl/wp-content/uploads/2022/07/12-Capacitacion-computacion-basica-para-adultos-que-trabajen-como-monitor-intercultural-y-TENS-capacitacion-fue-impartida-por-profesionales-de-Municipalidad-de-Nueva-Imperial-1024x768.jpeg",
      date: "1 de mayo, 2023",
      category: "Cultura"
    }
  ];

  // Observer to trigger animation when elements come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add id to visible items
            const id = parseInt(entry.target.getAttribute('data-id'));
            if (!visibleItems.includes(id)) {
              setVisibleItems(prev => [...prev, id]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    // Target all news cards
    document.querySelectorAll('.news-card-container').forEach(card => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-5 bg-neutral-100" id="noticias">
      <div className="container py-4">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-primary-custom">Noticias y Actualidad</h2>
          <p className="lead text-muted">Mantente al día con todas las novedades de nuestra comuna</p>
        </div>

        <div className="row g-4">
          {newsItems.map((item) => (
            <div 
              key={item.id} 
              className="col-md-6 col-lg-4 news-card-container" 
              data-id={item.id}
            >
              <div 
                className={`card h-100 news-card border-0 shadow-sm ${visibleItems.includes(item.id) ? 'fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${(item.id % 3) * 0.2}s` }}
              >
                <div className="position-relative">
                  <img 
                    src={item.image} 
                    className="card-img-top" 
                    alt={item.title} 
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <span className="position-absolute top-0 end-0 badge bg-primary-custom m-2">
                    {item.category}
                  </span>
                </div>
                <div className="card-body">
                  <div className="small text-muted mb-1">{item.date}</div>
                  <h5 className="card-title text-truncate-2">{item.title}</h5>
                  <p className="card-text text-truncate-3">{item.summary}</p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <button 
                    className="btn btn-sm btn-outline-primary w-100"
                    onClick={() => alert('Ver noticia completa: ' + item.title)}
                  >
                    Leer más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-primary-custom px-4 py-2" onClick={() => alert('Ver todas las noticias')}>
            Ver todas las noticias
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;