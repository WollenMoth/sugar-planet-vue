import { defineStore } from "pinia";

const emptyOrder = {
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

export const useFormStore = defineStore("FormStore", {
  state: () => ({
    order: emptyOrder,
  }),
  actions: {
    reset() {
      this.order = emptyOrder;
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
