import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PokemonList from './PokemonList.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Quitamos el div #center porque la lista ya maneja su propio centrado */}
    <div className="app-container">
    <h1 className="retro-title" 
      style={{ 
        color: '#9bbc0f', 
        textShadow: '4px 4px 0px #0f380f',
        WebkitTextStroke: '1px #0f380f' 
      }}>POKÉDEX V.1</h1>
      <PokemonList />
    </div>
  </StrictMode>,
)
