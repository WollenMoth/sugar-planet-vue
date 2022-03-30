<script setup>
import ThemedTable from "@/components/ThemedTable.vue";
import { useFlavourStore } from "@/stores/FlavourStore";
const flavourStore = useFlavourStore();
flavourStore.fill();
</script>

<template>
  <h2>Sabores</h2>
  <ThemedTable>
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
  </ThemedTable>
</template>
