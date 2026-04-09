import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './componentes/Card'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card 
      imagen="cerdito"
      nombre="Cerdito"
      pais="España"
      contenido="Cerdito muy valiente"
    />
    <Card 
      imagen="hipopotamo"
      nombre="Hipopotamo"
      pais="Egipto"
      contenido="Hipopotamo muy chiquito"
    />
    <Card 
      imagen="pulpo"
      nombre="Pulpo"
      pais="Pulpolandia"
      contenido="Pulpo muy curioso"
    />
    
  </StrictMode>,
)
