<template>
	<main>
		<AdminNav></AdminNav>
		<router-view></router-view>
	</main>
</template>
<script>
import AdminNav from "@/components/AdminNav.vue";
export default {
	components: {
		AdminNav,
	},
	data() {
		return { isCheckLogin: false };
	},
	created() {
		// 將token寫入至headers
		const token = document.cookie.replace(
			/(?:(?:^|.*;\s*)user_token\s*=\s*([^;]*).*$)|^.*$/,
			"$1"
		);

		this.$http.defaults.headers.common.Authorization = `${token}`;
		this.$http
			.post(`${process.env.VUE_APP_URL}/api/user/check`)
			.then((res) => {
				this.$httpMessageState(res, "登入");
				this.isCheckLogin = true;
			})
			.catch((err) => {
				// 如果無登入情況時或是驗證失敗會導向至登入頁並重新登入;
				this.$router.push("/login");
				this.$httpMessageState(err.response, "錯誤訊息");
			});
	},
};
</script>
