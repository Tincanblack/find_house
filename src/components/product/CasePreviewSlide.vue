<template>
	<div class="case-slide">
		<Swiper
			class="carousel-slide"
			:navigation="true"
			:modules="modules"
			:thumbs="{ swiper: thumbsSwiper }"
			:pagination="{
				clickable: true,
				type: 'fraction',
			}"
		>
			<SwiperSlide
				v-for="(image, index) in product.imagesUrl"
				:key="index"
			>
				<div
					class="carousel-slide__image"
					style="background-size: cover; background-position: center"
					:style="{
						backgroundImage: `url(${image})`,
					}"
				></div>
			</SwiperSlide>
		</Swiper>
		<Swiper
			class="thumbnail-slide"
			@swiper="setThumbsSwiper"
			:spaceBetween="5"
			:slidesPerView="4.5"
			:watchSlidesVisibility="true"
			:watchSlidesProgress="true"
			:breakpoints="{
				'@0.00': {
					slidesPerView: 3.5,
				},
				'@1.50': {
					slidesPerView: 4.5,
				},
			}"
		>
			<SwiperSlide
				class="slide-item"
				v-for="(image, index) in product.imagesUrl"
				:key="index"
			>
				<div
					class="thumbnail-slide__image"
					style="background-size: cover; background-position: center"
					:style="{
						backgroundImage: `url(${image})`,
					}"
				></div>
			</SwiperSlide>
		</Swiper>
	</div>
</template>
<script>
import { Thumbs, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
export default {
	components: { Swiper, SwiperSlide },
	props: {
		product: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	data() {
		return {
			thumbsSwiper: null,
			modules: [Thumbs, Pagination, Navigation],
		};
	},
	methods: {
		setThumbsSwiper(swiper) {
			this.thumbsSwiper = swiper;
		},
	},
};
</script>
