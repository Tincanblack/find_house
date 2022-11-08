<template>
	<div class="main-content container-fluid px-4 bg-light">
		<LoadingComponent :isLoading="isLoading"></LoadingComponent>
		<h3 class="mt-4 fw-bold">預約表單管理</h3>
		<AdminBreadcrumb></AdminBreadcrumb>
		<div class="text-end my-2">
			<button
				type="button"
				class="btn btn-danger shadow-sm"
				:class="{ disabled: reserves.length === 0 }"
				@click="delAllOrders"
			>
				<i class="bi bi-x-lg"></i> 刪除所有案件
			</button>
		</div>
		<table class="table table-hover table-striped table-bordered mt-4 text-center shadow-sm">
			<thead class="table-dark">
				<tr>
					<th width="5%">順序</th>
					<th width="20%" class="text-start">案件名稱</th>
					<th width="15%">聯絡人</th>
					<th width="10%">連絡電話</th>
					<th width="10%">方便連絡的時間</th>
					<th width="10%">諮詢時間</th>
					<th width="10%">聯絡時間</th>
					<th width="10%">是否處理</th>
					<th width="10%">操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in reserves" :key="item.id" style="vertical-align: middle">
					<td>{{ item.num }}</td>
					<td v-for="caseItem in item.products" :key="`${caseItem}`" class="text-start">
						<span
							class="badge tag__element me-1"
							:class="{
								'tag__element--main': caseItem.product.category === '華廈',
								'tag__element--sec': caseItem.product.category === '公寓',
								'tag__element--third': caseItem.product.category === '別墅',
								'tag__element--fourth': caseItem.product.category === '大樓',
							}"
						>
							{{ caseItem.product.category }}</span
						>
						<RouterLink :to="`/case/${caseItem.product.id}`" target="_blank">
							{{ caseItem.product.title }}
						</RouterLink>
					</td>
					<td>
						{{ item.user.name }}
						<span class="fs-6 text-muted" v-if="item.user.gender == 1">先生</span>
						<span class="fs-6 text-muted" v-else-if="item.user.gender == 0">小姐</span>
						<span class="fs-6 text-muted" v-else>未填寫</span>
					</td>
					<td>
						{{ item.user.tel }}
					</td>
					<td>
						<span v-if="item.user.message === '1'">上午 (09-12)</span>
						<span v-else-if="item.user.message === '2'">中午 (12-14)</span>
						<span v-else-if="item.user.message === '3'">下午 (14-18)</span>
						<span v-else-if="item.user.message === '4'">晚上 (18-21)</span>
						<span v-else>皆可 (09-21)</span>
					</td>
					<td>
						<span>{{
							$moment.moment(item.create_at * 1000).format("YYYY-MM-DD HH:mm")
						}}</span>
					</td>
					<td>
						<span v-if="item.is_paid && item.paid_date">
							{{ $moment.moment(item.create_at * 1000).format("YYYY-MM-DD HH:mm") }}
						</span>
						<span v-else>--</span>
					</td>
					<td>
						<div class="form-check form-switch d-inline-block">
							<input
								class="form-check-input"
								type="checkbox"
								v-model="item.is_paid"
								:true-value="true"
								:false-value="false"
								id="is_paid"
								@change="updateReserve(item)"
								:disabled="isProcessingTarget === item.id"
							/>
							<label
								v-if="item.is_paid"
								class="form-check-label text-success"
								for="is_paid"
								>已處理
							</label>
							<label v-else class="form-check-label text-danger" for="is_paid"
								>未處理
							</label>
						</div>
					</td>
					<td>
						<div class="btn-group">
							<button
								type="button"
								class="btn btn-primary btn-sm"
								@click="openReserveModal(item)"
								:disabled="isProcessingTarget === item.id"
							>
								<i class="bi bi-pencil-square"></i>
								編輯
							</button>
							<button
								type="button"
								class="btn btn-danger btn-sm"
								@click="openDelModal(item)"
								:disabled="isProcessingTarget === item.id"
							>
								<i class="bi bi-trash3"></i>
								刪除
							</button>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
		<Pagination :pages="pagination" @emit-pages="getReservesList"></Pagination>
	</div>
	<!-- 更新 -->
	<ReserveEditModal
		:reserve="targetItem"
		:btnLoading="submitBtnLoading"
		@emit-update-reserve="updateReserve"
		ref="reserveModal"
	></ReserveEditModal>
	<!-- 刪除 -->
	<DelConfirmModal
		:item="targetItem"
		:btnLoading="submitBtnLoading"
		@del-item="deleteReserve"
		ref="delReserveModal"
	>
		<template #modal-text>
			預約諮詢：<span v-if="targetItem.user">{{ targetItem.user.name }} </span>
		</template>
	</DelConfirmModal>
