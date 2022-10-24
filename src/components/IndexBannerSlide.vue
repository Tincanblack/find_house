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
		<SwiperSlide
			><img
				class="img-fluid"
				src="https://res.sinyi.com.tw/a_d_sense/index_buy_20210825133411.jpg"
				alt=""
			/>
		</SwiperSlide>
		<SwiperSlide
			><img
				class="img-fluid"
				src="https://res.sinyi.com.tw/a_d_sense/index_buy_20210825134712.jpg"
				alt=""
			/>
		</SwiperSlide>
		<SwiperSlide
			><img
				class="img-fluid"
				src="https://res.sinyi.com.tw/a_d_sense/index_buy_20210825133411.jpg"
				alt=""
			/>
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
		};
	},
};
</script>
<style lang=""></style>
