<template>
  <v-app>
    <!-- Nút để kích hoạt gọi API -->
    <v-btn @click="fetchData">Tải dữ liệu từ API</v-btn>

    <!-- Container chính, chứa nội dung cần làm mờ -->
    <v-container :style="{ opacity: loading ? 0.3 : 1 }">
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>Thông tin sản phẩm</v-card-title>
            <v-card-subtitle>{{ productInfo }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-progress-circular
      indeterminate
      color="primary"
      size="64"
      width="4"
      class="ma-auto"
      v-if="loading"
    />

    <!-- Overlay mờ khi đang tải dữ liệu -->
    <!-- <v-overlay v-if="loading" absolute :z-index="2000" opacity="0.5">
      <v-progress-circular
        indeterminate
        color="primary"
        size="64"
        width="4"
        class="ma-auto"
      />
    </v-overlay> -->
  </v-app>
</template>

<script setup>
import { ref } from "vue";

// Trạng thái loading để hiển thị spinner và làm mờ container
const loading = ref(false);

// Dữ liệu sản phẩm
const productInfo = ref("");

// Hàm giả lập gọi API
async function fetchData() {
  loading.value = true;

  // Giả lập gọi API (thực tế bạn có thể thay thế bằng axios hoặc fetch)
  try {
    const response = await new Promise((resolve) =>
      setTimeout(() => resolve({ data: "Sản phẩm A, Sản phẩm B" }), 3000)
    );

    // Lưu kết quả vào productInfo
    productInfo.value = response.data;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
  } finally {
    loading.value = false; // Ẩn spinner và làm rõ container sau khi gọi API xong
  }
}
</script>

<style scoped>
.v-container {
  position: relative;
}

.v-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}
</style>
