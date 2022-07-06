import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore('counter', () => {

  const count = ref(0);

  const increment = () => {
    count.value = count.value + 1;
  };

  const decrement = () => {
    count.value = count.value - 1;
  };

  return {
    count,
    increment,
    decrement,
  };
});
