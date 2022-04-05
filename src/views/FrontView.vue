<template lang="">
	<FrontNav></FrontNav>
	<router-view></router-view>
	<Footer></Footer>
</template>
<script>
import FrontNav from "@/components/FrontNav";
import Footer from "@/views/Footer";
export default {
	components: {
		FrontNav,
		Footer,
	},
};
</script>
<style lang=""></style>
