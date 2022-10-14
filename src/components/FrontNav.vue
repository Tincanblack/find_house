<template lang="">
	<nav
		class="navbar navbar-expand-md sticky-top navbar-light bg-white"
		:class="[navStyle.shadow]"
	>
		<div class="container">
			<a class="navbar-brand" href="#"
				><img src="../assets/logo.svg" alt="心儀房屋" width="140"
			/></a>
			<button
				class="navbar-toggler collapsed"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarCollapse"
				aria-controls="navbarCollapse"
				aria-expanded="true"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div
				class="navbar-collapse collapse"
				id="navbarCollapse"
				ref="collapse"
			>
				<ul
					class="navbar-nav flex-md-row ms-md-auto align-items-md-center"
				>
					<li class="nav-item">
						<RouterLink
							class="nav-link"
							to="/cases"
							@click="closeCollapse"
							>找房</RouterLink
						>
					</li>
					<li class="nav-item">
						<RouterLink
							class="nav-link"
							to="/news"
							@click="closeCollapse"
							>房訊新知</RouterLink
						>
					</li>
					<li class="nav-item">
						<RouterLink
							class="nav-link"
							to="/collections"
							@click="closeCollapse"
							>收藏名單
							<span
								v-if="collectionCaseCount"
								class="nav-link__count translate-middle badge rounded-pill bg-danger"
								>{{ collectionCaseCount
								}}<span class="visually-hidden"
									>unread messages</span
								>
							</span>
						</RouterLink>
					</li>
					<!-- <li class="nav-item">
						<RouterLink class="nav-link" to="/reserve"
							>查詢預約</RouterLink
						>
					</li> -->
				</ul>
			</div>
		</div>
	</nav>
</template>
<script>
import navToggleCollapse from "@/mixins/toggleCollapse.js";

export default {
	data() {
		return {
			collectionCaseCount: 0,
			navStyle: {
				shadow: "",
			},
		};
	},
	inject: ["emitter"],
	mixins: [navToggleCollapse],
	methods: {
		navScrollShadow() {
			const windowY = window.scrollY;
			if (windowY > 30) {
				this.navStyle.shadow = "shadow-sm";
			} else if (windowY < 30) {
				this.navStyle.shadow = "";
			}
		},
		getColltecionCount() {
			if (JSON.parse(localStorage.getItem("collection_case"))) {
				this.collectionCaseCount = JSON.parse(
					localStorage.getItem("collection_case")
				).length;
			} else {
				this.collectionCaseCount = 0;
			}
		},
	},
	mounted() {
		this.getColltecionCount();

		// 跨元件監聽收藏事件
		this.emitter.on("get-collection", (collectionCases) => {
			this.collectionCaseCount = collectionCases.length;
		});

		window.addEventListener("scroll", this.navScrollShadow);
	},
};
</script>
<style lang=""></style>
