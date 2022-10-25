<template>
	<div class="main-content container-fluid px-4">
		<LoadingComponent :isLoading="isLoading"></LoadingComponent>
		<h3 class="mt-4 fw-bold">圖片上傳</h3>
		<input
			type="file"
			id="customFile"
			class="form-control"
			ref="fileInput"
			@change="uploadFile"
		/>
		<table class="table table-hover table-striped mt-4">
			<thead class="table-dark">
				<tr>
					<th width="5%" style="text-align: center">順序</th>
					<th width="10%">案件圖片</th>
					<th width="85%">圖片URL</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="(image, index) in uploadImagesUrl"
					:key="image"
					style="vertical-align: middle"
				>
					<td style="text-align: center">{{ index + 1 }}</td>
					<td>
						<img class="img-fluid" :src="image" />
					</td>
					<td style="word-break: break-all">{{ image }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
export default {
	data() {
		return {
			isLoading: false,
			uploadImagesUrl: [],
		};
	},
	methods: {
		uploadFile() {
			const uploadedFile = this.$refs.fileInput.files[0];
			const formData = new FormData();
			formData.append("file-to-upload", uploadedFile);
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
				.then((response) => {
					if (response.data.success) {
						this.$refs.fileInput.value = "";
						this.$httpMessageState(
							response,
							"圖片上傳結果",
							response.data.message
						);
						this.uploadImagesUrl.push(response.data.imageUrl);
					} else {
						this.$refs.fileInput.value = "";
						this.$httpMessageState(
							response,
							"圖片上傳結果",
							response.data.message
						);
						console.log(response);
					}
				})
				.catch((error) => {
					this.$httpMessageState(error.response, "圖片失敗");
				});
		},
	},
};
</script>
