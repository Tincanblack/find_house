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
		<VueGoodTable
			:columns="tableTh"
			:rows="cases"
			:pagination-options="{
				enabled: true,
			}"
			styleClass="vgt-table striped condensed table table-hover"
		>
			<template #table-row="props">
				<div v-if="props.column.field === 'imageUrl'">
					<img
						class="img-fluid"
						:src="props.row.imageUrl"
						style="max-width: 100px"
						alt=""
					/>
				</div>
				<div v-if="props.column.field === 'title'">
					<span
						class="badge tag__element me-1"
						:class="{
							'tag__element--main': props.row.category === '華廈',
							'tag__element--sec': props.row.category === '公寓',
							'tag__element--third': props.row.category === '別墅',
							'tag__element--fourth': props.row.category === '大樓',
						}"
					>
						{{ props.row.category }}</span
					>
					<RouterLink :to="`/case/${props.row.id}`" target="_blank">{{
						props.row.title
					}}</RouterLink>
				</div>
				<div v-if="props.column.field === 'price'">
					{{ $format.currencyFormat(props.row.origin_price) }}萬 /
					<span
						:class="{
							'text-danger': props.row.origin_price > props.row.price,
						}"
						>{{ $format.currencyFormat(props.row.price) }}萬</span
					>
				</div>
				<div v-if="props.column.field === 'parkingPrice'">
					<span v-if="props.row.parkingPrice > 0">{{ props.row.parkingPrice }}萬</span>
					<span v-else>--</span>
				</div>
				<div v-if="props.column.field === 'is_enabled'">
					<span v-if="props.row.is_enabled == '1'" class="text-success">顯示</span>
					<span v-else-if="props.row.is_enabled == '2'" class="text-warning">處理中</span>
					<span v-else-if="props.row.is_enabled == '3'" class="text-muted">已結案</span>
					<span v-else class="text-danger">不顯示</span>
				</div>
				<div v-if="props.column.field === 'actions'" class="btn-group">
					<button
						type="button"
						class="btn btn-primary btn-sm"
						@click="openModal(false, props.row)"
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
				<Pagination :pages="pagination" @emit-pages="getCasesList"></Pagination>
			</template>
		</VueGoodTable>
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
			isNew: false,
			targetCase: { imagesUrl: [], category: "", tags: [], location: "" },
			tableTh: [
				{
					label: "順序",
					field: "num",
					thClass: "text-center",
					tdClass: "text-center align-middle",
					width: "5%",
				},
				{
					label: "案件圖片",
					field: "imageUrl",
					thClass: "text-center",
					tdClass: "text-center align-middle",
					width: "5%",
				},
				{ label: "案件名稱", field: "title", tdClass: "align-middle", width: "35%" },
				{
					label: "價格",
					field: "price",
					thClass: "text-center",
					tdClass: "text-center align-middle",
					width: "10%",
				},
				{
					label: "車位售價",
					field: "parkingPrice",
					thClass: "text-center",
					tdClass: "text-center align-middle",
					width: "10%",
				},
				{
					label: "是否顯示",
					field: "is_enabled",
					thClass: "text-center",
					tdClass: "text-center align-middle",
					width: "10%",
				},
				{
					label: "操作",
					field: "actions",
					sortable: false,
					thClass: "text-center",
					tdClass: "text-center align-middle",
					width: "10%",
				},
			],
			cases: [],
			pagination: {},
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
