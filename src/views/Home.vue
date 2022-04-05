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
	<section class="index-category py-5"></section>
	<section class="index-cases py-5">
		<div class="container">
			<div class="row row-cols-1 row-cols-md-4 g-3">
				<div class="col" v-for="item in cases" :key="item.id">
					<router-link
						class="card text-decoration-none rounded-0"
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
								<span v-if="item.tags"></span>
							</div>
							<img
								class="img-fluid"
								:src="item.imageUrl"
								alt=""
							/>
						</div>
						<div class="card-body">
							<h5 class="card-title text-dark">
								{{ item.title }}
							</h5>
							<h6 class="card-subtitle mb-2 text-secondary">
								{{ item.description }}
							</h6>
							<p class="card-text">
								<span class="card-text__item"
									>建坪 {{ item.squareFeet }}</span
								>
								<span class="card-text__item">{{
									item.pattern
								}}</span>
								<span class="card-text__item"
									>{{ item.houseAge }}年</span
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
				})
				.catch((error) => {
					this.$httpMessageState(error.response, "錯誤訊息");
				});
		},
	},
	computed: {
		tagsInArray(array) {
			return this.array.includes(array);
		},
	},
	mounted() {
		this.getCaseList();
	},
};
</script>
<style lang=""></style>
