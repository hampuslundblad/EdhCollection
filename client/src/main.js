import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/router";
import { createPinia } from "pinia";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Theme
import { customLight } from "./plugins/vuetifyTheme";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: customLight,
  },
});

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.use(vuetify);
app.mount("#app");
