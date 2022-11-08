<template>
	<div class="site-content">
		<LoadingComponent :isLoading="isLoading"></LoadingComponent>
		<section class="search-reserve d-flex align-items-center justify-content-center">
			<div class="search-reserve-form w-100">
				<div class="container">
					<div class="row py-5">
						<div class="col-md-10 col-xl-8 mx-auto">
							<div class="reserve-form shadow rounded">
								<span class="reserve-form__icon">
									<i class="bi bi-search"></i>
								</span>
								<div class="reserve-form-header">
									<h3 class="reserve-form-header__title">在此輸入您的諮詢編號</h3>
								</div>
								<div class="reserve-form-content">
									<div class="input-group flex-nowrap">
										<input
											type="search"
											class="d-block form-control"
											id="searchReserve"
											name="searchReserve"
											placeholder="搜尋您的諮詢編號"
											@keyup.enter="searchReserve(reserveId)"
											v-model="reserveId"
											autocomplete
										/>
										<button
											class="btn btn-primary flex-shrink-0"
											type="button"
											@click="searchReserve(reserveId)"
										>
											搜尋
											<span
												v-show="submitBtnLoading"
												class="spinner-border spinner-border-sm"
											></span>
											<i v-show="!submitBtnLoading" class="bi bi-search"></i>
										</button>
									</div>
								</div>
								<template v-if="!searchReserveResult">
									<div class="reserve-form-result mt-5" v-if="reserve.user">
										<h4 class="text-center">搜尋結果如下</h4>
										<div class="row">
											<div class="col text-muted">諮詢的案件</div>
											<div class="col text-sm-end fw-bold">
												<div
													v-for="caseItem in reserve.products"
													:key="caseItem.id"
												>
													<span
														class="badge tag__element me-1"
														:class="{
															'tag__element--main':
																caseItem.product.category ===
																'華廈',
															'tag__element--sec':
																caseItem.product.category ===
																'公寓',
															'tag__element--third':
																caseItem.product.category ===
																'別墅',
															'tag__element--fourth':
																caseItem.product.category ===
																'大樓',
														}"
													>
														{{ caseItem.product.category }}</span
													>
													{{ caseItem.product.title }}
												</div>
											</div>
										</div>
										<hr />
										<div class="row">
											<div class="col text-muted">案件經紀人</div>
											<div class="col text-sm-end fw-bold">
												{{ reserve.user.manager }}
											</div>
										</div>
										<hr />
										<div class="row">
											<div class="col text-muted">經紀人聯絡電話</div>
											<div class="col text-sm-end fw-bold">
												<a href="tel:0987654321">0987654321</a>
											</div>
										</div>
										<hr />
										<div class="row">
											<div class="col text-muted">諮詢人</div>
											<div class="col text-sm-end fw-bold">
												{{ reserve.user.name }}
											</div>
										</div>
										<hr />
										<div class="row">
											<div class="col text-muted">連絡電話</div>
											<div class="col text-sm-end fw-bold">
												{{ reserve.user.tel }}
											</div>
										</div>
										<hr />
										<div class="row">
											<div class="col text-muted">方便連絡的時間</div>
											<div class="col text-sm-end fw-bold">
												<span v-if="reserve.user.message === '1'"
													>上午(9:00-12:00)</span
												>
												<span v-else-if="reserve.user.message === '2'"
													>中午(12:00-14:00)</span
												>
												<span v-else-if="reserve.user.message === '3'"
													>下午(14:00-18:00)</span
												>
												<span v-else-if="reserve.user.message === '4'"
													>晚上(18:00-21:00)</span
												>
												<span v-else>皆可(9:00-21:00)</span>
											</div>
										</div>
									</div>
								</template>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
export default {
	data() {
		return {
			isLoading: false,
			reserve: {},
			reserveId: "",
			searchReserveResult: false,
			submitBtnLoading: false,
		};
	},
	methods: {
		searchReserve(order_id) {
			this.isLoading = true;
			this.submitBtnLoading = true;
			this.$http
				.get(
					`${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/order/${order_id}`
				)
				.then((res) => {
					this.reserve = res.data.order;
					this.isLoading = false;
					this.submitBtnLoading = false;
				})
				.catch((error) => {
					this.$httpMessageState(error, "連線錯誤");
					this.isLoading = false;
				});
		},
	},
	mounted() {
		this.isLoading = true;
		setTimeout(() => {
			this.isLoading = false;
		}, 1000);
	},
};
</script>
