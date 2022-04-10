<template lang="">
	<swiper
		effect="fade"
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
				src="https://via.placeholder.com/1920x750?text=1"
				alt=""
			/>
		</swiper-slide>
		<swiper-slide
			><img
				class="img-fluid"
				src="https://via.placeholder.com/1920x750?text=2"
				alt=""
			/>
		</swiper-slide>
		<swiper-slide
			><img
				class="img-fluid"
				src="https://via.placeholder.com/1920x750?text=3"
				alt=""
			/>
		</swiper-slide>
	</swiper>
	<section class="inxdex-feature text-center py-5 d-none d-lg-block bg-light">
		<div class="container">
			<h2 class="mb-3">想要找什麼樣類型的房子?</h2>
			<div class="row">
				<div class="col-lg-3">
					<router-link
						class="index-feature-card text-dark text-decoration-none"
						to=""
					>
						<div class="index-feature-image shadow-sm">
							<img
								src="https://via.placeholder.com/125x125"
								alt=""
							/>
							<h5 class="index-feature-card__title">公寓</h5>
						</div>
					</router-link>
				</div>
				<div class="col-lg-3">
					<router-link
						class="index-feature-card text-dark text-decoration-none"
						to=""
					>
						<div class="index-feature-image shadow-sm">
							<img
								src="https://via.placeholder.com/125x125"
								alt=""
							/>
							<h5 class="index-feature-card__title">別墅</h5>
						</div>
					</router-link>
				</div>
				<div class="col-lg-3">
					<router-link
						class="index-feature-card text-dark text-decoration-none"
						to=""
					>
						<div class="index-feature-image shadow-sm">
							<img
								src="https://via.placeholder.com/125x125"
								alt=""
							/>
							<h5 class="index-feature-card__title">華廈</h5>
						</div>
					</router-link>
				</div>
				<div class="col-lg-3">
					<router-link
						class="index-feature-card text-dark text-decoration-none"
						to=""
					>
						<div class="index-feature-image shadow-sm">
							<img
								src="https://via.placeholder.com/125x125"
								alt=""
							/>
							<h5 class="index-feature-card__title">大樓</h5>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</section>
	<section class="index-cases py-5">
		<div class="container">
			<div class="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-2">
				<div class="col" v-for="item in cases" :key="item.id">
					<router-link
						class="card text-decoration-none rounded-0 text-dark"
						:to="`/case/${item.id}`"
					>
						<div class="card-image">
							<div class="card-tag">
								<div
									class="card-tag-block"
									v-if="item.origin_price !== item.price"
								>
									<span
										class="badge card-tag__tag card-tag__tag--discount"
									>
										<i class="bi bi-arrow-down"></i>
										{{
											$formatUnit.priceDiscount(
												item.origin_price,
												item.price
											)
										}}
									</span>
								</div>
								<div
									class="card-tag-block"
									v-for="tag in filterTags(item)"
									:key="tag"
								>
									<span
										class="badge card-tag__tag"
										:class="{
											'card-tag__tag--new':
												tag === '新上架',
											'card-tag__tag--low':
												tag === '低總價',
											'card-tag__tag--recommend':
												tag === '店長推薦',
										}"
										>{{ tag }}</span
									>
								</div>
							</div>
							<div class="card-price">
								<div class="card-price__price">
									{{ $formatUnit.currencyFormat(item.price) }}
									<span class="card-price__price-unit"
										>萬</span
									>
								</div>
							</div>
							<img
								class="img-fluid"
								:src="item.imageUrl"
								alt=""
							/>
						</div>
						<div class="card-body">
							<h5
								class="card-title text-center text-truncate fw-bold"
							>
								{{ item.title }}
							</h5>
							<p class="card-text text-center fs-6">
								<span class="card-text__item"
									>建坪
									<small>{{ item.squareFeet }}</small></span
								>
								<span class="card-text__item">
									<!-- <small>{{ $formatUnit.patternFormat(item.pattern) }}</small> -->
									<small>{{ item.pattern }}</small>
								</span>
							</p>
						</div>
					</router-link>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<div class="index-cases-footer text-center py-5">
						<router-link
							class="cases-footer__button btn btn-outline-primary w-25 text-decoration-none"
							to="/cases"
							>查看更多</router-link
						>
						<button class="btn btn-secondary">123</button>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="index-news py-5">
		<div class="container">
			<div class="row row-cols-1 row-cols-md-2 g-3">
				<div class="col">
					<div class="card shadow-sm">
						<img
							class="img-fluid"
							src="https://placem.at/people?w=1920&h=750"
							alt=""
						/>
						<div class="card-body">
							<p class="card-text">
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</p>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card shadow-sm">
						<img
							class="img-fluid"
							src="https://placem.at/people?w=1920&h=750"
							alt=""
						/>
						<div class="card-body">
							<p class="card-text">
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import { EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/bundle";

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	data() {
		return {
			cases: [],
			modules: [EffectFade, Autoplay],
		};
	},
	methods: {
		getCaseList() {
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
		filterTags(caseItem) {
			const filteredTags = caseItem.tags.filter((tag) => {
				return (
					tag === "新上架" || tag === "低總價" || tag === "店長推薦"
				);
			});
			return filteredTags;
		},
	},
	mounted() {
		this.getCaseList();
	},
};
</script>
<style lang=""></style>
