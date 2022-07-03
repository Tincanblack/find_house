<template>
	<div v-if="cardLoading">
		<a
			class="card text-decoration-none rounded-0 text-dark"
			:class="{ 'is-loading': cardLoading }"
			href=""
		>
			<div class="case-item__card case-item__card--cardStyle">
				<div class="card-image">
					<img class="img-fluid" alt="" />
				</div>
				<div class="card-body">
					<h5 class="card-title text-truncate fw-bold"></h5>
					<div class="card-text">
						<div class="card-text-list">
							<span class="card-text-list__item"></span>
							<span class="card-text-list__item"></span>
							<span class="card-text-list__item"></span>
						</div>
					</div>
				</div>
			</div>
		</a>
	</div>
	<div v-else>
		<RouterLink
			class="card text-decoration-none rounded-0 text-dark"
			:class="{ 'is-loading': cardLoading }"
			:to="`/case/${item.id}`"
		>
			<div class="case-item__card case-item__card--cardStyle">
				<div v-if="item.imageUrl" class="card-image">
					<div class="card-tag">
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
					<div class="card-price">
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
					<span class="card-image-hover__title"> 查看案件內容 </span>
					<img class="img-fluid" :src="item.imageUrl" alt="" />
				</div>
				<div class="card-body">
					<h5 class="card-title text-truncate fw-bold">
						{{ cardLoading ? "" : item.title }}
					</h5>
					<div class="card-text">
						<div class="card-text-list">
							<span class="card-text-list__item">
								{{ cardLoading ? "" : item.squareFeet }}坪
							</span>
							<span class="card-text-list__item">
								{{
									cardLoading
										? ""
										: $format.patternFormat(item.pattern)
								}}
							</span>
							<span class="card-text-list__item">
								{{ cardLoading ? "" : item.houseAge }}年
							</span>
						</div>
					</div>
				</div>
			</div>
		</RouterLink>
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
		cardLoading: {
			type: Boolean,
		},
	},
};
</script>
