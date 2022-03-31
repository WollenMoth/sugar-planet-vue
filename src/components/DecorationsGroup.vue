<script setup>
import CheckGroup from "@/components/CheckGroup.vue";
import { useDecorationStore } from "@/stores/DecorationStore";
import { useFormStore } from "@/stores/FormStore";

const decorationStore = useDecorationStore();
const formStore = useFormStore();

decorationStore.fill();
</script>

<template>
  <CheckGroup
    id="decorations"
    label="Decoraciones"
    :items="decorationStore.inStock"
    v-model="formStore.order.cake.decorations"
  />
</template>
