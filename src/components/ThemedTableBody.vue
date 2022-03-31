<script setup>
import _ from "lodash";

defineProps({
  columns: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <tbody>
    <tr v-for="item in data" :key="item.id">
      <td v-for="column in columns" :key="column.path">
        {{ _.get(item, column.path) }}
      </td>
    </tr>
  </tbody>
</template>
