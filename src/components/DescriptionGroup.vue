<script setup>
import FormGroup from "@/components/FormGroup.vue";
import FormLabel from "@/components/FormLabel.vue";
import FormControl from "@/components/FormControl.vue";
import { useFormStore } from "@/stores/FormStore";

const formStore = useFormStore();
</script>

<template>
  <FormGroup controlId="description" v-slot="{ controlId }">
    <FormLabel :forName="controlId">Descripción general</FormLabel>
    <FormControl
      as="textarea"
      :rows="3"
      :id="controlId"
      v-model="formStore.order.cake.general_description"
    />
  </FormGroup>
</template>
