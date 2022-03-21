<template>
	<router-view></router-view>
</template>
<script>
import emitter from "@/methods/emitter";

export default {
	provide() {
		return {
			emitter,
		};
	},
};
</script>
<style lang="scss">
@import "./assets/styles/all";
</style>
