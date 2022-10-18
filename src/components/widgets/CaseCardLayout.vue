<template>
	<div class="card" :class="{ 'is-loading': cardLoading }">
		<RouterLink
			class="text-decoration-none rounded-0 text-dark"
			:to="`/case/${item.id}`"
		>
			<div class="case-item__card case-item__card--cardStyle">
				<div v-if="item.imageUrl" class="card-image">
					<div class="card-tag" v-show="!cardLoading">
						<div
							class="tag"
							v-if="item.origin_price !== item.price"
						>
							<span
								v-if="item.origin_price && item.price"
								class="badge tag__element--sec"
							>
								<i class="bi bi-arrow-down"></i>
								{{
									$format.calToPercent(
										item.origin_price,
										item.price,
										"discount"
									)
								}}
							</span>
						</div>
						<div
							class="tag"
							v-for="tag in $format.filterItemTag(item)"
							:key="tag"
						>
							<span
								class="badge tag__element"
								:class="{
									'tag__element--third': tag === '新上架',
									'tag__element--fourth': tag === '低總價',
									'tag__element--main': tag === '店長推薦',
								}"
								>{{ tag }}</span
							>
						</div>
					</div>
					<div class="card-price" v-show="!cardLoading">
						<span
							class="card-price__price card-price__price--selling"
						>
							{{ $format.currencyFormat(item.price) }}
							<span class="card-price__price-unit">萬</span>
						</span>
						<small
							v-if="item.origin_price !== item.price"
							class="card-price__price card-price__price--origin fs-6"
							><del
								>{{
									$format.currencyFormat(item.origin_price)
								}}
								萬</del
							></small
						>
					</div>
					<img class="img-fluid" :src="item.imageUrl" alt="" />
				</div>
				<div class="card-body">
					<h5 class="card-title text-truncate fw-bold">
						{{ cardLoading ? "" : item.title }}
					</h5>
					<div class="card-text">
						<div class="card-text-list">
							<span class="card-text-list__item">
								{{ cardLoading ? "" : item.squareFeet + "坪" }}
							</span>
							<span class="card-text-list__item">
								{{
									cardLoading
										? ""
										: $format.patternFormat(item.pattern)
								}}
							</span>
							<span class="card-text-list__item">
								{{ cardLoading ? "" : item.houseAge + "年" }}
							</span>
						</div>
					</div>
				</div>
			</div>
		</RouterLink>
		<div
			class="card-footer text-center"
			v-if="$route.name === 'collections'"
		>
			<div class="btn-group">
				<button
					class="btn btn-danger"
					@click="this.$emit('emit-handle-collection', item.id)"
				>
					<i class="bi bi-bookmark-x"></i>
					取消收藏
				</button>
				<button
					v-if="compareCases.length < 2"
					class="btn btn-success text-white"
					@click="this.$emit('emit-handle-compare', item.id)"
				>
					<i
						class="bi"
						:class="
							compareCases.includes(item.id)
								? 'bi-file-x'
								: 'bi-files'
						"
					></i>
					{{ compareCases.includes(item.id) ? "取消" : "加入" }}比較
				</button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		item: {
			type: Object,
			default() {
				return {};
			},
		},
		compareCases: {
			type: Array,
			default() {
				return [];
			},
		},
		cardLoading: {
			type: Boolean,
		},
	},
};
</script>
