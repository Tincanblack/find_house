<template>
	<NewsSlide :articles="articles"></NewsSlide>
</template>
<script>
import NewsSlide from "@/components/NewsSlide.vue";

export default {
	components: {
		NewsSlide,
	},

	data() {
		return {
			articles: [],
		};
	},
	methods: {
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
		this.getNewsList();
	},
};
</script>
