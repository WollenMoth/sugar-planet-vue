<script setup>
import FormGroup from "@/components/FormGroup.vue";
import FormLabel from "@/components/FormLabel.vue";
import FormControl from "@/components/FormControl.vue";
import { useFormStore } from "@/stores/FormStore";

const formStore = useFormStore();
</script>

<template>
  <FormGroup controlId="name" v-slot="{ controlId }">
    <FormLabel :forName="controlId">Nombre</FormLabel>
    <FormControl
      :id="controlId"
      placeholder="John Smith"
      :maxlength="50"
      v-model="formStore.order.person.name"
    />
  </FormGroup>
  <FormGroup controlId="phone" v-slot="{ controlId }">
    <FormLabel :forName="controlId">Teléfono</FormLabel>
    <FormControl
      type="tel"
      :id="controlId"
      placeholder="555-555-1212"
      :maxlength="10"
      v-model="formStore.order.person.phone"
    />
  </FormGroup>
  <FormGroup controlId="email" v-slot="{ controlId }">
    <FormLabel :forName="controlId">Correo electrónico</FormLabel>
    <FormControl
      :type="controlId"
      :id="controlId"
      placeholder="name@domain.com"
      :maxlength="256"
      v-model="formStore.order.person.email"
    />
  </FormGroup>
</template>
