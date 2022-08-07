<template>
	<Breadcrumb></Breadcrumb>
	<section
		style="
			background: url('https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
');
		"
		height="10vh"
	></section>
	<section class="category-header py-3">
		<div class="container">
			<form
				class="row row-cols-lg-auto g-3 align-items-center justify-content-between"
			>
				<div class="col-12">
					<div class="dropdown sort-cases">
						<button
							class="btn sort-cases-status dropdown-toggle"
							type="button"
							id="dropdownButton"
							data-bs-toggle="dropdown"
							aria-expanded="false"
							ref="currentSort"
						>
							預設顯示
						</button>
						<ul
							class="dropdown-menu sort-cases-select"
							aria-labelledby="dropdownButton"
						>
							<li>
								<button
									type="button"
									class="dropdown-item sort-cases-select__option"
									:class="{
										active: sortBy === '',
									}"
									@click="sortCaseList('')"
								>
									預設顯示
								</button>
							</li>
							<li>
								<button
									type="button"
									class="dropdown-item sort-cases-select__option"
									:class="{
										active: sortBy === 'priceLow2High',
									}"
									@click="sortCaseList('priceLow2High')"
								>
									售價從低 > 高
								</button>
							</li>
							<li>
								<button
									type="button"
									class="dropdown-item sort-cases-select__option"
									:class="{
										active: sortBy === 'priceHigh2Low',
									}"
									@click="sortCaseList('priceHigh2Low')"
								>
									售價從高 > 低
								</button>
							</li>
							<li>
								<button
									type="button"
									class="dropdown-item sort-cases-select__option"
									:class="{
										active: sortBy === 'houseAgeLow2High',
									}"
									@click="sortCaseList('houseAgeLow2High')"
								>
									屋齡從低 > 高
								</button>
							</li>
							<li>
								<button
									type="button"
									class="dropdown-item sort-cases-select__option"
									:class="{
										active: sortBy === 'houseAgeHigh2Low',
									}"
									@click="sortCaseList('houseAgeHigh2Low')"
								>
									屋齡從高 > 低
								</button>
							</li>
							<li>
								<button
									type="button"
									class="dropdown-item sort-cases-select__option"
									:class="{
										active: sortBy === 'squareFeetLow2High',
									}"
									@click="sortCaseList('squareFeetLow2High')"
								>
									坪數從小 > 大
								</button>
							</li>
							<li>
								<button
									type="button"
									class="dropdown-item sort-cases-select__option"
									:class="{
										active:
											sortBy === 'squareFeetHight2Low',
									}"
									@click="sortCaseList('squareFeetHight2Low')"
								>
									坪數從大 > 小
								</button>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-12 d-none d-lg-block">
					<div class="case-card-display">
						<span
							class="case-card-display__button"
							:class="{ isActive: this.caseCardView === 'card' }"
							@click="changeCardView('card')"
						>
							<i
								class="bi bi-grid fs-3 case-card-display__icon"
							></i>
							卡片
						</span>
						<span
							class="case-card-display__button"
							:class="{ isActive: this.caseCardView === 'list' }"
							@click="changeCardView('list')"
						>
							<i
								class="bi bi-list-ul fs-3 case-card-display__icon"
							></i>
							列表
						</span>
					</div>
				</div>
			</form>
		</div>
	</section>
	<section class="category-cases site-content pb-3">
		<div class="container">
			<div
				v-show="caseCardView === 'card'"
				class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2"
			>
				<div class="col" v-for="item in cases" :key="item.id">
					<CaseCard
						:item="item"
						:cardLoading="cardLoading"
					></CaseCard>
				</div>
			</div>
			<div v-show="caseCardView === 'list'" class="row row-cols-1 g-2">
				<div class="col pb-lg-3" v-for="item in cases" :key="item.id">
					<CaseList
						:item="item"
						:cardLoading="cardLoading"
					></CaseList>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import CaseCard from "@/components/product/CaseCardLayout.vue";
import CaseList from "@/components/product/CaseListLayout.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
export default {
	components: {
		CaseCard,
		CaseList,
		Breadcrumb,
	},
	data() {
		return {
			cardLoading: false,
			cases: [],
			sortCases: [],
			caseCardView: "card",
			filterCategory: "",
			sortBy: "",
		};
	},
	methods: {
		getCaseList(query) {
			this.cardLoading = true;
			let url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/all`;
			if (query) {
				url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products?category=${query}`;
			}
			this.$http
				.get(url)
				.then((res) => {
					this.cases = res.data.products;
					setTimeout(() => {
						this.cardLoading = false;
					}, 1000);
				})
				.catch((error) => {
					this.$httpMessageState(error.response, "錯誤訊息");
				});
		},
		sortCaseList(type) {
			switch (type) {
				case "priceLow2High":
					this.cases.sort((a, b) => a.price - b.price);
					this.$refs.currentSort.innerHTML = "售價從低 > 高";
					break;
				case "priceHigh2Low":
					this.cases.sort((a, b) => b.price - a.price);
					this.$refs.currentSort.innerHTML = "售價從高 > 低";
					break;
				case "houseAgeLow2High":
					this.cases.sort((a, b) => a.houseAge - b.houseAge);
					this.$refs.currentSort.innerHTML = "屋齡從低 > 高";
					break;
				case "houseAgeHigh2Low":
					this.cases.sort((a, b) => b.houseAge - a.houseAge);
					this.$refs.currentSort.innerHTML = "屋齡從高 > 低";
					break;
				case "squareFeetLow2High":
					this.cases.sort((a, b) => a.squareFeet - b.squareFeet);
					this.$refs.currentSort.innerHTML = "坪數從小 > 大";
					break;
				case "squareFeetHight2Low":
					this.cases.sort((a, b) => b.squareFeet - a.squareFeet);
					this.$refs.currentSort.innerHTML = "坪數從大 > 小";
					break;
				default:
					console.log(type);
					this.cases.sort((a, b) => b.num - a.num);
					this.$refs.currentSort.innerHTML = "預設顯示";
					break;
			}
			this.sortBy = type;
		},
		changeCardView(view) {
			this.caseCardView = view === "card" ? "card" : "list";
		},
		resizeWidth() {
			if (window.matchMedia("(max-width: 767px)").matches)
				this.caseCardView = "card";
		},
	},
	watch: {
		$route() {
			this.filterCategory = this.$route.query.category;
			if (
				this.filterCategory !== this.$route.query.category ||
				this.filterCategory === undefined
			) {
				this.getCaseList();
			}
		},
		caseCardView: {
			handler() {
				localStorage.setItem("case_card_view", this.caseCardView);
			},
		},
	},
	mounted() {
		this.filterCategory = this.$route.query.category;
		this.getCaseList(this.filterCategory);
		this.caseCardView = localStorage.getItem("case_card_view");
		window.addEventListener("resize", this.resizeWidth);
	},
};
</script>
