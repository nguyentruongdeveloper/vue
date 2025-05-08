<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  modelValue: [Object, String, Number, null],
  items: Array,
  itemTitle: String,
  itemValue: String,
  label: String,
  itemDisabled: String,
  itemProps: String,
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <v-select
    v-bind="$attrs"
    :items="items"
    :item-title="itemTitle"
    :item-value="itemValue"
    :item-disabled="itemDisabled"
    :item-props="itemProps"
    :label="label"
    :model-value="modelValue"
    @update:modelValue="emit('update:modelValue', $event)"
  />
</template>
