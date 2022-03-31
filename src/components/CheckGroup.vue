<script setup>
import FormGroup from "@/components/FormGroup.vue";
import FormLabel from "@/components/FormLabel.vue";
import { ref, watch } from "vue";

defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: Array,
    required: true,
  },
});
const emit = defineEmits(["update:modelValue"]);

const checked = ref([]);

watch(checked, (newChecked) => {
  emit("update:modelValue", newChecked);
});
</script>

<template>
  <FormGroup :controlId="id" v-slot="{ controlId }">
    <FormLabel :forName="controlId"> {{ label }} </FormLabel>
    <div v-for="item in items" class="form-check" :key="item.id">
      <input
        type="checkbox"
        className="form-check-input"
        :id="controlId"
        :value="item.name"
        v-model="checked"
      />
      <FormLabel :forName="controlId" className="form-check-label">
        {{ item.name }}
      </FormLabel>
    </div>
  </FormGroup>
</template>
