<template>
	<nav
		class="py-3 bg-light"
		style="--bs-breadcrumb-divider: '\F285'"
		aria-label="breadcrumb"
	>
		<div class="container">
			<ol class="breadcrumb text-dark">
				<li class="breadcrumb-item">
					<RouterLink
						to="/"
						class="breadcrumb-link text-decoration-none"
						>首頁</RouterLink
					>
				</li>
				<li class="breadcrumb-item">
					<RouterLink
						:to="{
							path: '/cases',
							query: { category: '全部' },
						}"
						class="breadcrumb-link text-decoration-none"
						>找房</RouterLink
					>
				</li>
				<li class="breadcrumb-item">
					<RouterLink
						class="breadcrumb-link text-decoration-none"
						:to="{
							path: '/cases',
							query: { category: product.category },
						}"
					>
						{{ product.category }}
					</RouterLink>
				</li>
				<li class="breadcrumb-item">{{ product.title }}</li>
			</ol>
		</div>
	</nav>
</template>
<script>
export default {
	props: {
		product: {
			type: Object,
			default() {
				return {};
			},
		},
	},
};
</script>
<style lang=""></style>
