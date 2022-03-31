import { defineStore } from "pinia";

export const useFlavourStore = defineStore("FlavourStore", {
  state: () => ({ flavours: [] }),
  actions: {
    async fill() {
      this.flavours = (await import("@/data/flavours.json")).default;
    },
  },
  getters: {
    inStock: (state) => state.flavours.filter((flavour) => flavour.stock > 0),
  },
});
