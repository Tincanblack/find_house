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
							<div class="mt-5" v-if="tempCase.imagesUrl">
								<div
									v-for="(image, key) in tempCase.imagesUrl"
									class="mb-3"
									:key="key"
								>
									<input
										type="url"
										class="form-control form-control"
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
								<div
									v-if="
										tempCase.imagesUrl[
											tempCase.imagesUrl.length - 1
										] || !tempCase.imagesUrl.length
									"
								>
									<button
										class="btn btn-outline-primary btn-sm d-block w-100"
										@click="tempCase.imagesUrl.push('')"
									>
										新增圖片
									</button>
								</div>
							</div>
						</div>
						<div class="col-sm-8">
							<div class="row gx-2">
								<div class="mb-3 col-md-6">
									<label for="title" class="form-label"
										>標題
										<span class="text-danger"
											>*</span
										></label
									>
									<input
										type="text"
										class="form-control"
										id="title"
										v-model="tempCase.title"
										placeholder="請輸入標題"
									/>
								</div>
								<div class="mb-3 col-md-6">
									<label for="category" class="form-label"
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
										<option value="公寓">公寓</option>
										<option value="透天/別墅">
											透天 / 別墅
										</option>
										<option value="社區/大樓">
											社區 / 大樓
										</option>
										<option value="辦公">辦公</option>
									</select>
								</div>
							</div>
							<div class="row">
								<div class="mb-3">
									<label for="address" class="form-label"
										>地址
										<span class="text-danger"
											>*</span
										></label
									>
									<input
										type="text"
										class="form-control"
										id="address"
										v-model="tempCase.description"
										placeholder="請輸入地址"
									/>
								</div>
							</div>
							<div class="row gx-2">
								<div class="mb-3 col-md-6">
									<label for="category" class="form-label"
										>坪數</label
									>
									<input
										type="number"
										class="form-control"
										id="category"
										v-model.number="tempCase.squareFeet"
										placeholder="請輸入坪數"
									/>
								</div>
								<div class="mb-3 col-md-6">
									<label for="price" class="form-label"
										>單位 (坪)
										<span class="text-danger"
											>*</span
										></label
									>
									<input
										type="text"
										class="form-control"
										id="unit"
										v-model="tempCase.unit"
										placeholder="請輸入單位 (坪)"
									/>
								</div>
							</div>
							<div class="row gx-3">
								<div class="mb-3 col-md-4">
									<label for="houseAge" class="form-label"
										>屋齡 (年)</label
									>
									<input
										type="number"
										class="form-control"
										id="houseAge"
										v-model.number="tempCase.houseAge"
										placeholder="請輸入屋齡"
									/>
								</div>
								<div class="mb-3 col-md-4">
									<label for="floor" class="form-label"
										>樓/樓</label
									>
									<input
										type="text"
										class="form-control"
										id="floor"
										v-model="tempCase.floor"
										placeholder="請輸入樓層"
									/>
								</div>
								<div class="mb-3 col-md-4">
									<label for="pattern" class="form-label"
										>格局 (房/廳/衛/室)</label
									>
									<input
										type="text"
										class="form-control"
										id="pattern"
										v-model="tempCase.pattern"
										placeholder="請輸入格局 (房/廳/衛/室)"
									/>
								</div>
							</div>
							<div class="row gx-2">
								<div class="mb-3 col-md-6">
									<label for="origin_price" class="form-label"
										>總價 (萬)
										<span class="text-danger"
											>*</span
										></label
									>
									<input
										type="number"
										class="form-control"
										id="origin_price"
										min="0"
										v-model.number="tempCase.origin_price"
										placeholder="請輸入總價"
									/>
								</div>
								<div class="mb-3 col-md-6">
									<label for="price" class="form-label"
										>售價 (萬)
										<span class="text-danger"
											>*</span
										></label
									>
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
							<hr />
							<div class="row">
								<div class="mb-3">
									<label for="content" class="form-label"
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
							<div class="row">
								<div class="mb-3">
									<label for="tags" class="form-label"
										>特色標籤</label
									>
									<input
										class="form-control"
										type="text"
										id="tags"
										v-model.trim="tempCase.tags"
									/>
								</div>
							</div>
							<div class="mb-3">
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
					`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/upload`,
					formData,
					{
						headers: {
							"Content-Type": "multipart/form-data",
						},
					}
				)
				.then((response) => {
					this.status.fileUploading = false;
					if (response.data.success) {
						this.tempCase.imageUrl = response.data.imageUrl;
						this.$refs.fileInput.value = "";
						this.$httpMessageState(
							response,
							"圖片上傳結果",
							response.data.message
						);
					} else {
						this.$refs.fileInput.value = "";
						this.$httpMessageState(
							response,
							"圖片上傳結果",
							response.data.message
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
