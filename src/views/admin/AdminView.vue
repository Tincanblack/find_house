<template>
	<main>
		<AdminNav @emitLogOut="logOut"></AdminNav>
		<RouterView></RouterView>
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
	methods: {
		logOut() {
			this.$http
				.post(`${import.meta.env.VITE_URL}/logout`)
				.then((res) => {
					this.isCheckLogin = false;
					this.$httpMessageState(res, "登出");
					this.$router.push("/login");
				})
				.catch((error) => {
					this.$httpMessageState(error.response, "錯誤訊息");
				});
		},
	},
	created() {
		// 將token寫入至headers
		const token = document.cookie.replace(
			/(?:(?:^|.*;\s*)user_token\s*=\s*([^;]*).*$)|^.*$/,
			"$1"
		);

		this.$http.defaults.headers.common.Authorization = `${token}`;
		this.$http
			.post(`${import.meta.env.VITE_URL}/api/user/check`)
			.then((res) => {
				this.$httpMessageState(res, "登入");
				this.isCheckLogin = true;
			})
			.catch((error) => {
				// 如果無登入情況時或是驗證失敗會導向至登入頁並重新登入;
				this.$router.push("/login");
				this.$httpMessageState(error.response, "錯誤訊息");
			});
	},
};
</script>
