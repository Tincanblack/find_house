<template lang="">
	<LoadingComponent :isLoading="isLoading"></LoadingComponent>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-8">
				<form id="form" class="form-signin" @submit.prevent="login">
					<h1 class="h3 mb-3 font-weight-normal text-center">
						請先登入
					</h1>
					<div class="form-floating mb-3">
						<input
							type="email"
							class="form-control"
							id="username"
							v-model="user.username"
							placeholder="name@example.com"
							required
							autofocus
						/>
						<label for="username">Email address</label>
					</div>
					<div class="form-floating">
						<input
							type="password"
							class="form-control"
							id="password"
							v-model="user.password"
							placeholder="Password"
							required
						/>
						<label for="password">Password</label>
					</div>
					<button
						class="btn btn-lg btn-primary w-100 mt-3"
						type="submit"
					>
						登入
					</button>
					<p class="mt-5 mb-3 text-muted text-center">
						&copy; 2021~∞ - 六角學院
					</p>
				</form>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			isLoading: false,
			user: { username: "", password: "" },
		};
	},
	inject: ["emitter"],
	methods: {
		login() {
			const formData = { ...this.user };
			this.isLoading = true;
			this.$http
				.post(`${import.meta.env.VITE_URL}/admin/signin`, formData)
				.then((res) => {
					const { token, expired } = res.data; // 將token與過期時間寫入cookie中
					document.cookie = `user_token=${token};expires=${new Date(
						expired
					)}; path=/`;
					this.isLoading = false;
					this.$router.push("/admin");
				})
				.catch((error) => {
					// 跳出錯誤訊息
					this.isLoading = false;
					this.$httpMessageState(error.response, "登入");
				});
		},
	},
};
</script>