</template>
<script>
import AdminBreadcrumb from "@/components/admin/AdminBreadcrumb.vue";
import Pagination from "@/components/widgets/Pagination.vue";
import ReserveEditModal from "@/components/modals/ReserveEditModal.vue";
import DelConfirmModal from "@/components/modals/DelConfirmModal.vue";

export default {
	components: {
		AdminBreadcrumb,
		Pagination,
		ReserveEditModal,
		DelConfirmModal,
	},
	data() {
		return {
			isLoading: false,
			submitBtnLoading: false,
			isProcessingTarget: "",
			targetItem: {},
			reserves: [],
			pagination: {},
			currentPage: 1,
		};
	},
	methods: {
		getReservesList(page = 1) {
			this.isLoading = true;
			this.currentPage = page;

			this.$http
				.get(
					`${import.meta.env.VITE_URL}/api/${
						import.meta.env.VITE_PATH
					}/admin/orders/?page=${page}`
				)
				.then((res) => {
					// 將收到的data賦予給reserves
					this.reserves = res.data.orders;
					this.pagination = res.data.pagination;
					this.isLoading = false;
				})
				.catch((err) => {
					// 跳出錯誤訊息
					this.isLoading = false;
					this.$httpMessageState(err.response, "錯誤訊息");
				});
		},
		openReserveModal(item) {
			this.targetItem = { ...item };
			this.$refs.reserveModal.openModal();
		},
		updateReserve(item) {
			this.submitBtnLoading = true;
			this.isProcessingTarget = item.id;
			const handle = item.is_paid;
			const nowTimeStamp = this.$moment.moment().unix();

			const postData = {
				data: {
					...item,
				},
			};
			postData.data.user.dataTime = nowTimeStamp;

			if (handle) {
				postData.data.paid_date = nowTimeStamp;
			}

			this.$http
				.put(
					`${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/admin/order/${
						item.id
					}`,
					postData
				)
				.then((res) => {
					this.submitBtnLoading = false;
					this.isProcessingTarget = "";
					this.$httpMessageState(res, "更新處理狀態", res.data.message);
					this.$refs.reserveModal.closeModal();
					this.getReservesList(this.currentPage);
				})
				.catch((err) => {
					this.submitBtnLoading = false;
					this.isProcessingTarget = "";
					this.$httpMessageState(err.response, "錯誤訊息");
				});
		},
		openDelModal(item) {
			this.targetItem = { ...item };
			this.$refs.delReserveModal.openModal();
		},
		deleteReserve() {
			this.submitBtnLoading = true;
			this.isProcessingTarget = this.targetItem.id;

			const url = `${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/admin/order/${
				this.targetItem.id
			}`;
			this.$http
				.delete(url)
				.then((res) => {
					this.submitBtnLoading = false;
					this.isProcessingTarget = "";
					this.targetItem = {};

					this.$refs.delReserveModal.closeModal();
					this.$httpMessageState(res, "刪除諮詢");
					this.getReservesList(this.currentPage);
				})
				.catch((err) => {
					this.submitBtnLoading = false;
					this.isProcessingTarget = "";

					this.$httpMessageState(err.response, "錯誤訊息");
				});
		},
		delAllOrders() {
			this.isLoading = true;
			this.$http
				.delete(
					`${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/admin/orders/all`
				)
				.then(() => {
					this.getReservesList();
				})
				.catch((error) => {
					// 跳出錯誤訊息
					this.isLoading = false;
					this.$httpMessageState(error.response, "錯誤訊息");
				});
		},
	},
	mounted() {
		this.getReservesList();
	},
};
</script>
