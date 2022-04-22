<template lang="">
	<LoadingAnimate :active="isLoading" :z-index="1060"></LoadingAnimate>
	<nav
		class="py-3 bg-light"
		style="--bs-breadcrumb-divider: '>'"
		aria-label="breadcrumb"
	>
		<div class="container">
			<ol class="breadcrumb text-dark">
				<li class="breadcrumb-item">
					<RouterLink
						to="/"
						class="breadcrumb-link text-decoration-none"
						>首頁</RouterLink
					>
				</li>
				<li class="breadcrumb-item">
					<RouterLink
						:to="{
							path: '/cases',
							query: { category: '全部' },
						}"
						class="breadcrumb-link text-decoration-none"
						>找房</RouterLink
					>
				</li>
				<li class="breadcrumb-item">
					<RouterLink
						class="breadcrumb-link text-decoration-none"
						:to="{
							path: '/cases',
							query: { category: product.category },
						}"
					>
						{{ product.category }}
					</RouterLink>
				</li>
				<li class="breadcrumb-item">{{ product.title }}</li>
			</ol>
		</div>
	</nav>
	<main class="product py-3">
		<div class="container">
			<div class="product-header">
				<div class="product-info">
					<h2 class="product__title">{{ product.title }}</h2>
					<h6 class="product__subtitle">{{ product.description }}</h6>
				</div>
				<div class="product-price text-end">
					<div class="d-flex align-items-center">
						<div class="product-tag">
							<span
								class="badge color-danger tag__element--discount"
							>
								<i class="bi bi-arrow-down"></i>
								{{
									$formatUnit.priceDiscount(
										product.origin_price,
										product.price
									)
								}}
							</span>
						</div>
						<h2
							v-show="product.price"
							class="price price__selling text-danger"
						>
							{{ $formatUnit.currencyFormat(product.price) }}萬
						</h2>
					</div>
					<div
						v-show="product.origin_price"
						class="price price__origin fs-6"
					>
						<del
							>{{
								$formatUnit.currencyFormat(
									product.origin_price
								)
							}}萬
						</del>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-12 col-lg-8">
					<swiper
						:modules="modules"
						:navigation="true"
						:pagination="{ clickable: true, type: 'fraction' }"
						:thumbs="{ swiper: swiper.thumbsSwiper }"
					>
						<swiper-slide
							v-for="(image, index) in product.imagesUrl"
							:key="`swiperImage_${index}`"
							><img class="img-fluid" :src="image" alt="" />
						</swiper-slide>
					</swiper>
					<swiper
						@swiper="setThumbsSwiper"
						:spaceBetween="20"
						:slidesPerView="4.5"
						:freeMode="true"
						:navigation="true"
						:watchSlidesProgress="true"
						:modules="modules"
						class="mySwiper mt-3"
					>
						<swiper-slide
							v-for="(image, index) in product.imagesUrl"
							:key="`swiperImage_${index}`"
						>
							<img class="img-fluid" :src="image" alt="" />
						</swiper-slide>
					</swiper>
				</div>
				<div class="col-12 col-lg-4 ms-auto">
					<div class="card shadow-sm">
						<div class="card-body">
							<h5 class="card-title">您的案件經理人</h5>
							<div class="d-flex align-items-center my-3">
								<div
									class="product-assistant__image me-2"
									:style="{
										backgroundImage: `url(${assistantData.picture?.medium})`,
									}"
								></div>
								<div class="card-content">
									<h6 class="card-subtitle">
										<i class="bi bi-person"></i>
										{{ assistantData.name?.first }}
									</h6>
									<div class="card-text">
										<i class="bi bi-phone"></i>
										{{ assistantData.cell }}
									</div>
									<div class="card-text">
										<i class="bi bi-telephone"></i>
										{{ assistantData.phone }}
									</div>
								</div>
							</div>
							<form>
								<div class="mb-3">
									<input
										type="text"
										class="form-control"
										autocomplete="off"
										placeholder="如何稱呼"
									/>
								</div>
								<div class="mb-3">
									<input
										type="text"
										class="form-control"
										autocomplete="off"
										placeholder="連絡電話"
									/>
								</div>
								<div class="mb-3">
									<select class="form-select" name="" id="">
										<option value="all">
											聯絡時間：皆可(9:00-21:00)
										</option>
										<option value="morning">
											聯絡時間：上午(9:00-12:00)
										</option>
										<option value="">
											聯絡時間：中午(12:00-14:00)
										</option>
										<option value="afternoon">
											聯絡時間：下午(14:00-18:00)
										</option>
										<option value="night">
											聯絡時間：晚上(18:00-21:00)
										</option>
									</select>
								</div>
								<button
									type="submit"
									class="btn btn-primary w-100"
								>
									送出
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>
<script>
import { Thumbs, Pagination, Navigation, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/bundle";
export default {
	components: { Swiper, SwiperSlide },
	data() {
		return {
			isLoading: false,
			product: {},
			assistantData: {},
			swiper: {
				thumbsSwiper: null,
			},
			modules: [Thumbs, Pagination, Navigation, FreeMode],
			id: "",
		};
	},
	methods: {
		getProduct() {
			this.isLoading = true;
			const { id } = this.$route.params;
			this.$http
				.get(
					`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/product/${id}`
				)
				.then((res) => {
					// 將收到的data資料展賦予給case
					this.product = res.data.product;
					this.isLoading = false;
				})
				.catch((err) => {
					// 跳出錯誤訊息
					alert(err.data.message);
				});
		},
		getCaseAssistant() {
			this.$http
				.get(`https://randomuser.me/api/?nat=ch`)
				.then((res) => {
					this.assistantData = res.data.results[0];
				})
				.catch((err) => {
					alert(err.error);
				});
		},
		setThumbsSwiper(swiper) {
			this.swiper.thumbsSwiper = swiper;
		},
	},
	watch: {
		$route(to) {
			this.id = to.params.id;
			if (this.$route.params.id !== undefined) {
				this.getProduct();
			}
		},
	},
	mounted() {
		this.getCaseAssistant();
		this.getProduct();
	},
};
</script>
