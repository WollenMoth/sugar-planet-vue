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
    reset: (state) => {
      state.order = emptyOrder;
    },
  },
});
