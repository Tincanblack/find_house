<template lang="">
	<AdminNav></AdminNav>
	<div class="page-content-wrapper">
		<router-view></router-view>
	</div>
</template>
<script>
import AdminNav from "@/components/AdminNav.vue";
export default {
	components: {
		AdminNav,
	},
};
</script>
<style lang=""></style>
