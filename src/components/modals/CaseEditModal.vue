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
								<div class="mb-2">
									<label class="form-label fw-bold" for="imgFile"
										>產品主要圖片
										<small class="text-danger">※ 圖片大小不可超過 3 MB</small>
									</label>
									<div
										class="btn-group w-100 mb-1"
										role="group"
										aria-label="Upload image button group"
									>
										<button
											type="button"
											class="btn"
											:class="
												imageUploadType === 'upload'
													? 'btn-primary'
													: 'btn-outline-primary'
											"
											@click="imageUploadType = 'upload'"
										>
											上傳圖片
										</button>
										<button
											type="button"
											class="btn"
											:class="
												imageUploadType === 'url'
													? 'btn-primary'
													: 'btn-outline-primary'
											"
											@click="imageUploadType = 'url'"
										>
											輸入網址
										</button>
									</div>
									<div v-show="imageUploadType === 'upload'">
										<input
											type="file"
											v-if="!status.fileUploading"
											class="form-control"
											id="imgFile"
											placeholder="請選擇要上傳的圖片檔案"
											ref="fileInput"
											@change="uploadFile"
										/>
										<div
											v-else
											class="d-flex justify-content-center opacity-50 py-2"
										>
											<div class="spinner-border text-dark" role="status">
												<span class="visually-hidden">Loading...</span>
											</div>
										</div>
									</div>

									<input
										v-show="imageUploadType === 'url'"
										type="text"
										class="form-control"
										placeholder="請輸入圖片網址"
										aria-label="輸入圖片網址"
										aria-describedby="button-addon2"
										v-model="targetCase.imageUrl"
									/>
								</div>
								<div v-show="targetCase.imageUrl">
									<img
										class="img-fluid mb-1"
										:src="targetCase.imageUrl"
										alt="產品主圖片"
										title="產品主圖片"
									/>
									<input
										type="text"
										class="form-control mb-1"
										aria-label="欲上傳產品圖片"
										:value="targetCase.imageUrl"
										disabled
										readonly
									/>
								</div>
							</div>
							<!-- <div class="mb-3">
								<label for="image" class="form-label fw-bold"
									>輸入圖片網址</label
								>
								<input
									type="text"
									class="form-control"
									id="image"
									v-model="targetCase.imageUrl"
									placeholder="請輸入圖片連結"
								/>
							</div>
							<div class="mb-3">
								<label for="customFile" class="form-label fw-bold"
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
							</div> -->
							<div v-if="targetCase.imagesUrl">
								<div
									v-if="
										targetCase.imagesUrl[targetCase.imagesUrl.length - 1] ||
										!targetCase.imagesUrl.length
									"
								>
									<button
										class="btn btn-outline-primary btn-sm d-block w-100 my-2"
										@click="targetCase.imagesUrl.push('')"
									>
										新增圖片
									</button>
								</div>
								<div
									v-for="(image, key) in targetCase.imagesUrl"
									class="mb-2"
									:key="key"
								>
									<div class="input-group">
										<input
											type="url"
											class="form-control"
											v-model="targetCase.imagesUrl[key]"
											placeholder="請輸入連結"
										/>
										<button
											type="button"
											class="btn btn-outline-secondary"
											@click="targetCase.imagesUrl.splice(key, 1)"
										>
											移除
										</button>
									</div>
								</div>
							</div>
						</div>
						<div class="col-sm-8">
							<ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
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
								<li class="nav-item">
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
								<li class="nav-item">
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
											<label for="title" class="form-label fw-bold"
												>標題 <span class="text-danger">*</span></label
											>
											<input
												type="text"
												class="form-control"
												id="title"
												v-model.trim="targetCase.title"
												placeholder="請輸入標題"
											/>
										</div>
										<div class="mb-3 col-md-6">
											<label for="category" class="form-label fw-bold"
												>分類 <span class="text-danger">*</span></label
											>
											<select
												class="form-select"
												id="category"
												v-model="targetCase.category"
											>
												<option value="" disabled>請選擇</option>
												<option value="公寓">公寓</option>
												<option value="華廈">華廈</option>
												<option value="大樓">大樓</option>
												<option value="別墅">別墅</option>
											</select>
										</div>
									</div>
									<div class="row gx-3">
										<div class="mb-3 col-md-6">
											<label for="origin_price" class="form-label fw-bold"
												>總價
												<span class="form-text"> (萬) </span>
												<span class="text-danger">*</span>
											</label>
											<input
												type="number"
												class="form-control"
												id="origin_price"
												min="0"
												v-model.number="targetCase.origin_price"
												placeholder="請輸入總價"
											/>
										</div>
										<div class="mb-3 col-md-6">
											<label for="price" class="form-label fw-bold"
												>售價
												<span class="form-text"> (萬) </span>
												<span class="text-danger">*</span>
											</label>
											<input
												type="number"
												class="form-control"
												id="price"
												v-model.number="targetCase.price"
												min="0"
												placeholder="請輸入售價"
											/>
										</div>
									</div>
									<div class="row">
										<div class="mb-3">
											<label for="address" class="form-label fw-bold"
												>地址 <span class="text-danger">*</span></label
											>
											<input
												type="text"
												class="form-control"
												id="address"
												v-model.trim="targetCase.description"
												placeholder="請輸入地址"
											/>
										</div>
									</div>
									<div class="row">
										<div class="mb-3">
											<label for="content" class="form-label fw-bold"
												>物件詳情 <span class="text-danger">*</span></label
											>
											<textarea
												type="text"
												class="form-control"
												id="content"
												v-model="targetCase.content"
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
											<label for="category" class="form-label fw-bold"
												>建物登記
												<span class="form-text"> (坪) </span>
											</label>
											<input
												type="text"
												class="form-control"
												id="category"
												v-model.number="targetCase.squareFeet"
												placeholder="請輸入建物登記"
											/>
										</div>
										<div class="mb-3 col-md-4">
											<label for="price" class="form-label fw-bold"
												>主建物
												<span class="form-text"> (坪) </span>
											</label>
											<input
												type="text"
												class="form-control"
												id="mainSquareFeet"
												v-model.number="targetCase.mainSquareFeet"
												placeholder="主建物坪數"
											/>
										</div>
										<div class="mb-3 col-md-4">
											<label for="houseAge" class="form-label fw-bold"
												>屋齡
												<span class="form-text"> (年) </span>
											</label>
											<input
												type="number"
												class="form-control"
												id="houseAge"
												v-model.number="targetCase.houseAge"
												placeholder="請輸入屋齡"
											/>
										</div>
									</div>
									<div class="row gx-3">
										<div class="mb-3 col-md-4">
											<label for="floor" class="form-label fw-bold"
												>樓/樓
												<span class="form-text">
													(公寓5↓, 華廈5-10, 大樓10↑)
												</span>
											</label>
											<input
												type="text"
												class="form-control"
												id="floor"
												v-model.trim="targetCase.floor"
												placeholder="請輸入樓層"
											/>
										</div>
										<div class="mb-3 col-md-4">
											<label for="pattern" class="form-label fw-bold"
												>格局
												<span class="form-text"> (房/廳/衛/室) </span>
											</label>
											<input
												type="text"
												class="form-control"
												id="pattern"
												v-model.trim="targetCase.pattern"
												placeholder="請輸入格局 (房/廳/衛/室)"
											/>
										</div>
										<div class="mb-3 col-md-4">
											<label for="category" class="form-label fw-bold"
												>建物朝向</label
											>
											<select
												class="form-select"
												id="category"
												v-model="targetCase.direction"
											>
												<option value="" disabled>請選擇</option>
												<option value="北">北↑</option>
												<option value="東北">東北↗</option>
												<option value="東">東→</option>
												<option value="東南">東南↘</option>
												<option value="南">南↓</option>
												<option value="西南">西南↙</option>
												<option value="西">西←</option>
												<option value="西北">西北↖</option>
											</select>
										</div>
									</div>
									<div class="row gx-3">
										<div class="mb-3 col-md-4">
											<label for="parking" class="form-label fw-bold"
												>車位
											</label>
											<input
												type="text"
												class="form-control"
												id="parking"
												v-model.trim="targetCase.parking"
												placeholder="請輸入車位"
											/>
										</div>
										<div class="mb-3 col-md-4">
											<label for="parkingPrice" class="form-label fw-bold"
												>車位價格
												<span class="form-text"> (萬) </span>
											</label>
											<input
												:disabled="!targetCase.parking"
												type="number"
												class="form-control"
												id="parkingPrice"
												v-model.number="targetCase.parkingPrice"
												min="0"
												placeholder="請輸入車位價格"
											/>
										</div>
										<div class="mb-3 col-md-4">
											<label for="managementFee" class="form-label fw-bold"
												>管理費
												<span class="form-text"> (元/月) </span>
											</label>
											<input
												:disabled="
													targetCase.squareFeet ===
													targetCase.mainSquareFeet
												"
												type="number"
												class="form-control"
												id="managementFee"
												v-model.number="targetCase.managementFee"
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
										<div class="mb-3">
											<label for="" class="form-label fw-bold fs-6"
												>特色標籤</label
											>
											<div class="d-flex flex-wrap">
												<div class="me-1 mb-1">
													<input
														type="checkbox"
														id="decorate"
														class="btn-check"
														value="有裝潢"
														v-model="targetCase.tags"
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
														v-model="targetCase.tags"
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
														v-model="targetCase.tags"
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
														v-model="targetCase.tags"
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
														v-model="targetCase.tags"
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
														v-model="targetCase.tags"
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
														v-model="targetCase.tags"
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
														v-model="targetCase.tags"
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
														v-model="targetCase.tags"
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
														v-model="targetCase.tags"
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
														v-model="targetCase.tags"
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
														v-model="targetCase.tags"
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
														v-model="targetCase.tags"
													/>
													<label
														for="blankHouse"
														class="btn btn-sm btn-outline-secondary"
														>毛胚屋</label
													>
												</div>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="mb-3">
											<label for="" class="form-label fw-bold fs-6"
												>鄰近設施</label
											>
											<div class="d-flex">
												<div class="me-1 mb-1">
													<input
														type="checkbox"
														id="metro"
														class="btn-check"
														value="近捷運"
														v-model="targetCase.tags"
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
														v-model="targetCase.tags"
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
														v-model="targetCase.tags"
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
														v-model="targetCase.tags"
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
														v-model="targetCase.tags"
													/>
													<label
														for="department"
														class="btn btn-sm btn-outline-secondary"
														>近商圈</label
													>
												</div>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="mb-3">
											<label for="" class="form-label fw-bold fs-6"
												>物件狀況</label
											>
											<div class="d-flex">
												<div class="me-1 mb-1">
													<input
														type="checkbox"
														id="new"
														class="btn-check"
														value="新上架"
														v-model="targetCase.tags"
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
														v-model="targetCase.tags"
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
														v-model="targetCase.tags"
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
							</div>
							<div class="mb-3">
								<label for="" class="form-label fw-bold"
									>顯示狀況
									<span class="text-danger">*</span>
								</label>
								<div class="d-flex">
									<div class="form-check form-check-inline">
										<input
											class="form-check-input"
											type="radio"
											v-model.number="targetCase.is_enabled"
											name="inlineRadioOptions"
											id="enabled1"
											value="1"
										/>
										<label class="form-check-label text-success" for="enabled1"
											>顯示</label
										>
									</div>
									<div class="form-check form-check-inline">
										<input
											class="form-check-input"
											type="radio"
											v-model.number="targetCase.is_enabled"
											name="inlineRadioOptions"
											id="enabled2"
											value="0"
										/>
										<label
											class="form-check-label text-secondary"
											for="enabled2"
											>不顯示</label
										>
									</div>
									<div class="form-check form-check-inline">
										<input
											class="form-check-input"
											type="radio"
											v-model.number="targetCase.is_enabled"
											name="inlineRadioOptions"
											id="enabled3"
											value="2"
										/>
										<label class="form-check-label text-warning" for="enabled3"
											>處理中</label
										>
									</div>
									<div class="form-check form-check-inline">
										<input
											class="form-check-input"
											type="radio"
											v-model.number="targetCase.is_enabled"
											name="inlineRadioOptions"
											id="enabled4"
											value="3"
										/>
										<label class="form-check-label text-muted" for="enabled4"
											>已結案</label
										>
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
						@click="$emit('update-product', targetCase)"
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
		product: {
			type: Object,
			default() {
				return {
					category: "",
					tags: [],
					unit: "坪",
					direction: "",
				};
			},
		},
		isNew: {
			type: Boolean,
			default: false,
		},
		btnLoading: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			imageUploadType: "url",
			status: {},
			modal: "",
			targetCase: {},
		};
	},
	emits: ["update-product"],
	mixins: [modalMixin],
	inject: ["emitter"],
	methods: {
		uploadFile() {
			const uploadedFile = this.$refs.fileInput.files[0];
			const formData = new FormData();
			formData.append("file-to-upload", uploadedFile);
			this.status.fileUploading = true;
			this.$http
				.post(
					`${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/admin/upload`,
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
						this.targetCase.imageUrl = res.data.imageUrl;
						this.$refs.fileInput.value = "";
						this.$httpMessageState(res, "圖片上傳結果", res.data.message);
					} else {
						this.$refs.fileInput.value = "";
						this.$httpMessageState(res, "圖片上傳結果", res.data.message);
					}
				})
				.catch((error) => {
					this.status.fileUploading = false;
					this.$httpMessageState(error.response, "圖片失敗");
				});
		},
	},
	watch: {
		product() {
			this.targetCase = this.product;
			if (!this.targetCase.imagesUrl) {
				this.targetCase.imagesUrl = [];
				this.targetCase.tags = [];
			}
			if (!this.targetCase.imageUrl) {
				this.targetCase.imageUrl = "";
			}
		},
		targetCase: {
			handler() {
				if (this.targetCase.squareFeet === this.targetCase.mainSquareFeet)
					this.targetCase.managementFee = 0;
			},
			deep: true,
		},
	},
};
</script>
