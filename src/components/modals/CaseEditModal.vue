<template>
	<div class="modal fade" id="productModal" ref="modal">
		<div class="modal-dialog modal-xl" role="document">
			<div class="modal-content border-0">
				<div class="modal-header bg-dark text-white">
					<h5 class="modal-title" id="exampleModalLabel">
						<span v-if="isNew">新增案件</span>
						<span v-else>編輯案件</span>
					</h5>
					<button
						type="button"
						class="btn-close btn-close-white"
						data-bs-dismiss="modal"
						aria-label="Close"
					></button>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-sm-4">
							<div class="mb-3">
								<label for="image" class="form-label"
									>輸入圖片網址</label
								>
								<input
									type="text"
									class="form-control"
									id="image"
									v-model="tempCase.imageUrl"
									placeholder="請輸入圖片連結"
								/>
							</div>
							<div class="mb-3">
								<label for="customFile" class="form-label"
									>或 上傳圖片
									<i
										class="fas fa-spinner fa-spin"
										v-if="status.fileUploading"
									></i>
								</label>
								<input
									type="file"
									id="customFile"
									class="form-control"
									ref="fileInput"
									@change="uploadFile"
								/>
							</div>
							<img class="img-fluid" :src="tempCase.imageUrl" />
							<div v-if="tempCase.imagesUrl">
								<div
									v-if="
										tempCase.imagesUrl[
											tempCase.imagesUrl.length - 1
										] || !tempCase.imagesUrl.length
									"
								>
									<button
										class="btn btn-outline-primary btn-sm d-block w-100 my-3"
										@click="tempCase.imagesUrl.push('')"
									>
										新增圖片
									</button>
								</div>
								<div
									v-for="(image, key) in tempCase.imagesUrl"
									class="mb-3"
									:key="key"
								>
									<input
										type="url"
										class="form-control form-control my-3"
										v-model="tempCase.imagesUrl[key]"
										placeholder="請輸入連結"
									/>
									<div>
										<img class="img-fluid" :src="image" />
									</div>
									<button
										type="button"
										class="btn btn-outline-danger my-3 btn-sm d-block w-100"
										@click="
											tempCase.imagesUrl.splice(key, 1)
										"
									>
										移除
									</button>
								</div>
							</div>
						</div>
						<div class="col-sm-8">
							<ul
								class="nav nav-tabs mb-3"
								id="myTab"
								role="tablist"
							>
								<li class="nav-item" role="presentation">
									<button
										class="nav-link active"
										id="info-tab"
										data-bs-toggle="tab"
										data-bs-target="#info"
										type="button"
										role="tab"
										aria-controls="info"
										aria-selected="true"
									>
										必填項目
									</button>
								</li>
								<li class="nav-item" role="presentation">
									<button
										class="nav-link"
										id="detail-tab"
										data-bs-toggle="tab"
										data-bs-target="#detail"
										type="button"
										role="tab"
										aria-controls="detail"
										aria-selected="false"
									>
										詳細資料
									</button>
								</li>
								<li class="nav-item" role="presentation">
									<button
										class="nav-link"
										id="tags-tab"
										data-bs-toggle="tab"
										data-bs-target="#tags"
										type="button"
										role="tab"
										aria-controls="tags"
										aria-selected="false"
									>
										特色標籤
									</button>
								</li>
							</ul>
							<div class="tab-content" id="myTabContent">
								<div
									class="tab-pane fade show active"
									id="info"
									role="tabpanel"
									aria-labelledby="info-tab"
								>
									<div class="row gx-3">
										<div class="mb-3 col-md-6">
											<label
												for="title"
												class="form-label"
												>標題
												<span class="text-danger"
													>*</span
												></label
											>
											<input
												type="text"
												class="form-control"
												id="title"
												v-model.trim="tempCase.title"
												placeholder="請輸入標題"
											/>
										</div>
										<div class="mb-3 col-md-6">
											<label
												for="category"
												class="form-label"
												>分類
												<span class="text-danger"
													>*</span
												></label
											>
											<select
												class="form-select"
												id="category"
												v-model="tempCase.category"
											>
												<option value="" disabled>
													請選擇
												</option>
												<option value="公寓">
													公寓
												</option>
												<option value="華廈">
													華廈
												</option>
												<option value="大樓">
													大樓
												</option>
												<option value="別墅">
													別墅
												</option>
											</select>
										</div>
									</div>
									<div class="row gx-3">
										<div class="mb-3 col-md-6">
											<label
												for="origin_price"
												class="form-label"
												>總價
												<span class="form-text">
													(萬)
												</span>
												<span class="text-danger"
													>*</span
												>
											</label>
											<input
												type="number"
												class="form-control"
												id="origin_price"
												min="0"
												v-model.number="
													tempCase.origin_price
												"
												placeholder="請輸入總價"
											/>
										</div>
										<div class="mb-3 col-md-6">
											<label
												for="price"
												class="form-label"
												>售價
												<span class="form-text">
													(萬)
												</span>
												<span class="text-danger"
													>*</span
												>
											</label>
											<input
												type="number"
												class="form-control"
												id="price"
												v-model.number="tempCase.price"
												min="0"
												placeholder="請輸入售價"
											/>
										</div>
									</div>
									<div class="row">
										<div class="mb-3">
											<label
												for="address"
												class="form-label"
												>地址
												<span class="text-danger"
													>*</span
												></label
											>
											<input
												type="text"
												class="form-control"
												id="address"
												v-model.trim="
													tempCase.description
												"
												placeholder="請輸入地址"
											/>
										</div>
									</div>
									<div class="row">
										<div class="mb-3">
											<label
												for="content"
												class="form-label"
												>物件詳情
												<span class="text-danger"
													>*</span
												></label
											>
											<textarea
												type="text"
												class="form-control"
												id="content"
												v-model="tempCase.content"
												placeholder="請輸入物件詳情"
											></textarea>
										</div>
									</div>
								</div>
								<div
									class="tab-pane fade"
									id="detail"
									role="tabpanel"
									aria-labelledby="detail-tab"
								>
									<div class="row gx-3">
										<div class="mb-3 col-md-4">
											<label
												for="category"
												class="form-label"
												>建物登記
												<span class="form-text">
													(坪)
												</span>
											</label>
											<input
												type="text"
												class="form-control"
												id="category"
												v-model.number="
													tempCase.squareFeet
												"
												placeholder="請輸入建物登記"
											/>
										</div>
										<div class="mb-3 col-md-4">
											<label
												for="price"
												class="form-label"
												>主建物
												<span class="form-text">
													(坪)
												</span>
											</label>
											<input
												type="text"
												class="form-control"
												id="mainSquareFeet"
												v-model.number="
													tempCase.mainSquareFeet
												"
												placeholder="主建物坪數"
											/>
										</div>
										<div class="mb-3 col-md-4">
											<label
												for="houseAge"
												class="form-label"
												>屋齡
												<span class="form-text">
													(年)
												</span>
											</label>
											<input
												type="number"
												class="form-control"
												id="houseAge"
												v-model.number="
													tempCase.houseAge
												"
												placeholder="請輸入屋齡"
											/>
										</div>
									</div>
									<div class="row gx-3">
										<div class="mb-3 col-md-4">
											<label
												for="floor"
												class="form-label"
												>樓/樓
												<span class="form-text">
													(公寓5↓, 華廈5-10, 大樓10↑)
												</span>
											</label>
											<input
												type="text"
												class="form-control"
												id="floor"
												v-model.trim="tempCase.floor"
												placeholder="請輸入樓層"
											/>
										</div>
										<div class="mb-3 col-md-4">
											<label
												for="pattern"
												class="form-label"
												>格局
												<span class="form-text">
													(房/廳/衛/室)
												</span>
											</label>
											<input
												type="text"
												class="form-control"
												id="pattern"
												v-model.trim="tempCase.pattern"
												placeholder="請輸入格局 (房/廳/衛/室)"
											/>
										</div>
										<div class="mb-3 col-md-4">
											<label
												for="category"
												class="form-label"
												>建物朝向</label
											>
											<select
												class="form-select"
												id="category"
												v-model="tempCase.direction"
											>
												<option value="" disabled>
													請選擇
												</option>
												<option value="北">北↑</option>
												<option value="東北">
													東北↗
												</option>
												<option value="東">東→</option>
												<option value="東南">
													東南↘
												</option>
												<option value="南">南↓</option>
												<option value="西南">
													西南↙
												</option>
												<option value="西">西←</option>
												<option value="西北">
													西北↖
												</option>
											</select>
										</div>
									</div>
									<div class="row gx-3">
										<div class="mb-3 col-md-4">
											<label
												for="parking"
												class="form-label"
												>車位
											</label>
											<input
												type="text"
												class="form-control"
												id="parking"
												v-model.trim="tempCase.parking"
												placeholder="請輸入車位"
											/>
										</div>
										<div class="mb-3 col-md-4">
											<label
												for="parkingPrice"
												class="form-label"
												>車位價格
												<span class="form-text">
													(萬)
												</span>
											</label>
											<input
												:disabled="!tempCase.parking"
												type="number"
												class="form-control"
												id="parkingPrice"
												v-model.number="
													tempCase.parkingPrice
												"
												min="0"
												placeholder="請輸入車位價格"
											/>
										</div>
										<div class="mb-3 col-md-4">
											<label
												for="managementFee"
												class="form-label"
												>管理費
												<span class="form-text">
													(元/月)
												</span>
											</label>
											<input
												:disabled="
													tempCase.squareFeet ===
													tempCase.mainSquareFeet
												"
												type="number"
												class="form-control"
												id="managementFee"
												v-model.number="
													tempCase.managementFee
												"
												min="0"
												placeholder="請輸入管理費"
											/>
										</div>
									</div>
								</div>
								<div
									class="tab-pane fade"
									id="tags"
									role="tabpanel"
									aria-labelledby="tags-tab"
								>
									<div class="row">
										<label for="" class="form-label fs-6"
											>特色標籤</label
										>
										<div class="d-flex flex-wrap">
											<div class="me-1 mb-1">
												<input
													type="checkbox"
													id="decorate"
													class="btn-check"
													value="有裝潢"
													v-model="tempCase.tags"
												/>
												<label
													for="decorate"
													class="btn btn-sm btn-outline-secondary"
													>有裝潢</label
												>
											</div>
											<div class="me-1 mb-1">
												<input
													type="checkbox"
													id="hasView"
													class="btn-check"
													value="有景觀"
													v-model="tempCase.tags"
												/>
												<label
													for="hasView"
													class="btn btn-sm btn-outline-secondary"
													>有景觀</label
												>
											</div>
											<div class="me-1 mb-1">
												<input
													type="checkbox"
													id="balcony"
													class="btn-check"
													value="有陽台"
													v-model="tempCase.tags"
												/>
												<label
													for="balcony"
													class="btn btn-sm btn-outline-secondary"
													>有陽台
												</label>
											</div>
											<div class="me-1 mb-1">
												<input
													type="checkbox"
													id="bathWindow"
													class="btn-check"
													value="廁所開窗"
													v-model="tempCase.tags"
												/>
												<label
													for="bathWindow"
													class="btn btn-sm btn-outline-secondary"
													>廁所開窗</label
												>
											</div>
											<div class="me-1 mb-1">
												<input
													type="checkbox"
													id="roomsHasWindow"
													class="btn-check"
													value="房間皆有窗"
													v-model="tempCase.tags"
												/>
												<label
													for="roomsHasWindow"
													class="btn btn-sm btn-outline-secondary"
													>房間皆有窗
												</label>
											</div>
											<div class="me-1 mb-1">
												<input
													type="checkbox"
													id="security"
													class="btn-check"
													value="警衛管理"
													v-model="tempCase.tags"
												/>
												<label
													for="security"
													class="btn btn-sm btn-outline-secondary"
													>警衛管理</label
												>
											</div>
											<div class="me-1 mb-1">
												<input
													type="checkbox"
													id="barrierFree"
													class="btn-check"
													value="無障礙空間"
													v-model="tempCase.tags"
												/>
												<label
													for="barrierFree"
													class="btn btn-sm btn-outline-secondary"
													>無障礙空間</label
												>
											</div>
											<div class="me-1 mb-1">
												<input
													type="checkbox"
													id="handleGarbage"
													class="btn-check"
													value="具垃圾處理"
													v-model="tempCase.tags"
												/>
												<label
													for="handleGarbage"
													class="btn btn-sm btn-outline-secondary"
													>具垃圾處理</label
												>
											</div>
											<div class="me-1 mb-1">
												<input
													type="checkbox"
													id="gym"
													class="btn-check"
													value="健身房"
													v-model="tempCase.tags"
												/>
												<label
													for="gym"
													class="btn btn-sm btn-outline-secondary"
													>健身房</label
												>
											</div>
											<div class="me-1 mb-1">
												<input
													type="checkbox"
													id="garden"
													class="btn-check"
													value="花園"
													v-model="tempCase.tags"
												/>
												<label
													for="garden"
													class="btn btn-sm btn-outline-secondary"
													>花園</label
												>
											</div>
											<div class="me-1 mb-1">
												<input
													type="checkbox"
													id="swimmingPool"
													class="btn-check"
													value="游泳池"
													v-model="tempCase.tags"
												/>
												<label
													for="swimmingPool"
													class="btn btn-sm btn-outline-secondary"
													>游泳池</label
												>
											</div>
											<div class="me-1 mb-1">
												<input
													type="checkbox"
													id="hasParking"
													class="btn-check"
													value="有車位"
													v-model="tempCase.tags"
												/>
												<label
													for="hasParking"
													class="btn btn-sm btn-outline-secondary"
													>有車位</label
												>
											</div>
											<div class="me-1 mb-1">
												<input
													type="checkbox"
													id="blankHouse"
													class="btn-check"
													value="毛胚屋"
													v-model="tempCase.tags"
												/>
												<label
													for="blankHouse"
													class="btn btn-sm btn-outline-secondary"
													>毛胚屋</label
												>
											</div>
										</div>
									</div>
									<div class="row">
										<label for="" class="form-label fs-6"
											>鄰近設施</label
										>
										<div class="d-flex">
											<div class="me-1 mb-1">
												<input
													type="checkbox"
													id="metro"
													class="btn-check"
													value="近捷運"
													v-model="tempCase.tags"
												/>
												<label
													for="metro"
													class="btn btn-sm btn-outline-secondary"
													>近捷運</label
												>
											</div>
											<div class="me-1 mb-1">
												<input
													type="checkbox"
													id="park"
													class="btn-check"
													value="近公園"
													v-model="tempCase.tags"
												/>
												<label
													for="park"
													class="btn btn-sm btn-outline-secondary"
													>近公園</label
												>
											</div>
											<div class="me-1 mb-1">
												<input
													type="checkbox"
													id="market"
													class="btn-check"
													value="近市場"
													v-model="tempCase.tags"
												/>
												<label
													for="market"
													class="btn btn-sm btn-outline-secondary"
													>近市場</label
												>
											</div>
											<div class="me-1 mb-1">
												<input
													type="checkbox"
													id="school"
													class="btn-check"
													value="近學校"
													v-model="tempCase.tags"
												/>
												<label
													for="school"
													class="btn btn-sm btn-outline-secondary"
													>近學校</label
												>
											</div>
											<div class="me-1 mb-1">
												<input
													type="checkbox"
													id="department"
													class="btn-check"
													value="近商圈"
													v-model="tempCase.tags"
												/>
												<label
													for="department"
													class="btn btn-sm btn-outline-secondary"
													>近商圈</label
												>
											</div>
										</div>
									</div>
									<div class="row">
										<label for="" class="form-label fs-6"
											>物件狀況</label
										>
										<div class="d-flex">
											<div class="me-1 mb-1">
												<input
													type="checkbox"
													id="new"
													class="btn-check"
													value="新上架"
													v-model="tempCase.tags"
												/>
												<label
													for="new"
													class="btn btn-sm btn-outline-secondary"
													>新上架</label
												>
											</div>
											<div class="me-1 mb-1">
												<input
													type="checkbox"
													id="lowPrice"
													class="btn-check"
													value="低總價"
													v-model="tempCase.tags"
												/>
												<label
													for="lowPrice"
													class="btn btn-sm btn-outline-secondary"
													>低總價</label
												>
											</div>
											<div class="me-1 mb-1">
												<input
													type="checkbox"
													id="hottest"
													class="btn-check"
													value="店長推薦"
													v-model="tempCase.tags"
												/>
												<label
													for="hottest"
													class="btn btn-sm btn-outline-secondary"
													>店長推薦</label
												>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="mb-3">
								<label for="" class="form-label"
									>顯示狀況</label
								>
								<div class="form-check form-switch">
									<input
										class="form-check-input"
										type="checkbox"
										v-model="tempCase.is_enabled"
										:true-value="1"
										:false-value="0"
										id="is_enabled"
									/>
									<label
										v-if="tempCase.is_enabled"
										class="form-check-label"
										for="is_enabled"
										>顯示
										<span class="text-danger">*</span>
									</label>
									<label
										v-else
										class="form-check-label"
										for="is_enabled"
										>不顯示
										<span class="text-danger">*</span>
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button
						type="button"
						class="btn btn-outline-secondary"
						data-bs-dismiss="modal"
					>
						取消
					</button>
					<button
						type="button"
						class="btn btn-primary"
						@click="$emit('update-product', tempCase)"
					>
						確認
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
		product: {
			type: Object,
			default() {
				return {};
			},
		},
		isNew: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			status: {},
			modal: "",
			tempCase: {
				category: "",
				tags: [],
				unit: "坪",
				direction: "",
			},
		};
	},
	emits: ["update-product"],
	mixins: [modalMixin],
	inject: ["emitter"],
	watch: {
		product() {
			this.tempCase = this.product;
			if (!this.tempCase.imagesUrl) {
				this.tempCase.imagesUrl = [];
			}
			if (!this.tempCase.imageUrl) {
				this.tempCase.imageUrl = "";
			}
		},
	},
	methods: {
		uploadFile() {
			const uploadedFile = this.$refs.fileInput.files[0];
			const formData = new FormData();
			formData.append("file-to-upload", uploadedFile);
			this.status.fileUploading = true;
			this.$http
				.post(
					`${import.meta.env.VITE_URL}/api/${
						import.meta.env.VITE_PATH
					}/admin/upload`,
					formData,
					{
						headers: {
							"Content-Type": "multipart/form-data",
						},
					}
				)
				.then((res) => {
					this.status.fileUploading = false;
					if (res.data.success) {
						this.tempCase.imageUrl = res.data.imageUrl;
						this.$refs.fileInput.value = "";
						this.$httpMessageState(
							res,
							"圖片上傳結果",
							res.data.message
						);
					} else {
						this.$refs.fileInput.value = "";
						this.$httpMessageState(
							res,
							"圖片上傳結果",
							res.data.message
						);
					}
				})
				.catch((error) => {
					this.status.fileUploading = false;
					this.$httpMessageState(error.response, "圖片失敗");
				});
		},
	},
};
</script>
