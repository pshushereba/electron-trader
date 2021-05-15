import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import axios from "axios";

// Vue.prototype.$axios = axios;

const app = createApp(App).use(store).use(router).mount("#app");
app.config.globalProperties.$axios = axios;
