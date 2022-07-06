<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/counter';

const counter = useCounterStore();

const { count } = storeToRefs(counter);

const { increment, decrement } = counter;
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
