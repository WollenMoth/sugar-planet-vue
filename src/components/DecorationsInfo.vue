<script setup>
import { useDecorationStore } from "@/stores/DecorationStore";
const decorationStore = useDecorationStore();
decorationStore.fill();
</script>

<template>
  <h2>Adornos</h2>
  <table class="table table-dark table-striped table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Decoración</th>
        <th scope="col">Precio</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="decoration in decorationStore.decorations"
        :key="decoration.id"
      >
        <td>{{ decoration.id }}</td>
        <td>{{ decoration.name }}</td>
        <td>$ {{ decoration.price }} MXN</td>
      </tr>
    </tbody>
  </table>
</template>
