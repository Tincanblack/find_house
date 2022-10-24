import { Pagination, Navigation, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

export default {
	components: { Swiper, SwiperSlide },

	data() {
		return {
			swiper: {
				modules: [Pagination, Navigation, FreeMode],
			},
		};
	},
};
