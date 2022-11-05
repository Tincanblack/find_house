export default {
	data() {
		return {
			formData: {
				caseID: "",
				caseName: "",
				manager: "",
				customer: "",
				gender: "1",
				contactPhone: "",
				freeTime: "0",
				isHandle: false,
				dataTime: "",
			},
			submitBtnLoading: false,
		};
	},
	methods: {
		// 加入到購物車 (API需要)
		fakeItem2Cart() {
			this.submitBtnLoading = true;

			const postData = { data: { product_id: this.id, qty: 1 } };

			this.$http
				.post(
					`${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/cart/`,
					postData
				)
				.then(() => {
					this.fakeItem2Checkout();
				})
				.catch((error) => {
					if (error.response.status !== 200) {
						this.$swal({
							icon: "error",
							text: "請重新嘗試或直接諮詢案件經紀人",
							confirmButtonText: "我知道了",
						});
					}
				});
		},
		// 結帳商品 (API需要)
		fakeItem2Checkout() {
			const nowTimeStamp = Math.floor(new Date().getTime() / 1000);

			const postData = {
				data: {
					user: {
						address: this.fakeUser.location.city,
						email: this.fakeUser.email,
						mangaer: this.fakeUser.name.first,
						message: this.formData.freeTime,
						name: this.formData.customer,
						gender: this.formData.gender,
						tel: this.formData.contactPhone,
						dataTime: nowTimeStamp,
					},
				},
			};

			this.$http
				.post(
					`${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/order`,
					postData
				)
				.then((res) => {
					const { orderId } = res.data;
					return false;
					this.submitReserveForm(orderId);
				})
				.catch((error) => {
					if (error.response.status !== 200) {
						let errorMsg = error.response.data.message;
						let newErrorMsg = errorMsg.map((message) => {
							return message.replace("name", "稱呼").replace("tel", "連絡電話");
						});
						newErrorMsg = newErrorMsg.join("、");

						this.$swal({
							icon: "error",
							title: "出現錯誤",
							text: newErrorMsg,
							confirmButtonText: "我知道了",
						});
					}
				});
		},
		submitReserveForm(order_id) {
			const nowTimeStamp = Math.floor(new Date().getTime() / 1000);
			this.formData.caseID = order_id;
			this.formData.caseName = this.product.title;
			this.formData.manager = this.fakeUser.name.first;
			this.formData.dataTime = nowTimeStamp;

			this.$http
				.post(`${import.meta.env.VITE_GOOGLE_SHEET_URL}`, null, {
					params: this.formData,
				})
				.then((res) => {
					this.submitBtnLoading = false;
					if (res.data.success !== true) {
						this.$swal({
							icon: "error",
							title: "出現錯誤",
							text: "請重新嘗試或直接諮詢案件經紀人",
							confirmButtonText: "我知道了",
						}).then(() => {
							this.$refs.reserveForm.resetForm();
							this.formData.freeTime = 0;
							return false;
						});
					}
					this.$swal({
						icon: "success",
						title: "謝謝你的諮詢\n將盡快與您聯繫",
						showConfirmButton: false,
					}).then(() => {
						this.$refs.reserveForm.resetForm();
						this.formData.freeTime = 0;
					});
				});
		},
	},
};
