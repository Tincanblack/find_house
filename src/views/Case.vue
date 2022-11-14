<template>
	<div class="site-content">
		<LoadingComponent :isLoading="isLoading"></LoadingComponent>
		<CaseBreadcrumb :product="product"></CaseBreadcrumb>
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
							<div class="d-flex align-items-center flex-column flex-lg-row">
								<div
									v-if="product.origin_price !== product.price"
									class="case-header-tag"
								>
									<span class="badge color-secondary tag__element--sec">
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
									product.origin_price && product.origin_price !== product.price
								"
								class="price price__origin fs-6"
							>
								<del>{{ $format.currencyFormat(product.origin_price) }}萬 </del>
							</div>
						</div>
					</div>
					<div class="case-tag">
						<span
							class="badge tag tag__element tag__element--main"
							v-for="tag in product.tags"
							:key="tag"
							>{{ tag }}</span
						>
					</div>
				</div>
			</div>
			<div class="case-content mb-3">
				<div class="container">
					<div class="row">
						<div class="col-12 col-lg-8">
							<CasePreviewSlide :product="product"></CasePreviewSlide>
							<div class="case-slide">
								<div class="case-slide-footer my-1">
									<i class="bi bi-exclamation-circle-fill text-secondary"></i>
									<span class="slide-footer-notice">
										請留意！以上照片若為街景，為物件附近環境介紹，非刊登物件本身。</span
									>
								</div>
							</div>
							<div class="case-detail mt-3 d-none d-lg-block">
								<div class="case-detail-section" id="info">
									<div class="case-detail-header">
										<h4 class="common-section-header__title">基本資料</h4>
									</div>
									<div class="case-detail-content">
										<table class="table border info-table info-table--detail">
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
														{{ product.squareFeet }}
														坪
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
																product.mainSquareFeet &&
															product.managementFee > 0
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
														{{ product.houseAge }}
														年
													</td>
												</tr>
												<tr>
													<td>格局</td>
													<td>
														{{ $format.patternFormat(product.pattern) }}
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
													<td v-if="product.managementFee > 0">
														{{ product.managementFee }}
														元/ 每月
													</td>
													<td v-else>--</td>
												</tr>
												<tr>
													<td>車位</td>
													<td v-if="product.parking">
														{{ product.parking }}
														<span v-if="product.parkingPrice > 0"
															>(車位
															{{ product.parkingPrice }}萬)</span
														>
													</td>
													<td v-else>--</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div class="case-detail-section" id="detail">
									<div class="case-detail-header">
										<h4 class="common-section-header__title">物件特色</h4>
									</div>
									<div class="detail-content">
										{{ product.content }}
									</div>
								</div>
							</div>
						</div>
						<div class="col-12 col-lg-4 ms-auto">
							<div class="case-aside d-none d-lg-block">
								<ul class="case-aside-list list-group">
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
											<i class="bi bi-house info-list-title__icon fs-4"></i>
											屋齡
										</span>
										{{ product.houseAge }}年
									</li>
									<li class="info-list-item">
										<span class="info-list-title">
											<i
												class="bi bi-columns-gap info-list-title__icon fs-4"
											></i>
											格局
										</span>
										{{ $format.patternFormat(product.pattern) }}
									</li>
									<li class="info-list-item">
										<span class="info-list-title">
											<i
												class="bi bi-bar-chart info-list-title__icon fs-4"
											></i>
											樓層
										</span>
										{{ product.floor }}樓
									</li>
								</ul>
							</div>
							<div class="case-manager">
								<div class="manager card shadow-sm mb-3">
									<div class="card-body">
										<h4 class="manager__title">您的案件經理人</h4>
										<div class="d-flex align-items-center my-3">
											<div class="manager__image me-2">
												<img
													v-if="fakeUser.gender === 'male'"
													src="../assets/images/male_avatar_icon.svg"
													alt=""
													width="70"
													height="70"
												/>

												<img
													v-else
													class="img-fluid"
													src="../assets/images/female_avatar_icon.svg"
													alt=""
													width="70"
													height="70"
												/>
											</div>
											<div class="card-content">
												<h6 class="card-subtitle">
													<i class="bi bi-person fs-5 manager__icon"></i
													>{{ fakeUser.name?.first }}
												</h6>
												<div class="card-text">
													<i class="bi bi-phone fs-5 manager__icon"></i>
													<a :href="`tel:${fakeUser.cell}`">{{
														fakeUser.cell
													}}</a>
												</div>
												<div class="card-text">
													<i
														class="bi bi-telephone fs-5 manager__icon"
													></i>
													<a :href="`tel:${fakeUser.phone}`">{{
														fakeUser.phone
													}}</a>
												</div>
											</div>
										</div>
										<VForm
											id="reserveForm"
											ref="reserveForm"
											v-slot="{ errors }"
											@submit="fakeItem2Cart"
										>
											<div class="mb-3 position-relative">
												<div
													class="row row-cols-lg-auto g-3 align-items-center"
												>
													<div class="col" style="flex: 1">
														<VField
															type="text"
															class="form-control"
															:class="{
																'is-invalid': errors['稱呼'],
															}"
															autocomplete="off"
															placeholder="如何稱呼"
															v-model="formData.customer"
															name="稱呼"
															rules="required"
														/>
														<ErrorMessage
															name="稱呼"
															class="invalid-tooltip"
														></ErrorMessage>
													</div>
													<div class="col">
														<div class="form-check form-check-inline">
															<VField
																type="radio"
																class="form-check-input"
																id="male"
																v-model="formData.gender"
																value="1"
																name="性別"
																rules="required"
															/>
															<label
																class="form-check-label"
																for="male"
																>先生</label
															>
														</div>
														<div class="form-check form-check-inline">
															<VField
																type="radio"
																class="form-check-input"
																id="female"
																v-model="formData.gender"
																value="0"
																name="性別"
																rules="required"
															/>
															<label
																class="form-check-label"
																for="female"
																>小姐</label
															>
														</div>
													</div>
												</div>
											</div>
											<div class="mb-3 position-relative">
												<VField
													type="tel"
													class="form-control"
													autocomplete="off"
													placeholder="連絡電話 Ex: 0987654321..."
													name="contactPhone"
													v-model="formData.contactPhone"
													:class="{
														'is-invalid': errors['contactPhone'],
													}"
													:rules="validatePhone"
													maxlength="10"
												/>
												<ErrorMessage
													name="contactPhone"
													class="invalid-tooltip"
												></ErrorMessage>
											</div>
											<div class="mb-3">
												<select
													class="form-select"
													name=""
													id=""
													v-model="formData.freeTime"
												>
													<option value="0">
														聯絡時間：皆可(9:00-21:00)
													</option>
													<option value="1">
														聯絡時間：上午(9:00-12:00)
													</option>
													<option value="2">
														聯絡時間：中午(12:00-14:00)
													</option>
													<option value="3">
														聯絡時間：下午(14:00-18:00)
													</option>
													<option value="4">
														聯絡時間：晚上(18:00-21:00)
													</option>
												</select>
											</div>
											<div class="case-aside-action">
												<button
													type="submit"
													class="case-aside-action__button btn btn-primary w-100"
												>
													<i class="bi bi-pencil-square"></i>
													預約諮詢
													<span
														v-show="submitBtnLoading"
														class="spinner-border spinner-border-sm"
													></span>
												</button>
												<button
													type="button"
													class="case-aside-action__button btn btn-secondary w-100"
													@click="handleCollectionCase(product.id)"
												>
													<i
														class="bi"
														:class="
															collectionCases.includes(product.id)
																? 'bi-bookmark-x'
																: 'bi-bookmark-heart'
														"
													></i>
													{{
														collectionCases.includes(product.id)
															? "取消"
															: "加入"
													}}收藏
												</button>
												<button
													type="button"
													class="case-aside-action btn btn-success w-100 text-white"
													@click="handleCompareCase(product.id)"
												>
													<i
														class="bi"
														:class="
															compareCases.includes(product.id)
																? 'bi-file-x'
																: 'bi-files'
														"
													></i>
													{{
														compareCases.includes(product.id)
															? "取消"
															: "加入"
													}}比較
												</button>
											</div>
										</VForm>
									</div>
								</div>
							</div>
							<div class="case-detail mt-3 d-block d-lg-none">
								<div class="case-detail-section" id="info">
									<div class="case-detail-header">
										<h4 class="common-section-header__title">基本資料</h4>
									</div>
									<div class="case-detail-content">
										<table class="table border info-table info-table--detail">
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
														{{ product.squareFeet }}
														坪
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
																product.mainSquareFeet &&
															product.managementFee > 0
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
														{{ product.houseAge }}
														年
													</td>
												</tr>
												<tr>
													<td>格局</td>
													<td>
														{{ $format.patternFormat(product.pattern) }}
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
															product.managementFee > 0
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
														<span v-if="product.parkingPrice > 0"
															>(車位
															{{ product.parkingPrice }}萬)</span
														>
													</td>
													<td v-else>--</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div class="case-detail-section" id="detail">
									<div class="case-detail-header">
										<h4 class="common-section-header__title">物件特色</h4>
									</div>
									<div class="detail-content">
										{{ product.content }}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="case-detail-section" id="near">
							<div class="case-detail-header">
								<h4 class="common-section-header__title">地理位置</h4>
							</div>
							<GoogleMaps :center="center" :caseItem="product"></GoogleMaps>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="case-related bg-light py-5">
			<div class="container">
				<div class="case-detail-header">
					<h4 class="common-section-header__title bg-light">為您推薦</h4>
				</div>
				<CasesSlide :category="category" :cases="cases" :id="id"></CasesSlide>
			</div>
		</section>
	</div>
