<script setup>
defineProps({
  controlId: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="mb-3">
    <slot :controlId="controlId" />
  </div>
</template>
