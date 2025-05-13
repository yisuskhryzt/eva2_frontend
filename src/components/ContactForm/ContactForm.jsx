import React, { useState } from 'react'
import './ContactForm.css'
import { Modal, Button } from 'react-bootstrap'

export default function ContactForm() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')

  const [showNombreError, setShowNombreError] = useState(false)
  const [showEmailError, setShowEmailError] = useState(false)
  const [showMensajeError, setShowMensajeError] = useState(false)
  const [showExito, setShowExito] = useState(false)

  const handleCloseNombreError = () => setShowNombreError(false)
  const handleCloseEmailError = () => setShowEmailError(false)
  const handleCloseMensajeError = () => setShowMensajeError(false)
  const handleCloseExito = () => setShowExito(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!nombre.trim()) {
      setShowNombreError(true)
    } else if (!email.trim() || !email.includes('@')) {
      setShowEmailError(true)
    } else if (!mensaje.trim()) {
      setShowMensajeError(true)
    } else {
      setShowExito(true)

      setNombre('')
      setEmail('')
      setMensaje('')
    }
  }

  return (
    <div className="container my-5" id="contacto">
      <h3>Contáctanos</h3>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Mensaje</label>
          <textarea
            className="form-control"
            value={mensaje}
            onChange={e => setMensaje(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">Enviar</button>
      </form>

      {/* Modal: Falta nombre */}
      <Modal show={showNombreError} onHide={handleCloseNombreError} centered>
        <Modal.Header closeButton>
          <Modal.Title>Falta el nombre</Modal.Title>
        </Modal.Header>
        <Modal.Body>Por favor, ingrese su nombre.</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseNombreError}>Cerrar</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal: Email inválido */}
      <Modal show={showEmailError} onHide={handleCloseEmailError} centered>
        <Modal.Header closeButton>
          <Modal.Title>Correo inválido</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ingrese un correo válido que contenga "@".</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseEmailError}>Cerrar</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal: Comentario vacío */}
      <Modal show={showMensajeError} onHide={handleCloseMensajeError} centered>
        <Modal.Header closeButton>
          <Modal.Title>Mensaje vacío</Modal.Title>
        </Modal.Header>
        <Modal.Body>Por favor, escriba un mensaje antes de enviar.</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseMensajeError}>Cerrar</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal: Envío exitoso */}
      <Modal show={showExito} onHide={handleCloseExito} centered>
        <Modal.Header closeButton>
          <Modal.Title>Mensaje Enviado</Modal.Title>
        </Modal.Header>
        <Modal.Body>El formulario fue enviado correctamente.</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseExito}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
