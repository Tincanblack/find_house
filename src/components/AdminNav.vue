<template lang="">
	<div
		class="sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark shadow-sm"
		:class="{ isOpen: sideBarOpen }"
	>
		<header class="position-relative">
			<RouterLink
				to="/admin/"
				class="d-flex align-items-center mb-md-0 me-md-auto text-white text-decoration-none"
			>
				<img
					class="m-2"
					src="../assets/logo_icon.svg"
					alt="My Happy SVG"
					style="width: 40px; height: 40px"
				/>
				<span class="nav-text fs-4 fw-bold">後臺管理</span>
			</RouterLink>
			<div
				class="bx bx-chevron-right nav-toggle shadow-sm"
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
				<RouterLink class="nav-link" to="/admin/cases" title="案件管理">
					<i class="nav-icon bi bi-folder2-open me-3"></i>
					<span class="nav-text">案件管理</span>
					<span class="nav-tooltip">案件管理</span>
				</RouterLink>
			</li>
			<li class="nav-item d-flex">
				<RouterLink class="nav-link" to="/admin/news" title="房訊管理">
					<i class="nav-icon bi bi-newspaper me-3"></i>
					<span class="nav-text">房訊管理</span>
					<span class="nav-tooltip">房訊管理</span>
				</RouterLink>
			</li>
			<li class="nav-item d-flex">
				<RouterLink class="nav-link" to="/admin/reserves" title="預約表單管理">
					<i class="nav-icon bi bi-pencil-square me-3"></i>
					<span class="nav-text">預約表單管理</span>
					<span class="nav-tooltip">預約表單管理</span>
				</RouterLink>
			</li>
		</ul>
		<hr />
		<ul class="nav nav-pills flex-column">
			<li class="nav-item d-flex">
				<RouterLink class="nav-link" to="/admin/imageUpload">
					<i class="nav-icon bi bi-card-image me-3"></i>
					<span class="nav-text">圖片上傳</span>
					<span class="nav-tooltip">圖片上傳</span>
				</RouterLink>
			</li>
		</ul>
		<hr />
		<ul class="nav nav-pills flex-column">
			<li class="nav-item d-flex">
				<RouterLink class="nav-link" to="/">
					<i class="nav-icon bi bi-house me-3"></i>
					<span class="nav-text nav-logout">回到前台</span>
					<span class="nav-tooltip">回到前台</span>
				</RouterLink>
			</li>
			<li class="nav-item d-flex">
				<button
					type="button"
					class="nav-link text-danger"
					href="#"
					@click="this.$emit('emitLogOut')"
				>
					<i class="nav-icon bi bi-box-arrow-left me-3"></i>
					<span class="nav-text nav-logout">登出</span>
					<span class="nav-tooltip">登出</span>
				</button>
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
