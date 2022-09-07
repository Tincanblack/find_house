<template lang="">
	<nav
		class="navbar navbar-expand-md sticky-top navbar-light bg-white"
		:class="[navStyle.shadow]"
	>
		<div class="container">
			<a class="navbar-brand" href="#"
				><img src="../assets/logo.svg" alt="心儀房屋" width="140"
			/></a>
			<button
				class="navbar-toggler collapsed"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarCollapse"
				aria-controls="navbarCollapse"
				aria-expanded="true"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="navbar-collapse collapse" id="navbarCollapse" style="">
				<ul
					class="navbar-nav flex-md-row ms-md-auto align-items-md-center"
				>
					<li class="nav-item">
						<RouterLink class="nav-link" to="/cases"
							>找房</RouterLink
						>
					</li>
					<li class="nav-item">
						<RouterLink class="nav-link" to="/collections"
							>收藏名單
						</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink class="nav-link" to="/news"
							>房訊新知</RouterLink
						>
					</li>
					<li class="nav-item">
						<RouterLink class="nav-link" to="/reserve"
							>查詢預約</RouterLink
						>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
<script>
export default {
	data() {
		return {
			navStyle: {
				shadow: "",
			},
		};
	},
	methods: {
		navScrollShadow() {
			const windowY = window.scrollY;
			if (windowY > 30) {
				this.navStyle.shadow = "shadow-sm";
			} else if (windowY < 30) {
				this.navStyle.shadow = "";
			}
		},
	},
	mounted() {
		window.addEventListener("scroll", this.navScrollShadow);
	},
};
</script>
<style lang=""></style>
