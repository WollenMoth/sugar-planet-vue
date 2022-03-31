<script setup>
defineProps({
  controlId: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div :class="`mb-3 ${className}`">
    <slot :controlId="controlId" />
  </div>
</template>
