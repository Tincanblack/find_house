<template>
	<IndexBannerSlide></IndexBannerSlide>
	<section class="index-feature py-3 py-lg-5 text-center bg-light">
		<div class="container">
			<h2 class="section__title mb-3 mb-lg-5">想要找什麼樣類型的房子?</h2>
			<div class="row">
				<div class="col-3 col-lg-3">
					<RouterLink
						class="index-feature-card text-dark text-decoration-none"
						:to="{ path: '/cases', query: { category: '公寓' } }"
					>
						<div class="index-feature-image shadow-sm">
							<img
								src="https://storage.googleapis.com/vue-course-api.appspot.com/found_houses_v2/1653222842559.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hi8IN0aw46F52fvShq87olsxBG2Rb2G0gJ%2BHvhwrU6GKvIt6JHxZj7GIciMoZpqk14Ysc8XcP8Gom8AeSSX%2BAih3hokEujj%2BET%2Bh5Cne61qq38DkREEWtvYmILK3Fzt6Qr%2B2tLhgsXtQ9pSgmNbZJbHu13HbBUL%2BkS7qdL43bmXEY4Y6vKEgH21Dzy4op4blZ4EEEKT91X8NVAPhrn13oRbn%2BAfhdeZLwbdv%2F%2FDV5dvxxXtXWinb3gjiDocG%2FM7jb7R6sENXEhhq2yBJy%2FGgWXl3W5lV5oTG7SPrmCpzq8Kdxw9Lb8jnwBI%2FdFgyH8FetR2jBhiUxNZumyjRnv7Jog%3D%3D"
								alt=""
							/>
							<h5 class="index-feature-card__title">公寓</h5>
						</div>
					</RouterLink>
				</div>
				<div class="col-3 col-lg-3">
					<RouterLink
						class="index-feature-card text-dark text-decoration-none"
						:to="{ path: '/cases', query: { category: '別墅' } }"
					>
						<div class="index-feature-image shadow-sm">
							<img
								src="https://storage.googleapis.com/vue-course-api.appspot.com/found_houses_v2/1653222859692.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fZ6GzcOTDExUFZzwh2ne2oBlCuNAxFgQKDTbOlTfyAuAr%2B%2BBfIag%2BL0xOc9IiObdrWdOVXqZs4EMWz%2B1fz%2Fvn0ynqesAI%2FBzgaTAtJNw%2Fy%2BUdWTti%2Be5giyv%2BOlawLIa0%2Flg1qU27L97Gd7e9e4EwKDaS13398Ekyk2xTUYsRiZBtfyf2UvbhzZzHhSyRwmjRdatpJosYCl6qEM5a9wN07nPtWpycdgmqH89SAzncH0m8hS3cBYqPzOqvdRjcFN8SIGX%2BHSA8Qe9MLYWRAKPQUGNVjM%2FtR%2F7x2aZnre3XQAksdkDNwpEZEvZB9LG2l11Q8Tx82oAuhMPp2%2FL7wYddg%3D%3D"
								alt=""
							/>
							<h5 class="index-feature-card__title">別墅</h5>
						</div>
					</RouterLink>
				</div>
				<div class="col-3 col-lg-3">
					<RouterLink
						class="index-feature-card text-dark text-decoration-none"
						:to="{ path: '/cases', query: { category: '華廈' } }"
					>
						<div class="index-feature-image shadow-sm">
							<img
								src="https://storage.googleapis.com/vue-course-api.appspot.com/found_houses_v2/1653222870662.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=IK1VVG3TOoH%2FSYlC7Vk4PVWcWILlQiejaJ9VZCUgZr5Fy5f7NtULtp%2B7WopUhcj%2F2dmCRR6dbIOyoqSc4cDJ1zDc9I5splUraouiS3xmSCSNGgH7%2FntsuqYDSGnlkazxqJ%2BZm6%2BYYYvnKDuei%2B%2BCJsI4YETWC0s3VLdURm8CCQIq81BVQbZ9Gj%2Bb83CY%2F6yW7i7B0S2Ss34iffjeJQsTHZf1dc9A7YTy30a2Pb4N0SMkUHIAQPKikm%2F7bQ%2BN09Xw4%2Fze5R6tDsR%2F%2FlVM9iDe5c%2FcM17XZ9NnC%2BU7DsDxYdjyiUf59m%2BN3Zo6xqOLvWP3EUX9Yhrgx%2BgXe6RyrolcJw%3D%3D"
								alt=""
							/>
							<h5 class="index-feature-card__title">華廈</h5>
						</div>
					</RouterLink>
				</div>
				<div class="col-3 col-lg-3">
					<RouterLink
						class="index-feature-card text-dark text-decoration-none"
						:to="{ path: '/cases', query: { category: '大樓' } }"
					>
						<div class="index-feature-image shadow-sm">
							<img
								src="https://storage.googleapis.com/vue-course-api.appspot.com/found_houses_v2/1653222883032.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=G1bhOjbedG45P49MlAIXkYLwHvTClm8SULOl9iikoxTPwLdwM8bW9WJvA7%2FyJit3jrFfrGK8SaFCnC%2B7eQIJvNeRZWmrumtQIBkA5XN24%2BwJQ0IUZOgxR8McPRYTonG7clnQEsrCTtUOcG282hrGQkSibdz097OIJOI%2BMj5CtmCQfJYdhcRyXc1umvm5uvJkhyPPiwkc2YGO5Xn2iv3Gr2If%2FmKoP3OgAlADH4rqd1CjZDphNRy38SVJ8wAp3bnezE91AWkww7JbE5R3UmbZWw00bUHsWiR6Gcj7vj%2FoYxgPHvIaqGPlomd0jLR9Ha4o3oAqvUZ9y68ZQGfwIPQ8vw%3D%3D"
								alt=""
							/>
							<h5 class="index-feature-card__title">大樓</h5>
						</div>
					</RouterLink>
				</div>
			</div>
		</div>
	</section>
	<section class="index-cases py-3 py-lg-5">
		<div class="container">
			<div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2">
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
	<section class="index-news py-3 py-lg-5 bg-light">
		<div class="container">
			<div class="row">
				<div class="col-12 d-block d-xl-none">
					<h2 class="section__title">房訊新知</h2>
				</div>
				<div class="col-12 col-xl-6 d-none d-xl-block">
					<RouterLink class="index-news-image" to="/news">
						<span class="index-news-image__text">更多房訊新知</span>
					</RouterLink>
				</div>
				<div class="col-12 col-xl-6">
					<div
						class="list-group index-news-list rounded-0"
						v-for="news in articles"
						:key="news.id"
					>
						<RouterLink
							class="list-group-item list-group-item-action d-flex gap-3 py-3"
							:to="`/article/${news.id}`"
						>
							<div
								class="d-flex gap-2 w-100 justify-content-between"
							>
								<div>
									<h6 class="index-news-list__title">
										{{ news.title }}
									</h6>
									<div
										class="opacity-75 index-news-list__description"
									>
										{{ news.description }}
									</div>
								</div>
								<small class="opacity-50 text-nowrap"
									>{{ $format.dateFormat(news.create_at) }}
								</small>
							</div>
						</RouterLink>
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
