<script setup>
import { RouterLink } from "vue-router";
import { onMounted } from "vue";

onMounted(() => {
  const flex = document.getElementById("home");
  flex.style.minHeight = window.innerHeight - 78 + "px";
});
</script>

<template>
  <div
    id="home"
    class="d-flex flex-column justify-content-center align-items-center"
  >
    <h1>¡Bienvenido a Sugar Planet!</h1>
    <p>Realiza tu pedido a través del siguiente enlace:</p>
    <RouterLink class="btn btn-primary" to="/order">Ordena ahora</RouterLink>
  </div>
</template>
