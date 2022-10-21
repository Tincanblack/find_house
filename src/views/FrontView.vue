<template>
	<FrontNav></FrontNav>
	<router-view></router-view>
	<BackToTop></BackToTop>
	<FooterBar></FooterBar>
</template>
<script>
import FrontNav from "@/components/FrontNav.vue";
import BackToTop from "@/components/BackToTop.vue";
import FooterBar from "@/views/Footer.vue";
export default {
	components: {
		FrontNav,
		FooterBar,
		BackToTop,
	},
};
</script>
<style lang=""></style>
