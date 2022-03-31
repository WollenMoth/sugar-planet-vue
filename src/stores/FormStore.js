import { defineStore } from "pinia";

export const useFormStore = defineStore("FormStore", {
  state: () => ({
    order: {},
  }),
  actions: {
    reset() {
      this.order = {
        cake: {
          general_description: "",
          flavours: [],
          decorations: [],
        },
        person: {
          name: "",
          phone: "",
          email: "",
        },
      };
    },
  },
  getters: {
    isFilled: (state) => {
      return (
        state.order.cake.general_description &&
        state.order.cake.flavours.length &&
        state.order.person.name &&
        state.order.person.phone &&
        state.order.person.email
      );
    },
  },
});
