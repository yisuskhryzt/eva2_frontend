//modal al abrir la app con un boton de cerrar
// src/components/IntroModal.jsx
import React, { useEffect, useState } from "react";
import "../styles/IntroModal.css"; // Estilos del modal
import modalImage from "../assets/modal1.png"; // Ruta relativa correcta

const IntroModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Opcional: se puede controlar el tiempo de aparición con un delay
  useEffect(() => {
    // Aquí podrías poner lógica para retrasar la aparición si fuera necesario
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={modalImage} alt="Información municipal" className="modal-image" />
        <button className="modal-close-button" onClick={handleClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default IntroModal;