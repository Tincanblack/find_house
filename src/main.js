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

// vee-validate
import { Field, Form, ErrorMessage, defineRule, configure } from "vee-validate";
import AllRules from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

// user
import {
	currencyFormat,
	patternFormat,
	calToPercent,
	filterItemTag,
	dateFormat,
	publicDateFormat,
} from "@/methods/format";
import $httpMessageState from "@/methods/updateMessageState";
import App from "./App.vue";
import router from "./router";

Object.keys(AllRules).forEach((rule) => {
	defineRule(rule, AllRules[rule]);
});

configure({
	generateMessage: localize({ zh_TW: zhTW }),
	validateOnInput: true,
});

setLocale("zh_TW");

const app = createApp(App);

app.config.globalProperties.$format = {
	currencyFormat,
	patternFormat,
	calToPercent,
	filterItemTag,
	dateFormat,
	publicDateFormat,
};

// 將 $httpMessageState 加入全域下
app.config.globalProperties.$httpMessageState = $httpMessageState;
app.use(router);
app.use(VueAxios, axios);
app.use(CKEditor);
app.component("LoadingAnimate", Loading);
app.component("VForm", Form);
app.component("VField", Field);
app.component("ErrorMessage", ErrorMessage);
app.mount("#app");
