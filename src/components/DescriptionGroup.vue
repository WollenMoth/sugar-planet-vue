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
      :rows="5"
      :id="controlId"
      placeholder="Descripción general del pedido"
      :maxlength="200"
      v-model="formStore.order.cake.general_description"
    />
  </FormGroup>
</template>

<style>
@media (min-width: 992px) {
  #description {
    max-width: 400px;
  }
}
</style>
