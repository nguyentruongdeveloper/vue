<template>
  <v-text-field
    :model-value="modelValue"
    :label="label"
    :rules="rules"
    @update:model-value="(v) => $emit('update:modelValue', v)"
  ></v-text-field>
</template>
<script setup lang="ts">
interface Props {
  modelValue: any;
  label?: string;
  rules?: any[];
}
defineProps<Props>();
</script>

<style scoped>
/* Custom styles for the form if necessary */
</style>
