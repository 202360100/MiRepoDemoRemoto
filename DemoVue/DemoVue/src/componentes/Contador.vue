<script setup>
import { ref } from 'vue'

const contador = ref(0)

const incrementar = () => {
  contador.value++
}

const decrementar = () => {
  contador.value--
}
</script>

<template>
  <div class="contador">
    <h2>Contador: {{ contador }}</h2>

    <button @click="decrementar">
      -
    </button>

    <button @click="incrementar">
      +
    </button>
  </div>
</template>

<style scoped>
.contador {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

button {
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
}
</style>