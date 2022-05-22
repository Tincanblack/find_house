<template>
	<LoadingAnimate :active="isLoading" :z-index="1060"></LoadingAnimate>
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
					<div class="filter">
						<label
							class="visually-hidden"
							for="inlineFormSelectPref"
							>Preference</label
						>
						<!-- <div class="dropdown">
							<button
								class="btn dropdown-toggle"
								type="button"
								id="dropdownMenuButton1"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								預設顯示
							</button>
							<ul
								class="dropdown-menu"
								aria-labelledby="dropdownMenuButton1"
							>
								<li>
									<button class="dropdown-item">
										售價從低到高
									</button>
								</li>
								<li>
									<button class="dropdown-item">
										售價從高到低
									</button>
								</li>
								<li>
									<button class="dropdown-item">
										屋齡從低到高
									</button>
								</li>
								<li>
									<button class="dropdown-item">
										屋齡從高到低
									</button>
								</li>
								<li>
									<button class="dropdown-item">
										坪數從小到大
									</button>
								</li>
								<li>
									<button class="dropdown-item">
										坪數從大到小
									</button>
								</li>
							</ul>
						</div> -->
						<select
							class="form-select"
							v-model="sortBy"
							@change="sortCaseList(sortBy)"
						>
							<option value="" selected disabled>預設顯示</option>
							<option value="priceLow2High">售價從低到高</option>
							<option value="priceHigh2Low">售價從高到低</option>
							<option value="houseAgeLow2High">
								屋齡從低到高
							</option>
							<option value="houseAgeHigh2Low">
								屋齡從高到低
							</option>
							<option value="squareFeetLow2High">
								坪數從小到大
							</option>
							<option value="squareFeetHight2Low">
								坪數從大到小
							</option>
						</select>
					</div>
				</div>
				<div class="col-12 d-none d-lg-block">
					<div class="sort">
						<span
							class="sort-display__button"
							:class="{ isActive: this.caseCardView === 'card' }"
							@click="changeCardView('card')"
						>
							<i class="bi bi-grid fs-3 sort-display__icon"></i>
							卡片
						</span>
						<span
							class="sort-display__button"
							:class="{ isActive: this.caseCardView === 'list' }"
							@click="changeCardView('list')"
						>
							<i
								class="bi bi-list-ul fs-3 sort-display__icon"
							></i>
							列表
						</span>
					</div>
				</div>
			</form>
		</div>
	</section>
	<section class="category-cases pb-3">
		<div class="container">
			<div
				v-if="caseCardView === 'card'"
				class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2"
			>
				<div class="col" v-for="item in cases" :key="item.id">
					<CaseCard :item="item"></CaseCard>
				</div>
			</div>
			<div v-if="caseCardView === 'list'" class="row row-cols-1 g-2">
				<div class="col pb-lg-3" v-for="item in cases" :key="item.id">
					<CaseList :item="item"></CaseList>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import CaseCard from "@/components/product/CaseCard.vue";
import CaseList from "@/components/product/CaseList.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
export default {
	components: {
		CaseCard,
		CaseList,
		Breadcrumb,
	},
	data() {
		return {
			isLoading: false,
			cases: [],
			sortCases: [],
			caseCardView: localStorage.getItem("case_card_view") || "card",
			filterCategory: "",
			sortBy: "",
		};
	},
	methods: {
		getCaseList(query) {
			this.isLoading = true;
			let url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/all`;
			if (query) {
				url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products?category=${query}`;
			}
			this.$http
				.get(url)
				.then((res) => {
					this.isLoading = false;
					this.cases = res.data.products;
				})
				.catch((error) => {
					this.$httpMessageState(error.response, "錯誤訊息");
				});
		},
		sortCaseList(type) {
			switch (type) {
				case "priceLow2High":
					this.cases.sort((a, b) => a.price - b.price);
					break;
				case "priceHigh2Low":
					this.cases.sort((a, b) => b.price - a.price);
					break;
				case "houseAgeLow2High":
					this.cases.sort((a, b) => a.houseAge - b.houseAge);
					break;
				case "houseAgeHigh2Low":
					this.cases.sort((a, b) => b.houseAge - a.houseAge);
					break;
				case "squareFeetLow2High":
					this.cases.sort((a, b) => a.squareFeet - b.squareFeet);
					break;
				case "squareFeetHight2Low":
					this.cases.sort((a, b) => b.squareFeet - a.squareFeet);
					break;
				default:
					this.cases.sort((a, b) => b.id - a.id);
					break;
			}
		},
		changeCardView(view) {
			this.caseCardView = view === "card" ? "card" : "list";
			localStorage.setItem("case_card_view", this.caseCardView);
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
	},
	mounted() {
		this.filterCategory = this.$route.query.category;
		this.getCaseList(this.filterCategory);
		window.addEventListener("resize", this.resizeWidth);
	},
};
</script>
<style lang=""></style>
