<template>
	<div class="main-content container-fluid px-4 bg-light">
		<LoadingComponent :isLoading="isLoading"></LoadingComponent>
		<h3 class="mt-4 fw-bold">房訊管理</h3>
		<AdminBreadcrumb></AdminBreadcrumb>
		<div class="text-end my-2">
			<button
				type="button"
				class="btn btn-success text-white shadow-sm"
				@click="openModal(true)"
			>
				<i class="bi bi-plus-square"></i> 新增房訊
			</button>
		</div>
		<VueGoodTable
			:columns="tableTh"
			:rows="news"
			:pagination-options="{
				enabled: true,
			}"
			styleClass="vgt-table striped condensed table table-hover"
		>
			<template #table-row="props">
				<div v-if="props.column.field === 'image'">
					<img class="img-fluid" :src="props.row.image" style="max-width: 200px" alt="" />
				</div>
				<div v-if="props.column.field === 'title'">
					<RouterLink :to="`/news/${props.row.id}`" target="_blank">{{
						props.row.title
					}}</RouterLink>
				</div>
				<div v-if="props.column.field === 'create_at'">
					{{ $moment.moment(props.row.create_at * 1000).format("YYYY-MM-DD") }}
				</div>
				<div v-if="props.column.field === 'isPublic'">
					<span class="text-success" v-if="props.row.isPublic === true">顯示</span>
					<span v-else class="text-danger">不顯示</span>
				</div>
				<div v-if="props.column.field === 'actions'" class="btn-group">
					<button
						type="button"
						class="btn btn-primary btn-sm"
						@click="getNews(props.row.id)"
					>
						<i class="bi bi-pencil-square"></i>
						編輯
					</button>
					<button
						type="button"
						class="btn btn-danger btn-sm"
						@click="openDelModal(props.row)"
					>
						<i class="bi bi-trash3"></i>
						刪除
					</button>
				</div>
			</template>
			<template #pagination-bottom="">
				<Pagination :pages="pagination" @emit-pages="getNewsList"></Pagination>
			</template>
		</VueGoodTable>
	</div>
	<!-- 新增/更新 -->
	<NewsEditModal
		:news="tempNews"
		:isNew="isNew"
		:btnLoading="submitBtnLoading"
		@update-news="updateNews"
		ref="newsModal"
	></NewsEditModal>
	<!-- 刪除 -->
	<DelConfirmModal
		:item="tempNews"
		:btnLoading="submitBtnLoading"
		@del-item="deleteNews"
		ref="delModal"
	>
		<template #modal-text> 房訊名稱：{{ tempNews.title }} </template>
	</DelConfirmModal>
</template>
<script>
import AdminBreadcrumb from "@/components/admin/AdminBreadcrumb.vue";
import Pagination from "@/components/widgets/Pagination.vue";
import NewsEditModal from "@/components/modals/NewsEditModal.vue";
import DelConfirmModal from "@/components/modals/DelConfirmModal.vue";
import { VueGoodTable } from "vue-good-table-next";

export default {
	components: {
		VueGoodTable,
		AdminBreadcrumb,
		NewsEditModal,
		DelConfirmModal,
		Pagination,
	},
	data() {
		return {
			isLoading: false,
			submitBtnLoading: false,
			isNew: false,
			tempNews: {},
			tableTh: [
				{
					label: "順序",
					field: "num",
					thClass: "text-center",
					tdClass: "text-center align-middle",
				},
				{
					label: "封面圖片",
					field: "image",
					thClass: "text-center",
					tdClass: "text-center align-middle",
				},
				{ label: "標題", field: "title", tdClass: "align-middle" },
				{
					label: "分類",
					field: "category",
					thClass: "text-center",
					tdClass: "text-center align-middle",
				},
				{
					label: "發布者",
					field: "author",
					thClass: "text-center",
					tdClass: "text-center align-middle",
				},
				{
					label: "發布時間",
					field: "create_at",
					thClass: "text-center",
					tdClass: "text-center align-middle",
				},
				{
					label: "是否顯示",
					field: "isPublic",
					thClass: "text-center",
					tdClass: "text-center align-middle",
				},
				{
					label: "操作",
					field: "actions",
					sortable: false,
					thClass: "text-center",
					tdClass: "text-center align-middle",
				},
			],
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
			this.tempNews = { ...item };
			this.isLoading = true;
			this.submitBtnLoading = true;

			let api = `${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/admin/article`;
			let httpMethod = "post";
			let statusText = "新增房訊";
			if (!this.isNew) {
				api = `${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/admin/article/${
					this.tempNews.id
				}`;
				httpMethod = "put";
				statusText = "更新房訊";
			}
			this.$http[httpMethod](api, { data: this.tempNews })
				.then((response) => {
					this.isLoading = false;
					this.submitBtnLoading = false;

					this.$httpMessageState(response, statusText);
					this.$refs.newsModal.closeModal();
					this.getNewsList(this.currentPage);
				})
				.catch((error) => {
					this.isLoading = false;
					this.submitBtnLoading = false;

					this.$httpMessageState(error.response, statusText);
				});
		},
		getNewsList(page = 1) {
			this.isLoading = true;
			this.currentPage = page;

			this.$http
				.get(
					`${import.meta.env.VITE_URL}/api/${
						import.meta.env.VITE_PATH
					}/admin/articles/?page=${page}`
				)
				.then((res) => {
					// 將收到的data賦予給news, pagination
					this.news = res.data.articles;
					this.pagination = res.data.pagination;
					this.isLoading = false;
				})
				.catch((error) => {
					// 跳出錯誤訊息
					this.isLoading = false;
					this.$httpMessageState(error.response, "錯誤訊息");
				});
		},
		getNews(id) {
			const api = `${import.meta.env.VITE_URL}/api/${
				import.meta.env.VITE_PATH
			}/admin/article/${id}`;
			this.$http
				.get(api)
				.then((res) => {
					if (res.data.success) {
						this.openModal(false, res.data.article);
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
			this.submitBtnLoading = true;

			this.$http
				.delete(
					`${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/admin/article/${
						this.tempNews.id
					}`
				)
				.then((res) => {
					this.isLoading = false;
					this.submitBtnLoading = false;

					this.$httpMessageState(res, "刪除房訊");
					this.$refs.delModal.closeModal();
					this.getNewsList(this.currentPage);
				})
				.catch((error) => {
					this.isLoading = false;
					this.submitBtnLoading = false;

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
