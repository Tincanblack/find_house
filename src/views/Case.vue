<template>
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
	<section class="product py-3">
		<div class="product-header">
			<div class="container">
				<div class="product-header-inner">
					<div class="product-info">
						<h2 class="product__title">
							{{ product.title }}
						</h2>
						<h6 class="product__subtitle">
							{{ product.description }}
						</h6>
					</div>
					<div class="product-price text-end">
						<div class="d-flex align-items-center">
							<div
								v-if="product.origin_price !== product.price"
								class="product-tag"
							>
								<span
									class="badge color-secondary tag__element--discount"
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
								v-if="product.price"
								class="price price__selling text-secondary"
							>
								{{
									$formatUnit.currencyFormat(product.price)
								}}萬
							</h2>
						</div>
						<div
							v-if="
								product.origin_price &&
								product.origin_price !== product.price
							"
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
			</div>
		</div>
		<div class="product-preview mb-3">
			<div class="container">
				<div class="row">
					<div class="col-12 col-lg-8">
						<div class="slide">
							<swiper
								:modules="modules"
								:navigation="true"
								:pagination="{
									clickable: true,
									type: 'fraction',
								}"
								:thumbs="{ swiper: swiper.thumbsSwiper }"
								class="carousel-slide"
							>
								<swiper-slide
									v-for="(image, index) in product.imagesUrl"
									:key="`carouselImage_${index}`"
								>
									<div
										class="carousel-slide__image"
										style="
											background-size: cover;
											background-position: center;
										"
										:style="{
											backgroundImage: `url(${image})`,
										}"
									></div>
								</swiper-slide>
							</swiper>
							<swiper
								@swiper="setThumbsSwiper"
								:spaceBetween="15"
								:slidesPerView="4.5"
								:freeMode="true"
								:navigation="true"
								:watchSlidesProgress="true"
								:modules="modules"
								:breakpoints="{
									'@0.00': {
										slidesPerView: 3.5,
									},
									'@1.50': {
										slidesPerView: 4.5,
									},
								}"
								class="thumbnail-slide mt-3"
							>
								<swiper-slide
									class="slide-item"
									v-for="(image, index) in product.imagesUrl"
									:key="`thumbnailImg_${index}`"
								>
									<div
										class="thumbnail-slide__image"
										style="
											background-size: cover;
											background-position: center;
										"
										:style="{
											backgroundImage: `url(${image})`,
										}"
									></div>
								</swiper-slide>
							</swiper>
						</div>
						<div class="slide-footer my-1 fs-6">
							<i
								class="bi bi-exclamation-circle-fill text-secondary"
							></i>
							<span class="slide-footer-notice">
								請留意！以上照片若為街景，為物件附近環境介紹，非刊登物件本身。</span
							>
						</div>
					</div>
					<div class="col-12 col-lg-4 ms-auto">
						<div class="product-info mb-3">
							<ul class="product-info-list list-group">
								<li class="info-list-item">
									<span class="info-list-title">
										<i
											class="bi bi-bounding-box-circles info-list-title__icon fs-4"
										></i>
										建物登記
									</span>
									{{ product.squareFeet }}坪
								</li>
								<li class="info-list-item">
									<span class="info-list-title">
										<i
											class="bi bi-house info-list-title__icon fs-4"
										></i>
										屋齡
									</span>
									{{ product.houseAge }}年
								</li>
								<li class="info-list-item">
									<span class="info-list-title">
										<i
											class="bi bi-door-open info-list-title__icon fs-4"
										></i>
										格局
									</span>
									{{
										$formatUnit.patternFormat(
											product.pattern
										)
									}}
								</li>
								<li class="info-list-item">
									<span class="info-list-title">
										<i
											class="bi bi-building info-list-title__icon fs-4"
										></i>
										樓層
									</span>
									{{ product.floor }}樓
								</li>
							</ul>
						</div>
						<div class="product-assistant card shadow-sm mb-3">
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
										<select
											class="form-select"
											name=""
											id=""
										>
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
						<button
							class="btn btn-outline-secondary w-100 shadow-sm"
						>
							<i class="bi bi-search-heart"></i>
							收藏案件
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="product-info mb-3">
			<div class="container">123</div>
		</div>
	</section>
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
