import Vue, { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import axios from "axios";

Vue.prototype.$axios = axios;

createApp(App).use(store).use(router).mount("#app");
