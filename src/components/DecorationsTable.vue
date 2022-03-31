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
  <ThemedTable :columns="columns" :data="decorationStore.decorations" />
</template>
