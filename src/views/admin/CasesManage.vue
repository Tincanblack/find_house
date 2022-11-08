<template>
	<div class="main-content container-fluid px-4 bg-light">
		<LoadingComponent :isLoading="isLoading"></LoadingComponent>
		<h3 class="my-4 fw-bold">案件管理</h3>
		<AdminBreadcrumb></AdminBreadcrumb>
		<div class="text-end my-2">
			<button
				type="button"
				class="btn btn-success text-white shadow-sm"
				@click="openModal(true)"
			>
				<i class="bi bi-plus-square"></i> 建立新的案件
			</button>
		</div>
		<table class="table table-hover table-striped table-bordered mt-4 text-center shadow-sm">
			<thead class="table-dark">
				<tr>
					<th width="5%">順序</th>
					<th width="10%">案件圖片</th>
					<th width="55%" class="text-start">案件名稱</th>
					<th width="5%">原價</th>
					<th width="5%">售價</th>
					<th width="5%">車位售價</th>
					<th width="5%">是否顯示</th>
					<th width="10%">操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in cases" :key="item.id" style="vertical-align: middle">
					<td>{{ item.num }}</td>
					<td>
						<img class="img-fluid" :src="item.imageUrl" />
					</td>
					<td class="text-start">
						<span
							class="badge tag__element me-1"
							:class="{
								'tag__element--main': item.category === '華廈',
								'tag__element--sec': item.category === '公寓',
								'tag__element--third': item.category === '別墅',
								'tag__element--fourth': item.category === '大樓',
							}"
						>
							{{ item.category }}</span
						>
						<RouterLink :to="`/case/${item.id}`" target="_blank">{{
							item.title
						}}</RouterLink>
					</td>
					<td>{{ $format.currencyFormat(item.origin_price) }}萬</td>
					<td
						:class="{
							'text-danger': item.origin_price > item.price,
						}"
					>
						{{ $format.currencyFormat(item.price) }}萬
					</td>
					<td>
						<span v-if="item.parkingPrice > 0">{{ item.parkingPrice }}萬</span>
						<span v-else>--</span>
					</td>
					<td>
						<span v-if="item.is_enabled == '1'" class="text-success">顯示</span>
						<span v-else-if="item.is_enabled == '2'" class="text-warning">處理中</span>
						<span v-else-if="item.is_enabled == '3'" class="text-muted">已結案</span>
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
		<Pagination :pages="pagination" @emit-pages="getCasesList"></Pagination>
	</div>
	<!-- 新增/更新 -->
	<CaseEditModal
		:product="targetCase"
		:isNew="isNew"
		:btnLoading="submitBtnLoading"
		@update-product="updateCase"
		ref="caseModal"
	></CaseEditModal>
	<!-- 刪除 -->
	<DelConfirmModal
		:item="targetCase"
		@del-item="deleteCase"
		:btnLoading="submitBtnLoading"
		ref="delModal"
	>
		<template #modal-text> 案件名稱：{{ targetCase.title }} </template>
	</DelConfirmModal>
</template>
<script>
import AdminBreadcrumb from "@/components/admin/AdminBreadcrumb.vue";
import Pagination from "@/components/widgets/Pagination.vue";
import CaseEditModal from "@/components/modals/CaseEditModal.vue";
import DelConfirmModal from "@/components/modals/DelConfirmModal.vue";

export default {
	components: {
		AdminBreadcrumb,
		Pagination,
		CaseEditModal,
		DelConfirmModal,
	},
	data() {
		return {
			isLoading: false,
			submitBtnLoading: false,
			targetCase: { imagesUrl: [], category: "", tags: [] },
			cases: [],
			pagination: {},
			isNew: false,
			currentPage: 1,
		};
	},
	methods: {
		openModal(isNew, item) {
			if (isNew) {
				this.targetCase = {
					imagesUrl: [],
					category: "",
					unit: "坪",
					is_enabled: 1,
					tags: [],
				};
				this.isNew = true;
			} else {
				this.targetCase = { ...item };
				this.isNew = false;
			}
			this.$refs.caseModal.openModal();
		},
		updateCase(item) {
			this.targetCase = { ...item };
			this.isLoading = true;
			this.submitBtnLoading = true;

			let api = `${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/admin/product`;
			let httpMethod = "post";
			let statusText = "新增案件";
			if (!this.isNew) {
				api = `${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/admin/product/${
					this.targetCase.id
				}`;
				httpMethod = "put";
				statusText = "更新案件";
			}
			this.$http[httpMethod](api, { data: this.targetCase })
				.then((res) => {
					this.isLoading = false;
					this.submitBtnLoading = false;

					this.$httpMessageState(res, statusText);
					this.$refs.caseModal.closeModal();
					this.getCasesList(this.currentPage);
				})
				.catch((error) => {
					this.isLoading = false;
					this.submitBtnLoading = false;

					this.$httpMessageState(error.response, statusText);
				});
		},
		getCasesList(page = 1) {
			this.isLoading = true;
			this.currentPage = page;

			this.$http
				.get(
					`${import.meta.env.VITE_URL}/api/${
						import.meta.env.VITE_PATH
					}/admin/products/?page=${page}`
				)
				.then((res) => {
					// 將收到的data賦予給cases, pagination
					this.cases = res.data.products;
					this.pagination = res.data.pagination;
					this.isLoading = false;
				})
				.catch((error) => {
					// 跳出錯誤訊息
					this.isLoading = false;
					this.$httpMessageState(error.response, "錯誤訊息");
				});
		},
		openDelModal(item) {
			this.targetCase = { ...item };
			this.$refs.delModal.openModal();
		},
		deleteCase() {
			this.isLoading = true;
			this.submitBtnLoading = true;

			this.$http
				.delete(
					`${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/admin/product/${
						this.targetCase.id
					}`
				)
				.then((res) => {
					this.isLoading = false;
					this.submitBtnLoading = false;

					this.$httpMessageState(res, "刪除案件");
					this.$refs.delModal.closeModal();
					this.getCasesList(this.currentPage);
				})
				.catch((error) => {
					this.isLoading = false;
					this.submitBtnLoading = false;

					this.$httpMessageState(error.response, "刪除案件");
				});
		},
	},
	mounted() {
		this.getCasesList();
	},
};
</script>
