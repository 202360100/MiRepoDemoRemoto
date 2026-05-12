<script setup>
import { ref } from 'vue'

const nombre = ref('')
const correo = ref('')
</script>

<template>
  <div class="pixel-container">
    <h1 class="titulo">FORMULARIO PIXEL</h1>

    <div class="formulario">
      <label>Nombre</label>
      <input
        v-model="nombre"
        type="text"
        placeholder="Escribe tu nombre"
      />

      <label>Correo</label>
      <input
        v-model="correo"
        type="email"
        placeholder="correo@ejemplo.com"
      />
    </div>

    <div class="resultado">
      <h2>DATOS CAPTURADOS</h2>

      <p>
        <span>Nombre:</span>
        {{ nombre }}
      </p>

      <p>
        <span>Correo:</span>
        {{ correo }}
      </p>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.pixel-container {
  font-family: 'Press Start 2P', cursive;
  background: #222034;
  color: #f8f8f2;
  padding: 30px;
  border: 6px solid #ffcc00;
  width: 500px;
  margin: 40px auto;
  box-shadow: 10px 10px 0px #000;
}

.titulo {
  text-align: center;
  color: #ffcc00;
  margin-bottom: 30px;
  font-size: 18px;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

label {
  font-size: 10px;
}

input {
  padding: 12px;
  border: 4px solid #000;
  background: #3b3b58;
  color: white;
  font-family: 'Press Start 2P', cursive;
  font-size: 10px;
  outline: none;
}

input:focus {
  border-color: #ffcc00;
}

.resultado {
  margin-top: 30px;
  padding: 20px;
  background: #2d2d44;
  border: 4px dashed #ffcc00;
}

.resultado h2 {
  font-size: 12px;
  margin-bottom: 20px;
  color: #00ff99;
}

.resultado p {
  font-size: 10px;
  margin-bottom: 15px;
  line-height: 1.6;
}

span {
  color: #ffcc00;
}
</style>