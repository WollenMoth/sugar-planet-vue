<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center h-available"
  >
    <h1>¡Bienvenido a Sugar Planet!</h1>
    <p>Realiza tu pedido a través del siguiente enlace:</p>
    <RouterLink class="btn btn-primary" to="/order">Ordena ahora</RouterLink>
  </div>
</template>

<style>
.h-available {
  height: calc(100vh - var(--margin-top-body));
}
</style>
