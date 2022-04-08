<template lang="">
	<swiper :slides-per-view="1" :space-between="50">
		<swiper-slide
			><img
				class="img-fluid"
				src="https://via.placeholder.com/1920x750"
				alt=""
			/>
		</swiper-slide>
		<swiper-slide
			><img src="https://via.placeholder.com/1920x750" alt="" />
		</swiper-slide>
		<swiper-slide
			><img src="https://via.placeholder.com/1920x750" alt="" />
		</swiper-slide>
	</swiper>
	<!-- <section class="inx-feature text-center py-5 d-none d-lg-block">
		<div class="container">
			<h2 class="mb-5">想要找什麼樣類型的房子?</h2>
			<div class="row">
				<div class="col-lg-3">
					<router-link class="text-dark text-decoration-none" to="">
						<svg
							class="bd-placeholder-img rounded-circle"
							width="140"
							height="140"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label="Placeholder: 140x140"
							preserveAspectRatio="xMidYMid slice"
							focusable="false"
						>
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="#777"></rect>
							<text x="50%" y="50%" fill="#777" dy=".3em">
								140x140
							</text>
						</svg>
						<h6 class="mt-3">公寓</h6>
					</router-link>
				</div>
				<div class="col-lg-3">
					<router-link class="text-dark text-decoration-none" to="">
						<svg
							class="bd-placeholder-img rounded-circle"
							width="140"
							height="140"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label="Placeholder: 140x140"
							preserveAspectRatio="xMidYMid slice"
							focusable="false"
						>
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="#777"></rect>
							<text x="50%" y="50%" fill="#777" dy=".3em">
								140x140
							</text>
						</svg>
						<h6 class="mt-3">別墅</h6>
					</router-link>
				</div>
				<div class="col-lg-3">
					<router-link class="text-dark text-decoration-none" to="">
						<svg
							class="bd-placeholder-img rounded-circle"
							width="140"
							height="140"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label="Placeholder: 140x140"
							preserveAspectRatio="xMidYMid slice"
							focusable="false"
						>
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="#777"></rect>
							<text x="50%" y="50%" fill="#777" dy=".3em">
								140x140
							</text>
						</svg>
						<h6 class="mt-3">華廈</h6>
					</router-link>
				</div>
				<div class="col-lg-3">
					<router-link class="text-dark text-decoration-none" to="">
						<svg
							class="bd-placeholder-img rounded-circle"
							width="140"
							height="140"
							xmlns="http://www.w3.org/2000/svg"
							role="img"
							aria-label="Placeholder: 140x140"
							preserveAspectRatio="xMidYMid slice"
							focusable="false"
						>
							<title>Placeholder</title>
							<rect width="100%" height="100%" fill="#777"></rect>
							<text x="50%" y="50%" fill="#777" dy=".3em">
								140x140
							</text>
						</svg>
						<h6 class="mt-3">大樓</h6>
					</router-link>
				</div>
			</div>
		</div>
	</section> -->
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
								<span
									v-if="item.origin_price !== item.price"
									class="badge card-tag__tag"
								>
									<i class="bi bi-arrow-down"></i>
									{{
										$formatUnit.priceDiscount(
											item.origin_price,
											item.price
										)
									}}
								</span>
								<span
									class="badge card-tag__tag"
									v-for="(tag, index) in filterTags"
									:key="index"
									>{{ tag }}</span
								>
							</div>
							<img
								class="img-fluid"
								:src="item.imageUrl"
								alt=""
							/>
						</div>
						<div class="card-body">
							<h5 class="card-title text-center text-truncate">
								{{ item.title }}
							</h5>
							<p class="card-text text-center fs-6">
								<span class="card-text__item"
									>建坪<small>{{
										item.squareFeet
									}}</small></span
								>
								<span class="card-text__item"
									><small>{{ item.pattern }}</small></span
								>
							</p>
						</div>
					</router-link>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<div class="text-center py-5">
						<router-link
							class="btn btn-primary text-decoration-none"
							to="/cases"
							>查看更多案件</router-link
						>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- <section class="index-news py-5">
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
	</section> -->
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	data() {
		return {
			cases: [],
		};
	},
	methods: {
		getCaseList() {
			const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/all`;
			this.$http
				.get(url)
				.then((res) => {
					this.cases = res.data.products;
					console.log(this.cases);
				})
				.catch((error) => {
					this.$httpMessageState(error.response, "錯誤訊息");
				});
		},
	},
	computed: {
		filterTags() {
			return this.cases.forEach((item) => {
				item.tags = item.tags.filter((tag) => {
					return (
						tag === "新上架" ||
						tag === "低總價" ||
						tag === "店長推薦"
					);
				});
			});
		},
	},
	mounted() {
		this.getCaseList();
	},
};
</script>
<style lang=""></style>
