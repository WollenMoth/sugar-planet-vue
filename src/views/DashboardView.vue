<script setup>
import FlavoursTable from "@/components/FlavoursTable.vue";
import DecorationsTable from "../components/DecorationsTable.vue";
import OrdersTable from "../components/OrdersTable.vue";

const columns = [
  { path: "id", label: "#" },
  { path: "name", label: "Nombre" },
  { path: "stock", label: "Stock" },
];
</script>

<template>
  <h1>Dashboard</h1>
  <FlavoursTable :columns="columns" />
  <DecorationsTable :columns="columns" />
  <OrdersTable />
</template>
