<template>
	<div class="main-content container-fluid px-4">
		<LoadingAnimate :active="isLoading" :z-index="1060"></LoadingAnimate>
		<h3 class="mt-4 fw-bold">案件管理</h3>
		<div class="text-end my-2">
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
					<th width="5%">順序</th>
					<th width="10%">案件圖片</th>
					<th width="10%">案件分類</th>
					<th width="45%" class="text-start">案件名稱</th>
					<th width="5%" class="text-end">原價</th>
					<th width="5%" class="text-end">售價</th>
					<th width="5%" class="text-end">車位售價</th>
					<th width="5%">是否顯示</th>
					<th width="10%">操作</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="(item, index) in cases"
					:key="item.id"
					style="vertical-align: middle"
				>
					<td>{{ index + 1 }}</td>
					<td>
						<img class="img-fluid" :src="item.imageUrl" />
					</td>
					<td>{{ item.category }}</td>
					<td class="text-start">
						{{ item.title }}
					</td>
					<td class="text-end">
						{{ $format.currencyFormat(item.origin_price) }}
					</td>
					<td
						class="text-end"
						:class="{
							'text-danger': item.origin_price > item.price,
						}"
					>
						{{ $format.currencyFormat(item.price) }}
					</td>
					<td class="text-end">
						<span v-if="item.parkingPrice > 0">{{
							item.parkingPrice
						}}</span>
						<span v-else>--</span>
					</td>
					<td>
						<span class="text-success" v-if="item.is_enabled === 1"
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
		<Pagination :pages="pagination" @emit-pages="getCasesList"></Pagination>
	</div>
	<!-- 新增/更新 -->
	<CaseEditModal
		:product="tempCase"
		:isNew="isNew"
		@update-product="updateCase"
		ref="caseModal"
	></CaseEditModal>
	<!-- 刪除 -->
	<DelConfirmModal
		:item="tempCase"
		@del-item="deleteCase"
		ref="delModal"
	></DelConfirmModal>
</template>
<script>
import Pagination from "@/components/Pagination";
import CaseEditModal from "@/components/modals/CaseEditModal";
import DelConfirmModal from "@/components/modals/DelConfirmModal";

export default {
	components: {
		CaseEditModal,
		DelConfirmModal,
		Pagination,
	},
	data() {
		return {
			isLoading: false,
			tempCase: { imagesUrl: [], category: "", tags: [] },
			cases: [],
			pagination: {},
			isNew: false,
		};
	},
	methods: {
		openModal(isNew, item) {
			if (isNew) {
				this.tempCase = {
					imagesUrl: [],
					category: "",
					unit: "坪",
					is_enabled: 1,
					tags: [],
				};
				this.isNew = true;
			} else {
				this.tempCase = { ...item };
				this.isNew = false;
			}
			this.$refs.caseModal.openModal();
		},
		updateCase(item) {
			this.tempCase = { ...item };
			this.isLoading = true;
			let api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/product`;
			let httpMethod = "post";
			let statusText = "新增案件";
			if (!this.isNew) {
				api = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempCase.id}`;
				httpMethod = "put";
				statusText = "更新案件";
			}
			this.$http[httpMethod](api, { data: this.tempCase })
				.then((response) => {
					this.isLoading = false;
					this.$httpMessageState(response, statusText);
					this.$refs.caseModal.closeModal();
					this.getCasesList(this.currentPage);
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
				.then((response) => {
					// 將收到的data賦予給cases, pagination
					this.cases = response.data.products;
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
			this.tempCase = { ...item };
			this.$refs.delModal.openModal();
		},
		deleteCase() {
			this.isLoading = true;
			this.$http
				.delete(
					`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempCase.id}`
				)
				.then((response) => {
					this.isLoading = false;
					this.$httpMessageState(response, "刪除案件");
					this.$refs.delModal.closeModal();
					this.getCasesList(this.currentPage);
				})
				.catch((error) => {
					this.isLoading = false;
					this.$httpMessageState(error.response, "刪除案件");
				});
		},
	},
	mounted() {
		this.getCasesList();
	},
};
</script>
