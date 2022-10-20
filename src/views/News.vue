<template>
	<div class="site-content">
		<NewsSlide v-if="news.length > 0" :articles="news"></NewsSlide>
		<div class="news-list py-5">
			<div class="news-list-column">
				<div class="container">
					<div class="row row-cols-1 row-cols-md-3">
						<div class="col" v-for="item in news" :key="item.id">
							<div class="news-list-card">
								<RouterLink
									class="news-list-card__link"
									:to="`/news/${item.id}`"
								>
									<div class="news-list-card__date">
										<div class="public-date">
											<div class="public-date__main">
												{{
													$format.publicDateFormat(
														item.create_at
													)[1]
												}}
											</div>
											<div class="public-date__sec">
												{{
													$format.publicDateFormat(
														item.create_at
													)[0]
												}}
											</div>
										</div>
									</div>
									<div
										class="news-list-card__background"
										:style="{
											backgroundImage: `url(${item.image})`,
										}"
									></div>
									<h5 class="news-list-card__title">
										{{ item.title }}
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
			news: [],
		};
	},
	methods: {
		getNewsList(page = 1) {
			this.$http
				.get(
					`${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/articles/?page=${page}`
				)
				.then((response) => {
					this.news = response.data.articles;
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
