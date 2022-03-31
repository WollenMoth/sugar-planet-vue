<script setup>
import ThemedTable from "@/components/ThemedTable.vue";
import { useDecorationStore } from "@/stores/DecorationStore";

const decorationStore = useDecorationStore();
decorationStore.fill();

defineProps({
  columns: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <h2>Adornos</h2>
  <ThemedTable
    id="decorations-table"
    :columns="columns"
    :data="decorationStore.decorations"
  />
</template>

<style>
@media (min-width: 992px) {
  #decorations-table {
    max-width: 500px;
  }
}
</style>
