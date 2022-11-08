<template>
	<GChart type="PieChart" :data="chartData" :options="options" />
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
				chartArea: { left: "100", width: "100%", height: "100%" },
				legend: {
					textStyle: { fontSize: 14, bold: true },
				},
				slices: {
					0: { color: "#028090" },
					1: { color: "#d90429" },
				},
				is3D: true,
			},
		};
	},
};
</script>
