<template>
	<div class="site-content">
		<LoadingAnimate :active="isLoading" :z-index="1060"></LoadingAnimate>
		<NewsBreadcrumb :article="article"></NewsBreadcrumb>
		<section class="news-detail py-3">
			<div class="container">
				<div class="news-detail-header">
					<div class="news-detail-header__date">
						<div class="public-date" v-show="article.create_at">
							<div class="public-date__main">
								{{
									$format.publicDateFormat(
										article.create_at
									)[1]
								}}
							</div>
							<div class="public-date__sec">
								{{
									$format.publicDateFormat(
										article.create_at
									)[0]
								}}
							</div>
						</div>
					</div>
					<h3 class="news-detail-header__title">
						{{ article.title }}
						<h6 class="news-detail-header__author">
							{{ article.author }}
						</h6>
					</h3>
				</div>
				<div class="row">
					<div class="col-12">
						<div
							class="news-detail-content"
							v-html="article.content"
						></div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
import NewsBreadcrumb from "@/components/NewsBreadcrumb.vue";

export default {
	components: {
		NewsBreadcrumb,
	},
	data() {
		return {
			isLoading: false,
			article: {},
		};
	},
	methods: {
		getNewsDetail() {
			this.isLoading = true;
			const { id } = this.$route.params;
			this.$http
				.get(
					`${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/article/${id}`
				)
				.then((res) => {
					// 將收到的data資料展賦予給article
					this.article = res.data.article;
					this.isLoading = false;
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
	},
	mounted() {
		this.id = this.$route.params.id;
		this.getNewsDetail();
	},
};
</script>
