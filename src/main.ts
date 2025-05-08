// main.js (Vue 3)
import { createApp } from "vue";
import App from "./App.vue";

// Vuetify styles
import "vuetify/styles";

// Import everything from Vuetify
import * as vuetifyComponents from "vuetify/components";

// Import Vuetify core
import { createVuetify } from "vuetify";
import DateFnsAdapter from "@date-io/date-fns";
import enUS from "date-fns/locale/en-US";
import svSE from "date-fns/locale/sv";

// Create Vuetify instance with all components
const vuetify = createVuetify({
  date: {
    adapter: DateFnsAdapter,
    locale: {
      en: enUS,
      sv: svSE,
    },
    // Optional default locale
  },
  components: vuetifyComponents,
});

const app = createApp(App);

// Use Vuetify in the app
app.use(vuetify);

// Mount the app
app.mount("#app");
