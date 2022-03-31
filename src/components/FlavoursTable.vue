<script setup>
import ThemedTable from "@/components/ThemedTable.vue";
import { useFlavourStore } from "@/stores/FlavourStore";

const flavourStore = useFlavourStore();
flavourStore.fill();

defineProps({
  columns: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <h2>Sabores</h2>
  <ThemedTable :columns="columns" :data="flavourStore.flavours" />
</template>
