<script setup>
import { useFlavourStore } from "@/stores/FlavourStore";
import { useThemeStore } from "@/stores/ThemeStore";
const flavourStore = useFlavourStore();
const themeStore = useThemeStore();
flavourStore.fill();
themeStore.fill();
</script>

<template>
  <h2>Sabores</h2>
  <table :class="`table table-${themeStore.theme} table-striped table-hover`">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Sabor</th>
        <th scope="col">Precio</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="flavour in flavourStore.flavours" :key="flavour.id">
        <td>{{ flavour.id }}</td>
        <td>{{ flavour.name }}</td>
        <td>$ {{ flavour.price }} MXN</td>
      </tr>
    </tbody>
  </table>
</template>
