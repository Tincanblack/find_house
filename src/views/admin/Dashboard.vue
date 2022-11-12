<template>
	<div class="main-content container-fluid px-4 bg-light">
		<LoadingComponent :isLoading="isLoading"></LoadingComponent>
		<h3 class="my-4 fw-bold">首頁</h3>
		<AdminBreadcrumb v-if="$route.name !== 'dashboard'"></AdminBreadcrumb>
		<div class="row mb-4">
			<div class="col-12 col-lg-4">
				<div class="card border-0 shadow-sm">
					<div class="card-body">
						<div class="align-items-center row">
							<div class="col">
								<h5 class="text-uppercase mb-3 fw-bold text-primary">總諮詢數</h5>
								<span v-if="!counting" class="h2 mb-0"
									>{{ allReserves.length }}
									<span
										class="badge rounded-pill fw-bold mb-n1 align-middle text-white"
										style="font-size: 12px"
										:class="
											$format.calToPercent(
												allReserves.length,
												dashboard.reserve.unHandleReserve
											) > 50
												? 'text-bg-success'
												: 'text-bg-secondary'
										"
									>
										完成率
										{{
											$format.calToPercent(
												allReserves.length,
												dashboard.reserve.unHandleReserve,
												"management"
											)
										}}
									</span>
								</span>
								<span v-else class="h2 mb-0">計算中</span>
							</div>
							<div class="col-auto">
								<i class="bi bi-pencil-square fs-2 text-primary"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12 col-lg-4">
				<div class="card border-0 shadow-sm">
					<div class="card-body">
						<div class="align-items-center row">
							<div class="col">
								<h5 class="text-uppercase mb-3 text-secondary fw-bold">
									未處理諮詢數
								</h5>
								<span v-if="!counting" class="h2 mb-0 text-secondary">{{
									dashboard.reserve.unHandleReserve
								}}</span>
								<span v-else class="h2 mb-0 text-secondary">計算中</span>
							</div>
							<div class="col-auto">
								<i class="bi bi-bell fs-2 text-secondary"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12 col-lg-4">
				<div class="card border-0 shadow-sm">
					<div class="card-body">
						<div class="align-items-center row">
							<div class="col">
								<h5 class="text-uppercase mb-3 text-success fw-bold">今日諮詢數</h5>
								<span v-if="!counting" class="h2 mb-0 text-success">{{
									dashboard.reserve.todayReserve
								}}</span>
								<span v-else class="h2 mb-0 text-success">計算中</span>
							</div>
							<div class="col-auto">
								<i class="bi bi-chat-right-dots fs-2 text-success"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row mb-4">
			<div class="col-12 col-lg-4">
				<div class="card border-0 shadow-sm">
					<div class="card-body">
						<div class="align-items-center row">
							<div class="col">
								<h5 class="text-uppercase mb-3 fw-bold text-primary">
									登記中案件數
								</h5>
								<span v-if="!counting" class="h2 mb-0">{{
									enabledDisplayCase.length
								}}</span>
								<span v-else class="h2 mb-0">計算中</span>
							</div>
							<div class="col-auto">
								<i class="bi bi-house-door fs-2 text-primary"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12 col-lg-4">
				<div class="card border-0 shadow-sm">
					<div class="card-body">
						<div class="align-items-center row">
							<div class="col">
								<h5 class="text-uppercase mb-3 fw-bold text-warning">處理中案件</h5>
								<span v-if="!counting" class="h2 mb-0 text-warning"
									>{{ dashboard.product.handlingCase }}
								</span>
								<span v-else class="h2 mb-0 text-warning">計算中</span>
							</div>
							<div class="col-auto">
								<i class="bi bi-chat-left-dots fs-2 text-warning"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12 col-lg-4">
				<div class="card border-0 shadow-sm">
					<div class="card-body">
						<div class="align-items-center row">
							<div class="col">
								<h5 class="text-uppercase mb-3 fw-bold text-muted">已結案案件</h5>
								<span v-if="!counting" class="h2 mb-0 text-muted"
									>{{ dashboard.product.closedCases }}
								</span>
								<span v-else class="h2 mb-0 text-muted">計算中</span>
							</div>
							<div class="col-auto">
								<i class="bi bi-check-circle fs-2 text-muted"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row mb-4">
			<div class="col-12 col-lg-4">
				<div class="card border-0 shadow-sm">
					<div class="card-body">
						<h5 class="text-uppercase mb-3 fw-bold text-muted">諮詢男女比</h5>
						<GenderChart v-if="!counting" :chartData="genderChartData"></GenderChart>
						<template v-else>
							<div
								class="d-flex align-items-center justify-content-center flex-column"
								style="height: 200px"
							>
								<div
									class="spinner-border mb-3 text-primary"
									style="width: 4rem; height: 4rem"
								></div>
								<h2 class="h2 text-primary">讀取中</h2>
							</div>
						</template>
					</div>
				</div>
			</div>
			<div class="col-12 col-lg-8">
				<div class="card border-0 shadow-sm">
					<div class="card-body">
						<h5 class="text-uppercase fw-bold mb-3 text-muted">
							最多諮詢案件 <span class="fs-6">(前5)</span>
						</h5>
						<MostCaseServes
							v-if="!counting"
							:chartData="mostCaseChartData"
						></MostCaseServes>
						<template v-else>
							<div
								class="d-flex align-items-center justify-content-center flex-column"
								style="height: 200px"
							>
								<div
									class="spinner-border mb-3 text-primary"
									style="width: 4rem; height: 4rem"
								></div>
								<h2 class="h2 text-primary">讀取中</h2>
							</div>
						</template>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<div class="card border-0 shadow-sm">
					<div class="card-body">
						<h5 class="text-uppercase fw-bold mb-3 text-muted">近10日諮詢數</h5>
						<DaysAgoReserves
							v-if="!counting"
							:chartData="daysAgoReservesChartData"
						></DaysAgoReserves>
						<template v-else>
							<div
								class="d-flex align-items-center justify-content-center flex-column"
								style="height: 200px"
							>
								<div
									class="spinner-border mb-3 text-primary"
									style="width: 4rem; height: 4rem"
								></div>
								<h2 class="h2 text-primary">讀取中</h2>
							</div>
						</template>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import AdminBreadcrumb from "@/components/admin/AdminBreadcrumb.vue";

