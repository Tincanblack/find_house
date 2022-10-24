<template>
	<div class="site-content">
		<LoadingAnimate :active="isLoading" :z-index="1060"></LoadingAnimate>
		<section
			class="collection-banner d-flex align-items-center justify-content-center"
		>
			<h2 class="collection-banner__title">心之所向，儀之所往</h2>
		</section>
		<section class="collection pt-5 pb-3">
			<div class="container">
				<template v-if="collectionProducts.length !== 0">
					<div class="row">
						<div class="col-12">
							<div class="section-header mb-3">
								<h3 class="common-section-header__title">
									收藏案件
								</h3>
								<div class="button-column bg-white">
									<button
										v-if="collectionProducts.length !== 0"
										type="button"
										class="btn btn-danger btn-sm collection-clear__button"
										@click="clearCollectionData"
									>
										<i class="bi bi bi-x-lg"></i>
										清除所有
									</button>
								</div>
							</div>
						</div>
					</div>
					<Swiper
						class="list-slide"
						:navigation="true"
						:spaceBetween="20"
						:slidesPerView="3.5"
						:modules="swiper.modules"
						:breakpoints="{
							'@0.00': {
								slidesPerView: 1.5,
							},
							'@1.50': {
								slidesPerView: 3.75,
							},
						}"
					>
						<SwiperSlide
							v-for="item in collectionProducts"
							:key="item.id"
						>
							<CaseCard
								:item="item"
								:compareCases="compareCases"
								@emitHandleCollection="handleCollectionCase"
								@emitHandleCompare="handleCompareCase"
							></CaseCard>
						</SwiperSlide>
					</Swiper>
				</template>
				<template v-else>
					<div
						class="row align-items-center justify-content-center text-center"
					>
						<div class="col">
							<h3 class="collection-content__title">
								還沒看到值得收藏的物件嗎？快去找找吧
							</h3>
							<RouterLink
								class="btn btn-outline-primary rounded-0 collection-content__button my-2"
								to="/cases"
								>前去找房 <i class="bi bi-house"></i
							></RouterLink>
						</div>
					</div>
				</template>
			</div>
		</section>
		<section
			v-if="compareCaseProducts.length !== 0"
			class="compare pt-5 pb-3 bg-light"
			id="caseCompare"
		>
			<div class="container">
				<div class="row">
					<div class="mx-0 mx-md-auto col-12 col-md-8">
						<div class="section-header mb-3">
							<h3
								v-if="compareCaseProducts.length < 2"
								class="common-section-header__title"
							>
								再加入
								<span class="fs-3 text-danger">1</span>個<span
									class="d-block d-md-inline-block"
									>案件就能「案件比較」</span
								>
							</h3>
							<h3 v-else class="common-section-header__title">
								案件比較的結果如下
							</h3>
							<div class="button-column bg-light">
								<button
									v-if="compareCaseProducts.length !== 0"
									type="button"
									class="btn btn-danger btn-sm collection-clear__button"
									@click="clearCompareData"
								>
									<i class="bi bi bi-x-lg"></i>
									清除所有
								</button>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div
						class="mx-0 mx-md-auto"
						:class="
							compareCaseProducts.length === 2
								? 'col-12 col-md-8'
								: 'col-12 col-md-5'
						"
					>
						<div class="table-responsive">
							<table
								v-if="compareCaseProducts.length !== 0"
								class="table border table-bordered table-hover info-table info-table--compare bg-white"
							>
								<tbody>
									<tr>
										<td class="align-middle">案件名稱</td>
										<template
											v-for="item in compareCaseProducts"
											:key="item.id"
										>
											<td>
												<div
													class="d-flex justify-content-between"
												>
													<div
														class="compare-table__title"
													>
														{{ item.title }}
													</div>
													<button
														type="button"
														class="compare-table__button btn btn-danger btn-sm"
														@click="
															handleCompareCase(
																item.id
															)
														"
													>
														<i
															class="bi bi-x-lg"
														></i>
													</button>
												</div>
											</td>
										</template>
									</tr>
									<tr>
										<td></td>
										<template
											v-for="item in compareCaseProducts"
											:key="item.id"
										>
											<td class="text-center">
												<RouterLink
													class="compare-table__link"
													:to="`/case/${item.id}`"
												>
													<div
														class="compare-table-img"
													>
														<img
															class="img-fluid"
															:src="item.imageUrl"
															alt=""
														/>
													</div>
												</RouterLink>
											</td>
										</template>
									</tr>
									<tr>
										<td class="align-middle">價格</td>
										<template
											v-for="item in compareCaseProducts"
											:key="item.id"
										>
											<td>
												<span
													class="fs-3 fw-bold text-danger"
												>
													{{
														$format.currencyFormat(
															item.price
														)
													}}</span
												>
												萬
											</td>
										</template>
									</tr>
									<tr>
										<td>類型</td>
										<template
											v-for="item in compareCaseProducts"
											:key="item.id"
										>
											<td>
												{{ item.category }}
											</td>
										</template>
									</tr>
									<tr>
										<td>登記建坪</td>
										<template
											v-for="item in compareCaseProducts"
											:key="item.id"
										>
											<td>
												{{ item.squareFeet }}
												坪
											</td>
										</template>
									</tr>
									<tr>
										<td>主建物</td>
										<template
											v-for="item in compareCaseProducts"
											:key="item.id"
										>
											<td>
												{{ item.mainSquareFeet }}
												坪
											</td>
										</template>
									</tr>
									<tr>
										<td>公設比</td>
										<template
											v-for="item in compareCaseProducts"
											:key="item.id"
										>
											<td
												v-if="
													item.squareFeet !==
													item.mainSquareFeet
												"
											>
												{{
													$format.calToPercent(
														item.squareFeet,
														item.mainSquareFeet,
														"management"
													)
												}}
											</td>
											<td v-else>--</td>
										</template>
									</tr>
									<tr>
										<td>屋齡</td>
										<template
											v-for="item in compareCaseProducts"
											:key="item.id"
										>
											<td>
												{{ item.houseAge }}
												年
											</td>
										</template>
									</tr>
									<tr>
										<td>格局</td>
										<template
											v-for="item in compareCaseProducts"
											:key="item.id"
										>
											<td>
												{{
													$format.patternFormat(
														item.pattern
													)
												}}
											</td>
										</template>
									</tr>
									<tr>
										<td>樓層</td>
										<template
											v-for="item in compareCaseProducts"
											:key="item.id"
										>
											<td>{{ item.floor }} 樓</td>
										</template>
									</tr>
									<tr>
										<td>朝向</td>
										<template
											v-for="item in compareCaseProducts"
											:key="item.id"
										>
											<td v-if="item.direction">
												{{ item.direction }}
											</td>
											<td v-else>--</td>
										</template>
									</tr>
									<tr>
										<td>公共管理費</td>
										<template
											v-for="item in compareCaseProducts"
											:key="item.id"
										>
											<td
												v-if="
													item.managementFee ||
													item.managementFee > 0
												"
											>
												{{ item.managementFee }}
												元/ 每月
											</td>
											<td v-else>--</td>
										</template>
									</tr>
									<tr>
										<td>車位</td>
										<template
											v-for="item in compareCaseProducts"
											:key="item.id"
										>
											<td v-if="item.parking">
												{{ item.parking }}
												<span
													v-if="item.parkingPrice > 0"
													>(車位
													{{
														item.parkingPrice
													}}萬)</span
												>
											</td>
											<td v-else>--</td>
										</template>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
