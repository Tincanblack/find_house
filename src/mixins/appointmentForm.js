export default {
	data() {
		return {
			formData: {
				caseID: "",
				caseName: "",
				manager: "",
				customer: "",
				contactPhone: "",
				freeTime: 0,
				isHandle: false,
			},
			submitBtnLoading: false,
		};
	},
	methods: {
		submitAppointmentForm() {
			const today = new Date();
			this.submitBtnLoading = true;
			this.formData.caseID = this.id;
			this.formData.caseName = this.product.title;
			this.formData.manager = this.assistantData.name.first;
			this.formData.dataTime = this.$format.dateFormatWithTime(today);
			const googleScriptAPIUrl = `${
				import.meta.env.VITE_GOOGLE_SHEET_URL
			}`;
			this.$http
				.post(googleScriptAPIUrl, null, { params: this.formData })
				.then((res) => {
					this.submitBtnLoading = false;
					if (res.data.success !== true) {
						this.$swal({
							icon: "error",
							title: "出現錯誤\n請直接諮詢服務人員",
						}).then(() => {
							this.$refs.appointmentForm.resetForm();
							return false;
						});
					}
					this.$swal({
						icon: "success",
						title: "謝謝你的諮詢\n將盡快與您聯繫",
						confirmButtonText: "我知道了",
					}).then(() => {
						this.$refs.appointmentForm.resetForm();
					});
				});
		},
	},
};
