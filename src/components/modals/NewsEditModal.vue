<template>
	<div
		class="modal fade productModal"
		id="productModal"
		tabindex="-1"
		aria-labelledby="exampleModalLabel"
		aria-hidden="true"
		ref="modal"
	>
		<div class="modal-dialog modal-xl">
			<div class="modal-content border-0">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">
						<span v-if="isNew">新增文章</span>
						<span v-if="!isNew">編輯文章</span>
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
						<div class="col-sm-12">
							<div class="mb-3">
								<label for="title" class="form-label"
									>標題</label
								>
								<input
									type="text"
									class="form-control"
									id="title"
									placeholder="請輸入標題"
									v-model="tempNews.title"
								/>
							</div>
						</div>
						<div class="col-sm-12">
							<div class="mb-3">
								<label for="image" class="form-label"
									>封面圖片</label
								>
								<input
									type="text"
									class="form-control"
									id="image"
									placeholder="請輸入圖片網址"
									v-model="tempNews.image"
								/>
								<img :src="tempNews.image" class="img-fluid" />
							</div>
						</div>
						<div class="col-sm-12">
							<div class="mb-3">
								<label for="description" class="form-label"
									>文章簡述</label
								>
								<input
									type="text"
									class="form-control"
									id="description"
									placeholder="請輸入內容簡介"
									v-model="tempNews.description"
								/>
							</div>
						</div>
						<div class="col-sm-12">
							<div class="mb-3">
								<label for="author" class="form-label"
									>作者姓名</label
								>
								<input
									type="text"
									class="form-control"
									id="author"
									placeholder="請輸入作者姓名"
									v-model="tempNews.author"
								/>
							</div>
						</div>
						<div class="col-sm-12">
							<div class="mb-3">
								<label for="content" class="form-label"
									>文章內容</label
								>
								<!-- <ckeditor
									class="form-control"
									placeholder="請輸入內容"
									v-model="tempNews.description"
									:editor="editor"
									:config="editorConfig"
								>
								</ckeditor> -->
							</div>
							<!-- <div class="col-sm-12">
								<div class="mb-3">
									<label for="image" class="form-label"
										>標籤</label
									>
									<input
										type="text"
										class="form-control"
										id="image"
										placeholder="請輸入標籤"
										v-model="selectTag"
										@keyup.enter="addTags(selectTag)"
									/>
									<div>
										<span v-for="tag in tags" :key="tag + 1"
											>{{ tag }} 、</span
										>
									</div>
								</div>
							</div> -->
							<div class="col-sm-12">
								<div class="mb-3">
									<label for="" class="form-label"
										>顯示狀況</label
									>
									<div class="form-check form-switch">
										<input
											class="form-check-input"
											type="checkbox"
											v-model="tempNews.isPublic"
											:true-value="1"
											:false-value="0"
											id="isPublic"
										/>
										<label
											v-if="tempNews.isPublic"
											class="form-check-label"
											for="isPublic"
											>顯示
										</label>
										<label
											v-else
											class="form-check-label"
											for="isPublic"
											>不顯示
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button
						type="button"
						class="btn btn-primary--border w-30"
						data-bs-dismiss="modal"
					>
						取消
					</button>
					<button
						type="button"
						class="btn btn-primary--fill w-30"
						@click="updateBlog"
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
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import MyUploadAdapter from "@/libs/myUploadAdaptor";

export default {
	props: {
		news: {
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
			tempNews: {
				image: "",
			},
		};
	},
	emits: ["update-news"],
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
	methods: {},
};
</script>
