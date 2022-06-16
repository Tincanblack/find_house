<template>
	<div class="main-content container-fluid px-4">
		<LoadingAnimate :active="isLoading" :z-index="1060"></LoadingAnimate>
		<h3 class="mt-4 fw-bold">房訊管理</h3>
		<div class="text-end my-2">
			<button
				type="button"
				class="btn btn-success"
				@click="openModal(true)"
			>
				<i class="bi bi-plus-square"></i> 新增房訊文章
			</button>
		</div>
		<table class="table table-hover table-striped mt-4 text-center">
			<thead class="table-dark">
				<tr>
					<th width="5%">順序</th>
					<th width="10%">封面圖片</th>
					<th width="45%" class="text-start">標題</th>
					<th width="10%">發布者</th>
					<th width="15%">發布時間</th>
					<th width="5%">是否顯示</th>
					<th width="10%">操作</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="(item, index) in news"
					:key="item.id"
					style="vertical-align: middle"
				>
					<td>{{ index + 1 }}</td>
					<td>
						<img class="img-fluid" :src="item.image" />
					</td>
					<td class="text-start">
						{{ item.title }}
					</td>
					<td>
						{{ item.author }}
					</td>
					<td>{{ $format.date(item.create_at) }}</td>
					<td>
						<span class="text-success" v-if="item.isPublic === 1"
							>顯示</span
						>
						<span v-else class="text-danger">不顯示</span>
					</td>
					<td>
						<div class="btn-group">
							<button
								type="button"
								class="btn btn-primary btn-sm"
								@click="openModal(false, item)"
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
import Pagination from "@/components/Pagination";
import NewsEditModal from "@/components/modals/NewsEditModal";
import DelConfirmModal from "@/components/modals/DelConfirmModal";

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
		getDate(time) {
			return new Date(time).toISOString().split("T")[0];
		},
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
			const newsComponent = this.$refs.newsModal;
			newsComponent.openModal();
		},
		updateNews(item) {
			this.tempNews = item;
			this.isLoading = true;
			let api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/article`;
			let httpMethod = "post";
			let statusText = "新增房訊文章";
			if (!this.isNew) {
				api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/article/${this.tempNews.id}`;
				httpMethod = "put";
				statusText = "更新房訊文章";
			}
			this.$http[httpMethod](api, { data: this.tempNews })
				.then((response) => {
					this.isLoading = false;
					this.$httpMessageState(response, statusText);
					const newsComponent = this.$refs.newsModal;
					newsComponent.closeModal();
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
					`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/articles/?page=${page}`
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
		openDelModal(item) {
			this.tempNews = { ...item };
			const delComponent = this.$refs.delModal;
			delComponent.openModal();
		},
		deleteNews() {
			this.isLoading = true;
			this.$http
				.delete(
					`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/article/${this.tempNews.id}`
				)
				.then((response) => {
					this.isLoading = false;
					this.$httpMessageState(response, "刪除房訊");
					const delComponent = this.$refs.delModal;
					delComponent.closeModal();
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
