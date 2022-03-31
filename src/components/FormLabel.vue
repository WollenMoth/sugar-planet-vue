<script setup>
defineProps({
  forName: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: "form-label",
  },
});
</script>

<template>
  <label :for="forName" :class="className"><slot /></label>
</template>
