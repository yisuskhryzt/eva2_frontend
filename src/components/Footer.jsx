import React from 'react'
import Reloj from './Reloj';
export default function Footer() {
  return (
    <footer className="bg-primary text-white text-center p-3">
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Reloj />
        {<p>&copy; 2025 Municipalidad de Cholchol</p>}
      </div>
    </footer>
  )
}