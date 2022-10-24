export default {
	data() {
		return {
			collectionCases:
				JSON.parse(localStorage.getItem("collection_case")) || [],
		};
	},
	inject: ["emitter"],
	methods: {
		handleCollectionCase(caseID) {
			// 查詢 this.collectionCases 有沒有這個 caseID
			const collectionCaseIndex = this.collectionCases.findIndex(
				(item) => {
					return item === caseID;
				}
			);
			if (collectionCaseIndex === -1) {
				this.$swal({
					icon: "success",
					title: "加入收藏案件",
					confirmButtonText: "我知道了",
				});
				this.collectionCases.push(caseID);
			} else {
				this.collectionCases.splice(collectionCaseIndex, 1);
			}
			// 每當觸發 handleCollectionCase 方法時，傳遞 this.collectionCases 資料到 FrontNavbar.vue
			this.emitter.emit("get-collection", this.collectionCases);
		},
		clearCollectionData() {
			this.collectionCases = [];
			localStorage.setItem("compare_case", JSON.stringify([]));
		},
	},
	watch: {
		// 因資料(collectionCases)為陣列，做深層的監聽
		collectionCases: {
			handler() {
				// localStorage 資料寫入
				localStorage.setItem(
					"collection_case",
					JSON.stringify(this.collectionCases)
				);
			},
			deep: true,
		},
	},
};
