<template>
	<FrontNav></FrontNav>
	<router-view></router-view>
	<BackToTop></BackToTop>
	<Footer></Footer>
</template>
<script>
import FrontNav from "@/components/FrontNav";
import BackToTop from "@/components/BackToTop";
import Footer from "@/views/Footer";
export default {
	components: {
		FrontNav,
		Footer,
		BackToTop,
	},
};
</script>
<style lang=""></style>
