<template>
	<ToastMessages></ToastMessages>
	<router-view></router-view>
</template>
<script>
import emitter from "@/methods/emitter";
import ToastMessages from "@/components/ToastMessages";

export default {
	components: {
		ToastMessages,
	},
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
