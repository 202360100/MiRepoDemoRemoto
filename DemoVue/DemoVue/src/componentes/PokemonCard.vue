<script setup>
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
  pokemon: {
    type: String,
    required: true
  }
})

const pokemonData = ref(null)

const obtenerPokemon = async () => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${props.pokemon.toLowerCase()}`
    )

    pokemonData.value = await response.json()
  } catch (error) {
    console.error('Pokemon no encontrado')
  }
}

const calcularBarra = (valor) => {
  return Math.min(valor, 100)
}

onMounted(obtenerPokemon)
</script>

<template>
  <div
    v-if="pokemonData"
    class="card"
  >
    <div class="shine"></div>

    <div class="card-header">
      <h2>
        {{ pokemonData.name }}
      </h2>

      <span>
        #{{ pokemonData.id }}
      </span>
    </div>

    <img
      :src="pokemonData.sprites.front_default"
      :alt="pokemonData.name"
      class="pokemon-image"
    />

    <div class="types">
      <span
        v-for="tipo in pokemonData.types"
        :key="tipo.type.name"
      >
        {{ tipo.type.name }}
      </span>
    </div>

    <div class="stats">
      <div
        v-for="stat in pokemonData.stats"
        :key="stat.stat.name"
        class="stat"
      >
        <div class="stat-top">
          <p>
            {{ stat.stat.name }}
          </p>

          <span>
            {{ stat.base_stat }}
          </span>
        </div>

        <div class="bar">
          <div
            class="fill"
            :style="{
              width: `${calcularBarra(stat.base_stat)}%`
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.card {
  width: 260px;
  min-height: 620px;
  background:
    linear-gradient(
      145deg,
      #1a1a1a,
      #262626
    );

  border: 5px solid #ffcc00;
  padding: 20px;
  color: white;
  font-family: 'Press Start 2P', cursive;
  position: relative;
  overflow: hidden;

  box-shadow:
    0 0 0 #000,
    0 0 25px rgba(255, 204, 0, 0.35);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.card:hover {
  transform:
    translateY(-12px)
    rotate(-1deg)
    scale(1.03);

  box-shadow:
    0 0 35px rgba(255, 204, 0, 0.7),
    0 0 60px rgba(255, 204, 0, 0.3);
}

.shine {
  position: absolute;
  top: -120%;
  left: -50%;
  width: 80%;
  height: 300%;
  background:
    linear-gradient(
      to right,
      transparent,
      rgba(255,255,255,0.15),
      transparent
    );

  transform: rotate(25deg);
  transition: 0.7s;
}

.card:hover .shine {
  left: 130%;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.card-header h2 {
  font-size: 12px;
  color: #ffcc00;
  text-transform: uppercase;
}

.card-header span {
  color: #00ff99;
  font-size: 10px;
}

.pokemon-image {
  width: 150px;
  display: block;
  margin: 0 auto;

  image-rendering: pixelated;

  animation: float 2.5s ease-in-out infinite;
  transition: transform 0.3s ease;
}

.card:hover .pokemon-image {
  transform: scale(1.12);
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-8px);
  }

  100% {
    transform: translateY(0px);
  }
}

.types {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
}

.types span {
  background: #ffcc00;
  color: black;
  padding: 8px;
  border: 3px solid black;
  font-size: 8px;
  text-transform: uppercase;
}

.stats {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.stat-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
  gap: 10px;
}

.stat-top p {
  font-size: 8px;
  text-transform: uppercase;
}

.stat-top span {
  font-size: 8px;
  color: #00ff99;
}

.bar {
  width: 100%;
  height: 14px;
  background: #111;
  border: 2px solid #000;
  overflow: hidden;
}

.fill {
  height: 100%;

  background:
    linear-gradient(
      90deg,
      #00ff99,
      #00ccff
    );

  transition: width 0.6s ease;

  box-shadow:
    0 0 10px rgba(0,255,153,0.7);
}
</style>