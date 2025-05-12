import React, { useState } from 'react'
import './ContactForm.css'

export default function ContactForm() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState('')
  const [exito, setExito] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nombre || !email || !mensaje) {
      setError('Todos los campos son obligatorios')
      setExito('')
    } else if (!email.includes('@')) {
      setError('Correo inválido')
      setExito('')
    } else {
      setError('')
      setExito('Mensaje enviado correctamente')
    }
  }

  return (
    <div className="container my-5" id="contacto">
      <h3>Contáctanos</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nombre</label>
          <input type="text" className="form-control" value={nombre} onChange={e => setNombre(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Mensaje</label>
          <textarea className="form-control" value={mensaje} onChange={e => setMensaje(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-success">Enviar</button>
        {error && <div className="text-danger mt-2">{error}</div>}
        {exito && <div className="text-success mt-2">{exito}</div>}
      </form>
    </div>
  )
}