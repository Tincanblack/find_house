<template lang="">
	<AdminNav></AdminNav>
	<ToastMessages></ToastMessages>
	<div class="page-content-wrapper">
		<router-view></router-view>
	</div>
</template>
<script>
import AdminNav from "@/components/AdminNav.vue";
import ToastMessages from "@/components/ToastMessages";

export default {
	components: {
		AdminNav,
		ToastMessages,
	},
};
</script>
<style lang=""></style>
