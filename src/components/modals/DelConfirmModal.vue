<template>
	<div
		class="modal fade"
		id="delModal"
		tabindex="-1"
		role="dialog"
		aria-labelledby="exampleModalLabel"
		aria-hidden="true"
		ref="modal"
	>
		<div class="modal-dialog" role="document">
			<div class="modal-content border-0">
				<div class="modal-header bg-danger text-white">
					<h5 class="modal-title">刪除</h5>
					<button
						type="button"
						class="btn-close btn-close-white"
						data-bs-dismiss="modal"
						aria-label="Close"
					></button>
				</div>
				<div class="modal-body">
					是否刪除
					<strong class="text-danger">
						<slot name="modal-text"></slot>
					</strong>
					(刪除後將無法恢復)。
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
						取消
					</button>
					<button type="button" class="btn btn-danger" @click="$emit('del-item')">
						確認刪除
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
		item: {
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
		return {};
	},
	emits: ["del-item"],
	mixins: [modalMixin],
	inject: ["emitter"],
};
</script>
