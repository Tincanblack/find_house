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
						<select class="form-select">
							<option selected>預設顯示</option>
							<option value="priceAsc">售價從低到高</option>
							<option value="priceDesc">售價從高到低</option>
							<option value="ageAsc">屋齡從低到高</option>
							<option value="ageDesc">屋齡從高到低</option>
							<option value="squareFeetAsc">坪數從小到大</option>
							<option value="squareFeetDesc">坪數從大到小</option>
						</select>
					</div>
				</div>
				<div class="col-12 d-none d-lg-block">
					<div class="sort">
						<span
							class="sort-display__button"
							:class="{ isActive: this.caseCardView === 'card' }"
							@click="handleCaseCard('card')"
						>
							<i class="bi bi-grid fs-3 sort-display__icon"></i>
							卡片
						</span>
						<span
							class="sort-display__button"
							:class="{ isActive: this.caseCardView === 'list' }"
							@click="handleCaseCard('list')"
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
				class="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-2"
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
			cases: [],
			caseCardView: localStorage.getItem("case_card_view") || "card",
			reverseSort: false,
			filter: "",
			isLoading: false,
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
		handleCaseCard(view) {
			if (view == "card") {
				this.caseCardView = "card";
			} else if (view === "list") {
				this.caseCardView = "list";
			}
			localStorage.setItem("case_card_view", this.caseCardView);
		},
		resizeWidth() {
			if (window.matchMedia("(max-width: 767px)").matches) {
				this.caseCardView = "card";
			}
		},
	},
	computed: {
		// sortCases() {
		// 	return this.cases.sort((a, b) => {});
		// },
	},
	watch: {
		$route() {
			this.filter = this.$route.query.category;
			if (this.$route.query.category !== undefined) {
				this.getCaseList();
			}
		},
	},
	mounted() {
		this.filter = this.$route.query.category;
		this.getCaseList(this.filter);
		window.addEventListener("resize", this.resizeWidth);
	},
};
</script>
<style lang=""></style>
