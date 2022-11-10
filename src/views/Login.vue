<template>
	<LoadingComponent :isLoading="isLoading"></LoadingComponent>
	<section class="form-login w-100 vh-100">
		<div class="container-fluid h-custom">
			<div class="row d-flex justify-content-center align-items-center h-100">
				<div class="col-lg-6">
					<form id="form" class="form-signin" @submit.prevent="login">
						<h3 class="fw-normal mb-2 pb-3">登入後台</h3>
						<div class="form-outline mb-4">
							<input
								type="email"
								id="username"
								class="form-control form-control-lg"
								:class="{ active: user.username !== '' }"
								v-model="user.username"
								required
							/>
							<label class="form-label" for="username">帳號 (Email)</label>
							<div class="form-notch">
								<div class="form-notch-leading" style="width: 2%"></div>
								<div class="form-notch-middle" style="width: 25%"></div>
								<div class="form-notch-trailing"></div>
							</div>
						</div>
						<div class="form-outline mb-3">
							<input
								type="password"
								id="password"
								class="form-control form-control-lg"
								:class="{ active: user.password !== '' }"
								v-model="user.password"
								required
							/>
							<label class="form-label" for="password">密碼 password</label>
							<div class="form-notch">
								<div class="form-notch-leading" style="width: 2%"></div>
								<div class="form-notch-middle" style="width: 30%"></div>
								<div class="form-notch-trailing"></div>
							</div>
						</div>
						<div class="text-center text-lg-start mt-4 pt-2">
							<button type="submit" class="btn btn-primary btn-lg w-100">登入</button>
						</div>
					</form>
				</div>
				<div class="col-lg-6 px-0 d-none d-lg-block">
					<img
						src="../assets/images/login_img.jpg"
						alt="Login image"
						class="w-100 vh-100"
						style="object-fit: cover; object-position: left"
					/>
				</div>
			</div>
		</div>
		<div
			class="d-flex flex-column flex-md-row justify-content-center py-3 px-3 bg-primary position-relative"
			style="z-index: 2"
		>
			<div class="text-white mb-3 mb-md-0">
				Copyright 2022. 心儀房屋 found_houses All rights reserved.
			</div>
		</div>
	</section>
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
					document.cookie = `user_token=${token};expires=${new Date(expired)}; path=/`;
					this.$router.push("/admin");
				})
				.catch((error) => {
					// 跳出錯誤訊息
					this.isLoading = false;
					this.$httpMessageState(error.response, "登入");
				});
		},
	},
	watch: {
		username() {
			this.user.username;
		},
	},
};
</script>
<style>
.divider:after,
.divider:before {
	content: "";
	flex: 1;
	height: 1px;
	background: #eee;
}

.h-custom {
	height: calc(100% - 54.5px);
}

@media (max-width: 450px) {
	.h-custom {
		height: 100%;
	}
}
</style>
