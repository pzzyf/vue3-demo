import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 1 }),
  getters: {
    double: (state) => {
      console.log('getters change');
      return state.count * 2}
  },
  actions: {
    increment() {
      console.log('actions change');
      this.count++;
    },
  },
});
