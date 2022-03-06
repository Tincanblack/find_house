<template lang="">
	<div>
		<h2 class="mb-3 fw-bold">案件管理</h2>
		<div class="text-end mt-4">
			<button type="button" class="btn btn-primary">建立新的案件</button>
		</div>
		<table class="table mt-4">
			<thead>
				<tr>
					<th>案件名稱</th>
					<th width="120">分類</th>
					<th width="120">原價</th>
					<th width="120">售價</th>
					<th width="100">是否啟用</th>
					<th width="120">編輯</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in products" :key="item.id">
					<td>{{ item.category }}</td>
					<td>{{ item.title }}</td>
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
	</div>
</template>
<script>
export default {
	data() {
		return {
			targetProduct: { imagesUrl: [] },
			products: [],
			pagination: {},
			isNew: false,
		};
	},
	methods: {
		getProductsList(page = 1) {
			this.$http
				.get(
					`${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATh}/admin/products/?page=${page}`
				)
				.then((res) => {
					// 將收到的data賦予給products, pagination this.products = res.data.products;
					this.pagination = res.data.pagination;
				})
				.catch((err) => {
					// 跳出錯誤訊息F
					alert(err.data.message);
				});
		},
	},
};
</script>
<style lang=""></style>
