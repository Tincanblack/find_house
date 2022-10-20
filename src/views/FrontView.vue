<template>
	<FrontNav></FrontNav>
	<router-view></router-view>
	<BackToTop></BackToTop>
	<Footer></Footer>
</template>
<script>
import FrontNav from "@/components/FrontNav.vue";
import BackToTop from "@/components/BackToTop.vue";
import Footer from "@/views/Footer.vue";
export default {
	components: {
		FrontNav,
		Footer,
		BackToTop,
	},
};
</script>
<style lang=""></style>
