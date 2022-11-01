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
				slidesPerView: 1.25,
			},
			'@1.50': {
				slidesPerView: 3.75,
			},
		}"
	>
		<SwiperSlide class="col-12 col-md-4" v-for="item in cases" :key="item.id">
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
			let url = "";
			if (category !== "") {
				url = `${import.meta.env.VITE_URL}/api/${
					import.meta.env.VITE_PATH
				}/products?category=${category}`;
				this.$http
					.get(url)
					.then((res) => {
						const resData = res.data.products;
						this.cases = resData.filter(
							(item) =>
								(this.category === "" || item.category === this.category) &&
								item.id !== this.id
						);
					})
					.catch((error) => {
						this.$httpMessageState(error.response, "錯誤訊息");
					});
			} else {
				url = `${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/products/all`;
			}
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
