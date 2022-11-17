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
				"https://storage.googleapis.com/vue-course-api.appspot.com/found_houses_v2/1668697199843.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=qB0%2FIJC0iorzlMSJ5mPNhTrxTV9vwyr9cUsM0tS%2F%2BySmtsNcPVONCeLrZFp%2F6Jm3tGTy6b8xlf2rsDToSAZhb7u4UYAjtMYdCPT61C93RRx8M7Lh%2FD5ocBul9zoG5AWyF4WRC%2FMKr3gpwrW6weezKzYeW%2F6lwFu8tg7XXAqSovGUb6R5QgIiGJH%2B1thOtShCYtK0E%2BHR7fo5Cz9yGy%2F5tcmf%2B9X5ioG7VhGZh%2FpvNflljkZYvxwObQjVrayDSbQlH2%2BJiJUhmB3GG3q2CrAXNPWtxXse1FVIiUFFYtFUF1AGHm0DYmXW9a%2Fls4ekrwwDinWm22erIGmbA45IphrTEw%3D%3D",
				"https://storage.googleapis.com/vue-course-api.appspot.com/found_houses_v2/1668697202282.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Vwd1lGChFV4kYAxikI2JaUxdhHpfaK12utJQ1cCC9M5D4dZRZybHw0SXDqaPvoMrTZgKpj60Q8OSQwYV3fNoz4LKoyaoWihfhLiBFs4f%2FriU6A2L%2B0z4C5I5nAlugWdrwvrYccQFu6wt5wt7nkKi%2BLKOqxcOJQCXT40EglGXiDfPHcK6eDD2OCMEYFTQ%2FJOpiaQ5dpyxnXrgfmY0YpoDMJ9avyenMAXuiq3LulQgTNci45%2FDG364yP82t0trfHMeD2bhfLiAze2o9tREdyjWSsjut8iJqXmZJtLTTRKjJHguG7v324TRIY%2F6cojCSx3C1E4H8aqA%2BQyS8NgAw%2F8EnA%3D%3D",
			],
		};
	},
};
</script>
<style lang=""></style>
