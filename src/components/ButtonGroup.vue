<script setup>
import { useThemeStore } from "@/stores/ThemeStore";
import { useFormStore } from "@/stores/FormStore";

const themeStore = useThemeStore();
const formStore = useFormStore();

themeStore.fill();

const theme = themeStore.theme === "dark" ? "light" : "dark";
</script>

<template>
  <button
    :disabled="!formStore.isFilled"
    type="submit"
    :class="`btn btn-outline-${theme} me-3`"
  >
    Enviar
  </button>
  <button type="reset" class="btn btn-outline-warning">Reiniciar</button>
</template>
