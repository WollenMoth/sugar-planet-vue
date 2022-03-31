import { defineStore } from "pinia";

export const useOrderStore = defineStore("OrderStore", {
  state: () => ({ orders: [], id: 0 }),
  actions: {
    addOrder(order) {
      this.orders.push({ id: this.id++, ...order });
    },
    async fill() {
      const orders = (await import("@/data/orders.json")).default;
      for (const order of orders) this.addOrder(order);
    },
  },
  getters: {
    count: (state) => state.orders.length,
    isFilled: (state) => state.count > 0,
  },
});
