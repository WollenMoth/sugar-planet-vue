<script setup>
import ShopInfo from "@/components/ShopInfo.vue";
import FlavoursTable from "@/components/FlavoursTable.vue";
import DecorationsTable from "@/components/DecorationsTable.vue";

const columns = [
  { path: "id", label: "#" },
  { path: "name", label: "Nombre" },
  { path: "price", label: "Precio" },
];
</script>

<template>
  <h1>Información</h1>
  <ShopInfo />
  <FlavoursTable :columns="columns" />
  <DecorationsTable :columns="columns" />
</template>
