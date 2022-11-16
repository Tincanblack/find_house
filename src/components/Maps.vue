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
				:icon="marker.icon.url"
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
					icon: {
						url: "https://storage.googleapis.com/vue-course-api.appspot.com/found_houses_v2/1668402620550.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=dd9YH9dXWh6CyoIi3XT%2BbEf868FkSNdNLZTC1YwzE9bsyEU4m%2FWk9WloCPETcaMHnRhVinMN1%2BNvq43z70xRbzmLdXOOjIX8cX6w5mfiRdxIcqtWQi1DtZKT5l3Lds36n5auZPjNPo0BAzfpCIpNNVKD0UNnmfC2GCvjfm6NZZqUn8%2FqsdXAU%2B6ASHnDZ8GKkWSVnLqwzMWzZOKI%2BDeYmpvuDaVlZ1%2FAc4mWVLFbifEm0ct77v6WjESMu54D5LG6MxppVfKKEUeetwLDhWOxqbE9FlblDOx32iXI1cFEWZA%2BZ7R%2F9ahB%2Bwgn8O0Gu0oi6msnjJvLdgSk%2BXe0U%2B9rjA%3D%3D",
					},
				});
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
