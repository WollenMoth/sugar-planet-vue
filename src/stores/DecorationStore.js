import { defineStore } from "pinia";

export const useDecorationStore = defineStore("DecorationStore", {
  state: () => ({ decorations: [] }),
  actions: {
    async fill() {
      this.decorations = (await import("@/data/decorations.json")).default;
    },
  },
  getters: {
    inStock: (state) =>
      state.decorations.filter((decoration) => decoration.stock > 0),
  },
});
