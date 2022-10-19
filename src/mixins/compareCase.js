export default {
	data() {
		return {
			compareCases:
				JSON.parse(localStorage.getItem("compare_case")) || [],
		};
	},
	inject: ["emitter"],
	methods: {
		handleCompareCase(caseID) {
			// 查詢 this.compareCases 有沒有這個 caseID
			const compareCaseIndex = this.compareCases.findIndex((item) => {
				return item === caseID;
			});
			if (compareCaseIndex === -1) {
				if (this.compareCases.length > 2) {
					this.$swal({
						icon: "error",
						title: "一次最多兩個案件能夠加入比較",
						confirmButtonText: "我知道了",
					});
					return false;
				} else if (this.compareCases.length === 2) {
					this.$swal({
						icon: "info",
						title: "已經有兩個案件正在比較列表中",
						confirmButtonText: "去看看",
					}).then((result) => {
						if (result.value) {
							this.$router.push("/collections");
						}
					});
				} else {
					this.$swal({
						icon: "success",
						title: "案件加入比較",
						confirmButtonText: "我知道了",
					});
					this.compareCases.push(caseID);
				}
			} else {
				this.compareCases.splice(compareCaseIndex, 1);
			}
		},
	},
	watch: {
		// 因資料(compareCases)為陣列，做深層的監聽
		compareCases: {
			handler() {
				// localStorage 資料寫入
				localStorage.setItem(
					"compare_case",
					JSON.stringify(this.compareCases)
				);
			},
			deep: true,
		},
	},
};
