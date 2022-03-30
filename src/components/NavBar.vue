<script setup>
import { RouterLink } from "vue-router";
import { useThemeStore } from "@/stores/ThemeStore";
const themeStore = useThemeStore();
themeStore.fill();
</script>

<template>
  <nav
    :class="`navbar fixed-top navbar-expand-lg navbar-${themeStore.theme} bg-${themeStore.theme}`"
  >
    <div class="container">
      <RouterLink class="navbar-brand" to="/">
        <img :src="themeStore.logo" alt="logo" />
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <RouterLink class="nav-link" to="/">Home</RouterLink>
          <RouterLink class="nav-link" to="/info">Información</RouterLink>
          <RouterLink class="nav-link" to="/dashboard">Dashboard</RouterLink>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar-brand > img {
  height: 30px;
}

.navbar-dark .navbar-nav .nav-link.router-link-exact-active {
  color: #fff;
}

.navbar-light .navbar-nav .nav-link.router-link-exact-active {
  color: rgba(0, 0, 0, 0.9);
}
</style>
