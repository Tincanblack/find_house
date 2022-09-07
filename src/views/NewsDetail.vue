<template>
	<div class="site-content">
		<section class="news-detail">
			<div class="container">
				<div class="row">
					<div class="col-12">
						{{ article.title }}
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
export default {
	components: {},
	data() {
		return {
			article: {},
		};
	},
	methods: {
		getNewsDetail() {
			const { id } = this.$route.params;
			this.$http
				.get(
					`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/article/${id}`
				)
				.then((res) => {
					// 將收到的data資料展賦予給article
					this.article = res.data.article;
				})
				.catch((error) => {
					this.$httpMessageState(error.response, "錯誤訊息");
				});
		},
	},
	watch: {
		// watch偵測到網址的id有變，將新的id帶入到data的id
		$route() {
			this.id = this.$route.params.id;
			if (this.$route.params.id !== undefined) {
				this.getNewsDetail();
			}
		},
		collectionCase: {
			handler() {
				localStorage.setItem(
					"collection_case",
					JSON.stringify(this.collectionCase)
				);
			},
			deep: true,
		},
	},
	mounted() {
		this.id = this.$route.params.id;
		this.getNewsDetail();
	},
};
</script>
