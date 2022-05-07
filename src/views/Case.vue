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
										$format.calToPercent(
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
								{{ $format.currencyFormat(product.price) }}萬
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
									$format.currencyFormat(
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
						<CasePreviewSlide :product="product"></CasePreviewSlide>
						<div class="case-slide">
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
								<div class="section-header">
									<h4 class="section-header__title">
										基本資料
									</h4>
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
														$format.calToPercent(
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
														$format.patternFormat(
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
								<div class="section-header">
									<h4 class="section-header__title">
										物件特色
									</h4>
								</div>
								<div class="detail-content">
									{{ product.content }}
								</div>
							</div>
							<div class="case-detail-section" id="near">
								<div class="section-header">
									<h4 class="section-header__title">
										周遭環境
									</h4>
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
									{{ $format.patternFormat(product.pattern) }}
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
									<h4 class="case-assistant__title">
										您的案件經理人
									</h4>
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
										class="case-action__button btn btn-outline-secondary shadow-sm mb-3"
									>
										<i class="bi bi-search-heart"></i>
										收藏案件
									</button>
									<button
										class="case-action__button btn btn-outline-success shadow-sm mb-3"
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
	<section class="case-related bg-light py-5">
		<div class="container">
			<div class="section-header">
				<h4 class="section-header__title bg-light">相似的物件</h4>
			</div>
			<CasesSlide
				:category="category"
				:cases="cases"
				:id="id"
			></CasesSlide>
		</div>
	</section>
</template>
<script>
import Breadcrumb from "@/components/Breadcrumb.vue";
import CasePreviewSlide from "@/components/CasePreviewSlide.vue";
import CasesSlide from "@/components/CasesSlide.vue";

export default {
	components: {
		Breadcrumb,
		CasePreviewSlide,
		CasesSlide,
	},
	data() {
		return {
			isLoading: false,
			cases: [],
			product: {},
			category: "",
			id: "",
			assistantData: {},
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
		getCase() {
			this.isLoading = true;
			const { id } = this.$route.params;
			this.$http
				.get(
					`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/product/${id}`
				)
				.then((res) => {
					// 將收到的data資料展賦予給case
					this.product = res.data.product;
					this.category = res.data.product.category;
					this.isLoading = false;
				})
				.catch((error) => {
					this.$httpMessageState(error.response, "錯誤訊息");
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
	},
	// watch偵測到網址的id有變，將新的id帶入到data的id
	watch: {
		$route() {
			this.id = this.$route.params.id;
			if (this.$route.params.id !== undefined) {
				this.getCase();
			}
		},
	},
	mounted() {
		this.id = this.$route.params.id;
		this.getCaseAssistant();
		this.getCase();
		this.getCasesList();
	},
};
</script>
