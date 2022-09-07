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
				<div class="modal-header bg-dark text-white">
					<h5 class="modal-title" id="exampleModalLabel">
						<span v-if="isNew">新增房訊文章</span>
						<span v-if="!isNew">編輯房訊文章</span>
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
								<label for="" class="form-label"
									>顯示狀況</label
								>
								<div class="form-check form-switch">
									<input
										class="form-check-input"
										type="checkbox"
										v-model="tempNews.isPublic"
										:true-value="true"
										:false-value="false"
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
							</div>
							<div class="mb-3">
								<img
									class="img-fluid"
									:src="tempNews.image"
									:alt="tempNews.title"
								/>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6">
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
						<div class="col-sm-6">
							<div class="mb-3">
								<label for="category" class="form-label"
									>分類</label
								>
								<input
									type="text"
									class="form-control"
									id="category"
									placeholder="請輸入分類"
									v-model="tempNews.category"
								/>
							</div>
						</div>
					</div>
					<div class="row">
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
					</div>
					<div class="row">
						<div class="col-sm-12">
							<div class="mb-3">
								<label for="description" class="form-label"
									>文章簡述</label
								>
								<input
									type="text"
									class="form-control"
									id="description"
									placeholder="請輸入文章簡述"
									v-model="tempNews.description"
								/>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<div class="mb-3">
								<label for="description" class="form-label"
									>文章內容</label
								>
								<ckeditor
									id="editor"
									class="form-control"
									v-model="tempNews.content"
									:editor="editor"
									:config="editorConfig"
								>
								</ckeditor>
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
						@click="$emit('update-news', tempNews)"
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
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import MyUploadAdapter from "@/methods/myUploadAdapter";

function UploadAdapterPlugin(editor) {
	editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
		return new MyUploadAdapter(loader);
	};
}

// ClassicEditor.create(document.querySelector("#editor"), {
// 	extraPlugins: [UploadAdapterPlugin],
// }).catch((error) => {
// 	console.log(error);
// });

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
			editor: ClassicEditor,
			editorConfig: {
				toolbar: [
					"heading",
					"bold",
					"italic",
					"link",
					"|",
					"numberedList",
					"bulletedList",
					"|",
					"undo",
					"redo",
				],
				extraPlugins: [UploadAdapterPlugin],
			},
			tempNews: {},
		};
	},
	emits: ["update-news"],
	mixins: [modalMixin],
	inject: ["emitter"],
	methods: {},
	watch: {
		news() {
			this.tempNews = this.news;
		},
	},
	mounted() {
		console.log(this.editorConfig.toolbar);
	},
};
</script>
