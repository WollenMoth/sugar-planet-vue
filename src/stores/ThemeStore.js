import { defineStore } from "pinia";
import logoDark from "@/assets/images/logo-dark.webp";
import logoLight from "@/assets/images/logo-light.webp";

export const useThemeStore = defineStore("ThemeStore", {
  state: () => ({ theme: "dark", logo: logoDark }),
  actions: {
    fill() {
      this.theme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      this.logo = this.theme === "dark" ? logoDark : logoLight;
    },
  },
});
