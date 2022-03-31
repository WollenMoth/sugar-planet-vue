<script setup>
import ThemedTableHeader from "@/components/ThemedTableHeader.vue";
import ThemedTableBody from "@/components/ThemedTableBody.vue";
import { useThemeStore } from "@/stores/ThemeStore";

const themeStore = useThemeStore();
themeStore.fill();

defineProps({
  columns: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <table :class="`table table-${themeStore.theme} table-striped table-hover`">
    <ThemedTableHeader :columns="columns" />
    <ThemedTableBody :columns="columns" :data="data" />
  </table>
</template>
