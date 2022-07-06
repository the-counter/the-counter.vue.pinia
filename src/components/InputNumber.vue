<script setup>
defineProps({
  id: String,
  label: String,
  placeholder: String,
  value: Number,
});
</script>

<template>
  <div>
    <label
      class="form-label"
      :for="id"
    >{{ label }}</label>
    <input
      type="number"
      class="form-control"
      :id="id"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input-value', parseInt($event.target.value))"
    >
  </div>
</template>
