<template>
	<Swiper
		:effect="'fade'"
		:slidesPerView="1"
		:loop="true"
		:modules="swiper.modules"
		:autoplay="{
			delay: 3000,
			stopOnLastSlide: false,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		}"
	>
		<SwiperSlide v-for="(banner, index) in banners" :key="index"
			><img class="img-fluid" :src="banner" alt="" />
		</SwiperSlide>
	</Swiper>
</template>
<script>
import { EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
export default {
	components: { Swiper, SwiperSlide },
	data() {
		return {
			swiper: { modules: [EffectFade, Autoplay] },
			banners: [
				"https://res.sinyi.com.tw/a_d_sense/index_buy_20210825133411.jpg",
				"https://res.sinyi.com.tw/a_d_sense/index_buy_20210825134712.jpg",
				"https://res.sinyi.com.tw/a_d_sense/index_buy_20210825133411.jpg",
			],
		};
	},
};
</script>
<style lang=""></style>
