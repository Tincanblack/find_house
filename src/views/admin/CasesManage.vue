<template lang="">
	<div class="main-content container-fluid px-4">
		<LoadingAnimate :active="isLoading" :z-index="1060"></LoadingAnimate>
		<h2 class="my-3 fw-bold">案件管理</h2>
		<div class="text-end mt-4">
			<button
				type="button"
				class="btn btn-success"
				@click="openModal(true)"
			>
				<i class="bi bi-plus-square"></i> 建立新的案件
			</button>
		</div>
		<table class="table table-hover table-striped mt-4 text-center">
			<thead class="table-dark">
				<tr>
					<th width="10%">案件圖片</th>
					<th width="50%" class="text-start">案件名稱</th>
					<th width="10%">案件分類</th>
					<th width="5%" class="text-end">原價</th>
					<th width="5%" class="text-end">售價</th>
					<th width="10%">是否啟用</th>
					<th width="10%">編輯</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="item in cases"
					:key="item.id"
					style="vertical-align: middle"
				>
					<td>
						<img class="img-fluid" :src="item.imageUrl" />
					</td>
					<td class="text-start">{{ item.title }}</td>
					<td>{{ item.category }}</td>
					<td class="text-end">
						{{ $formatUnit.currency(item.origin_price) }}
					</td>
					<td class="text-danger text-end">
						{{ $formatUnit.currency(item.price) }}
					</td>
					<td>
						<span class="text-success" v-if="item.is_enabled === 1"
							>啟用</span
						>
						<span v-else class="text-danger">未啟用</span>
					</td>
					<td>
						<div class="btn-group">
							<button
								type="button"
								class="btn btn-outline-primary btn-sm"
								@click="openModal(false, item)"
							>
								<i class="bi bi-pencil-square"></i>
								編輯
							</button>
							<button
								type="button"
								class="btn btn-outline-danger btn-sm"
							>
								<i class="bi bi-trash3"></i>
								刪除
							</button>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
		<!-- <Pagination></Pagination> -->
	</div>
	<CaseModal
		@update-product="updateProduct"
		:product="tempCase"
		:isNew="isNew"
		ref="caseModal"
	></CaseModal>
</template>
<script>
// import Pagination from "@components/Pagination";
import CaseModal from "@/components/modals/CaseModal";

export default {
	components: {
		CaseModal,
		// Pagination,
	},
	data() {
		return {
			isLoading: false,
			tempCase: { imagesUrl: [] },
			cases: [],
			pagination: {},
			isNew: false,
		};
	},
	methods: {
		openModal(isNew, item) {
			if (isNew) {
				this.tempCase = {};
				this.isNew = true;
			} else {
				this.tempCase = { ...item };
				this.isNew = false;
			}
			const caseComponent = this.$refs.caseModal;
			caseComponent.openModal();
		},
		updateProduct(item) {
			this.tempCase = item;
			let api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/product`;
			this.isLoading = true;
			let httpMethod = "post";
			let statusText = "新增案件";
			if (!this.isNew) {
				api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempCase.id}`;
				httpMethod = "put";
				statusText = "更新案件";
			}
			const caseComponent = this.$refs.caseModal;
			this.$http[httpMethod](api, { data: this.tempCase })
				.then((response) => {
					this.isLoading = false;
					this.$httpMessageState(response, statusText);
					caseComponent.closeModal();
					this.getProducts(this.currentPage);
				})
				.catch((error) => {
					this.isLoading = false;
					this.$httpMessageState(error.response, statusText);
				});
		},
		getCasesList(page = 1) {
			this.isLoading = true;
			this.$http
				.get(
					`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
				)
				.then((res) => {
					// 將收到的data賦予給cases, pagination
					this.cases = res.data.products;
					this.pagination = res.data.pagination;
					this.isLoading = false;
				})
				.catch((err) => {
					// 跳出錯誤訊息
					this.isLoading = false;
					this.$httpMessageState(err.response, "錯誤訊息");
				});
		},
	},
	mounted() {
		this.getCasesList();
	},
};
</script>
