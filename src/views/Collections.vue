<template>
	<div class="site-content">
		<LoadingAnimate :active="isLoading" :z-index="1060"></LoadingAnimate>
		<section
			class="collection-banner d-flex align-items-center justify-content-center"
		>
			<h2 class="collection-banner__title">心之所向，儀之所往</h2>
		</section>
		<section class="collection py-3">
			<div class="container">
				<template v-if="collectionsCases.length === 0">
					<div class="container">
						<div
							class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2"
						>
							<div
								class="col"
								v-for="item in collectionsCases"
								:key="item.id"
							>
								<CaseCard
									:item="item"
									:cardLoading="cardLoading"
								></CaseCard>
							</div>
						</div>
					</div>
				</template>
				<template v-else>
					<div
						class="row align-items-center justify-content-center text-center"
					>
						<div class="col">
							<h3>這裡沒有任何收藏，趕快去找房吧</h3>
							<RouterLink class="btn btn-primary" to="/cases"
								>前去找房</RouterLink
							>
						</div>
					</div>
				</template>
			</div>
		</section>
	</div>
</template>
<script>
import CaseCard from "@/components/widgets/CaseCardLayout.vue";

export default {
	components: {
		CaseCard,
	},
	data() {
		return {
			isLoading: false,
			cardLoading: false,
			cases: [],
			collectionsCases: [],
			sortBy: "",
		};
	},
	methods: {
		getCaseList() {
			this.isLoading = true;
			let url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products/all`;
			this.$http
				.get(url)
				.then((res) => {
					this.cases = res.data.products;
					this.getCollectionsCaseList();
					this.isLoading = false;
				})
				.catch((error) => {
					this.$httpMessageState(error.response, "錯誤訊息");
				});
		},
		getCollectionsCaseList() {
			this.collectionsCaseID =
				JSON.parse(localStorage.getItem("collection_case")) || [];
			this.collectionsCases = this.cases.filter((caseItem) =>
				this.collectionsCaseID.includes(caseItem.id)
			);
		},
	},
	mounted() {
		this.getCaseList();
	},
};
</script>
<style lang=""></style>
