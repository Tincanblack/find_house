<template>
	<GChart type="LineChart" :data="chartData" :options="options" />
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
					format: "0",
					textStyle: {
						fontSize: 14,
						bold: true,
					},
				},
				chartArea: { width: "95%" },
				colors: ["#028090"],
				legend: { position: "none" },
			},
		};
	},
};
</script>
