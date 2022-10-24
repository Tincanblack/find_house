<template>
	<Swiper
		class="list-slide"
		:spaceBetween="20"
		:slidesPerView="3.5"
		:freeMode="true"
		:navigation="true"
		:modules="swiper.modules"
		:breakpoints="{
			'@0.00': {
				slidesPerView: 1.5,
			},
			'@1.50': {
				slidesPerView: 3.75,
			},
		}"
	>
		<SwiperSlide
			class="col-12 col-md-4"
			:class="{ 'd-none': id === item.id }"
			v-for="item in cases"
			:key="item.id"
		>
			<CaseCard :item="item"></CaseCard>
		</SwiperSlide>
	</Swiper>
</template>
<script>
import CaseCard from "@/components/widgets/CaseCardLayout.vue";
import swiperMixin from "@/mixins/swiperMixin.js";

export default {
	components: { CaseCard },
	props: {
		category: {
			type: String,
			default() {
				return "";
			},
		},
		id: {
			type: String,
			default() {
				return "";
			},
		},
	},
	data() {
		return {
			cases: [],
		};
	},
	mixins: [swiperMixin],
	methods: {
		getSlideCasesData(category) {
			const url = `${import.meta.env.VITE_URL}/api/${
				import.meta.env.VITE_PATH
			}/products?category=${category}`;
			this.$http
				.get(url)
				.then((res) => {
					this.cases = res.data.products;
				})
				.catch((error) => {
					this.$httpMessageState(error.response, "錯誤訊息");
				});
		},
	},
	watch: {
		category() {
			this.getSlideCasesData(this.category);
		},
	},
	mounted() {
		this.getSlideCasesData(this.category);
	},
};
</script>
