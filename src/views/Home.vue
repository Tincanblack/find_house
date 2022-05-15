<template>
	<IndexBannerSlide></IndexBannerSlide>
	<section class="index-feature text-center py-5 d-none d-lg-block bg-light">
		<div class="container">
			<h2 class="mb-5">想要找什麼樣類型的房子?</h2>
			<div class="row">
				<div class="col-lg-3">
					<RouterLink
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
					</RouterLink>
				</div>
				<div class="col-lg-3">
					<RouterLink
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
					</RouterLink>
				</div>
				<div class="col-lg-3">
					<RouterLink
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
					</RouterLink>
				</div>
				<div class="col-lg-3">
					<RouterLink
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
					</RouterLink>
				</div>
			</div>
		</div>
	</section>
	<section class="index-cases py-5">
		<div class="container">
			<div class="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-2">
				<div
					class="col case-item__card case-item__card--cardStyle"
					v-for="item in randomData"
					:key="item.id"
				>
					<CaseCard :item="item"></CaseCard>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<div class="index-cases-footer text-center py-4">
						<RouterLink
							class="cases-footer__button btn btn-outline-primary w-25 rounded-0"
							to="/cases"
							>查看更多</RouterLink
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
import IndexBannerSlide from "@/components/IndexBannerSlide.vue";
import CaseCard from "@/components/product/CaseCard.vue";

export default {
	components: {
		IndexBannerSlide,
		CaseCard,
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
	},
	mounted() {
		this.getCasesList();
	},
};
</script>
<style lang=""></style>
