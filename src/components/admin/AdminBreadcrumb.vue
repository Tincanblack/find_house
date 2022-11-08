<template>
	<nav
		class="p-3 bg-white shadow-sm rounded mb-4"
		style="--bs-breadcrumb-divider: '\F285'"
		aria-label="breadcrumb"
	>
		<ol class="breadcrumb text-dark">
			<li class="breadcrumb-item">
				<RouterLink to="/admin/" class="breadcrumb-link text-decoration-none"
					>首頁</RouterLink
				>
			</li>
			<li v-if="$route.name === 'casesManage'" class="breadcrumb-item">
				<RouterLink to="/admin/cases" class="breadcrumb-link text-decoration-none"
					>案件管理
				</RouterLink>
			</li>
			<li v-else-if="$route.name === 'newsManage'" class="breadcrumb-item">
				<RouterLink to="/admin/news" class="breadcrumb-link text-decoration-none"
					>房訊管理</RouterLink
				>
			</li>
			<li v-else-if="$route.name === 'reservesManage'" class="breadcrumb-item">
				<RouterLink to="/admin/reserves" class="breadcrumb-link text-decoration-none"
					>諮詢表單管理</RouterLink
				>
			</li>
		</ol>
	</nav>
</template>
