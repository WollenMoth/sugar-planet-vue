<script setup>
import ThemedTable from "@/components/ThemedTable.vue";
import { useOrderStore } from "@/stores/OrderStore";

const orderStore = useOrderStore();
if (!orderStore.isFilled) orderStore.fill();

const columns = [
  { path: "cake.general_description", label: "Descripción General" },
  { path: "cake.flavours", label: "Sabor" },
  { path: "cake.decorations", label: "Decoración" },
  { path: "person.name", label: "Nombre" },
  { path: "person.phone", label: "Teléfono" },
  { path: "person.email", label: "Correo Electrónico" },
];
</script>

<template>
  <h2>Pedidos</h2>
  <ThemedTable :columns="columns" :data="orderStore.orders" />
</template>
