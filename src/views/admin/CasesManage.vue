<template lang="">
	<div>
		<LoadingAnimate :active="isLoading" :z-index="1060"></LoadingAnimate>
		<h2 class="mb-3 fw-bold">案件管理</h2>
		<div class="text-end mt-4">
			<button
				type="button"
				class="btn btn-primary"
				@click="openModal(true)"
			>
				建立新的案件
			</button>
		</div>
		<table class="table mt-4">
			<thead>
				<tr>
					<th width="20%">縮圖</th>
					<th width="40%">案件名稱</th>
					<th width="10%">分類</th>
					<th width="5%">原價</th>
					<th width="5%">售價</th>
					<th width="10%">是否啟用</th>
					<th width="10%">編輯</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in products" :key="item.id">
					<td>{{ item.imageUrl }}</td>
					<td>{{ item.title }}</td>
					<td>{{ item.category }}</td>
					<td>{{ item.origin_price }}</td>
					<td>{{ item.price }}</td>
					<td class="text-center">
						<span class="text-success" v-if="item.is_enabled === 1"
							>啟用</span
						>
						<span v-else>未啟用</span>
					</td>
					<td>
						<div class="btn-group">
							<button
								type="button"
								class="btn btn-outline-primary btn-sm"
							>
								編輯
							</button>
							<button
								type="button"
								class="btn btn-outline-danger btn-sm"
							>
								刪除
							</button>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
		<PaginationBlock></PaginationBlock>
	</div>
</template>
<script>
import PaginationBlock from "@components/PaginationBlock";
export default {
	components: {
		PaginationBlock,
	},
	data() {
		return {
			isLoading: false,
			targetProduct: { imagesUrl: [] },
			products: [],
			pagination: {},
			isNew: false,
		};
	},
	methods: {
		getProductsList(page = 1) {
			this.isLoading = true;
			this.$http
				.get(
					`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
				)
				.then((res) => {
					// 將收到的data賦予給products, pagination
					this.products = res.data.products;
					this.pagination = res.data.pagination;
					this.isLoading = false;
				})
				.catch((err) => {
					// 跳出錯誤訊息
					this.isLoading = false;
					alert(err.data.message);
				});
		},
	},
};
</script>
<style lang=""></style>
