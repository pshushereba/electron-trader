import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
// import axios from "axios";

// Vue.prototype.$axios = axios;

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
app.config.globalProperties.$store = store;
