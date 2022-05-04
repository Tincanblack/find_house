<template>
	<section>
		<div class="container">
			<div class="">
				<h1>找房清單</h1>
			</div>
		</div>
	</section>
	<section class="category-cases py-3">
		<div class="container">
			<div class="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-2">
				<div class="col" v-for="item in cases" :key="item.id">
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
									<small
										>建坪 {{ item.squareFeet }}坪</small
									></span
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
export default {
	data() {
		return {
			cases: [],
		};
	},
	methods: {
		getCaseList() {
			const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/all`;
			this.$http
				.get(url)
				.then((res) => {
					this.cases = res.data.products;
				})
				.catch((error) => {
					this.$httpMessageState(error.response, "錯誤訊息");
					// console.log(error);
				});
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
		this.getCaseList();
	},
};
</script>
<style lang=""></style>
