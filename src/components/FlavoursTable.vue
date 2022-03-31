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
  <ThemedTable
    id="flavours-table"
    :columns="columns"
    :data="flavourStore.flavours"
  />
</template>

<style>
@media (min-width: 992px) {
  #flavours-table {
    max-width: 500px;
  }
}
</style>
