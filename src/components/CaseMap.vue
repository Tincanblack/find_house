<template>
	<div id="map" class="map" style="width: 100%; height: 300px" />
</template>
<script>
import { Loader } from "@googlemaps/js-api-loader";
const loader = new Loader({
	apiKey: `${import.meta.env.VITE_GOOGLE_MAPS_TOKEN}`,
	libraries: ["places"],
});

export default {
	props: {
		caseItem: {
			type: Object,
			default() {
				return {};
			},
		},
		center: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	data() {
		return {
			map: null,
			mapEnabled: false,
			markers: [],
		};
	},
	methods: {
		async initCaseMap() {
			await loader
				.load()
				.then((google) => {
					this.map = new google.maps.Map(document.getElementById("map"), {
						center: this.center,
						zoom: 17,
					});
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
	mounted() {
		this.initCaseMap();
	},
};
</script>
