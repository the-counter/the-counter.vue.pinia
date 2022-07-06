<script setup>
import { ref } from 'vue';

const count = ref(0);

const decrement = () => {
  count.value = count.value - 1;
};

const increment = () => {
  count.value = count.value + 1;
};
</script>

<template>
  <div class="d-flex justify-content-between align-items-center mt-3">
    <button
      class="btn btn-outline-primary"
      @click="decrement"
    >-</button>
    {{ count }}
    <button
      class="btn btn-outline-primary"
      @click="increment"
    >+</button>
  </div>
</template>