import GenderChart from "@/components/charts/ReserveGender.vue";
import MostCaseServes from "@/components/charts/MostCaseServes.vue";
import DaysAgoReserves from "@/components/charts/DaysAgoReserves.vue";

export default {
	components: {
		AdminBreadcrumb,
		GenderChart,
		MostCaseServes,
		DaysAgoReserves,
	},
	data() {
		return {
			isLoading: false,
			counting: true,
			cases: [],
			allReserves: [],
			pagination: {},
			currentPage: 1,
			dashboard: {
				product: {
					enabledDisplayCase: 0,
					handlingCase: 0,
					closedCases: 0,
				},
				reserve: {
					unHandleReserve: 0,
					todayReserve: 0,
				},
			},
			genderChartData: [],
			mostCaseChartData: [],
			daysAgoReservesChartData: [],
		};
	},
	methods: {
		getCaseList() {
			this.isLoading = true;
			this.$http
				.get(`${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/products/all`)
				.then((res) => {
					this.cases = res.data.products;
					this.dashboard.product.handlingCase = this.getHandlingCase(this.cases);
					this.dashboard.product.closedCases = this.getclosedCase(this.cases);

					this.isLoading = false;
				})
				.catch((error) => {
					this.$httpMessageState(error.response, "錯誤訊息");
					this.isLoading = false;
				});
		},
		getHandlingCase(cases) {
			const handlingCaseCountData = cases.filter((item) => {
				return item.is_enabled === "2";
			});
			return handlingCaseCountData.length;
		},
		getclosedCase(cases) {
			const closedCaseCountData = cases.filter((item) => {
				return item.is_enabled === "3";
			});
			return closedCaseCountData.length;
		},
		getReservesList(page = 1) {
			this.$http
				.get(
					`${import.meta.env.VITE_URL}/api/${
						import.meta.env.VITE_PATH
					}/admin/orders/?page=${page}`
				)
				.then((res) => {
					// 將收到的data賦予給reserves
					this.reserves = res.data.orders;
					this.pagination = res.data.pagination;
					this.reserves.forEach((order) => {
						this.allReserves.push(order);
					});
					if (this.currentPage < this.pagination.total_pages) {
						this.counting = true;
						this.currentPage++;
						this.getReservesList(this.currentPage);
						return;
					}
					this.dashboard.reserve.unHandleReserve = this.getUnHandleCount(
						this.allReserves
					);
					this.dashboard.reserve.todayReserve = this.getTodayReserveCount(
						this.allReserves
					);
					this.genderChartData = this.formatGenderChartData();
					this.mostCaseChartData = this.formatMostCaseChartData();
					this.daysAgoReservesChartData = this.formatDaysAgoReserves(10);
					this.counting = false;
				})
				.catch((error) => {
					// 跳出錯誤訊息
					this.isLoading = false;
					this.$httpMessageState(error.response, "錯誤訊息");
				});
		},
		getUnHandleCount(orders) {
			const unHandleCountData = orders.filter((item) => {
				return item.is_paid === false;
			});
			return unHandleCountData.length;
		},
		getTodayReserveCount(orders) {
			const dateStart = this.$moment.moment().startOf("day");
			const dateEnd = this.$moment.moment().endOf("day");
			const todayCountReserveData = orders.filter((item) => {
				return this.$moment.moment.unix(item.create_at).isBetween(dateStart, dateEnd);
			});
			return todayCountReserveData.length;
		},
		formatReservesData(reserveData) {
			let formatData = [];

			reserveData.map((order, index) => {
				const caseData = reserveData[index].products;
				Object.keys(caseData).forEach((caseID) => {
					const caseItem = caseData[caseID];
					formatData.push(caseItem.product);
				});
			});
			return formatData;
		},
		formatGenderChartData() {
			let chartData = [];
			const chartLabel = ["性別", "人數"];
			// 取出男女比累加
			let genderData = this.allReserves.reduce(
				(obj, reserve) => {
					reserve.user.gender === "1" ? obj["男"]++ : obj["女"]++;
					return obj;
				},
				{ 男: 0, 女: 0 }
			);
			genderData = Object.entries(genderData);
			// 轉換成所需的格式
			chartData = [...[chartLabel], ...genderData];

			return chartData;
		},
		formatMostCaseChartData() {
			let chartData = [];
			const chartLabel = ["案件名稱", "案件數"];
			const formatData = this.formatReservesData(this.allReserves);
			let caseCountData = formatData.reduce((obj, reserve) => {
				obj[reserve.title] = obj[reserve.title] ? obj[reserve.title] + 1 : 1;
				return obj;
			}, {});
			caseCountData = Object.entries(caseCountData);
			// 排序由高到低
			caseCountData.sort((a, b) => {
				return b[1] - a[1];
			});
			// 取前5
			caseCountData = caseCountData.slice(0, 5);
			// 轉換成所需的格式
			chartData = [...[chartLabel], ...caseCountData];

			return chartData;
		},
		formatDaysAgoReserves(days) {
			let chartData = [];
			const chartLabel = ["日期", "數量"];
			const dateLabels = [];
			for (let i = 0; i <= days; i++) {
				dateLabels.push([this.$moment.moment().subtract(i, "days").format("MM/DD")]);
			}
			const daysAgoDate = this.$moment.moment().subtract(days, "days").format("MM/DD");
			let filterXDayReserve = this.allReserves.reduce((obj, reserve) => {
				const reserveDate = this.$moment.moment(reserve.create_at * 1000).format("MM/DD");
				if (reserveDate >= daysAgoDate) {
					obj[reserveDate] = obj[reserveDate] ? obj[reserveDate] + 1 : 1;
				}
				return obj;
			}, {});
			filterXDayReserve = Object.entries(filterXDayReserve);

			let daysAgoData = [];
			let caseCountDate = filterXDayReserve.map((item) => item[0]);
			let caseCountNum = filterXDayReserve.map((item) => item[1]);
			dateLabels.forEach((dateLabelsItem) => {
				const index = caseCountDate.indexOf(dateLabelsItem[0]);
				return index !== -1
					? daysAgoData.push([dateLabelsItem[0], caseCountNum[index]])
					: daysAgoData.push([dateLabelsItem[0], 0]);
			});
			// 陣列反轉
			daysAgoData.reverse();
			// 轉換成所需的格式
			chartData = [...[chartLabel], ...daysAgoData];
			return chartData;
		},
	},
	computed: {
		enabledDisplayCase() {
			return this.cases.filter((product) => product.is_enabled == 1);
		},
	},
	mounted() {
		this.getCaseList();
		this.getReservesList(this.currentPage);
	},
};
</script>
