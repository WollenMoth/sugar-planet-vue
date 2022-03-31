<script setup>
import CheckGroup from "@/components/CheckGroup.vue";
import { useFlavourStore } from "@/stores/FlavourStore";
import { useFormStore } from "@/stores/FormStore";

const flavourStore = useFlavourStore();
const formStore = useFormStore();

flavourStore.fill();
</script>

<template>
  <CheckGroup
    id="flavours"
    label="Sabores"
    :items="flavourStore.inStock"
    v-model="formStore.order.cake.flavours"
  />
</template>
