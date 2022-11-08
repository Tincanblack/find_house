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
					<RouterLink to="/cases" class="breadcrumb-link text-decoration-none"
						>找房</RouterLink
					>
				</li>
				<li class="breadcrumb-item" v-show="$route.query.category || product.category">
					<RouterLink
						class="breadcrumb-link text-decoration-none"
						:to="{
							path: `/cases?category=${product.category}`,
							query: { category: product.category },
						}"
					>
						{{ $route.query.category || product.category }}
					</RouterLink>
				</li>
				<li class="breadcrumb-item fw-bold" v-show="product.title">
					{{ product.title }}
				</li>
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
