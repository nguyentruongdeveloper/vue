<template>
  <v-form v-model="isValid" ref="formRef">
    <v-container>
      <slot></slot>
    </v-container>
  </v-form>
</template>
<script setup lang="ts">
import { ref, defineComponent } from "vue";
const isValid = ref(false);
const formRef = ref<any>(null);

// Form reset logic
const resetForm = () => {
    formRef.value.reset(); // Reset form fields and validation state
};

function validate() {
  return formRef.value.validate();
}
function reset() {
  return formRef.value.reset();
}
defineExpose({
  validate,
  reset,
});
</script>

<style scoped>
/* Custom styles for the form if necessary */
</style>
