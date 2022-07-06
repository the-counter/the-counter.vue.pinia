<script setup>
import Navbar from './components/Navbar.vue';
import CounterForm from './components/CounterForm.vue';
</script>

<template>
  <Navbar brand="The Counter" />
  <div class="container">
    <div class="row">
      <div class="col-4">
        <CounterForm />
      </div>
    </div>
  </div>
</template>

<style></style>
