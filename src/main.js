import { createApp } from "vue";

// bootstrap
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";
// axios
import axios from "axios";
import VueAxios from "vue-axios";
// CKEditor
import CKEditor from "@ckeditor/ckeditor5-vue";
// loading
import Loading from "vue3-loading-overlay";
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
// user
import {
	currencyFormat,
	patternFormat,
	calToPercent,
	filterItemTag,
	date,
} from "@/methods/format";
import $httpMessageState from "@/methods/updateMessageState";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.config.globalProperties.$format = {
	currencyFormat,
	patternFormat,
	calToPercent,
	filterItemTag,
	date,
};

// 將 $httpMessageState 加入全域下
app.config.globalProperties.$httpMessageState = $httpMessageState;
app.use(router);
app.use(VueAxios, axios);
app.use(CKEditor);
app.component("LoadingAnimate", Loading);
app.mount("#app");
