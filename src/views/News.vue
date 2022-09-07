<template>
	<div class="site-content">
		<NewsSlide v-if="articles.length > 0" :articles="articles"></NewsSlide>
		<div class="news-list py-5">
			<div class="news-list-column">
				<div class="container">
					<div class="row">
						<div
							class="col-md-4"
							v-for="(item, index) in articles"
							:key="item.id"
						>
							<div class="news-list-card">
								<RouterLink
									class="news-list-card__link"
									v-if="articles[index]"
									:to="`/news/${articles[index]['id']}`"
								>
									<div class="news-list-card__date">
										<div class="time-block">
											<div class="time-block__main">
												{{
													$format.timeBlockFormat(
														item.create_at
													)[1]
												}}
											</div>
											<div class="time-block__sec">
												{{
													$format.timeBlockFormat(
														item.create_at
													)[0]
												}}
											</div>
										</div>
									</div>
									<div
										class="news-list-card__background"
										:style="{
											backgroundImage: `url(${articles[index]['image']})`,
										}"
									></div>
									<h5 class="news-list-card__title">
										{{ articles[index]["title"] }}
									</h5>
								</RouterLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
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
	},
	mounted() {
		this.getNewsList();
	},
};
</script>
