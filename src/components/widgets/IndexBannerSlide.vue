<template>
	<Swiper
		:effect="'fade'"
		:slidesPerView="1"
		:loop="true"
		:modules="swiper.modules"
		:autoplay="{
			delay: 3000,
			stopOnLastSlide: false,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		}"
	>
		<SwiperSlide v-for="(banner, index) in banners" :key="index"
			><img class="img-fluid" :src="banner" alt="" />
		</SwiperSlide>
	</Swiper>
</template>
<script>
import { EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
export default {
	components: { Swiper, SwiperSlide },
	data() {
		return {
			swiper: { modules: [EffectFade, Autoplay] },
			banners: [
				"https://storage.googleapis.com/vue-course-api.appspot.com/found_houses_v2/1668135949046.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=oI4kqjGEtYNbtZ5OmfjVBByKBHwCwM9Yrm%2F8NPG3vN6ZoVjrGxXtYfYTIAcpaxMkBU54IhX3tSWbcq%2F2NLvzjD3NI%2FG9dTDqisr5elLJLzWpUEOkioY76gs86pdbErhu61%2F8mkzuiO4BHKkJClfzm5QenlfepX5Q%2FEFEOFIUwe4mnxS6EE57rMZve%2FKZNsiFvy3tZBFPc387XsG6ooiXUFkBaQJuejD4XIOsJqj6pVEkFcYA%2Bkz3Hu5l90TMwg4INajgb36p21BTiNvJknpP33gnOikq%2B0z03Ip4EC14anK3aMTb7GWeCLjiuUlTJoasPdVDIhv3tHBmN6WJFbM7rA%3D%3D",
				"https://storage.googleapis.com/vue-course-api.appspot.com/found_houses_v2/1668135974548.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WUJLHE%2BcQ2qAFohPg4iSPQ1ZINSNGF77IFCI3eGhQktD4jhbs7HroBy%2FW0z9tptK9Wi5CsuFOPFHAkLGRZgSNOofyMaaHzlb02i%2BWwDC8%2FnNO5KAQ5shnCZmx5CvFpLImWLsixLsU6EZNIWi4xG7dBPS9oPskVGFOULSyJKMtWIsYwQ%2FJanoCinx4tM6K%2BQs73mf23ARi3%2BlOuUrdKN9julPOgO5KTytAGAYgQAa%2FUeZW1P%2BdFXjIATUK0BtAYf6eVPFOHD0orenE4ClGlT7SeohtAcyCjStNTcZSPOWen%2FD6CdbvkF9p8aREZR1YJt84QChdkLS5fvahE0hrMgjlg%3D%3D",
			],
		};
	},
};
</script>
<style lang=""></style>
