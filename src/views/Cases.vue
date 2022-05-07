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
					<CaseCard :item="item"></CaseCard>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import CaseCard from "@/components/CaseCard.vue";
export default {
	components: {
		CaseCard,
	},
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
	},
	mounted() {
		this.getCaseList();
	},
};
</script>
<style lang=""></style>
