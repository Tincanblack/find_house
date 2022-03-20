import { createApp } from "vue";

// bootstrap
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
// axios
import axios from "axios";
import VueAxios from "vue-axios";
// loading
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
// user
import { currency } from "@/methods/formatUnit";
import $httpMessageState from "@/methods/updateMessageState";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.config.globalProperties.$formatUnit = {
	currency,
};

// 將 $httpMessageState 加入全域下
app.config.globalProperties.$httpMessageState = $httpMessageState;
app.use(router);
app.use(VueAxios, axios);
app.component("LoadingAnimate", Loading);
app.mount("#app");