</template>
<script>
import CaseBreadcrumb from "@/components/product/CaseBreadcrumb.vue";
import CasePreviewSlide from "@/components/product/CasePreviewSlide.vue";
import CasesSlide from "@/components/product/CasesSlide.vue";
import GoogleMaps from "@/components/Maps.vue";

import storageCollectionCase from "@/mixins/collectionCase.js";
import storageCompareCase from "@/mixins/compareCase.js";
import reserveForm from "@/mixins/reserveForm.js";

import { mapState, mapActions } from "pinia";
import compareAnchor from "@/stores/compareAnchor.js";

export default {
	components: {
		CaseBreadcrumb,
		CasePreviewSlide,
		CasesSlide,
		GoogleMaps,
	},
	data() {
		return {
			isLoading: false,
			cases: [],
			collectionCases: [],
			product: {},
			category: "",
			id: "",
			fakeUser: {},
			center: { lat: 0, lng: 0 },
			markers: [],
		};
	},
	mixins: [storageCollectionCase, storageCompareCase, reserveForm],
	methods: {
		...mapActions(compareAnchor, ["goCompareAnchor"]),
		...mapActions(compareAnchor, ["clickCompareAnchor"]),

		getCaseData() {
			this.isLoading = true;
			const { id } = this.$route.params;
			this.$http
				.get(`${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/product/${id}`)
				.then((res) => {
					// 將收到的data資料展賦予給case
					this.product = res.data.product;
					this.category = res.data.product.category;
					this.center = this.formatCaseLocation();
					this.isLoading = false;
				})
				.catch((error) => {
					this.$httpMessageState(error.response, "錯誤訊息");
				});
		},
		getFakeUserData() {
			this.$http
				.get(`${import.meta.env.VITE_RANDOMUSER_URL}`)
				.then((res) => {
					this.fakeUser = res.data.results[0];
				})
				.catch((error) => {
					this.$swal({
						icon: "error",
						title: `${error.response.statusText}`,
					});
				});
		},
		loadSotrageCase() {
			if (localStorage.getItem("collection_case")) {
				this.collectionCases = JSON.parse(localStorage.getItem("collection_case"));
			}
			if (localStorage.getItem("compare_case")) {
				this.compareCases = JSON.parse(localStorage.getItem("compare_case"));
			}
		},
		formatCaseLocation() {
			const locationArray = this.product.location.split(",");
			let location = {
				lat: parseFloat(locationArray[0]),
				lng: parseFloat(locationArray[1]),
			};
			return location;
		},
		validatePhone(value) {
			return /^(09)[0-9]{8}$/.test(value) ? true : "請輸入正確格式的手機號碼";
		},
	},
	computed: {
		...mapState(compareAnchor, ["toAnchor"]),
	},
	watch: {
		// watch偵測到網址的id有變，將新的id帶入到data的id
		$route() {
			this.id = this.$route.params.id;
			if (this.$route.params.id !== undefined) {
				this.getCaseData();
			}
		},
	},
	mounted() {
		this.id = this.$route.params.id;
		this.getCaseData();
		this.getFakeUserData();
		this.loadSotrageCase();
	},
};
</script>
