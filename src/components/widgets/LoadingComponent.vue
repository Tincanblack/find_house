<template>
	<div class="loading" :class="{ 'is-active': isLoading }">
		<div class="loading-inner">
			<div class="loading-logo">
				<img
					class="m-2"
					src="../../assets/logo_icon.svg"
					alt="My Happy SVG"
					style="width: 100px; height: 100px"
				/>
			</div>
			<div class="loading-dot-inner">
				<div class="loading-dot"></div>
				<div class="loading-dot"></div>
				<div class="loading-dot"></div>
				<div class="loading-dot"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		isLoading: {
			type: Boolean,
			default: false,
		},
	},
};
</script>
