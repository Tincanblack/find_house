<template>
	<section class="news-slide py-3">
		<div class="container">
			<swiper
				:slides-per-view="1"
				:loop="true"
				:modules="modules"
				:pagination="{ clickable: true }"
				:autoplay="{
					delay: 3000,
					stopOnLastSlide: false,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}"
			>
				<swiper-slide v-for="article in articles" :key="article.id">
					<div class="row">
						<div class="col-md-6">
							<RouterLink
								class="news-slide__link"
								:to="article.id"
							>
								<div
									class="news-slide__image"
									:style="{
										backgroundImage: `url(${article.image})`,
									}"
								></div>
							</RouterLink>
						</div>
						<div class="col-md-6">
							<h4 class="news-slide__title fw-bold">
								{{ article.title }}
								<span class="news-slide__author fs-6">{{
									article.author
								}}</span>
							</h4>
							{{ article.description }}
						</div>
					</div>
				</swiper-slide>
			</swiper>
		</div>
	</section>
</template>
<script>
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	props: {
		articles: [],
	},
	data() {
		return {
			modules: [Navigation, Pagination, Autoplay],
		};
	},
};
</script>
<style lang=""></style>
