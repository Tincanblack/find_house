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
			<routerLink
				class="card cases-card text-decoration-none rounded-0 text-dark"
				:to="`/case/${item.id}`"
			>
				<div class="card-image">
					<div class="card-tag">
						<div
							class="tag"
							v-if="item.origin_price !== item.price"
						>
							<span
								v-if="item.origin_price && item.price"
								class="badge tag__element--sec"
							>
								<i class="bi bi-arrow-down"></i>
								{{
									$format.calToPercent(
										item.origin_price,
										item.price,
										"discount"
									)
								}}
							</span>
						</div>
						<div
							class="tag"
							v-for="tag in $format.filterItemTag(item)"
							:key="tag"
						>
							<span
								class="badge tag__element"
								:class="{
									'tag__element--third': tag === '新上架',
									'tag__element--fourth': tag === '低總價',
									'tag__element--main': tag === '店長推薦',
								}"
								>{{ tag }}</span
							>
						</div>
					</div>
					<div class="card-price">
						<span
							class="card-price__price card-price__price--selling"
						>
							{{ $format.currencyFormat(item.price) }}
							<span class="card-price__price-unit">萬</span>
						</span>
						<small
							v-if="item.origin_price !== item.price"
							class="card-price__price card-price__price--origin fs-6"
							><del
								>{{
									$format.currencyFormat(item.origin_price)
								}}
								萬</del
							></small
						>
					</div>
					<span class="card-image-hover__title"> 查看案件內容 </span>
					<img class="img-fluid" :src="item.imageUrl" alt="" />
				</div>
				<div class="card-body">
					<h5 class="card-title text-center text-truncate fw-bold">
						{{ item.title }}
					</h5>
					<p class="card-text text-center fs-6">
						<span class="card-text__item">
							<small>{{ item.squareFeet }}坪</small></span
						>
						<span class="card-text__item">
							<small>{{
								$format.patternFormat(item.pattern)
							}}</small>
						</span>
						<span class="card-text__item">
							<small v-if="item.houseAge !== ''">
								{{ item.houseAge }}年</small
							>
							<small v-else>預售</small>
						</span>
					</p>
				</div>
			</routerLink>
		</swiper-slide>
	</swiper>
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
		category: {
			type: String,
			default() {
				return "";
			},
		},
		// id: {
		// 	type: String,
		// 	default() {
		// 		return "";
		// 	},
		// },
	},
	data() {
		return {
			cases: [],
			swiper: {
				modules: [Thumbs, Pagination, Navigation, FreeMode],
			},
		};
	},
	methods: {
		getCasesList() {
			const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/all`;
			this.$http
				.get(url)
				.then((res) => {
					this.cases = res.data.products;
				})
				.catch((error) => {
					this.$httpMessageState(error.response, "錯誤訊息");
				});
		},
	},
	computed: {
		filterCases() {
			return this.cases.filter((item) => {
				this.category === "" || item.category === this.category;
			});
		},
	},
	mounted() {
		this.getCasesList();
	},
};
</script>
