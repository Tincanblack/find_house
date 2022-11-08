<template>
	<button
		:class="scrollY < 50 ? 'd-none' : ''"
		class="side-navigation__button--to-top"
		@click="backToTop"
	>
		<div class="bg-primary text-white px-3 py-2 rounded-1">
			<i class="bi bi-chevron-up"></i>
		</div>
	</button>
</template>
<script>
export default {
	data() {
		return {
			scrollY: 0,
		};
	},
	methods: {
		watchScroll() {
			this.scrollY = window.scrollY;
		},
		backToTop() {
			document.documentElement.scrollTop = 0;
		},
	},
	mounted() {
		window.addEventListener("scroll", this.watchScroll);
	},
};
</script>
