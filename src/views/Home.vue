<template>
	<div class="site-content">
		<IndexBannerSlide></IndexBannerSlide>
		<section class="index-feature py-3 py-xl-5 text-center bg-light">
			<div class="container">
				<h2 class="index-feature__title mb-3 mb-xl-5 fw-bold">
					想要找什麼樣類型的房子?
				</h2>
				<div class="row">
					<div class="col-6 col-xl-3">
						<RouterLink
							class="index-feature-card text-dark text-decoration-none"
							:to="{
								path: '/cases',
								query: { category: '公寓' },
							}"
						>
							<div class="index-feature-image shadow-sm">
								<img
									src="../assets/images/index_feature_card_1.png"
									alt=""
								/>
								<h5 class="index-feature-card__title">公寓</h5>
							</div>
						</RouterLink>
					</div>
					<div class="col-6 col-xl-3">
						<RouterLink
							class="index-feature-card text-dark text-decoration-none"
							:to="{
								path: '/cases',
								query: { category: '別墅' },
							}"
						>
							<div class="index-feature-image shadow-sm">
								<img
									src="../assets/images/index_feature_card_2.png"
									alt=""
								/>
								<h5 class="index-feature-card__title">別墅</h5>
							</div>
						</RouterLink>
					</div>
					<div class="col-6 col-xl-3">
						<RouterLink
							class="index-feature-card text-dark text-decoration-none"
							:to="{
								path: '/cases',
								query: { category: '華廈' },
							}"
						>
							<div class="index-feature-image shadow-sm">
								<img
									src="../assets/images/index_feature_card_3.png"
									alt=""
								/>
								<h5 class="index-feature-card__title">華廈</h5>
							</div>
						</RouterLink>
					</div>
					<div class="col-6 col-xl-3">
						<RouterLink
							class="index-feature-card text-dark text-decoration-none"
							:to="{
								path: '/cases',
								query: { category: '大樓' },
							}"
						>
							<div class="index-feature-image shadow-sm">
								<img
									src="../assets/images/index_feature_card_4.png"
									alt=""
								/>
								<h5 class="index-feature-card__title">大樓</h5>
							</div>
						</RouterLink>
					</div>
				</div>
			</div>
		</section>
		<section class="index-cases py-3 py-xl-5">
			<div class="container">
				<div class="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-2">
					<div v-for="item in randomData" :key="item.id">
						<CaseCard
							:item="item"
							:cardLoading="cardLoading"
						></CaseCard>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<div class="index-cases-footer text-center py-4">
							<RouterLink
								class="cases-footer__button btn btn-outline-primary rounded-0"
								to="/cases"
								>查看更多</RouterLink
							>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="index-news py-3 py-xl-5 bg-light">
			<div class="container">
				<div class="row">
					<div class="col-12 d-block d-xl-none">
						<div class="index-news-header">
							<h2 class="index-news-header__title">房訊新知</h2>
							<RouterLink
								class="index-news-header__link fs-6 text-decoration-none"
								to="/news"
							>
								更多房訊新知 →</RouterLink
							>
						</div>
					</div>
					<div class="col-12 col-xl-6 d-none d-xl-block">
						<RouterLink
							v-show="articles.length > 0"
							class="index-news-image"
							to="/news"
						>
							<span class="index-news-image__text"
								>更多房訊新知</span
							>
						</RouterLink>
					</div>
					<div class="col-12 col-xl-6">
						<template
							v-for="(news, index) in articles"
							:key="news.id"
						>
							<div
								class="list-group index-news-list rounded-0"
								v-if="index >= 0 && index <= 2"
							>
								<RouterLink
									class="list-group-item list-group-item-action d-flex gap-3 py-3"
									:to="`/news/${news.id}`"
								>
									<div
										class="d-flex gap-2 justify-content-between align-items-center"
									>
										<div class="index-news-list__date">
											<div class="public-date">
												<div class="public-date__main">
													{{
														$format.publicDateFormat(
															news.create_at
														)[1]
													}}
												</div>
												<div class="public-date__sec">
													{{
														$format.publicDateFormat(
															news.create_at
														)[0]
													}}
												</div>
											</div>
										</div>
										<div class="index-news-list__content">
											<h6 class="index-news-list__title">
												{{ news.title }}
											</h6>
											<div
												class="opacity-75 index-news-list__description"
											>
												{{ news.description }}
											</div>
										</div>
									</div>
								</RouterLink>
							</div>
						</template>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
import IndexBannerSlide from "@/components/IndexBannerSlide.vue";
import CaseCard from "@/components/widgets/CaseCardLayout.vue";

export default {
	components: {
		IndexBannerSlide,
		CaseCard,
	},
	data() {
		return {
			cardLoading: true,
			cases: [],
			articles: [],
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
					this.randomItem(12);
					setTimeout(() => {
						this.cardLoading = false;
					}, 1000);
				})
				.catch((error) => {
					this.$httpMessageState(error.response, "錯誤訊息");
				});
		},
		getNewsList(page = 1) {
			this.isLoading = true;
			this.$http
				.get(
					`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/articles/?page=${page}`
				)
				.then((response) => {
					this.articles = response.data.articles;
				})
				.catch((error) => {
					this.$httpMessageState(error.response, "錯誤訊息");
				});
		},
		randomItem(count) {
			const tempData = this.cases;
			this.randomData = [];
			for (let x = 0; x < count; x += 1) {
				const randomItem = Math.floor(
					Math.random() * (tempData.length - 0) + 0
				);
				this.randomData.push(this.cases[randomItem]);
				tempData.splice(randomItem, 1);
			}
		},
	},
	mounted() {
		this.getCasesList();
		this.getNewsList();
	},
};
</script>
<style lang=""></style>
