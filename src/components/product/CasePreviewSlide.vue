<template>
	<div class="case-slide">
		<swiper
			class="carousel-slide"
			:modules="swiper.modules"
			:navigation="true"
			:pagination="{
				clickable: true,
				type: 'fraction',
			}"
			:thumbs="{ swiper: swiper.thumbsSwiper }"
		>
			<swiper-slide
				v-for="(image, index) in product.imagesUrl"
				:key="`carouselImage_${index}`"
			>
				<div
					class="carousel-slide__image"
					style="background-size: cover; background-position: center"
					:style="{
						backgroundImage: `url(${image})`,
					}"
				></div>
			</swiper-slide>
		</swiper>
		<swiper
			class="thumbnail-slide"
			@swiper="setThumbsSwiper"
			:spaceBetween="5"
			:slidesPerView="4.5"
			:freeMode="true"
			:navigation="true"
			:watchSlidesProgress="true"
			:modules="swiper.modules"
			:breakpoints="{
				'@0.00': {
					slidesPerView: 3.5,
				},
				'@1.50': {
					slidesPerView: 4.5,
				},
			}"
		>
			<swiper-slide
				class="slide-item"
				v-for="(image, index) in product.imagesUrl"
				:key="`thumbnailImg_${index}`"
			>
				<div
					class="thumbnail-slide__image"
					style="background-size: cover; background-position: center"
					:style="{
						backgroundImage: `url(${image})`,
					}"
				></div>
			</swiper-slide>
		</swiper>
	</div>
</template>
<script>
import { Thumbs, Pagination, Navigation, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
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
			swiper: {
				thumbsSwiper: null,
				modules: [Thumbs, Pagination, Navigation, FreeMode],
			},
		};
	},
	methods: {
		setThumbsSwiper(swiper) {
			this.swiper.thumbsSwiper = swiper;
		},
	},
};
</script>
