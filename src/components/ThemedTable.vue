<script setup>
import { useThemeStore } from "@/stores/ThemeStore";
const themeStore = useThemeStore();
themeStore.fill();
</script>

<template>
  <table :class="`table table-${themeStore.theme} table-striped table-hover`">
    <slot />
  </table>
</template>
