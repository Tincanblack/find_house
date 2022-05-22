<template>
	<IndexBannerSlide></IndexBannerSlide>
	<section class="index-feature text-center py-3 py-lg-5 bg-light">
		<div class="container">
			<h2 class="index-feature__title mb-3 mb-lg-5">
				想要找什麼樣類型的房子?
			</h2>
			<div class="row">
				<div class="col-6 col-lg-3">
					<RouterLink
						class="index-feature-card text-dark text-decoration-none"
						:to="{ path: '/cases', query: { category: '公寓' } }"
					>
						<div class="index-feature-image shadow-sm">
							<img
								src="https://storage.googleapis.com/vue-course-api.appspot.com/found_houses_v2/1653146522965.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ih5vBlnow6TzqKY1hA5Fh8wefrGi8GyMLlQn5iouyAlUoHbQSL0jhV8VsTHELBzZz3UTEVkZhwlJPoE4tccddopCBL4i8qZTOvrDt%2BChOemFKEUW2giGmYeQbUNtnd5k%2F0gW%2FJ8oz44bK393EoiyKSq%2B9R5L7lLotVHOKORs2DdBBe3XLZbhOl2neSWruCpjVDfkzJIrfG1sLkdTEPDHlEZq7lszPtmhUiy3QOjUKkXsY9mFNKnZjExcbwO%2B%2BI7myEwpPC6JQxUvPqeLEztTiwwTFPdSV9DWhAwhLMGPqwK87XA9dqOrmMOwveNVmMPQs%2F65IOfgbB3k7eyig08uDQ%3D%3D"
								alt=""
							/>
							<h5 class="index-feature-card__title">公寓</h5>
						</div>
					</RouterLink>
				</div>
				<div class="col-6 col-lg-3">
					<RouterLink
						class="index-feature-card text-dark text-decoration-none"
						:to="{ path: '/cases', query: { category: '別墅' } }"
					>
						<div class="index-feature-image shadow-sm">
							<img
								src="https://storage.googleapis.com/vue-course-api.appspot.com/found_houses_v2/1653146548529.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pIvgZMIAGiSjNSmjTWy67RytdLMAZpDiRTdoWkA7EeylkDUzgPl4PdoFegu2OR%2BuSynsqDTdQWfbfkYEuhIOYvIOVED%2BlOO0BfsCmCUt7HmO69NO40cxU5CIQWA%2BxODBmXZx2pwvrTvya0a8W%2B7J5TVcWS6MZN%2FtlIaMp14haCBAPRVjTxRXf6moPjIlbUkCQzVqQS5SzPYkWRn2owjlatNW1l8FA939Dvri1RsQr1iJ1ww0GG5FsI9q%2BooMLJ8ZpppRZtCtEm%2BjnMfVLUVn6%2B%2FaAjnkDoqGwBlUmgjkOFC4Vjo0OybwgBhkUVe0tkc3Vp5bgmJsTK7G77E4uqbZqg%3D%3D"
								alt=""
							/>
							<h5 class="index-feature-card__title">別墅</h5>
						</div>
					</RouterLink>
				</div>
				<div class="col-6 col-lg-3">
					<RouterLink
						class="index-feature-card text-dark text-decoration-none"
						:to="{ path: '/cases', query: { category: '華廈' } }"
					>
						<div class="index-feature-image shadow-sm">
							<img
								src="https://storage.googleapis.com/vue-course-api.appspot.com/found_houses_v2/1653146570464.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=EDwCNAo6QGAGzXi557L51PBsNZ57mUvqLjlFO%2Fw9itZ5xCRxJRGG7Qmbr82B8bTyPIwuO87lDQn1tM0%2FRiebw9tcmz5Yiwm7r9tjuGm7YEXuu%2Bqzz86sNsehTqrL6WZQdR8LGcV8Fo1G0gl9l%2BwLP6JsxfUIBm3TY3goKzspbU5ZC8olHZreYEuCbqDQdgJ%2BijvLcj4vikTiIGGa0igSJmz83H%2Fp9vWoYCIKIFgynK6no6FF%2BSqmBUO2W80ZY%2FUq%2Bqy16UkSNLGFCQ8L6%2BpUV9ntrROTciWty2amCtmuK43gkHL26etNbNbAR0Med%2FVdnZP31ghNeQ4ORWp2Kxsz6g%3D%3D"
								alt=""
							/>
							<h5 class="index-feature-card__title">華廈</h5>
						</div>
					</RouterLink>
				</div>
				<div class="col-6 col-lg-3">
					<RouterLink
						class="index-feature-card text-dark text-decoration-none"
						:to="{ path: '/cases', query: { category: '大樓' } }"
					>
						<div class="index-feature-image shadow-sm">
							<img
								src="https://storage.googleapis.com/vue-course-api.appspot.com/found_houses_v2/1653146590645.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gBt3cbBdT5Kg%2BgVbdpRif%2FaRkXitNllCwjGMcJ19j3txnU9xZm8EYSFsEVMrLdWT74Viegwdz2FFhS6kBp97EKZ5KVVpmlxhgYPPs8WtXAIZ7QoYBWcefpfgXPvzYmspbGI3dWIryZAQh4khS7rLl9%2BQVwFmmLxRDeGVTe9%2FE5Lonqr7baU8DuEAWZmmJXqLsQlgNZwNFjyW%2FSOO%2FVrmk1bCz2r63HmGp%2BmXaZ9LULmcKjM8hOintJGUbXdOCIM%2BnrnHVJI3l5L5FjEzeG%2Bv%2B%2FPKNRgWcNhm1ND0VJThZfq4XK1hxj6xbDRytXs684kXR1DqeAnL2TpbzW4JRxNKSw%3D%3D"
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
			<div class="row row-cols-1 row-cols-sm-3 row-cols-lg-4 g-2">
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
	<section class="index-news py-3 py-lg-5">
		<div class="container">
			<div class="row row-cols-1 row-cols-lg-2 g-3">
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
