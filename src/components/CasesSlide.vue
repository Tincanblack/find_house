<template>
	<swiper
		class="list-slide"
		:spaceBetween="20"
		:slidesPerView="3.5"
		:freeMode="true"
		:navigation="true"
		:modules="swiper.modules"
		:breakpoints="{
			'@0.00': {
				slidesPerView: 1.5,
			},
			'@1.50': {
				slidesPerView: 3.5,
			},
		}"
	>
		<swiper-slide
			class="col-12 col-md-4"
			v-for="item in filterCases"
			:key="item.id"
		>
			<CaseCard :item="item"></CaseCard>
		</swiper-slide>
	</swiper>
</template>
<script>
import CaseCard from "@/components/CaseCard.vue";
import { Thumbs, Pagination, Navigation, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
export default {
	components: { Swiper, SwiperSlide, CaseCard },
	props: {
		category: {
			type: String,
			default() {
				return "";
			},
		},
		id: {
			type: String,
			default() {
				return "";
			},
		},
		cases: {
			default: [],
		},
	},
	data() {
		return {
			swiper: {
				modules: [Thumbs, Pagination, Navigation, FreeMode],
			},
		};
	},
	computed: {
		filterCases() {
			return this.cases.filter(
				(item) =>
					(this.category === "" || item.category === this.category) &&
					item.id !== this.id
			);
		},
	},
};
</script>
