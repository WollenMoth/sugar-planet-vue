<script setup>
import { useDecorationStore } from "@/stores/DecorationStore";
import { useThemeStore } from "@/stores/ThemeStore";
const decorationStore = useDecorationStore();
const themeStore = useThemeStore();
decorationStore.fill();
themeStore.fill();
</script>

<template>
  <h2>Adornos</h2>
  <table :class="`table table-${themeStore.theme} table-striped table-hover`">
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
