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
					<div class="filter">
						<label
							class="visually-hidden"
							for="inlineFormSelectPref"
							>Preference</label
						>
						<select class="form-select">
							<option selected>預設顯示</option>
							<option value="1">售價從低到高</option>
							<option value="2">售價從高到低</option>
							<option value="3">屋齡從低到高</option>
							<option value="3">屋齡從高到低</option>
							<option value="3">坪數從小到大</option>
							<option value="3">坪數從大到小</option>
						</select>
					</div>
				</div>
				<div class="col-12">
					<div class="sort">
						<span class="sort-display__button">
							<i class="bi bi-grid fs-3 sort-display__icon"></i>
							卡片
						</span>
						<span class="sort-display__button">
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
	<section class="category-cases">
		<div class="container">
			<div class="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-2">
				<div class="col" v-for="item in cases" :key="item.id">
					<CaseCard
						:item="item"
						v-if="displayStyle === 'card'"
					></CaseCard>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import CaseCard from "@/components/CaseCard.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
export default {
	components: {
		CaseCard,
		Breadcrumb,
	},
	data() {
		return {
			cases: [],
			displayStyle: "card",
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
	},
	mounted() {
		this.getCaseList();
	},
};
</script>
<style lang=""></style>
