<template lang="">
	<div
		class="sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
		:class="{ isOpen: sideBarOpen }"
	>
		<header class="position-relative">
			<router-link
				to="/admin"
				class="d-flex align-items-center mb-md-0 me-md-auto text-white text-decoration-none"
			>
				<img
					class="m-2"
					src="../assets/logo_icon.svg"
					alt="My Happy SVG"
					style="width: 40px; height: 40px"
				/>
				<span class="nav-text fs-4 fw-bold">後臺管理</span>
			</router-link>
			<div
				class="bx bx-chevron-right nav-toggle"
				@click="sideBarOpen = !sideBarOpen"
			>
				<span class="nav-toggle-bar"></span>
				<span class="nav-toggle-bar"></span>
				<span class="nav-toggle-bar"></span>
			</div>
		</header>
		<hr />
		<ul class="nav nav-pills flex-column mb-auto">
			<li class="nav-item d-flex">
				<router-link
					class="nav-link text-white"
					to="/admin/cases"
					title="案件管理"
				>
					<i class="nav-icon bi bi-folder2-open me-3"></i>
					<span class="nav-text">案件管理</span>
				</router-link>
			</li>
			<li class="nav-item d-flex">
				<router-link
					class="nav-link text-white"
					to="/admin/news"
					title="房訊管理"
				>
					<i class="nav-icon bi bi-newspaper me-3"></i>
					<span class="nav-text">房訊管理</span>
				</router-link>
			</li>
			<li class="nav-item d-flex">
				<router-link
					class="nav-link text-white"
					to="/admin/reserves"
					title="預約表單管理"
				>
					<i class="nav-icon bi bi-pencil-square me-3"></i>
					<span class="nav-text">預約表單管理</span>
				</router-link>
			</li>
			<li class="nav-item d-flex">
				<router-link
					class="nav-link text-white"
					to="/admin/coupons"
					title="優惠券管理"
				>
					<i class="nav-icon bi bi-ticket me-3"></i>
					<span class="nav-text">優惠券管理</span>
				</router-link>
			</li>
		</ul>
		<hr />
		<ul class="nav nav-pills flex-column">
			<li class="nav-item d-flex">
				<a class="nav-link text-danger" href="#">
					<i class="nav-icon bi bi-box-arrow-left me-3"></i>
					<span class="nav-text nav-logout">登出</span>
				</a>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	data() {
		return {
			sideBarOpen: true,
		};
	},
};
</script>
