<script setup>
import { useThemeStore } from "@/stores/ThemeStore";

const themeStore = useThemeStore();
themeStore.fill();
const theme = themeStore.theme === "dark" ? "light" : "dark";
</script>

<template>
  <button type="submit" :class="`btn btn-outline-${theme} me-3`">Enviar</button>
  <button type="reset" class="btn btn-outline-warning">Reiniciar</button>
</template>
