<template>
	<IndexBanner></IndexBanner>
	<section class="index-feature text-center py-5 d-none d-lg-block bg-light">
		<div class="container">
			<h2 class="mb-5">想要找什麼樣類型的房子?</h2>
			<div class="row">
				<div class="col-lg-3">
					<routerLink
						class="index-feature-card text-dark text-decoration-none"
						:to="{ path: '/cases', query: { category: '公寓' } }"
					>
						<div class="index-feature-image shadow-sm">
							<img
								src="https://via.placeholder.com/125x125"
								alt=""
							/>
							<h5 class="index-feature-card__title">公寓</h5>
						</div>
					</routerLink>
				</div>
				<div class="col-lg-3">
					<routerLink
						class="index-feature-card text-dark text-decoration-none"
						:to="{ path: '/cases', query: { category: '別墅' } }"
					>
						<div class="index-feature-image shadow-sm">
							<img
								src="https://via.placeholder.com/125x125"
								alt=""
							/>
							<h5 class="index-feature-card__title">別墅</h5>
						</div>
					</routerLink>
				</div>
				<div class="col-lg-3">
					<routerLink
						class="index-feature-card text-dark text-decoration-none"
						:to="{ path: '/cases', query: { category: '華廈' } }"
					>
						<div class="index-feature-image shadow-sm">
							<img
								src="https://via.placeholder.com/125x125"
								alt=""
							/>
							<h5 class="index-feature-card__title">華廈</h5>
						</div>
					</routerLink>
				</div>
				<div class="col-lg-3">
					<routerLink
						class="index-feature-card text-dark text-decoration-none"
						:to="{ path: '/cases', query: { category: '大樓' } }"
					>
						<div class="index-feature-image shadow-sm">
							<img
								src="https://via.placeholder.com/125x125"
								alt=""
							/>
							<h5 class="index-feature-card__title">大樓</h5>
						</div>
					</routerLink>
				</div>
			</div>
		</div>
	</section>
	<section class="index-cases py-5">
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
			<div class="row">
				<div class="col">
					<div class="index-cases-footer text-center py-4">
						<routerLink
							class="cases-footer__button btn btn-outline-primary w-25 rounded-0"
							to="/cases"
							>查看更多</routerLink
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
import IndexBanner from "@/components/IndexBanner.vue";

export default {
	components: {
		IndexBanner,
	},
	data() {
		return {
			cases: [],
			randomData: [],
		};
	},
	methods: {
		getCasesList() {
			const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/all`;
			this.$http
				.get(url)
				.then((res) => {
					this.cases = res.data.products;
					this.randomProduct(12);
				})
				.catch((error) => {
					this.$httpMessageState(error.response, "錯誤訊息");
				});
		},
		randomProduct(count) {
			const tempData = this.cases;
			this.randomData = [];
			for (let x = 0; x < count; x += 1) {
				const randomCase = Math.floor(
					Math.random() * (tempData.length - 0) + 0
				);
				this.randomData.push(this.cases[randomCase]);
				tempData.splice(randomCase, 1);
			}
		},
		filterItemTag(caseItem) {
			const filteredTags = caseItem.tags.filter((tag) => {
				return (
					tag === "新上架" || tag === "低總價" || tag === "店長推薦"
				);
			});
			return filteredTags;
		},
	},
	mounted() {
		this.getCasesList();
	},
};
</script>
<style lang=""></style>
