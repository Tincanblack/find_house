<template>
	<div id="app">
		<div
			v-for="(pattern, index) in patterns"
			:key="pattern.name"
			class="row"
		>
			<input
				type="checkbox"
				v-model="tempCase.patterns.enabled[index]"
				class="md-check"
			/>
			<input
				type="number"
				:disabled="!tempCase.patterns.enabled[index]"
				v-model="tempCase.patterns.value[index]"
			/>
			{{ pattern.name }}
		</div>
		<div>
			房間<span v-for="item in patterns" :key="item"
				>{{ item.value }}{{ item.name }}</span
			>
		</div>
	</div>
</template>

<script>
// Example for https://stackoverflow.com/q/51345888/2209007

const serverData = {
	patterns: [
		{
			name: "房",
			value: 0,
		},
		{
			name: "廳",
			value: 0,
		},
		{
			name: "衛",
			value: 0,
		},
		{
			name: "室",
			value: 0,
		},
	],
};

export default {
	name: "App",

	data() {
		return {
			patterns: [],
			tempCase: {
				patterns: {
					enabled: [],
					value: [],
				},
			},
		};
	},

	created() {
		// We somehow load the data from the server into our component
		this.patterns = serverData.patterns;

		// We need to make sure our tempCase has the correct initial data
		for (const pattern of this.patterns) {
			this.tempCase.patterns.enabled.push(pattern.value > 0);
			this.tempCase.patterns.value.push(pattern.value);
		}
	},
};
</script>
