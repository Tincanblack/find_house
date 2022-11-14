<template>
	<div class="feature-places">
		<!-- <div class="feature-places-header mb-3">
			<div class="dropdown">
				<button
					class="btn btn-outline-primary dropdown-toggle"
					type="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					選擇設施
				</button>
				<ul class="dropdown-menu">
					<li>
						<button
							type="button"
							class="dropdown-item"
							@click="searchNearPlace('購物')"
						>
							<i class="fa-duotone fa-fw fa-bag-shopping"></i> 購物
						</button>
					</li>
					<li>
						<button
							type="button"
							class="dropdown-item"
							@click="searchNearPlace('交通')"
						>
							<i class="fa-duotone fa-fw fa-car"></i> 交通
						</button>
					</li>
					<li>
						<button
							type="button"
							class="dropdown-item"
							@click="searchNearPlace('學校')"
						>
							<i class="fa-duotone fa-fw fa-school"></i> 學校
						</button>
					</li>
					<li>
						<button
							type="button"
							class="dropdown-item"
							@click="searchNearPlace('醫療')"
						>
							<i class="fa-duotone fa-fw fa-suitcase-medical"></i> 醫療
						</button>
					</li>
					<li>
						<button
							type="button"
							class="dropdown-item"
							@click="searchNearPlace('警消')"
						>
							<i class="fa-duotone fa-fw fa-user-police"></i> 警消
						</button>
					</li>
					<li>
						<button
							type="button"
							class="dropdown-item"
							@click="searchNearPlace('寵物')"
						>
							<i class="fa-duotone fa-fw fa-paw"></i> 寵物
						</button>
					</li>
					<li>
						<button
							type="button"
							class="dropdown-item"
							@click="searchNearPlace('停車')"
						>
							<i class="fa-duotone fa-fw fa-square-parking"></i> 停車
						</button>
					</li>
					<li>
						<button
							type="button"
							class="dropdown-item"
							@click="searchNearPlace('休閒')"
						>
							<i class="fa-duotone fa-fw fa-balloons"></i> 休閒
						</button>
					</li>
				</ul>
			</div>
		</div> -->
		<GMapMap
			id="map"
			ref="mapRef"
			:center="center"
			:zoom="17"
			map-type-id="terrain"
			style="width: 100%; height: 300px"
		>
			<GMapMarker
				:key="marker.id"
				v-for="marker in markers"
				:position="marker.position"
				:label="marker.title"
				:icon="marker.url"
			/>
		</GMapMap>
	</div>
</template>
<script>
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
			markers: [],
		};
	},
	methods: {
		initCaseMap() {
			this.$refs.mapRef.$mapPromise.then((map) => {
				const position = this.center;

				map.panTo(position);
				this.markers.push({
					id: this.caseItem.id,
					position,
					title: this.caseItem.title,
				});
				console.log(this.caseItem);
			});
		},
	},
	watch: {
		center: {
			handler() {
				if (this.center !== {}) this.initCaseMap();
			},
			deep: true,
		},
	},
};
</script>
