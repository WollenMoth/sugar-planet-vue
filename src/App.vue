<script setup>
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap");

:root {
  --margin-top-body: 76px;
}

body {
  font-family: "Quicksand", sans-serif;
  padding-top: var(--margin-top-body);
}
</style>