// import { Navigation } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/vue";

import CaseCard from "@/components/widgets/CaseCardLayout.vue";

import swiperMixin from "@/mixins/swiperMixin.js";
import storageCollectionCase from "@/mixins/collectionCase.js";
import storageComparecase from "@/mixins/compareCase.js";

import { mapState, mapActions } from "pinia";
import compareAnchor from "@/stores/compareAnchor.js";

// import "swiper/css";
// import "swiper/css/navigation";

export default {
	components: {
		CaseCard,
		// Swiper,
		// SwiperSlide,
	},
	data() {
		return {
			isLoading: false,
			cardLoading: false,
			cases: [],
			collectionProducts: [],
			compareCaseProducts: [],
			// modules: [Navigation],
		};
	},
	mixins: [swiperMixin, storageCollectionCase, storageComparecase],
	methods: {
		...mapActions(compareAnchor, ["goCompareAnchor"]),

		getCaseList() {
			this.isLoading = true;
			let url = `${import.meta.env.VITE_URL}/api/${
				import.meta.env.VITE_PATH
			}/products/all`;
			this.$http
				.get(url)
				.then((res) => {
					this.cases = res.data.products;
					this.filterCollectionCase();
					this.filterCompareCase();

					this.isLoading = false;
				})
				.catch((error) => {
					this.$httpMessageState(error.response, "錯誤訊息");
				});
		},
		filterCollectionCase() {
			this.collectionCases.forEach((id) => {
				const filterCollectionData = this.cases.filter((item) => {
					return item.id === id;
				});
				this.collectionProducts.push(filterCollectionData[0]);
			});
		},
		filterCompareCase() {
			this.compareCases.forEach((id) => {
				const filtercompareData = this.cases.filter((item) => {
					return item.id === id;
				});
				this.compareCaseProducts.push(filtercompareData[0]);
			});
		},
	},
	computed: {
		...mapState(compareAnchor, ["toAnchor"]),
	},
	watch: {
		// 因資料(collectionCases)為陣列，做深層的監聽
		collectionCases: {
			handler() {
				this.collectionProducts = [];
				this.filterCollectionCase();
			},
			deep: true,
		},
		compareCases: {
			handler() {
				this.compareCaseProducts = [];
				this.filterCompareCase();
			},
			deep: true,
		},
	},
	mounted() {
		this.getCaseList();
	},
};
</script>
