<template>
	<div
		class="modal fade"
		id="productModal"
		tabindex="-1"
		role="dialog"
		aria-labelledby="exampleModalLabel"
		aria-hidden="true"
		ref="modal"
	>
		<div class="modal-dialog modal-xl" role="document">
			<div class="modal-content border-0">
				<div class="modal-header bg-dark text-white">
					<h5 class="modal-title" id="exampleModalLabel">
						<span>預約訂單細節</span>
					</h5>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
					></button>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-4">
							<div class="d-flex justify-content-end">
								<div v-for="item in targetItem.products" :key="item">
									<img class="img-fluid" :src="item.product.imageUrl" alt="" />
								</div>
							</div>
						</div>
						<div class="col-md-8">
							<ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
								<li class="nav-item">
									<button
										class="nav-link active"
										id="contact-tab"
										data-bs-toggle="tab"
										data-bs-target="#contact"
										type="button"
										role="tab"
										aria-controls="contact"
										aria-selected="true"
									>
										諮詢資訊
									</button>
								</li>
								<li class="nav-item">
									<button
										class="nav-link"
										id="info-tab"
										data-bs-toggle="tab"
										data-bs-target="#info"
										type="button"
										role="tab"
										aria-controls="info"
										aria-selected="false"
									>
										案件細節
									</button>
								</li>
							</ul>
							<div class="tab-content" id="myTabContent">
								<div
									class="tab-pane fade show active"
									id="contact"
									role="tabpanel"
									aria-labelledby="contact-tab"
									v-if="targetItem.user"
								>
									<div class="row gx-3">
										<div class="mb-3 col-lg-6">
											<label for="" class="form-label me-3 fw-bold"
												>諮詢編號</label
											>
											<span>{{ targetItem.id }}</span>
										</div>
										<div class="mb-3 col-lg-6">
											<label for="" class="form-label me-3 fw-bold"
												>諮詢時間</label
											>
											<span>
												{{
													$moment
														.moment(targetItem.create_at * 1000)
														.format("YYYY-MM-DD HH:mm:ss")
												}}
											</span>
										</div>
									</div>
									<div class="row gx-3">
										<div class="mb-3 col-lg-6">
											<label for="" class="form-label me-3 fw-bold"
												>聯絡狀態</label
											>
											<span class="text-success" v-if="targetItem.is_paid"
												>已聯絡</span
											>
											<span class="text-danger" v-else>尚未聯絡</span>
										</div>
										<div class="mb-3 col-lg-6">
											<label for="" class="form-label me-3 fw-bold"
												>最後聯絡時間</label
											>
											<span v-if="targetItem.paid_date && targetItem.is_paid">
												{{
													$moment
														.moment(targetItem.paid_date * 1000)
														.format("YYYY-MM-DD HH:mm:ss")
												}}
											</span>
											<span v-else>--</span>
										</div>
									</div>
									<div class="row gx-3">
										<div class="mb-3 col-lg-6">
											<div class="row align-items-center">
												<div class="col-3">
													<label
														for="contactName"
														class="form-label mb-0 fw-bold"
														>姓名
													</label>
												</div>
												<div class="col-9">
													<input
														type="text"
														class="form-control"
														id="contactName"
														v-model="targetItem.user.name"
													/>
												</div>
											</div>
										</div>
										<div class="mb-3 col-lg-6">
											<div class="row align-items-center">
												<div class="col-3">
													<label
														for="contactPhone"
														class="form-label fw-bold"
														>性別
													</label>
												</div>
												<div class="col-9">
													<div class="form-check form-check-inline">
														<input
															type="radio"
															class="form-check-input"
															id="male"
															v-model="targetItem.user.gender"
															value="1"
															name="性別"
															rules="required"
														/>
														<label class="form-check-label" for="male"
															>先生</label
														>
													</div>
													<div class="form-check form-check-inline">
														<input
															type="radio"
															class="form-check-input"
															id="female"
															v-model="targetItem.user.gender"
															value="0"
															name="性別"
															rules="required"
														/>
														<label class="form-check-label" for="female"
															>小姐</label
														>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="row gx-3">
										<div class="mb-3 col-lg-6">
											<label for="contactPhone" class="form-label fw-bold"
												>電話
											</label>
											<input
												type="text"
												class="form-control"
												id="contactPhone"
												v-model="targetItem.user.tel"
											/>
										</div>
										<div class="mb-3 col-lg-6">
											<label for="freeTime" class="form-label fw-bold"
												>方便連絡的時間
											</label>
											<select
												class="form-select"
												name=""
												id=""
												v-model="targetItem.user.message"
											>
												<option value="0">
													聯絡時間：皆可(9:00-21:00)
												</option>
												<option value="1">
													聯絡時間：上午(9:00-12:00)
												</option>
												<option value="2">
													聯絡時間：中午(12:00-14:00)
												</option>
												<option value="3">
													聯絡時間：下午(14:00-18:00)
												</option>
												<option value="4">
													聯絡時間：晚上(18:00-21:00)
												</option>
											</select>
										</div>
									</div>
									<div class="row">
										<div class="mb-3">
											<label for="freeTime" class="form-label fw-bold"
												>客戶註記
											</label>
											<textarea
												class="form-control"
												name=""
												id=""
												cols="30"
												rows="5"
												v-model="targetItem.user.memo"
											>
											</textarea>
										</div>
									</div>
								</div>
								<div
									v-for="item in targetItem.products"
									:key="item.product.id"
									class="tab-pane fade show"
									id="info"
									role="tabpanel"
									aria-labelledby="info-tab"
								>
									<div class="row gx-3">
										<div class="mb-3 col-lg-12">
											<label for="" class="form-label fw-bold"
												>案件名稱
											</label>
											<span
												class="badge tag__element mx-1"
												:class="{
													'tag__element--main':
														item.product.category === '華廈',
													'tag__element--sec':
														item.product.category === '公寓',
													'tag__element--third':
														item.product.category === '別墅',
													'tag__element--fourth':
														item.product.category === '大樓',
												}"
											>
												{{ item.product.category }}</span
											>
											<RouterLink
												:to="`/case/${item.product.id}`"
												target="_blank"
												>{{ item.product.title }}</RouterLink
											>
										</div>
									</div>
									<div class="row row-cols-lg-3 gx-3">
										<div class="mb-3 col">
											<label for="category" class="form-label me-1 fw-bold"
												>建物登記
											</label>
											<span
												>{{ item.product.squareFeet }}
												<span class="form-text">(坪)</span></span
											>
										</div>
										<div class="mb-3 col">
											<label for="price" class="form-label me-1 fw-bold"
												>主建物
											</label>
											<span
												>{{ item.product.mainSquareFeet }}
												<span class="form-text">(坪)</span></span
											>
										</div>
										<div class="mb-3 col">
											<label for="houseAge" class="form-label me-1 fw-bold"
												>公設比
											</label>
											<span class="form-text">
												{{
													$format.calToPercent(
														item.product.squareFeet,
														item.product.mainSquareFeet,
														"management"
													)
												}}
											</span>
										</div>
										<div class="mb-3 col">
											<label for="houseAge" class="form-label me-1 fw-bold"
												>屋齡
											</label>
											<span
												>{{ item.product.houseAge }}
												<span class="form-text">(年)</span></span
											>
										</div>
										<div class="mb-3 col">
											<label for="floor" class="form-label me-1 fw-bold"
												>樓/樓
												<span class="form-text">
													{{ item.product.floor }}
													(樓)
												</span>
											</label>
										</div>
										<div class="mb-3 col">
											<label for="pattern" class="form-label me-1 fw-bold"
												>格局
											</label>
											<span class="form-text">{{
												$format.patternFormat(item.product.pattern)
											}}</span>
										</div>
										<div class="mb-3 col">
											<label for="category" class="form-label me-1 fw-bold"
												>建物朝向</label
											>
											<span class="form-text">{{
												item.product.direction
											}}</span>
										</div>
										<div v-if="item.product.parking !== ''" class="mb-3 col">
											<label for="parking" class="form-label me-1 fw-bold"
												>車位
											</label>
											<span>{{ item.product.parking }}</span>
										</div>
										<div v-if="item.product.parkingPrice > 0" class="mb-3 col">
											<label
												for="parkingPrice"
												class="form-label me-1 fw-bold"
												>車位價格
											</label>
											<span
												>{{ item.product.parkingPrice }}
												<span class="form-text"> (萬) </span></span
											>
										</div>
										<div class="mb-3 col">
											<label
												for="managementFee"
												class="form-label me-1 fw-bold"
												>管理費
											</label>
											<span
												>{{ item.product.managementFee }}
												<span class="form-text"> (元/月) </span>
											</span>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div v-if="targetItem.user" class="mb-3 col-lg-6">
									<label for="" class="form-label fw-bold">資料異動時間</label>
									<div>
										{{
											$moment
												.moment(targetItem.dataTime)
												.format("YYYY-MM-DD HH:mm:ss")
										}}
									</div>
								</div>
								<div class="mb-3 col-lg-6">
									<label for="" class="form-label fw-bold">變更聯絡狀態</label>
									<div class="form-check form-switch">
										<input
											class="form-check-input"
											type="checkbox"
											v-model.lazy="targetItem.is_paid"
											:true-value="true"
											:false-value="false"
											id="is_paid"
										/>
										<label
											v-if="!targetItem.is_paid"
											class="form-check-label"
											for="is_paid"
											>變更為
											<span class="text-success">已聯絡</span>
										</label>
										<label v-else class="form-check-label" for="is_paid"
											>變更為
											<span class="text-danger">未聯絡</span>
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
						取消
					</button>
					<button
						type="button"
						class="btn btn-primary"
						@click="$emit('emit-update-reserve', targetItem)"
					>
						確認
						<span v-show="btnLoading" class="spinner-border spinner-border-sm"></span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import modalMixin from "@/mixins/modalMixin";

export default {
	props: {
		reserve: {
			type: Object,
			default() {
				return {};
			},
		},
		btnLoading: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			targetItem: {},
		};
	},
	emits: ["emit-update-reserve"],
	mixins: [modalMixin],
	watch: {
		reserve() {
			this.targetItem = this.reserve;
		},
	},
};
</script>
