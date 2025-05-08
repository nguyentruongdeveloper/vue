<template>
  <v-btn @click="startLoading">Tải dữ liệu</v-btn>

  <!-- Overlay loading toàn màn hình -->
  <v-overlay v-if="loading" absolute :z-index="2000" opacity="0.5">
    <v-progress-circular
      indeterminate
      color="primary"
      size="64"
      width="4"
      class="ma-auto"
    />
  </v-overlay>
  <BaseForm ref="formRef">
    <BaseTextField
      v-model="formData.name"
      label="Name"
      :rules="[(v:any) => !!v || 'Name is required']"
    />
    <BaseTextField
      v-model="formData.email"
      label="Email"
      type="email"
      :rules="[
        (v:any) => !!v || 'Email is required',
      ]"
    />
    <BaseTextField
      v-model="formData.password"
      label="Password"
      type="password"
      :rules="[
        (v:any) => !!v || 'Password is required',
      ]"
    />
    <BaseSelect
      v-model="selected"
      :items="fruits"
      item-title="name"
      item-disabled="disabled"
      item-props
      label="Chọn trái cây"
      clearable
      density="compact"
      return-object
    />

    <v-container>
      <!-- Text field to display the selected date -->
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
      >
        <template v-slot:activator="{ props }">
          <v-text-field
            v-model="formattedDate"
            label="Chọn ngày"
            readonly
            v-bind="props"
            append-inner-icon="mdi-calendar"
          />
        </template>

        <v-date-picker v-model="date" @update:modelValue="formatDate" />
      </v-menu>
      <!-- Display the selected date -->
      <p>Ngày đã chọn: {{ date }}</p>
    </v-container>

    <p>Đã chọn: {{ selected }}</p>
    <v-btn color="primary" @click="handleSubmit">Submit</v-btn>
    <v-btn color="secondary" @click="handleSubmit('Submit')">Reset</v-btn>
  </BaseForm>
</template>
<script setup lang="ts">
import { ref } from "vue";
import BaseForm from "./BaseForm.vue";
import BaseTextField from "./BaseTextField.vue";
import BaseSelect from "./BaseSelect.vue";
import { format } from "date-fns";

const menu = ref(false); // Controls the visibility of the v-menu
const date = ref(null); // Store the selected date
const formattedDate = ref(null); // Store the formatted date to display in the text field

// Function to format the selected date
const formatDate = (newDate) => {
  formattedDate.value = newDate ? format(new Date(newDate), "dd/MM/yyyy") : "";
};

const loading = ref(false);

function startLoading() {
  loading.value = true;

  // Giả lập việc tải dữ liệu trong 3 giây
  setTimeout(() => {
    loading.value = false;
  }, 3000);
}

const fruits = [
  { id: 1, name: "Táo", disabled: false },
  { id: 2, name: "Chuối", disabled: false },
  { id: 3, name: "Cam", disabled: true },
];

const selected = ref(null);

type ActionType = "Submit" | "Save";

const formData = ref({
  name: "",
  email: "",
  password: "",
});
const formRef = ref<InstanceType<typeof BaseForm> | null>(null);
const items = ref([
  { id: 1, name: "Apple", disabled: false },
  { id: 2, name: "Banana", disabled: false },
  { id: 3, name: "Test", disabled: false },
]);

const handleSubmit = async (type: ActionType) => {
  if (type === "Submit") {
  }
  const valid = await formRef.value?.validate();
  if (valid) {
    console.log("Form is valid:", formData.value);
  } else {
    console.log("Form is invalid");
  }
};
</script>
<style scoped>
.v-overlay {
  position: fixed !important; /* Đảm bảo overlay bao phủ toàn màn hình */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Màu nền tối với độ trong suốt */
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
