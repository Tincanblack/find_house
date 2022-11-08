<template>
	<nav
		class="py-3 bg-light breadcrumb-wrapper"
		style="--bs-breadcrumb-divider: '\F285'"
		aria-label="breadcrumb"
	>
		<div class="container">
			<ol class="breadcrumb text-dark">
				<li class="breadcrumb-item">
					<RouterLink to="/" class="breadcrumb-link text-decoration-none"
						>首頁</RouterLink
					>
				</li>
				<li class="breadcrumb-item">
					<RouterLink to="/news" class="breadcrumb-link text-decoration-none"
						>房訊新知</RouterLink
					>
				</li>
				<li class="breadcrumb-item" v-show="article.title">
					{{ article.title }}
				</li>
			</ol>
		</div>
	</nav>
</template>
<script>
export default {
	props: {
		article: {
			type: Object,
			default() {
				return {};
			},
		},
	},
};
</script>
