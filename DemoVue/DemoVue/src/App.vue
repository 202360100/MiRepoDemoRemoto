<script setup>
import { ref } from 'vue'
import PokemonCard from './componentes/PokemonCard.vue'

const pokemonInput = ref('')

const pokemones = ref([
  'pikachu',
  'charizard',
  'gengar',
  'dragonite'
])

const agregarPokemon = () => {
  if (!pokemonInput.value) return

  pokemones.value.push(
    pokemonInput.value.toLowerCase()
  )

  pokemonInput.value = ''
}
</script>

<template>
  <div class="app">
    <div class="background"></div>

    <h1 class="titulo">
      POKEDEX PIXEL
    </h1>

    <div class="buscador">
      <input
        v-model="pokemonInput"
        placeholder="Nombre del pokemon"
        @keyup.enter="agregarPokemon"
      />

      <button @click="agregarPokemon">
        AGREGAR
      </button>
    </div>

    <div class="grid">
      <PokemonCard
        v-for="pokemon in pokemones"
        :key="pokemon"
        :pokemon="pokemon"
      />
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

body {
  margin: 0;
  background: #0a0a0a;
  overflow-x: hidden;
}

.app {
  min-height: 100vh;
  padding: 40px;
  position: relative;
}

.background {
  position: fixed;
  inset: 0;

  background:
    radial-gradient(
      circle at top,
      rgba(255,204,0,0.08),
      transparent 50%
    );

  z-index: -1;

  animation: pulse 5s infinite alternate;
}

@keyframes pulse {
  from {
    opacity: 0.4;
  }

  to {
    opacity: 1;
  }
}

.titulo {
  text-align: center;
  color: #ffcc00;
  font-family: 'Press Start 2P', cursive;
  margin-bottom: 50px;

  text-shadow:
    0 0 10px rgba(255,204,0,0.8),
    4px 4px #000;
}

.buscador {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

input {
  padding: 15px;
  width: 300px;

  background: #1a1a1a;
  color: white;

  border: 4px solid #ffcc00;

  font-family: 'Press Start 2P', cursive;
  font-size: 10px;

  outline: none;

  transition: 0.3s;
}

input:focus {
  box-shadow:
    0 0 20px rgba(255,204,0,0.7);
}

button {
  padding: 15px 20px;

  border: none;

  background:
    linear-gradient(
      145deg,
      #00ff99,
      #00ccff
    );

  color: black;

  font-family: 'Press Start 2P', cursive;

  cursor: pointer;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

button:hover {
  transform: scale(1.08);

  box-shadow:
    0 0 20px rgba(0,255,153,0.6);
}

.grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 30px;

  justify-items: center;
}

@media (max-width: 1200px) {
  .grid {
    grid-template-columns:
      repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns:
      repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns:
      repeat(1, 1fr);
  }
}
</style>