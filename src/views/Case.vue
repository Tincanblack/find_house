<template>
	<LoadingAnimate :active="isLoading" :z-index="1060"></LoadingAnimate>
	<Breadcrumb :product="product"></Breadcrumb>
	<section class="case py-3">
		<div class="case-header">
			<div class="container">
				<div class="case-header-inner">
					<div class="case-header-title">
						<h2 class="case-header__title">
							{{ product.title }}
						</h2>
						<h6 class="case-header__subtitle">
							{{ product.description }}
						</h6>
					</div>
					<div class="case-price text-end">
						<div class="d-flex align-items-center">
							<div
								v-if="product.origin_price !== product.price"
								class="case-header-tag"
							>
								<span
									class="badge color-secondary tag__element--sec"
								>
									<i class="bi bi-arrow-down"></i>
									{{
										$formatUnit.calToPercent(
											product.origin_price,
											product.price,
											"discount"
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
				<div class="case-tag">
					<span
						class="badge tag color-primary tag__element tag__element--main"
						v-for="tag in product.tags"
						:key="tag"
						>{{ tag }}</span
					>
				</div>
			</div>
		</div>
		<div class="case-preview mb-3">
			<div class="container">
				<div class="row">
					<div class="col-12 col-lg-8">
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
							<div class="case-slide-footer my-1">
								<i
									class="bi bi-exclamation-circle-fill text-secondary"
								></i>
								<span class="slide-footer-notice">
									請留意！以上照片若為街景，為物件附近環境介紹，非刊登物件本身。</span
								>
							</div>
						</div>
						<div class="case-detail mt-3">
							<div class="case-detail-section" id="info">
								<div class="detail-header">
									<h5 class="detail-header__title">
										基本資料
									</h5>
								</div>
								<div class="detail-content">
									<table class="table border case-table">
										<tbody>
											<tr>
												<td>類型</td>
												<td>
													{{ product.category }}
												</td>
											</tr>
											<tr>
												<td>登記建坪</td>
												<td>
													{{ product.squareFeet }} 坪
												</td>
											</tr>
											<tr>
												<td>主建物</td>
												<td>
													{{ product.mainSquareFeet }}
													坪
												</td>
											</tr>
											<tr>
												<td>公設比</td>
												<td
													v-if="
														product.squareFeet !==
														product.mainSquareFeet
													"
												>
													{{
														$formatUnit.calToPercent(
															product.squareFeet,
															product.mainSquareFeet,
															"management"
														)
													}}
												</td>
												<td v-else>--</td>
											</tr>
											<tr>
												<td>屋齡</td>
												<td>
													{{ product.houseAge }} 年
												</td>
											</tr>
											<tr>
												<td>格局</td>
												<td>
													{{
														$formatUnit.patternFormat(
															product.pattern
														)
													}}
												</td>
											</tr>
											<tr>
												<td>樓層</td>
												<td>{{ product.floor }} 樓</td>
											</tr>
											<tr>
												<td>朝向</td>
												<td v-if="product.direction">
													{{ product.direction }}
												</td>
												<td v-else>--</td>
											</tr>
											<tr>
												<td>公共管理費</td>
												<td
													v-if="
														product.managementFee ||
														product.managementFee >
															0
													"
												>
													{{ product.managementFee }}
													元/ 每月
												</td>
												<td v-else>--</td>
											</tr>
											<tr>
												<td>車位</td>
												<td v-if="product.parking">
													{{ product.parking }}
												</td>
												<td v-else>--</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div class="case-detail-section" id="detail">
								<div class="detail-header">
									<h5 class="detail-header__title">
										物件特色
									</h5>
								</div>
								<div class="detail-content">
									{{ product.content }}
								</div>
							</div>
							<div class="case-detail-section" id="near">
								<div class="detail-header">
									<h5 class="detail-header__title">
										周遭環境
									</h5>
								</div>
								<div class="detail-content">
									{{ product.content }}
								</div>
							</div>
						</div>
					</div>
					<div class="col-12 col-lg-4 ms-auto">
						<div class="case-preview mb-3">
							<ul class="case-preview-list list-group">
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
						<div class="position-sticky" style="top: 10%">
							<div
								class="case-assistant card position-sticky shadow-sm mb-3"
							>
								<div class="card-body">
									<h5 class="case-assistant__title">
										您的案件經理人
									</h5>
									<div class="d-flex align-items-center my-3">
										<div
											class="case-assistant__image me-2"
											:style="{
												backgroundImage: `url(${assistantData.picture?.medium})`,
											}"
										></div>
										<div class="card-content">
											<h6 class="card-subtitle">
												<i
													class="bi bi-person fs-5 case-assistant__icon"
												></i
												>{{ assistantData.name?.first }}
											</h6>
											<div class="card-text">
												<i
													class="bi bi-phone fs-5 case-assistant__icon"
												></i>
												<a
													:href="`tel:${assistantData.cell}`"
													>{{ assistantData.cell }}</a
												>
											</div>
											<div class="card-text">
												<i
													class="bi bi-telephone fs-5 case-assistant__icon"
												></i>
												<a
													:href="`tel:${assistantData.phone}`"
													>{{
														assistantData.phone
													}}</a
												>
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
												type="tel"
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
							<div class="case-action">
								<div class="btn-group w-100">
									<button
										class="btn btn-outline-secondary shadow-sm mb-3"
									>
										<i class="bi bi-search-heart"></i>
										收藏案件
									</button>
									<button
										class="btn btn-outline-success shadow-sm mb-3"
									>
										<i class="bi bi-files"></i>
										加入比較
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="case-related bg-light">
		<div class="container">
			<div class="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-2">
				<div class="col" v-for="item in randomData" :key="item.id">
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
											$formatUnit.calToPercent(
												item.origin_price,
												item.price,
												"discount"
											)
										}}
									</span>
								</div>
								<div
									class="tag"
									v-for="tag in filterItemTag(item)"
									:key="tag"
								>
									<span
										class="badge tag__element"
										:class="{
											'tag__element--third':
												tag === '新上架',
											'tag__element--fourth':
												tag === '低總價',
											'tag__element--main':
												tag === '店長推薦',
										}"
										>{{ tag }}</span
									>
								</div>
							</div>
							<div class="card-price">
								<span
									class="card-price__price card-price__price--selling"
								>
									{{ $formatUnit.currencyFormat(item.price) }}
									<span class="card-price__price-unit"
										>萬</span
									>
								</span>
								<small
									v-if="item.origin_price !== item.price"
									class="card-price__price card-price__price--origin fs-6"
									><del
										>{{
											$formatUnit.currencyFormat(
												item.origin_price
											)
										}}
										萬</del
									></small
								>
							</div>
							<span class="card-image-hover__title">
								查看案件內容
							</span>
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
								<span class="card-text__item">
									<small>{{ item.squareFeet }}坪</small></span
								>
								<span class="card-text__item">
									<small>{{
										$formatUnit.patternFormat(item.pattern)
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
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import Breadcrumb from "@/components/Breadcrumb.vue";
import { Thumbs, Pagination, Navigation, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
export default {
	components: { Breadcrumb, Swiper, SwiperSlide },
	data() {
		return {
			isLoading: false,
			product: {},
			assistantData: {},
			swiper: {
				thumbsSwiper: null,
				modules: [Thumbs, Pagination, Navigation, FreeMode],
			},
			id: "",
		};
	},
	methods: {
		getProducts() {
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
				.get(`https://randomuser.me/api/?nat=us,ch`)
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
				this.getProducts();
			}
		},
	},
	mounted() {
		this.getCaseAssistant();
		this.getProducts();
	},
};
</script>
