<template>
	<div class="main-content container-fluid px-4">
		<LoadingComponent :isLoading="isLoading"></LoadingComponent>
		<h3 class="mt-4 fw-bold">房訊管理</h3>
		<div class="text-end my-2">
			<button
				type="button"
				class="btn btn-success"
				@click="openModal(true)"
			>
				<i class="bi bi-plus-square"></i> 新增房訊
			</button>
		</div>
		<table class="table table-hover table-striped mt-4 text-center">
			<thead class="table-dark">
				<tr>
					<th width="5%">順序</th>
					<th width="10%">封面圖片</th>
					<th width="45%" class="text-start">標題</th>
					<th width="10%">分類</th>
					<th width="10%">發布者</th>
					<th width="5%">發布時間</th>
					<th width="5%">是否顯示</th>
					<th width="10%">操作</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="(article, index) in news"
					:key="article.id"
					style="vertical-align: middle"
				>
					<td>{{ index + 1 }}</td>
					<td>
						<img class="img-fluid" :src="article.image" />
					</td>
					<td class="text-start">
						{{ article.title }}
					</td>
					<td>
						{{ article.category }}
					</td>
					<td>
						{{ article.author }}
					</td>
					<td>{{ $format.dateFormat(article.create_at) }}</td>
					<td>
						<span
							class="text-success"
							v-if="article.isPublic === true"
							>顯示</span
						>
						<span v-else class="text-danger">不顯示</span>
					</td>
					<td>
						<div class="btn-group">
							<button
								type="button"
								class="btn btn-primary btn-sm"
								@click="getNews(article.id)"
							>
								<i class="bi bi-pencil-square"></i>
								編輯
							</button>
							<button
								type="button"
								class="btn btn-danger btn-sm"
								@click="openDelModal(item)"
							>
								<i class="bi bi-trash3"></i>
								刪除
							</button>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
		<Pagination :pages="pagination" @emit-pages="getNewsList"></Pagination>
	</div>
	<!-- 新增/更新 -->
	<NewsEditModal
		:news="tempNews"
		:isNew="isNew"
		@update-news="updateNews"
		ref="newsModal"
	></NewsEditModal>
	<!-- 刪除 -->
	<DelConfirmModal
		:item="tempNews"
		@del-item="deleteNews"
		ref="delModal"
	></DelConfirmModal>
</template>
<script>
import Pagination from "@/components/Pagination.vue";
import NewsEditModal from "@/components/modals/NewsEditModal.vue";
import DelConfirmModal from "@/components/modals/DelConfirmModal.vue";

export default {
	components: {
		NewsEditModal,
		DelConfirmModal,
		Pagination,
	},
	data() {
		return {
			isLoading: false,
			isNew: false,
			tempNews: {},
			news: [],
			pagination: {},
		};
	},
	methods: {
		openModal(isNew, item) {
			if (isNew) {
				this.tempNews = {
					isPublic: false,
					create_at: new Date().getTime() / 1000,
				};
				this.isNew = true;
			} else {
				this.tempNews = { ...item };
				this.isNew = false;
			}
			this.$refs.newsModal.openModal();
		},
		updateNews(item) {
			this.tempNews = item;
			this.isLoading = true;
			let api = `${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/admin/article`;
			let httpMethod = "post";
			let statusText = "新增房訊";
			if (!this.isNew) {
				api = `${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/admin/article/${this.tempNews.id}`;
				httpMethod = "put";
				statusText = "更新房訊";
			}
			this.$http[httpMethod](api, { data: this.tempNews })
				.then((response) => {
					this.isLoading = false;
					this.$httpMessageState(response, statusText);
					this.$refs.newsModal.closeModal();
					this.getNewsList(this.currentPage);
				})
				.catch((error) => {
					this.isLoading = false;
					this.$httpMessageState(error.response, statusText);
				});
		},
		getNewsList(page = 1) {
			this.isLoading = true;
			this.$http
				.get(
					`${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/admin/articles/?page=${page}`
				)
				.then((response) => {
					// 將收到的data賦予給news, pagination
					this.news = response.data.articles;
					this.pagination = response.data.pagination;
					this.isLoading = false;
				})
				.catch((error) => {
					// 跳出錯誤訊息
					this.isLoading = false;
					this.$httpMessageState(error.response, "錯誤訊息");
				});
		},
		getNews(id) {
			const api = `${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/admin/article/${id}`;
			this.isLoading = true;
			this.$http
				.get(api)
				.then((response) => {
					this.isLoading = false;
					if (response.data.success) {
						this.openModal(false, response.data.article);
						this.isNew = false;
					}
				})
				.catch((error) => {
					this.isLoading = false;
					this.$httpMessageState(error, "刪除房訊");
				});
		},
		openDelModal(item) {
			this.tempNews = { ...item };
			this.$refs.delModal.openModal();
		},
		deleteNews() {
			this.isLoading = true;
			this.$http
				.delete(
					`${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/admin/article/${this.tempNews.id}`
				)
				.then((response) => {
					this.isLoading = false;
					this.$httpMessageState(response, "刪除房訊");
					this.$refs.delModal.closeModal();
					this.getNewsList(this.currentPage);
				})
				.catch((error) => {
					this.isLoading = false;
					this.$httpMessageState(error.response, "刪除房訊");
				});
		},
	},
	mounted() {
		this.getNewsList();
	},
};
</script>

<style lang=""></style>
