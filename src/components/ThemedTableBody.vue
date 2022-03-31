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

const getValue = (item, column) => {
  const value = _.get(item, column.path);
  return value instanceof Array ? value.join(", ") : value;
};
</script>

<template>
  <tbody>
    <tr v-for="item in data" :key="item.id">
      <td v-for="column in columns" :key="column.path">
        {{ getValue(item, column) }}
      </td>
    </tr>
  </tbody>
</template>
