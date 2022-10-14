<template>
	<div class="site-content">
		<LoadingAnimate :active="isLoading" :z-index="1060"></LoadingAnimate>
		<section
			class="collection-banner d-flex align-items-center justify-content-center"
		>
			<h2 class="collection-banner__title">心之所向，儀之所往</h2>
		</section>
		<section class="collection-compare py-5 bg-light">
			<div class="container">
				<div class="row">
					<div
						v-if="compareCase.length !== 0"
						class="d-flex align-items-center justify-content-center"
					>
						<h2></h2>
						<RouterLink
							class="btn btn-outline-primary rounded-0 collection-content__button"
							to="/compare"
							>前去比較</RouterLink
						>
					</div>
					<div
						v-else
						class="d-flex align-items-center justify-content-center"
					>
						<h3>將收藏的案件加入比較</h3>
					</div>
				</div>
			</div>
		</section>
		<section class="collection py-3">
			<div class="container">
				<template v-if="collectionProducts.length !== 0">
					<div class="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-2">
						<div
							class="col pb-lg-3"
							v-for="item in collectionProducts"
							:key="item.id"
						>
							<CaseCard
								:item="item"
								@emitCollectionCase="handleCollectionCase"
							></CaseCard>
							<!-- <div
								class="card"
								:class="{ 'is-loading': cardLoading }"
							>
								<RouterLink
									class="text-decoration-none rounded-0 text-dark"
									:to="`/case/${item.id}`"
								>
									<div
										class="case-item__card case-item__card--cardStyle"
									>
										<div
											v-if="item.imageUrl"
											class="card-image"
										>
											<div
												class="card-tag"
												v-show="!cardLoading"
											>
												<div
													class="tag"
													v-if="
														item.origin_price !==
														item.price
													"
												>
													<span
														v-if="
															item.origin_price &&
															item.price
														"
														class="badge tag__element--sec"
													>
														<i
															class="bi bi-arrow-down"
														></i>
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
													v-for="tag in $format.filterItemTag(
														item
													)"
													:key="tag"
												>
													<span
														class="badge tag__element"
														:class="{
															'tag__element--third':
																tag ===
																'新上架',
															'tag__element--fourth':
																tag ===
																'低總價',
															'tag__element--main':
																tag ===
																'店長推薦',
														}"
														>{{ tag }}</span
													>
												</div>
											</div>
											<div
												class="card-price"
												v-show="!cardLoading"
											>
												<span
													class="card-price__price card-price__price--selling"
												>
													{{
														$format.currencyFormat(
															item.price
														)
													}}
													<span
														class="card-price__price-unit"
														>萬</span
													>
												</span>
												<small
													v-if="
														item.origin_price !==
														item.price
													"
													class="card-price__price card-price__price--origin fs-6"
													><del
														>{{
															$format.currencyFormat(
																item.origin_price
															)
														}}
														萬</del
													></small
												>
											</div>
											<img
												class="img-fluid"
												:src="item.imageUrl"
												alt=""
											/>
										</div>
										<div class="card-body">
											<h5
												class="card-title text-truncate fw-bold"
											>
												{{
													cardLoading
														? ""
														: item.title
												}}
											</h5>
											<div class="card-text">
												<div class="card-text-list">
													<span
														class="card-text-list__item"
													>
														{{
															cardLoading
																? ""
																: item.squareFeet +
																  "坪"
														}}
													</span>
													<span
														class="card-text-list__item"
													>
														{{
															cardLoading
																? ""
																: $format.patternFormat(
																		item.pattern
																  )
														}}
													</span>
													<span
														class="card-text-list__item"
													>
														{{
															cardLoading
																? ""
																: item.houseAge +
																  "年"
														}}
													</span>
												</div>
											</div>
										</div>
									</div>
								</RouterLink>
								<div
									class="card-footer text-center"
									v-if="$route.name === 'collections'"
								>
									<div class="btn-group">
										<button
											class="btn btn-danger"
											@click="
												handleCollectionCase(item.id)
											"
										>
											<i class="bi bi-bookmark-x"></i>
											取消收藏
										</button>
										<button class="btn btn-primary">
											<i class="bi bi-files"></i>
											加入比較
										</button>
									</div>
								</div>
							</div> -->
						</div>
					</div>
				</template>
				<template v-else>
					<div
						class="row align-items-center justify-content-center text-center"
					>
						<div class="col">
							<h3 class="collection-content__title my-3">
								還沒看到值得收藏的物件嗎？快去找找吧
							</h3>
							<RouterLink
								class="btn btn-outline-primary rounded-0 collection-content__button"
								to="/cases"
								>前去找房 <i class="bi bi-house"></i
							></RouterLink>
						</div>
					</div>
				</template>
			</div>
		</section>
	</div>
</template>
<script>
import CaseCard from "@/components/widgets/CaseCardLayout.vue";
import storagecollectionCase from "@/mixins/collectionCase.js";

export default {
	components: {
		CaseCard,
	},
	data() {
		return {
			isLoading: false,
			cardLoading: false,
			cases: [],
			collectionProducts: [],
			compareCase: [],
		};
	},
	mixins: [storagecollectionCase],
	methods: {
		getCaseList() {
			this.isLoading = true;
			let url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/all`;
			this.$http
				.get(url)
				.then((res) => {
					this.cases = res.data.products;
					this.filterCollectionCase();

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
	},
	watch: {
		// this.collectionsCases 一有變動就重新篩選
		// 因 this.collectionsCases 為陣列，所以要做深層的監聽
		collectionCases: {
			handler() {
				this.collectionProducts = [];
				this.filterCollectionCase();
			},
			deep: true,
		},
	},
	mounted() {
		this.getCaseList();
	},
};
</script>
<style lang=""></style>
