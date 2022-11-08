<template>
	<GChart type="ColumnChart" :data="chartData" :options="options" />
</template>

<script>
import { GChart } from "vue-google-charts";

export default {
	props: ["chartData"],
	components: {
		GChart,
	},
	data() {
		return {
			options: {
				// height: 210,
				hAxis: {
					textStyle: {
						fontSize: 14,
						bold: true,
					},
				},
				vAxis: {
					textStyle: {
						fontSize: 14,
						bold: true,
					},
				},
				chartArea: { width: "90%" },
				legend: { position: "none" },
				colors: ["#028090"],
				axes: {
					x: {
						0: { side: "top", label: "White to move" }, // Top x-axis.
					},
				},
				bar: { groupWidth: "90%" },
			},
		};
	},
};
</script>
