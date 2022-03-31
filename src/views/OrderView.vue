<script setup>
import router from "@/router";
import DescriptionGroup from "@/components/DescriptionGroup.vue";
import FlavoursGroup from "@/components/FlavoursGroup.vue";
import DecorationsGroup from "@/components/DecorationsGroup.vue";
import PersonGroup from "@/components/PersonGroup.vue";
import ButtonGroup from "@/components/ButtonGroup.vue";
import { useOrderStore } from "@/stores/OrderStore";
import { useFormStore } from "@/stores/FormStore";

const orderStore = useOrderStore();
const formStore = useFormStore();

if (!orderStore.isFilled) orderStore.fill();

formStore.reset();

const submit = () => {
  orderStore.addOrder(formStore.order);
  formStore.reset();
  router.push("/");
};
</script>

<template>
  <h1>Formulario de pedido de pastel</h1>
  <form @submit.prevent="submit" class="mb-3">
    <DescriptionGroup />
    <FlavoursGroup />
    <DecorationsGroup />
    <PersonGroup />
    <ButtonGroup />
  </form>
</template>
