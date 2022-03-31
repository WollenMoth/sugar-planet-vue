<script setup>
defineProps({
  columns: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <thead>
    <tr>
      <th v-for="column in columns" :key="column.path" scope="col">
        {{ column.label }}
      </th>
    </tr>
  </thead>
</template>
