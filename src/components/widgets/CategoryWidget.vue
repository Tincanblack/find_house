<template>
	<div
		class="row row-cols-lg-auto g-3 align-items-center justify-content-between"
	>
		<div class="col-12">
			<div class="dropdown cases-sort">
				<button
					class="btn cases-sort-status dropdown-toggle"
					type="button"
					id="dropdownButton"
					data-bs-toggle="dropdown"
					aria-expanded="false"
					ref="currentSort"
				>
					預設顯示
				</button>
				<ul
					class="dropdown-menu cases-sort-select"
					aria-labelledby="dropdownButton"
				>
					<li>
						<button
							type="button"
							class="dropdown-item cases-sort-select__option"
							:class="{
								active: sortBy === '',
							}"
							@click="clickSortCase('')"
						>
							預設顯示
						</button>
					</li>
					<li>
						<button
							type="button"
							class="dropdown-item cases-sort-select__option"
							:class="{
								active: sortBy === 'priceLow2High',
							}"
							@click="clickSortCase('priceLow2High')"
						>
							售價從低 > 高
						</button>
					</li>
					<li>
						<button
							type="button"
							class="dropdown-item cases-sort-select__option"
							:class="{
								active: sortBy === 'priceHigh2Low',
							}"
							@click="clickSortCase('priceHigh2Low')"
						>
							售價從高 > 低
						</button>
					</li>
					<li>
						<button
							type="button"
							class="dropdown-item cases-sort-select__option"
							:class="{
								active: sortBy === 'houseAgeLow2High',
							}"
							@click="clickSortCase('houseAgeLow2High')"
						>
							屋齡從低 > 高
						</button>
					</li>
					<li>
						<button
							type="button"
							class="dropdown-item cases-sort-select__option"
							:class="{
								active: sortBy === 'houseAgeHigh2Low',
							}"
							@click="clickSortCase('houseAgeHigh2Low')"
						>
							屋齡從高 > 低
						</button>
					</li>
					<li>
						<button
							type="button"
							class="dropdown-item cases-sort-select__option"
							:class="{
								active: sortBy === 'squareFeetLow2High',
							}"
							@click="clickSortCase('squareFeetLow2High')"
						>
							坪數從小 > 大
						</button>
					</li>
					<li>
						<button
							type="button"
							class="dropdown-item cases-sort-select__option"
							:class="{
								active: sortBy === 'squareFeetHight2Low',
							}"
							@click="clickSortCase('squareFeetHight2Low')"
						>
							坪數從大 > 小
						</button>
					</li>
				</ul>
			</div>
		</div>
		<!-- <div class="col-12 d-none d-lg-block">
			<div class="cases-card-display">
				<span
					class="cases-card-display__button"
					:class="{
						isActive: this.caseCardView === 'card',
					}"
					@click="changeCardlayout('card')"
				>
					<i class="bi bi-grid fs-3 cases-card-display__icon"></i>
					卡片
				</span>
				<span
					class="cases-card-display__button"
					:class="{
						isActive: this.caseCardView === 'list',
					}"
					@click="changeCardlayout('list')"
				>
					<i class="bi bi-list-ul fs-3 cases-card-display__icon"></i>
					列表
				</span>
			</div>
		</div> -->
	</div>
</template>
<script>
export default {
	props: {
		sortBy: {
			type: String,
			default() {
				return "";
			},
		},
	},
	data() {
		return {};
	},
	methods: {
		clickSortCase(sort) {
			this.$emit("emit-sort-case", sort);
		},
	},
};
</script>
<style lang=""></style>
