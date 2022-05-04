<template>
	<swiper
		:effect="'fade'"
		:slides-per-view="1"
		:loop="true"
		:modules="modules"
		:autoplay="{
			delay: 3000,
			stopOnLastSlide: false,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		}"
	>
		<swiper-slide
			><img
				class="img-fluid"
				src="https://events.sinyi.com.tw/life-drawing-game/?utm_source=sinyi&utm_medium=banner&utm_campaign=website"
				alt=""
			/>
		</swiper-slide>
		<swiper-slide
			><img
				class="img-fluid"
				src="https://res.sinyi.com.tw/a_d_sense/index_buy_20210825133411.jpg"
				alt=""
			/>
		</swiper-slide>
		<swiper-slide
			><img
				class="img-fluid"
				src="https://res.sinyi.com.tw/a_d_sense/index_buy_20210825134712.jpg"
				alt=""
			/>
		</swiper-slide>
	</swiper>
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
			modules: [EffectFade, Autoplay],
		};
	},
};
</script>
<style lang=""></style>
