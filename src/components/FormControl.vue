<script setup>
defineProps({
  as: {
    type: String,
    default: "input",
  },
  type: {
    type: String,
    default: null,
  },
  id: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: null,
  },
  rows: {
    type: Number,
    default: null,
  },
  modelValue: {
    type: [String, Array],
    required: true,
  },
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <component
    :is="as"
    :type="type"
    :id="id"
    class="form-control"
    :placeholder="placeholder"
    :rows="rows"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
